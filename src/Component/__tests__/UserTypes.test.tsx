import 'react-native';
import React from 'react';
import {
  fireEvent,
  render,
  screen,
  userEvent,
} from '@testing-library/react-native';

jest.useFakeTimers();

// Note: import explicitly to use the types shiped with jest.
import {test, expect} from '@jest/globals';
import UserType from '../UserType';

test('renders correctly User Type', async () => {
  const mockHandleClick = jest.fn();
  render(
    <UserType
      userTypes={['Manager', 'Admin']}
      selectedRole={'Manager'}
      setSelectedRole={mockHandleClick}
    />,
  );
  //screen.getAllByTestId('selectRoleRadioButton')
  await fireEvent.press(screen.getByTestId('selectRoleRadioButton'));
  expect(mockHandleClick).toHaveBeenCalled();
  expect(screen.getByText('User Type')).toBeDefined();
  expect(screen.getByText('Manager')).toBeDefined();
  expect(screen.getByText('Admin')).toBeDefined();
});
