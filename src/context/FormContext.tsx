import { ChangeEvent, FormEvent, createContext, useState } from "react";
import { FormContextProps, FormProviderProps } from "../@types";
import { formData } from "../mock/formData";

export const FormContext = createContext<FormContextProps>({
	data: formData,
	setFormData: () => 0,
	sendFormData: () => 0,
});

export const FormProvider = ({ children }: FormProviderProps) => {
	const [data, setData] = useState(formData);

	const setFormData = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;

		setData({
			...data,
			[name]: value,
		});
	};

	const sendFormData = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log("Form enviado!", data);
	};

	return (
		<FormContext.Provider value={{ data, setFormData, sendFormData }}>
			{children}
		</FormContext.Provider>
	);
};
