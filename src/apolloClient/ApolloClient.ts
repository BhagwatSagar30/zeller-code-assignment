import {ApolloClient, InMemoryCache, HttpLink, from} from '@apollo/client';
import {onError} from '@apollo/client/link/error';

const URL = 'http://localhost:9002/';

const httpLink = new HttpLink({
  uri: URL,
});

// Log any GraphQL errors or network error that occurred
const errorLink = onError(({graphQLErrors, networkError}) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({message, locations, path}) =>
      console.error(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    );
  }
  if (networkError) {
    console.error(`[Network error]: ${JSON.stringify(networkError, null, 2)})`);
  }
});

export const client = new ApolloClient({
  link: from([errorLink, httpLink]),
  cache: new InMemoryCache(),
});
