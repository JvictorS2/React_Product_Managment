/* 
=============================================================================================

  Context API - usada para tornar estados globais

=============================================================================================
*/

import React, { createContext, useState } from "react";

const globalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [dataGlobal, setDataGlobal] = useState({
    darkMode: true
  });

  return (
    <globalContext.Provider value={{ dataGlobal, setDataGlobal }}>
      {children}
    </globalContext.Provider>
  );
};

export { globalContext, GlobalProvider };