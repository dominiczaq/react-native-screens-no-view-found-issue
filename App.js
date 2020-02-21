import React from 'react';
import {Text} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Screen = () => {
  return <Text>Screen</Text>;
};

const Stack = createNativeStackNavigator();
const App = () => {
  const [route, setRoute] = React.useState('first');

  React.useEffect(() => {
    setInterval(() => {
      setRoute(currentRoute => (currentRoute !== 'first' ? 'first' : 'second'));
    }, 1);
  }, []);

  if (route === 'first') {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Screen" component={Screen} />
      </Stack.Navigator>
    );
  }

  return null;
};

const AppWrapper = () => (
    <NavigationContainer>
      <App />
    </NavigationContainer>
);

export default AppWrapper;
