import { createStackNavigator } from '@react-navigation/stack';
import useAuth from '../hooks/useAuth';

import Home from '../screens/Home';
import TimePunch from '../screens/TimePunch';
import History from '../screens/History';
import Profile from '../screens/Profile';
import Calendar from '../screens/Calendar';
import Leave from '../screens/Leave';
import Login from '../screens/Login';
import Register from '../screens/Register';

const Stack = createStackNavigator();

const StackNavigator = () => {
  const { user} = useAuth();
  return (
    <Stack.Navigator>
      {user ? (
        <>
          <Stack.Screen name='EasyTime Services Dashboard' component={Home} />
          <Stack.Screen name='Time Punch Submission' component={TimePunch} />
          <Stack.Screen name='Time Punch History' component={History} />
          <Stack.Screen name='Profile' component={Profile} />
          <Stack.Screen name='Calendar' component={Calendar} />
          <Stack.Screen name='Leave System' component={Leave} />
        </>
      ) : (
        <>
          <Stack.Screen name='Login' component={Login} options={{headerShown: false}} />
          <Stack.Screen name='Register' component={Register} />
        </>
      )}
    </Stack.Navigator>
  )
}

export default StackNavigator