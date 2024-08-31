/* 
=============================================================================================

  Context API - usada para tornar estados globais

=============================================================================================
*/
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth/cordova";
import { getDatabase } from "firebase/database";
import React, { createContext, useState } from "react";

const MyContext = createContext();



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

const MyProvider = ({ children }) => {
  const [dataGlobal, setDataGlobal] = useState({
    darkMode: false,
    dbFirebase: db,
    authFirebase: auth,
    navBarOn:false
  });

  return (
    <MyContext.Provider value={{ dataGlobal, setDataGlobal }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyProvider };