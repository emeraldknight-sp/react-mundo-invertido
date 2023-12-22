import { ButtonProps } from "../../@types";
import style from "./Button.module.scss";

export const Button = ({
	id = "",
	type = "button",
	children = "",
	ariaLabel = "",
	onClick,
}: ButtonProps) => {
	return (
		<button
			id={id}
			type={type}
			className={`${style.button}`}
			aria-label={ariaLabel}
			onClick={onClick}
		>
			{children}
		</button>
	);
};
