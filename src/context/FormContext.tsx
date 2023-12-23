import { ChangeEvent, FormEvent, createContext, useState } from "react";
import toast from "react-hot-toast";
import { FormContextProps, FormProviderProps } from "../@types";
import { formData } from "../mock/formData";
import { insertData } from "../api/server";

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

	const sendFormData = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		try {
			const registro = await insertData(data);
			toast.success(`Inscrição ${registro} realizada!`);
		} catch (err) {
			console.error("Error:", err);
			toast.error("Verifique suas informações!");
		}
	};

	return (
		<FormContext.Provider value={{ data, setFormData, sendFormData }}>
			{children}
		</FormContext.Provider>
	);
};
