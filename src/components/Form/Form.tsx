import { useContext } from "react";
import { FormProps } from "../../@types";
import { FormContext } from "../../context/FormContext";
import styles from "./Form.module.scss";

export const Form = ({ children }: FormProps) => {
	const { sendFormData } = useContext(FormContext);

	return (
		<div className={styles.container}>
			<form className={styles.form} onSubmit={(e) => sendFormData(e)}>
				{children}
			</form>
		</div>
	);
};
