import logo from "./logo.svg";
import rightImage from "./assets/sectionDescubra/rightImage.png";
import { Header } from "./components/Header";
import { ImageArtist } from "./components/ImageArtist";

import styles from "./App.module.css";
import { Button } from "./components/Button";
import { Footer } from "./components/Footer";

export function App() {
	return (
		<div className={styles.wrapper}>
			<Header />
			<div className={styles.sectionOne}>
				<div className={styles.sectionDescubra}>
					<h1>
						Descubra novos artistas <br /> e suas obras
					</h1>
					<p>Uma nova geração de jovens artistas surgem</p>

					<Button text="EXPLORAR" />

					<div className={styles.statsLine}>
						<div>
							<strong>+2 mil</strong>
							<p>Artistas</p>
						</div>
						<div>
							<strong>+7 mil</strong>
							<p>Vendas</p>
						</div>
						<div>
							<strong>+16 mil</strong>
							<p>Avaliações</p>
						</div>
					</div>
				</div>
				<div className={styles.gap}></div>
				<div className={styles.sizeRightImage}>
					<img src={rightImage} alt="" />
				</div>
			</div>

			<div className={styles.sectionConfira}>
				<div className={styles.gallery}>
					<img src="https://images.unsplash.com/photo-1656231922827-7bc380cb8ed0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1662&q=80"></img>
					<img src="https://images.unsplash.com/photo-1656425950105-b89c0c19e185?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"></img>
					<img src="https://images.unsplash.com/photo-1656258278653-c5af14b6d281?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"></img>
				</div>
				<div className={styles.gap}></div>
				<div className={styles.text}>
					<strong>Confira as ultimas coleções</strong>
					<Button text="VER MAIS" />
				</div>
			</div>

			<div className={styles.sectionArtistas}>
				<div className={styles.sectionTitle}>
					<strong>Artistas</strong>
				</div>
				<div className={styles.imageList}>
					<ImageArtist
						image="https://images.unsplash.com/photo-1656576897856-8231e183d2cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
						artist="Sabine Lowe"
						description="Design e Fotógrafa"
					/>
					<ImageArtist
						image="https://images.unsplash.com/photo-1656524492925-0f1ff19d6a6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
						artist="Eleanor Pena"
						description="Escritora e Design"
					/>
					<ImageArtist
						image="https://images.unsplash.com/photo-1656582932154-5a438663a0ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
						artist="Leslie Alexander"
						description="Diretora de arte"
					/>
				</div>
			</div>
			<Footer />
		</div>
	);
}
