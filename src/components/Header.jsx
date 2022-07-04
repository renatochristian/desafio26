import { Button } from "./Button";
import styles from "./Header.module.css";


export function Header() {
	return (
		<div className={styles.header}>
			<strong>Art.</strong>
			<input type="text" placeholder="Buscar"></input>
			<Button text="ENTRAR" />
		</div>
	);
}
