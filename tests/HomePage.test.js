import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import HomePage from './HomePage';
import { listOfOperations } from '../utils/utils';

jest.mock('../assets/logo.png', () => 'logo.png');

describe('HomePage', () => {
  it('should render correctly', () => {
    const { getAllByText, getByText } = render(<HomePage navigation={{ navigate: jest.fn() }} />);

    expect(getAllByText('Bonjour, John')).toBeDefined();
    expect(getByText('SOLDE')).toBeDefined();
    expect(getByText('0 FCFA')).toBeDefined();
    expect(getByText('Operations')).toBeDefined();
    expect(getByText('All')).toBeDefined();

    listOfOperations.slice(0, 6).forEach((item) => {
      expect(getByText(item.title)).toBeDefined();
    });

    expect(getByText('Transactions')).toBeDefined();
    expect(getByText('All')).toBeDefined();
  });

  it('should navigate to "allOperations" screen when "All" button is pressed', () => {
    const navigation = { navigate: jest.fn() };
    const { getByText } = render(<HomePage navigation={navigation} />);

    fireEvent.press(getByText('All'));
    expect(navigation.navigate).toHaveBeenCalledWith('allOperations');
  });

  it('should navigate to transaction detail screen when a transaction is pressed', () => {
    const navigation = { navigate: jest.fn() };
    const { getByText } = render(<HomePage navigation={navigation} />);

    fireEvent.press(getByText('dépôt'));
    expect(navigation.navigate).toHaveBeenCalledWith('DetailTransaction');
  });
});