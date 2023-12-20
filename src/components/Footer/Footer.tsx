import LogoDio from "../../assets/images/logo-dio.webp";
import { Container } from "../Container";
import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <p>
          Projeto construído para fins didáticos com o objetivo de colocar em
          prática os conhecimentos de HTML5, CSS3 e Javascript ES6 aprendidos na
          &nbsp;
          <a
            href="https://www.dio.me/"
            target="_blank"
            rel="noreferrer noopener"
          >
            DIO
          </a>
          .
        </p>
        <p>
          Modificado com React utilizando&nbsp;
          <a
            href="https://github.com/css-modules/css-modules"
            target="_blank"
            rel="noreferrer noopener"
          >
            CSS Modules
          </a>
          &nbsp;e&nbsp;
          <a
            href="https://github.com/learning-zone/sass-basics"
            target="_blank"
            rel="noreferrer noopener"
          >
            SASS
          </a>
          .
        </p>
      </Container>
      <img src={LogoDio} alt="Logotipo dio" />
    </footer>
  );
};
