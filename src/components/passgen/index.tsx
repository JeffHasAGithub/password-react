import styles from "./passgen.module.css"

import React from "react"
import Toggle, { createToggle } from "./toggle"

export default function Passgen() {
	const [allowNumbers, setNumbers] = createToggle(false);

	return (
		<>
			<main className={styles.main}>
				<section className={styles.section}>
					<Toggle token="#" state={allowNumbers} callback={setNumbers}/>
				</section>
			</main>
		</>
	);
}
