import { createContext, ChangeEvent } from 'react';

interface ThemeContextProps {
  theme: string;
  handleTheme: (e: ChangeEvent<HTMLInputElement>) => void;
}

const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps);

export default ThemeContext;
