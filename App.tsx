import React from 'react';
import UserDetails from './src/Container/UserDetails';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import SearchUser from './src/Container/SearchUser';
import {StyleSheet} from 'react-native';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from '@apollo/client';
import {onError} from '@apollo/client/link/error';

const httpLink = new HttpLink({
  uri: 'http://localhost:9002/',
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

const client = new ApolloClient({
  link: from([errorLink, httpLink]),
  cache: new InMemoryCache(),
});
const Tab = createBottomTabNavigator();

function BottomNavigationTabs() {
  return (
    <Tab.Navigator
      initialRouteName="UserDetails"
      sceneContainerStyle={styles.tabContainerView}
      screenOptions={{
        tabBarActiveTintColor: '#4d94ff',
        headerStyle: {
          backgroundColor: '#4d94ff',
        },
      }}>
      <Tab.Screen name="User Details" component={UserDetails} />
      <Tab.Screen name="Search Users" component={SearchUser} />
    </Tab.Navigator>
  );
}

function App(): JSX.Element {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <BottomNavigationTabs />
      </NavigationContainer>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  tabContainerView: {
    backgroundColor: 'white',
  },
});

export default App;
