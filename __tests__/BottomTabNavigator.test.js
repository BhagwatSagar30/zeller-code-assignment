import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {render, screen, fireEvent} from '@testing-library/react-native';
import BottomNavigationTabs from '../src/navigation/BottomNavigationTabs';
import ErrorBoundary from 'react-native-error-boundary';
import CustomFallback from '../src/Component/ErrrorBoundary';

describe('Testing react navigation', () => {
  test('screen contains a Text', async () => {
    const component = (
      <ErrorBoundary FallbackComponent={CustomFallback}>
        <NavigationContainer>
          <BottomNavigationTabs />
        </NavigationContainer>
      </ErrorBoundary>
    );

    render(component).toJSON;

    // render(component);
  });
});

// it('Tab tests', () => {
//   render(<BottomNavigationTabs />).toJSON;
// });
