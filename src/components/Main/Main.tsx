import { MainProps } from "../../@types";
import styles from "./Main.module.scss";

export const Main = ({ children }: MainProps) => {
	return <main className={styles.main}>{children}</main>;
};
