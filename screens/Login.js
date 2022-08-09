import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import useAuth from '../hooks/useAuth'

const Login = () => {
  const { signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View>
      <Text className="text-2xl font-semibold text-center mt-24">Login to EasyTime</Text>
      <Text className="mt-12 text-lg ml-12">Email:</Text>
      <TextInput style={styles.input} placeholder="Email" className="ml-12 mr-12"
        onChangeText={setEmail}/>
      <Text className="text-lg ml-12">Password:</Text>
      <TextInput style={styles.input} placeholder="Password" className="ml-12 mr-12"
        onChangeText={setPassword}/>
      <View className="items-center">
        <TouchableOpacity 
          className="w-40 h-12 mt-6 bg-sky-600 items-center"
          onPress={ signIn(email, password) }>
          <Text className="text-center text-white font-semibold text-lg pt-2">Log In</Text>
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