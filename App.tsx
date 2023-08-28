import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ApolloProvider} from '@apollo/client';
import {client} from './src/apolloClient/ApolloClient';
import BottomNavigationTabs from './src/navigation/BottomNavigationTabs';
import ErrorBoundary from 'react-native-error-boundary';
import ErrorFallback from './src/Component/ErrrorBoundary';

function App(): JSX.Element {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <BottomNavigationTabs />
        </NavigationContainer>
      </ApolloProvider>
    </ErrorBoundary>
  );
}

export default App;
