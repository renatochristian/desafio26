import styles from "./Footer.module.css";

export function Footer() {
	return (
		<div className={styles.footer}>
			<strong>Art.</strong>
			<div className={styles.footerMenu}>
				<a href="">INICIO</a>
				<a href="">BUSCAR</a>
				<a href="">EXPLORAR</a>
				<a href="">SOBRE NÓS</a>
			</div>
		</div>
	);
}
