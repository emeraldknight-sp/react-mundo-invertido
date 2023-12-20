import styles from "./Form.module.scss"

export const Form = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.container}>
      <form className={styles.form} action="">{children}</form>
    </div>
  );
};
