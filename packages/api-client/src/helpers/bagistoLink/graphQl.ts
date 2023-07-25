/* eslint-disable @typescript-eslint/restrict-template-expressions */
import ApolloClient from 'apollo-client';
import fetch from 'cross-fetch';
import { ApolloLink } from 'apollo-link';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';
import { Config } from '../../types/setup';

export const apolloLinkFactory = (settings: Config, handlers?: {
  apolloLink?: ApolloLink;
}) => {
  //handlers?.apolloLink ||
  const baseLink =  setContext((apolloReq, { headers }) => ({
    headers: {
      ...headers,
      Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FkaWFtb3Itc3RvcmUuYXBwZXhwZXJ0cy51cy9ncmFwaHFsIiwiaWF0IjoxNjkwMTIxODIyLCJleHAiOjE3MjE2NTc4MjIsIm5iZiI6MTY5MDEyMTgyMiwianRpIjoiVnZkWWhocXVuV1JrTW91SCIsInN1YiI6IjEiLCJwcnYiOiJkZmIzZmU2YTM4NGFmY2VjMzlhNGU1YWI0NGU3M2I0ZDZhYzhjNjExIn0.Kk020eMdn4BavYE9EOF5ApdrY75undwxwqviWPmhtQU`,
    },
  }));

  const httpLink = createHttpLink({
    uri: `https://${settings.api.domain}/graphql`,
    // uri: `https://adiamor-store.appexperts.us/graphql`,
    credentials: 'include',
    fetch,
    ...settings.customApolloHttpLinkOptions
  });

  console.log(settings,settings.api.domain);
  

  // our custom "afterware" that checks each response and saves the sessionID
  // if it contains an 'Authorization' header
  const afterwareLink = new ApolloLink((operation, forward) => {
    return forward(operation).map(response => {
      const context = operation.getContext();
      const authHeader = context.response.headers.get('Set-Cookie') 
      // ?? 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FkaWFtb3Itc3RvcmUuYXBwZXhwZXJ0cy51cy9ncmFwaHFsIiwiaWF0IjoxNjkwMTIxODIyLCJleHAiOjE3MjE2NTc4MjIsIm5iZiI6MTY5MDEyMTgyMiwianRpIjoiVnZkWWhocXVuV1JrTW91SCIsInN1YiI6IjEiLCJwcnYiOiJkZmIzZmU2YTM4NGFmY2VjMzlhNGU1YWI0NGU3M2I0ZDZhYzhjNjExIn0.Kk020eMdn4BavYE9EOF5ApdrY75undwxwqviWPmhtQU';
      // settings.state.setCustomerToken(`eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FkaWFtb3Itc3RvcmUuYXBwZXhwZXJ0cy51cy9ncmFwaHFsIiwiaWF0IjoxNjkwMTIxODIyLCJleHAiOjE3MjE2NTc4MjIsIm5iZiI6MTY5MDEyMTgyMiwianRpIjoiVnZkWWhocXVuV1JrTW91SCIsInN1YiI6IjEiLCJwcnYiOiJkZmIzZmU2YTM4NGFmY2VjMzlhNGU1YWI0NGU3M2I0ZDZhYzhjNjExIn0.Kk020eMdn4BavYE9EOF5ApdrY75undwxwqviWPmhtQU`);
      
      if (authHeader && authHeader.includes('bagisto_session=')) {
        const getBagistoSession = authHeader.split(';');
        const bagistoSession = getBagistoSession[0].replace(' ', '');
        settings.state.setGuestToken(bagistoSession);
       

      }

      return response;
    });
  });

  return ApolloLink.from([
    baseLink.concat(afterwareLink).concat(httpLink)
  ]);
};

export const apolloClientFactory = (customOptions: Record<string, any>) => {

  return new ApolloClient({
    cache: new InMemoryCache(),
    queryDeduplication: true,
    ssrMode: true,
    ...customOptions
  });
};
