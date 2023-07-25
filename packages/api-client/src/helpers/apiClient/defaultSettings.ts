import { ClientConfig } from '../../types/setup';

export const defaultSettings: ClientConfig = {
  api: {
    domain: 'adiamor-store.appexperts.us'
  },
  cookies: {
    currencyCookieName: 'vsf-currency',
    localeCookieName: 'vsf-locale',
    customerCookieName: 'vsf-customer',
    bagistoSession: ''
  },
  currency: 'USD',
  state: {
    getCustomerToken: () => '',
    setCustomerToken: () => {},
    getGuestToken: () => '',
    setGuestToken: () => {},
    getBearerToken: () => '',
  }
};

