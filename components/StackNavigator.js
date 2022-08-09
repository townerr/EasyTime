import { createStackNavigator } from '@react-navigation/stack';
import useAuth from '../hooks/useAuth';

import Home from '../screens/Home';
import TimePunch from '../screens/TimePunch';
import History from '../screens/History';
import Profile from '../screens/Profile';
import Calendar from '../screens/Calendar';
import Leave from '../screens/Leave';
import Login from '../screens/Login';

const Stack = createStackNavigator();

const StackNavigator = () => {
  const { user} = useAuth();
  return (
    <Stack.Navigator>
      {user ? (
        <>
          <Stack.Screen name='EasyTime Services Dashboard' component={Home} />
          <Stack.Screen name='TimePunchScreen' component={TimePunch} />
          <Stack.Screen name='HistoryScreen' component={History} />
          <Stack.Screen name='ProfileScreen' component={Profile} />
          <Stack.Screen name='CalendarScreen' component={Calendar} />
          <Stack.Screen name='LeaveScreen' component={Leave} />
        </>
      ) : (
        <Stack.Screen name='LoginScreen' component={Login} options={{headerShown: false}} />
      )}
    </Stack.Navigator>
  )
}

export default StackNavigator