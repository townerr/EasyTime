import React, { createContext, useContext, useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';

const AuthContext = createContext({});
let auth = {};

export const AuthProvider = ({children}, {firebaseAuth}) => {
  const value = useAuthProvider();
  auth = firebaseAuth;

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuthProvider() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const signIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
      user = userCredential.user;
    }).catch((error) => {
      console.log("Error Code: " + error.code);
      console.log("Error Message: " + error.message);
    });
  }

  return {
    user,
    signIn,
    loading,
  };
}

export default function useAuth() {
  return useContext(AuthContext);
}