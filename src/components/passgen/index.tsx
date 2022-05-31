import styles from "./passgen.module.css"

import React from "react"
import Options from "./options"

export default function Passgen() {

	return (
		<>
			<main className={styles.main}>
				<section className={styles.section}>
					<Options />
				</section>
			</main>
		</>
	);
}
