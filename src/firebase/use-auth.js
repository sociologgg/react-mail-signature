import React, { useState, useEffect, useContext, createContext } from "react";
import {} from "./firebase";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

// Add your Firebase credentials

const authContext = createContext();
// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}
// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
  return useContext(authContext);
};
// Provider hook that creates auth object and handles state
function useProvideAuth() {
  const AUTH = getAuth();
  const [user, setUser] = useState(null);
  // Wrap any Firebase methods we want to use making sure ...
  // ... to save the user to state.
  const signin = (email, password) => {
    return signInWithEmailAndPassword(AUTH, email, password).then(
      (response) => {
        setUser(response.user);
        return response.user;
      }
    );
  };
  const signup = (email, password) => {
    return createUserWithEmailAndPassword(AUTH, email, password).then(
      (response) => {
        setUser(response.user);
        return response.user;
      }
    );
  };
  const signout = () => {
    return signOut(AUTH).then(() => {
      setUser(false);
    });
  };
  const sendPasswordResetEmail = (email) => {
    return sendPasswordResetEmail(email).then(() => {
      return true;
    });
  };

  const sendEmailVerification = (email) => {
    return sendEmailVerification(email).then(() => {
      return true;
    });
  };

  // Subscribe to user on mount
  // Because this sets state in the callback it will cause any ...
  // ... component that utilizes this hook to re-render with the ...
  // ... latest auth object.
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        setUser(user);
        console.log("user set edildi");
        // ...
      } else {
        // User is signed out
        // ...
        setUser(false);
      }
    });
  }, []);
  // Return the user object and auth methods
  return {
    user,
    signin,
    signup,
    signout,
    sendPasswordResetEmail,

    sendEmailVerification,
  };
}
