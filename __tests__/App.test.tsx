/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import {render, screen, userEvent} from '@testing-library/react-native';

jest.useFakeTimers();

// Note: import explicitly to use the types shiped with jest.
import {it, test, expect} from '@jest/globals';
import SearchUser from '../src/Container/SearchUser';
import UserDetails from '../src/Container/UserDetails';

test('renders correctly', () => {
  render(<App />);
  expect(screen.getByRole('header', {name: 'User Details'})).toBeDefined();
});

test('renders correctly User details', () => {
  render(<UserDetails />);
  expect(screen.getByText('User Type')).toBeDefined();
  expect(screen.getByText('Users List')).toBeDefined();
});

test('renders correctly Search Users', () => {
  render(<SearchUser />);
  expect(screen.getByText('Users List')).toBeDefined();
  expect(screen.getByText('No Users to display')).toBeDefined();
});
