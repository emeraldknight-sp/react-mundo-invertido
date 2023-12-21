import style from "./Button.module.scss";

interface ButtonProps {
	children?: React.ReactNode;
	type?: "submit" | "reset" | "button" | undefined;
	id?: string;
	ariaLabel: string;
	onClick?: () => void;
}

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
