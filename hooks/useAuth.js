import React, { createContext, useContext, useEffect, useState } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';

const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
  const value = useAuthProvider();

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuthProvider() {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);

  const signIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
      setUser(userCredential.user);
    }).catch((error) => {
      console.log("Sign In Error:");
      console.log("Error Code: " + error.code);
      console.log("Error Message: " + error.message);
    });
  }

  const signUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
      setUser(userCredential.user);
    })
    .catch((error) => {
      console.log("Sign Up Error:");
      console.log("Error Code: " + error.code);
      console.log("Error Message: " + error.message);
    });
  }

  return {
    user,
    signIn,
    signUp,
    loading,
  };
}

export default function useAuth() {
  return useContext(AuthContext);
}