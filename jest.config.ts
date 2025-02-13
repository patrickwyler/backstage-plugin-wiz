import type { Config } from 'jest';

const config: Config = {
  projects: [
    {
      displayName: 'Frontend Plugin',
      testEnvironment: 'jsdom',
      rootDir: '<rootDir>/plugins/backstage-plugin-wiz',
      transform: {
        '^.+\\.tsx?$': [
          'ts-jest',
          {
            isolatedModules: true,
          },
        ],
      },
      moduleNameMapper: {
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
        '^@backstage/(.*)$': ['@backstage/$1/src', '@backstage/$1'],
      },
      setupFilesAfterEnv: ['<rootDir>/../../jest.setup.ts'],
      testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
      coverageDirectory: '<rootDir>/../../coverage/frontend',
      transformIgnorePatterns: ['/node_modules/(?!@backstage).+\\.js$'],
    },
    {
      displayName: 'Backend Plugin',
      testEnvironment: 'node',
      rootDir: '<rootDir>/plugins/backstage-plugin-wiz-backend',
      transform: {
        '^.+\\.tsx?$': [
          'ts-jest',
          {
            isolatedModules: true,
          },
        ],
      },
      moduleNameMapper: {
        '^@backstage/(.*)$': ['@backstage/$1/src', '@backstage/$1'],
      },
      setupFilesAfterEnv: ['<rootDir>/../../jest.setup.ts'],
      testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
      coverageDirectory: '<rootDir>/../../coverage/backend',
      transformIgnorePatterns: ['/node_modules/(?!@backstage).+\\.js$'],
    },
  ],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  verbose: true,
};

export default config;
