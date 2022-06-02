import styles from "./pw_display.module.css"

import React from "react"

type Props = {
	password: string;
}

export default function PWDisplay({ password }: Props) {
	const ref = React.useRef(null);

	const clipboardCopy = () => {
		if (ref.current === null)
			return;

		const range = document.createRange();
		range.selectNode(ref.current);
		window.getSelection()?.addRange(range);

		try {
			document.execCommand("copy");
		} catch (err) {
			console.log("Error whily copying password to clipboard", err);
		}
	}

	return (
		<>
			<div className={styles["pw-display"]}>
				<h2
					className={styles["pw-text"]}
					ref={ref}
				>
					{password}
				</h2>
				<button
					className={styles["pw-copy"]}
					onClick={clipboardCopy}
				>
					Copy to Clipboard
				</button>
			</div>
		</>
	);
}
