import { useContext } from "react";

import { Button } from "../../components/Button";
import { Container } from "../../components/Container";
import { Footer } from "../../components/Footer";
import { Form } from "../../components/Form";
import { Frame } from "../../components/Frame";
import { Main } from "../../components/Main";

import { FormContext } from "../../context/FormContext";
import { ThemeContext } from "../../context/ThemeContext";

import InvertedWorld from "../../assets/images/inverted-world.webp";
import LogoStrangerThings from "../../assets/images/logo.webp";

import { gallery } from "../../mock/gallery";

import styles from "./Home.module.scss";

export const Home = () => {
	const { setFormData } = useContext(FormContext);
	const { theme, switchTheme } = useContext(ThemeContext);

	return (
		<div className={theme ? "light-theme" : "dark-theme"}>
			<Main>
				<article className={`${styles.article} ${styles.first}`}>
					<Container>
						<section className={`${styles.section} ${styles.introduction}`}>
							<img
								src={LogoStrangerThings}
								className={`${theme ? "" : "dark-theme invert"}`}
								alt="Logotipo stranger things"
							/>
							<p className={`${theme ? "" : "dark-theme invert"}`}>
								Uma jornada para quem não tem medo do desconhecido. O caminho
								para o Mundo Invertido é incerto, repleto de obstáculos e
								perigos. Porém, a recompensa é grande: salvar Hawkings e o mundo
								todo das garras de Vecna. Você está preparado? Então clique no
								botão abaixo para entrar no Mundo Invertido.
							</p>
							<Button ariaLabel="Click to change theme" onClick={switchTheme}>
								Inverter mundos
							</Button>
							<div
								id="top-characters"
								className={`${styles["world-characters"]} ${styles["top-characters"]}`}
							></div>
						</section>
					</Container>
				</article>
				<article className={styles.article}>
					<Container>
						<div
							id="bottom-characters"
							className={`${styles["world-characters"]} ${styles["bottom-characters"]}`}
						></div>
						<section className={`${styles.section} ${styles.description}`}>
							<div>
								<h2>O Mundo Invertido</h2>
								<p>
									O Mundo Invertido parece uma cópia do nosso mundo, mas com
									criaturas horrendas, tempestades assustadoras, muita escuridão
									e entidades malignas. Um reino controlado por Vecna, que tem
									planos de trazer tudo isso ao nosso mundo.
								</p>
							</div>
							<img src={InvertedWorld} width={200} alt="Inverted world" />
						</section>
						<section className={`${styles.section} ${styles.trailer}`}>
							<Frame id="otutSrxYpa4" title="Trailer Stranger Things" />
							<div>
								<h2>Stranger Things Vol. 4</h2>
								<p>
									Mais experientes, os heróis de Stranger Things também precisam
									enfrentar desafios maiores do que nunca e fazer decisões que
									vão mudar suas vidas para sempre. Confira ao lado o trailer da
									quarta temporada.
								</p>
							</div>
						</section>
					</Container>
				</article>
				<article className={`${styles.article} ${styles.third}`}>
					<Container>
						<section className={`${styles.section} ${styles.gallery}`}>
							<h2>A segunda série mais assistida da Netflix</h2>
							<ul>
								{gallery.map((img) => (
									<li key={img.id}>
										<img
											src={img.src}
											className={theme ? "" : "dark-theme invert"}
											alt={img.alt}
										/>
									</li>
								))}
							</ul>
						</section>
					</Container>
				</article>
				<article className={styles.article}>
					<Container>
						<section className={`${styles.section} ${styles.form}`}>
							<h2>O clube Dungeons & Dragons</h2>
							<p>
								Para deter Vecna, os heróis de Stranger Things também de você. O
								Clube de D&D mais famoso de Hawkings está com vagas abertas para
								sua próxima aventura. Se você é destemido, gosta de desafios e
								não tem medo de rodar o D20, chegou a hora de se inscrever para
								fazer parte da nova campanha.
							</p>
							<div>
								<h3>
									Entre para o clube de D&D e tenha experiências de&nbsp;
									<span>outro mundo</span>
								</h3>
								<Form>
									<div>
										<label htmlFor="name">Nome completo</label>
										<input
											id="name"
											type="text"
											name="name"
											onChange={setFormData}
											required
										/>
									</div>
									<div>
										<label htmlFor="email">E-mail</label>
										<input
											id="email"
											type="email"
											name="email"
											onChange={setFormData}
											required
										/>
									</div>
									<div>
										<label htmlFor="level">Nível</label>
										<input
											id="level"
											type="number"
											name="level"
											onChange={setFormData}
											required
										/>
									</div>
									<div>
										<label htmlFor="description">Personagem</label>
										<textarea
											id="description"
											name="description"
											cols={30}
											rows={10}
											onChange={setFormData}
											required
										></textarea>
									</div>
									<Button type="submit" ariaLabel="Click to submit">
										Me inscrever
									</Button>
								</Form>
							</div>
						</section>
					</Container>
				</article>
			</Main>
			<Footer>
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
			</Footer>
		</div>
	);
};
