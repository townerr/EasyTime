import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import useAuth from '../hooks/useAuth';
import { useNavigation } from "@react-navigation/native";

//TODO:
//Loading to transition to homescreen
//error messages on invalid login/input

const Login = () => {
  const { signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  const handleLogin = () => {
    signIn(email, password);
  }

  return (
    <View>
      <Text className="text-2xl font-semibold text-center mt-24">Login to EasyTime</Text>
      <Text className="mt-12 text-lg ml-12">Email:</Text>
      <TextInput style={styles.input} placeholder="Email" className="ml-12 mr-12"
        autoCorrect={false} keyboardType="email-address" spellCheck={false}
        onChangeText={(text) => setEmail(text)}/>
      <Text className="text-lg ml-12">Password:</Text>
      <TextInput style={styles.input} placeholder="Password" className="ml-12 mr-12"
        autoCorrect={false} secureTextEntry={true} spellCheck={false}
        onChangeText={(text) => setPassword(text)}/>
      <View className="items-center">
        <TouchableOpacity 
          className="w-72 h-16 mt-6 bg-green-600 items-center rounded-xl"
          onPress={handleLogin}>
          <Text className="text-center text-white font-semibold text-xl pt-4">Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          className="w-72 h-16 mt-4 bg-sky-600 items-center rounded-xl"
          onPress={() => navigation.navigate("Register")}>
          <Text className="text-center text-white font-semibold text-xl pt-4">Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 6,
    borderWidth: 1,
    padding: 10,
  },
});

export default Login