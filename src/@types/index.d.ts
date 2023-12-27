/// <reference types="react-scripts" />

declare module "*.scss";

interface ButtonProps {
	children?: React.ReactNode;
	type?: "submit" | "reset" | "button" | undefined;
	id?: string;
	ariaLabel: string;
	onClick?: () => void;
}

interface FrameProps {
	id: string;
	title: string;
}

interface FormContextProps {
	data: FormDataProps;
	setFormData: (e: ChangeEvent<HTMLInputElement>) => void;
	sendFormData: (e: FormEvent<HTMLFormElement>) => void;
}

interface FormProviderProps {
	children: React.ReactNode;
}

interface AppProviderProps {
	children: React.ReactNode;
}

interface ThemeContextProps {
	theme: boolean;
	switchTheme: () => void;
}

interface ThemeProviderProps {
	children: React.ReactNode;
}

export interface FormDataProps {
	name: string;
	email: string;
	level: number;
	description: string;
}

interface ImageProps {
	id: number;
	src: string;
	alt: string;
}

interface MainProps {
	children: React.ReactNode;
}

interface FormProps {
	children: React.ReactNode;
}

interface ContainerProps {
	children: React.ReactNode;
}

interface FooterProps {
	children: React.ReactNode;
}

interface QueryResult {
	id: string;
	data: DocumentData;
}
