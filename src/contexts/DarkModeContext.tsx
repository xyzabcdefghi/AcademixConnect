import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

  useEffect(() => {
    const loadDarkModeState = async () => {
      try {
        const darkModeState = await AsyncStorage.getItem('darkModeEnabled');
        if (darkModeState !== null) {
          setIsDarkMode(JSON.parse(darkModeState));
        }
      } catch (error) {
        console.error('Error loading dark mode state:', error);
      }
    };

    loadDarkModeState();
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    AsyncStorage.setItem('darkModeEnabled', JSON.stringify(newMode));
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => useContext(DarkModeContext);
