import styles from "./Main.module.scss";

export const Main = ({ children }: { children: React.ReactNode }) => {
  return <main className={styles.main}>{children}</main>;
};
