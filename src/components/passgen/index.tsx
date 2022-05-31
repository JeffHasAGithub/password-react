import styles from "./passgen.module.css"

import { useState } from "react"
import Toggle from "./toggle"

export default function Passgen() {
	const [allowNumbers, setNumbers] = useState(false);

	return (
		<>
			<main className={styles.main}>
				<section className={styles.section}>
					<Toggle token="#" setter={setNumbers}/>
				</section>
			</main>
		</>
	);
}
