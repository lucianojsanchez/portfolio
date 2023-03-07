import React, { createContext, useState } from "react";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeContext = createContext<any>({
  theme: "light",
  setTheme: () => {},
});

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
