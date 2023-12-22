import { createContext, useState } from "react";
import { ThemeContextProps, ThemeProviderProps } from "../@types";

export const ThemeContext = createContext<ThemeContextProps>({
	theme: true,
	switchTheme: () => 0,
});

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
	const [theme, setTheme] = useState(true);

	const switchTheme = () => {
		setTheme(!theme);
	};

	return (
		<ThemeContext.Provider value={{ theme, switchTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
