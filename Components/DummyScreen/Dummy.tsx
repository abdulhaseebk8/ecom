import React from 'react';
import {View, Button} from 'react-native';

function Dummy({saveSelectedProducts}: any) {
  const handleRemoveButtonPress = () => {
    saveSelectedProducts();
  };

  return (
    <View>
      <Button
        title="Remove"
        onPress={handleRemoveButtonPress}
        testID="remove-button"
      />
    </View>
  );
}

export default Dummy;
