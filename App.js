import { TailwindProvider } from "tailwindcss-react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from './screens/Home';
import TimePunch from './screens/TimePunch';
import History from './screens/History';
import Profile from './screens/Profile';
import Calendar from './screens/Calendar';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <TailwindProvider>
          <Stack.Navigator>
            <Stack.Screen name='Dashboard' component={Home} />
            <Stack.Screen name='TimePunch' component={TimePunch} />
            <Stack.Screen name='History' component={History} />
            <Stack.Screen name='Profile' component={Profile} />
            <Stack.Screen name='Calendar' component={Calendar} />
          </Stack.Navigator>
        </TailwindProvider>
    </NavigationContainer>
  );
}

export default App;