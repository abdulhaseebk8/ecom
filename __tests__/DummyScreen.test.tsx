import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import DummyScreen from '../Components/DummyScreen/Dummy';

//In this example, the DummyScreen.js file only includes the necessary dependencies (React and View and Button components from react-native). The corresponding test file, DummyScreen.test.js, imports the render and fireEvent functions from the @testing-library/react-native package and creates a simple test to verify that the saveSelectedProducts function is called when the remove button is pressed.

describe('DummyScreen', () => {
  it('should call the saveSelectedProducts function when the remove button is pressed', () => {
    const saveSelectedProductsMock = jest.fn();

    const {getByTestId} = render(
      <DummyScreen saveSelectedProducts={saveSelectedProductsMock} />,
    );

    const removeButton = getByTestId('remove-button');
    fireEvent.press(removeButton);

    expect(saveSelectedProductsMock).toHaveBeenCalled();
  });
});
