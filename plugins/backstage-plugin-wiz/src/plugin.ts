import {
  createApiFactory,
  configApiRef,
  createPlugin,
  createRoutableExtension,
  discoveryApiRef,
  fetchApiRef,
} from '@backstage/core-plugin-api';
import { rootRouteRef } from './routes';
import { wizApiRef, WizClient } from './api';

export const backstagePluginWizPlugin = createPlugin({
  id: 'wiz',
  routes: {
    root: rootRouteRef,
  },
  apis: [
    createApiFactory({
      api: wizApiRef,
      deps: {
        discoveryApi: discoveryApiRef,
        fetchApi: fetchApiRef,
        configApiRef: configApiRef,
      },
      factory: ({ discoveryApi, fetchApi, configApiRef: config }) =>
        new WizClient({ discoveryApi, fetchApi, configApi: config }),
    }),
  ],
});

export const BackstagePluginWizPage = backstagePluginWizPlugin.provide(
  createRoutableExtension({
    name: 'BackstagePluginWizPage',
    component: () => import('./components/App').then(m => m.App),
    mountPoint: rootRouteRef,
  }),
);
