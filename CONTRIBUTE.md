# Contributing to Backstage Wiz Plugin

This document describes how to set up your development environment to build and test the Backstage Wiz Plugin.

## Prerequisites

- Node.js 22.x
- pnpm 9.x
- A Wiz account with a service account that has the following permissions:
  - `read:issues` - Required for fetching Wiz issues
  - `read:vulnerabilities` - Required for accessing vulnerability data
  - `read:resources` - Required for accessing cloud and version control resources

## Development Setup

1. Clone the repository and install dependencies:

```bash
git clone https://github.com/wiz-sec-public/backstage-plugin-wiz
cd backstage-plugin-wiz
pnpm install
```

2. Create a `.env` file in the root directory with your Wiz credentials:

```env
WIZ_CLIENT_ID=your-client-id
WIZ_CLIENT_SECRET=your-client-secret
WIZ_AUTH_URL=wiz-auth-url // e.g. https://auth.app.wiz.io/oauth/token
WIZ_API_URL=wiz-api-url // e.g. https://api.wiz.eu1.io/graphql
```

3. Configure the plugin annotations in `plugins/backstage-plugin-wiz/dev/index.tsx`:
   At least one of the following annotations must be configured for the plugin to work:

```typescript
annotations: {
  'wiz.io/project-id': 'your-project-id',
  'wiz.io/asset-id': 'your-asset-id',
  'wiz.io/external-asset-id': 'your-external-asset-id',
  'wiz.io/repository-external-id': 'organization/repository',
}
```

4. Start the development server:

```bash
pnpm dev
```

## Available Commands

- `pnpm dev` - Start the development server
- `pnpm build` - Build the plugin
- `pnpm test` - Run tests
- `pnpm lint` - Run linting
- `pnpm clean` - Clean build artifacts

## Testing

The plugin uses Jest for testing. Run the test suite with:

```bash
pnpm test
```

## Linting and Formatting

We use ESLint and Prettier for code quality. Format your code before committing:

```bash
pnpm lint
```

## Plugin Structure

```
plugins/
├── backstage-plugin-wiz/          # Frontend plugin
│   ├── src/
│   │   ├── components/            # React components
│   │   ├── api/                   # API definitions and client
│   │   └── types/                 # TypeScript types
│   └── dev/                       # Development setup
└── backstage-plugin-wiz-backend/  # Backend plugin
    └── src/
        ├── service/               # Backend services
        └── routes/                # API routes
```

## Common Issues

1. **Node Version Mismatch**: Ensure you're using Node.js 22. Use `nvm` or similar to manage Node versions:

   ```bash
   nvm use 22
   ```

2. **Authentication Errors**: Verify your Wiz credentials in the `.env` file and ensure they have the necessary permissions.

3. **Missing Annotations**: The plugin requires at least one valid Wiz annotation to function.

## Pull Request Process

1. Create a feature branch from `main`
2. Make your changes
3. Add or update tests as needed
4. Update documentation
5. Submit a pull request

## Getting Help

If you have questions or need help:

1. Check existing issues
2. Create a new issue
3. Reach out to the maintainers

## License

This project is licensed under the Apache License 2.0 - see the LICENSE file for details.
