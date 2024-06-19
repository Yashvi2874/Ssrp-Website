import React, { createContext, useContext } from 'react';
import useCursor from './useCursor';

const CursorContext = createContext();

export const CursorProvider = ({ children }) => {
  const cursor = useCursor();
  return (
    <CursorContext.Provider value={cursor}>
      {children}
    </CursorContext.Provider>
  );
};

export const useCursorContext = () => useContext(CursorContext);
