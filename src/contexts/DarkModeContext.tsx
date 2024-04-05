// DarkModeContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface DarkModeContextType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const initialDarkModeContext: DarkModeContextType = {
  isDarkMode: false,
  toggleDarkMode: () => {},
};

const DarkModeContext = createContext<DarkModeContextType>(initialDarkModeContext);

export const DarkModeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => useContext(DarkModeContext);
