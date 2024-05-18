import React, { useState } from "react";
import { MyContext } from "./MyContext";

function MyProvider({ children }) {
  const [mode, setMode] = useState("night");
  const contextValue = {
    mode,
    setMode,
  };
  return (
    <MyContext.Provider value={contextValue}>
      {children}
    </MyContext.Provider>
  );
}

export default MyProvider;
