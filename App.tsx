import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';
import { Provider } from 'react-redux';
import store from "./store";
import BasketScreen from './screens/BasketScreen';

const Stack = createNativeStackNavigator();

function App() {

  return store? (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
      >
          <>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="BasketScreen" component={BasketScreen} />

            </>
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  ): null;
}

export default App;
