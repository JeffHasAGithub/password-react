import styles from "./pw_display.module.css"

export default function ClipboardCopy() {
	return (
		<>
			<div className={styles["pw-display"]}>
				<h2 className={styles["pw-text"]}>
					Display
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
