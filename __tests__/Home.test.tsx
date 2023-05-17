//to pass these tests we have to remove styled components from home screen

import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Home from '../screens/Home';

describe('HomeScreen', () => {
  test('renders products section', () => {
    const {getByText} = render(<Home />);
    const sectionTitle = getByText('Products');
    expect(sectionTitle).toBeDefined();
  });

  test('handles product selection', () => {
    const {getByText} = render(<Home />);
    const product = getByText('Add to Basket');
    fireEvent.press(product);
    const selectedText = getByText('Selected');
    expect(selectedText).toBeDefined();
  });

  test('navigates to basket screen', () => {
    const mockNavigation = {navigate: jest.fn()};
    const {getByText} = render(<Home navigation={mockNavigation} />);
    const navigateButton = getByText('Navigate to basket');
    fireEvent.press(navigateButton);
    expect(mockNavigation.navigate).toHaveBeenCalledWith('BasketScreen');
  });
});
