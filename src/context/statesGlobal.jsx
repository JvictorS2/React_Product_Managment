/* 
=============================================================================================

  Context API - usada para tornar estados globais

=============================================================================================
*/
import React, { createContext, useState } from "react";

const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [dataGlobal, setDataGlobal] = useState({
    
    darkMode: false,
  });

  return (
    <MyContext.Provider value={{ dataGlobal, setDataGlobal }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyProvider };