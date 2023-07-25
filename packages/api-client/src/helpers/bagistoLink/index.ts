import { Config } from '../../types/setup';
import { apolloLinkFactory } from './graphQl';
import { linkFactory } from './linkHandlers';

export const createBagistoConnection = (settings: Config) => {

  console.log('create index.ts bagistolink===',settings);
  
  const apolloLink = apolloLinkFactory(settings, {
    apolloLink: linkFactory({ state: settings.state }),
  });

  return {
    apolloLink,
  };
};
