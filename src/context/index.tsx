import { AppProviderProps } from "../@types";
import { FormProvider } from "./FormContext";
import { ThemeProvider } from "./ThemeContext";

export const AppProvider = ({ children }: AppProviderProps) => {
	return (
		<FormProvider>
			<ThemeProvider>{children}</ThemeProvider>
		</FormProvider>
	);
};
