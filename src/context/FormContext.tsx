import { ChangeEvent, FormEvent, createContext, useState } from "react";
import toast from "react-hot-toast";
import { FormContextProps, FormProviderProps } from "../@types";
import { formData } from "../mock/formData";
import { addSubscription } from "../api/services/subscriptionService";
import { emailValidationMiddleware } from "../api/middleware/emailValidationMiddleware";

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

		const hasSubscription = await emailValidationMiddleware(data);

		if (!hasSubscription) {
			try {
				const registro = await addSubscription(data);
				toast.success(`Inscrição ${registro} realizada!`, {
					id: "subscription added",
				});
			} catch (err) {
				console.error("Error:", err);
				toast.error("Verifique suas informações!", {
					id: "subscription-denied",
				});
			}
		}
	};

	return (
		<FormContext.Provider value={{ data, setFormData, sendFormData }}>
			{children}
		</FormContext.Provider>
	);
};
