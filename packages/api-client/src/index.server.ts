import { apiClientFactory, ApiClientExtension } from '@vue-storefront/core';
import type { Setttings, Endpoints } from './types';

import * as api from './api';

import { ClientInstance, Config } from './types/setup';
import { createBagistoConnection } from './helpers/bagistoLink';
import { defaultSettings } from './helpers/apiClient/defaultSettings';
import { apolloClientFactory } from './helpers/bagistoLink/graphQl';

const onCreate = (settings: Config): { config: Config; client: ClientInstance } => {

  const config = {
    ...defaultSettings,
    // ...settings,
    // state: settings.state || defaultSettings.state
    state: defaultSettings.state

  } as unknown as Config;

  console.log('BEfore caling connection--- index.serve.ts',config,'default settingggg===========',defaultSettings,'setting======',settings);
  
  const { apolloLink } = createBagistoConnection(config);

  const client = apolloClientFactory({
    link: apolloLink
  });

  return {
    config,
    client
  };
};

const tokenExtension: ApiClientExtension = {
  name: 'tokenExtension',
  hooks: (req, res) => ({
    beforeCreate: ({ configuration }) => {
      return {
        ...configuration,
        state: {
          getCustomerToken: () => req.cookies['vsf-bagCust-token'],
          // getCustomerToken: () => '',
          // 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FkaWFtb3Itc3RvcmUuYXBwZXhwZXJ0cy51cy9ncmFwaHFsIiwiaWF0IjoxNjkwMTIxODIyLCJleHAiOjE3MjE2NTc4MjIsIm5iZiI6MTY5MDEyMTgyMiwianRpIjoiVnZkWWhocXVuV1JrTW91SCIsInN1YiI6IjEiLCJwcnYiOiJkZmIzZmU2YTM4NGFmY2VjMzlhNGU1YWI0NGU3M2I0ZDZhYzhjNjExIn0.Kk020eMdn4BavYE9EOF5ApdrY75undwxwqviWPmhtQU',

          setCustomerToken: (token) => {
            if (!token) {
              // eslint-disable-next-line no-param-reassign
              delete req.cookies['vsf-bagCust-token'];
              return;
            }
            res.cookie('vsf-bagCust-token', JSON.stringify(token));
          },
          getGuestToken: () => req.cookies['bagisto_session'],
          setGuestToken: (token) => {
            if (!token) {
              // eslint-disable-next-line no-param-reassign
              delete req.cookies['bagisto_session'];
              return;
            }
            res.cookie('bagisto_session', token);
          },
          getBearerToken: () => {
            // return `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FkaWFtb3Itc3RvcmUuYXBwZXhwZXJ0cy51cy9ncmFwaHFsIiwiaWF0IjoxNjkwMTIxODIyLCJleHAiOjE3MjE2NTc4MjIsIm5iZiI6MTY5MDEyMTgyMiwianRpIjoiVnZkWWhocXVuV1JrTW91SCIsInN1YiI6IjEiLCJwcnYiOiJkZmIzZmU2YTM4NGFmY2VjMzlhNGU1YWI0NGU3M2I0ZDZhYzhjNjExIn0.Kk020eMdn4BavYE9EOF5ApdrY75undwxwqviWPmhtQU`; // Get the bearer token using the customer token from local storage
          },
        }
      };
    }
  })
};

const { createApiClient } = apiClientFactory<Setttings, Endpoints>({
  onCreate,
  api,
  extensions: [tokenExtension]
});

export {
  createApiClient
};
