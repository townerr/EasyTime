import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from '@react-navigation/native';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { AuthProvider } from "./hooks/useAuth";
import StackNavigator from "./components/StackNavigator";

const App = () => {
  const firebaseConfig = {
    apiKey: 'AIzaSyC5EnvZUkSBgFzzpqT8MY_vXIBJ1CgsFPU',
    authDomain: 'easytime-f251e.firebaseapp.com',
    databaseURL: 'https://project-id.firebaseio.com',
    projectId: 'easytime-f251e',
    storageBucket: 'easytime-f251e.appspot.com',
    messagingSenderId: 'sender-id',
    appId: '1:454766338751:ios:b38e9f5ca41ce909781c0a',
  };

  initializeApp(firebaseConfig);

  const auth = getAuth();

  return (
    <NavigationContainer>
      <AuthProvider auth={auth}>
        <TailwindProvider>
          <StackNavigator />
        </TailwindProvider>
      </AuthProvider>
    </NavigationContainer>
  );
}

export default App;