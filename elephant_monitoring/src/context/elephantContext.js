import React, { createContext, useState } from 'react';

export const ElephantContext = createContext();

export const ElephantProvider = ({ children }) => {
  const [elephants, setElephants] = useState([]);

  return (
    <ElephantContext.Provider value={{ elephants, setElephants }}>
      {children}
    </ElephantContext.Provider>
  );
};