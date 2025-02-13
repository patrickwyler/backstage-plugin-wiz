import { Config } from '@backstage/config';
import { WizError, WizErrorType, TokenResponse, WizAuthError } from '../types';

const CONFIG_KEYS = {
  CLIENT_ID: 'wiz.clientId',
  CLIENT_SECRET: 'wiz.clientSecret',
  AUTH_URL: 'wiz.authUrl',
  API_ENDPOINT_URL: 'wiz.apiEndpointUrl',
} as const;

export class WizAuth {
  constructor(private readonly config: Config) {
    this.validateConfig();
  }

  private validateConfig() {
    try {
      const requiredKeys = Object.values(CONFIG_KEYS);
      requiredKeys.forEach(key => this.config.getString(key));
    } catch {
      throw new WizError(
        WizErrorType.MISSING_CONFIG,
        'Missing required Wiz configuration. Please check your app-config.yaml',
        400,
      );
    }
  }

  private async handleAuthResponse(response: Response): Promise<TokenResponse> {
    if (!response.ok) {
      let errorMessage = `HTTP error ${response.status}`;
      try {
        const errorData: WizAuthError = await response.json();
        errorMessage =
          errorData.error_description || errorData.error || errorMessage;
      } catch {
        errorMessage = response.statusText || errorMessage;
      }

      const errorMap = {
        401: {
          type: WizErrorType.UNAUTHORIZED,
          message: 'Invalid Wiz credentials',
        },
        403: { type: WizErrorType.FORBIDDEN, message: 'Access forbidden' },
      };

      const error = errorMap[response.status as keyof typeof errorMap] || {
        type: WizErrorType.API_ERROR,
        message: `Authentication failed: ${errorMessage}`,
      };

      throw new WizError(error.type, error.message, response.status);
    }

    const data = (await response.json()) as TokenResponse;
    if (!data.access_token) {
      throw new WizError(
        WizErrorType.API_ERROR,
        'Invalid token response from Wiz API',
        500,
      );
    }

    return data;
  }

  async fetchAccessToken(): Promise<TokenResponse> {
    const clientId = this.config.getString(CONFIG_KEYS.CLIENT_ID);
    const clientSecret = this.config.getString(CONFIG_KEYS.CLIENT_SECRET);
    const authUrl = this.config.getString(CONFIG_KEYS.AUTH_URL);

    try {
      const params = new URLSearchParams({
        client_id: clientId,
        client_secret: clientSecret,
        grant_type: 'client_credentials',
        audience: 'wiz-api',
      });

      const response = await fetch(authUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params,
      });

      return this.handleAuthResponse(response);
    } catch (error) {
      if (error instanceof TypeError) {
        throw new WizError(
          WizErrorType.API_ERROR,
          'Network error while connecting to Wiz API',
          500,
        );
      }
      if (error instanceof WizError) throw error;

      throw new WizError(
        WizErrorType.API_ERROR,
        `Failed to authenticate: ${error instanceof Error ? error.message : 'Unknown error'}`,
        500,
      );
    }
  }
}
