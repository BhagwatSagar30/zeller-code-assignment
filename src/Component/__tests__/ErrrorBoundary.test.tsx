import React from 'react';
import {render, screen} from '@testing-library/react-native';
import ErrorFallback from '../ErrrorBoundary';

jest.useFakeTimers();

// Note: import explicitly to use the types shiped with jest.
import {test, expect} from '@jest/globals';

test('renders correctly Error Screen', async () => {
  render(<ErrorFallback />);

  expect(screen.getByText('Something goes wrong...')).toBeDefined();
});
