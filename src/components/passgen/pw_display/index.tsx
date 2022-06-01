import styles from "./pw_display.module.css"

type Props = {
	password: string;
}

export default function PWDisplay({ password }: Props) {
	return (
		<>
			<div className={styles["pw-display"]}>
				<h2 className={styles["pw-text"]}>
					{password}
				</h2>
				<button
					className={styles["pw-copy"]}
				>
					Copy to Clipboard
				</button>
			</div>
		</>
	);
}
