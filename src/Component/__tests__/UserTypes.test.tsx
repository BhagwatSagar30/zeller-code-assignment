import 'react-native';
import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react-native';

jest.useFakeTimers();

// Note: import explicitly to use the types shiped with jest.
import {test, expect} from '@jest/globals';
import UserType from '../UserType';

test('renders correctly User Type', async () => {
  const mockHandleClick = jest.fn();
  const mockData = ['Manager', 'Admin'];
  render(
    <UserType
      userTypes={mockData}
      selectedRole={'Manager'}
      setSelectedRole={mockHandleClick}
    />,
  );

  expect(screen.getByText('User Type')).toBeDefined();
  fireEvent(screen.getByTestId('selectRoleRadioButton0'), 'press');
  expect(mockHandleClick).toHaveBeenCalled();
  expect(screen.getByText('Manager')).toBeDefined();
  fireEvent(screen.getByTestId('selectRoleRadioButton1'), 'press');
  expect(mockHandleClick).toHaveBeenCalled();
  expect(screen.getByText('Admin')).toBeDefined();
});
