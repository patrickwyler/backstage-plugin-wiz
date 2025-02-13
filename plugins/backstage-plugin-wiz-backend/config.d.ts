export interface Config {
  wiz?: {
    /**
     * @visibility frontend
     */
    enabled?: boolean;
    /**
     * @visibility frontend
     */
    dashboardLink?: string;
    /**
     * @visibility secret
     */
    clientId?: string;
    /**
     * @visibility secret
     */
    clientSecret?: string;
    /**
     *
     * @visibility secret
     */
    authUrl?: string;
    /**
     * @visibility secret
     */
    apiEndpointUrl?: string;
  };
}
