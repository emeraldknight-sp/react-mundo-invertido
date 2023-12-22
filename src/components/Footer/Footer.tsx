import { FooterProps } from "../../@types";
import LogoDio from "../../assets/images/logo-dio.webp";
import { Container } from "../Container";
import styles from "./Footer.module.scss";

export const Footer = ({ children }: FooterProps) => {
	return (
		<footer className={styles.footer}>
			<Container>{children}</Container>
			<img src={LogoDio} alt="Logotipo dio" />
		</footer>
	);
};
