//to pass these tests we have to remove styled components from basket screen
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {Provider} from 'react-redux';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'redu... Remove this comment to see the full error message
import configureStore from 'redux-mock-store';
import BasketScreen from '../Components/BasketScreen/Basket';

// Create a mock Redux store
const mockStore = configureStore([]);

describe('BasketScreen', () => {
  it('should call the removeItems function when the remove button is pressed', () => {
    // Mock the selectedProducts state in the Redux store
    const initialState = {
      user: {
        selectedProducts: [
          {id: 1, name: 'Product 1', price: 10},
          {id: 2, name: 'Product 2', price: 20},
        ],
      },
    };

    // Create a spy function to track the removeItems function call
    const removeItemsSpy = jest.fn();

    // Create the mock store with the initial state
    const store = mockStore(initialState);

    // Render the BasketScreen component with the mock store and spy function
    const {getByTestId} = render(
      <Provider store={store}>
        <BasketScreen saveSelectedProducts={removeItemsSpy} />
      </Provider>,
    );

    // Find the remove button and simulate a press event
    const removeButton = getByTestId('remove-button');
    fireEvent.press(removeButton);

    // Verify that the removeItems function has been called
    expect(removeItemsSpy).toHaveBeenCalled();
  });
});
