import { ChangeEvent, useState } from "react";
import ThemeContext from "./ThemeContext";

interface props {
  children: JSX.Element | JSX.Element[];
}

const initialTheme = "light";

const ThemeProvider = ({ children }: props) => {
  const [theme, setTheme] = useState(initialTheme);

  const handleTheme = (e: ChangeEvent<HTMLInputElement>) => setTheme(e.target.value);

  const data = {
    theme,
    handleTheme,
  };

  
  return (
    <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>
  );
};

export { ThemeProvider };
