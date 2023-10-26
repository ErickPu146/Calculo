import { createContext, useState } from "react";

export const ContentContext = createContext();

export const ContentProvider = ({ children }) => {
    

  const value = {

  };

  return (
    <ContentContext.Provider value={value}>{children}</ContentContext.Provider>
  );
};
