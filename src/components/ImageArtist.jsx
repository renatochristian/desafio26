import styles from "./ImageArtist.module.css";

export function ImageArtist(props) {
	return (
		<div className={styles.list}>
			<div className={styles.text}>
				<strong>{props.artist}</strong>
				<span>{props.description}</span>
			</div>
			<img src={props.image} />
		</div>
	);
}
