/* 
=============================================================================================

  Context API - usada para tornar estados globais do firebase

=============================================================================================
*/
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth/cordova";
import { getDatabase } from "firebase/database";
import React, { createContext, useEffect, useState } from "react";

const authContext = createContext();

/* Firebase */

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwZ8I3gjzOeJ-pIm_u0b0F9cqmByA9kjA",
  authDomain: "project-managment-2024-8f5b1.firebaseapp.com",
  databaseURL:
    "https://project-managment-2024-8f5b1-default-rtdb.firebaseio.com",
  projectId: "project-managment-2024-8f5b1",
  storageBucket: "project-managment-2024-8f5b1.appspot.com",
  messagingSenderId: "283421819680",
  appId: "1:283421819680:web:69e159025f8902ad5ccd45",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth
const auth = getAuth(app);

// Initialize Realtime Database and get a reference to the service
const db = getDatabase(app);

const AuthProvider = ({ children }) => {
  const [authStates, setAuthStates] = useState({
    dbFirebase: db,
    authFirebase: auth,
    uid: null,
    displayName: null,
    email: null,
  });

  /* Controla quando o usuário está logado ou não, também está sendo usado para prevenir que parte do
código seja compilado antes de setar o estado por questões de funções async */
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthStates({
          ...authStates,
          uid: user.uid,
          displayName: user.displayName,
          email: user.email,
        });
      } else {
        // Define uid como null quando não há usuário
        setAuthStates((prevState) => ({
          ...prevState,
          uid: null,
        }));
      }
    });

    return () => unsubscribe();
  }, [auth]);

  return (
    <authContext.Provider value={{ authStates, setAuthStates }}>
      {children}
    </authContext.Provider>
  );
};

export { authContext, AuthProvider };
