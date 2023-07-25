import { setContext } from 'apollo-link-context';
import { ConfigState } from '../../types/setup';

export const handleRetry = () => (count, error) => {
  if (count > 3) {
    return false;
  }

  if (error?.result?.message === 'invalid_token') {
    return true;
  }

  return false;
};

export const linkFactory = ({ state }: {
  state: ConfigState;
}) => setContext((apolloReq, { headers }) => {
  // const token: string = state.getCustomerToken();
  const token: string = `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FkaWFtb3Itc3RvcmUuYXBwZXhwZXJ0cy51cy9ncmFwaHFsIiwiaWF0IjoxNjkwMTIxODIyLCJleHAiOjE3MjE2NTc4MjIsIm5iZiI6MTY5MDEyMTgyMiwianRpIjoiVnZkWWhocXVuV1JrTW91SCIsInN1YiI6IjEiLCJwcnYiOiJkZmIzZmU2YTM4NGFmY2VjMzlhNGU1YWI0NGU3M2I0ZDZhYzhjNjExIn0.Kk020eMdn4BavYE9EOF5ApdrY75undwxwqviWPmhtQU`;
  const guestCookie: string = state.getGuestToken();

  return {
    headers: {
      ...headers,
      // Authorization: `Bearer ${token}`,
      // authorization : 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FkaWFtb3Itc3RvcmUuYXBwZXhwZXJ0cy51cy9ncmFwaHFsIiwiaWF0IjoxNjkwMTIxODIyLCJleHAiOjE3MjE2NTc4MjIsIm5iZiI6MTY5MDEyMTgyMiwianRpIjoiVnZkWWhocXVuV1JrTW91SCIsInN1YiI6IjEiLCJwcnYiOiJkZmIzZmU2YTM4NGFmY2VjMzlhNGU1YWI0NGU3M2I0ZDZhYzhjNjExIn0.Kk020eMdn4BavYE9EOF5ApdrY75undwxwqviWPmhtQU',
      ...(token ? { authorization: token } : {}),
      ...(guestCookie ? { Cookie: guestCookie } : {})
    }
  };
});
