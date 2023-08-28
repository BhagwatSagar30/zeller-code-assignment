import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {render} from '@testing-library/react-native';
import ErrorBoundary from 'react-native-error-boundary';
import ErrorFallback from '../../Component/ErrrorBoundary';
import BottomNavigationTabs from '../BottomNavigationTabs';

describe('Testing react navigation', () => {
  test('screen contains a Text', async () => {
    const component = (
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <NavigationContainer>
          <BottomNavigationTabs />
        </NavigationContainer>
      </ErrorBoundary>
    );

    render(component).toJSON;
  });
});
