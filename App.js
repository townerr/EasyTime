import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from './screens/Home';
import TimePunch from './screens/TimePunch';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='TimePunch' component={TimePunch} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;