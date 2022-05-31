import styles from "./passgen.module.css"

import React from "react"
import PWDisplay from "./pw_display"
import Options from "./options"

export default function Passgen() {

	return (
		<>
			<main className={styles.main}>
				<section className={styles.section}>
					<PWDisplay />
					<hr />
					<Options />
				</section>
			</main>
		</>
	);
}
