import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ApolloProvider} from '@apollo/client';
import BottomNavigationTabs from './src/navigation/BottomNavigationTabs';
import {client} from './src/apolloClient/ApolloClient';

function App(): JSX.Element {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <BottomNavigationTabs />
      </NavigationContainer>
    </ApolloProvider>
  );
}

export default App;
