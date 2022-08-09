import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from "./hooks/useAuth";
import StackNavigator from "./components/StackNavigator";

const App = () => {

  return (
    <NavigationContainer>
      <AuthProvider>
        <TailwindProvider>
          <StackNavigator />
        </TailwindProvider>
      </AuthProvider>
    </NavigationContainer>
  );
}

export default App;