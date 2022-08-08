import { TailwindProvider } from "tailwindcss-react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from './screens/Home';
import TimePunch from './screens/TimePunch';
import History from './screens/History';
import Profile from './screens/Profile';
import Calendar from './screens/Calendar';
import Leave from './screens/Leave';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <TailwindProvider>
          <Stack.Navigator>
            <Stack.Screen name='EasyTime Services Dashboard' component={Home} />
            <Stack.Screen name='TimePunchScreen' component={TimePunch} />
            <Stack.Screen name='HistoryScreen' component={History} />
            <Stack.Screen name='ProfileScreen' component={Profile} />
            <Stack.Screen name='CalendarScreen' component={Calendar} />
            <Stack.Screen name='LeaveScreen' component={Leave} />
          </Stack.Navigator>
        </TailwindProvider>
    </NavigationContainer>
  );
}

export default App;