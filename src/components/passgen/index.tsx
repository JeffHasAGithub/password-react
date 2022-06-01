import styles from "./passgen.module.css"

import { useState, useEffect } from "react"

import PWDisplay from "./pw_display"
import Options from "./options"
import { setRange } from "./options/range"
import { createToggle } from "./options/toggle"

import * as Utils from "../../utils/genpassword"

export default function Passgen() {
	const [password, setPassword] = useState("");

	const [length, setLength] = setRange(8, 16);
	const [allowAlphaUpp, setAlphaUpp] = createToggle(true);
	const [allowAlphaLow, setAlphaLow] = createToggle(true);
	const [allowNumbers, setNumbers] = createToggle(true);
	const [allowSymbols, setSymbols] = createToggle(true);

	useEffect(() => {
		const options = Utils.setOptions(allowAlphaUpp, allowAlphaLow, allowNumbers, allowSymbols);
		setPassword(Utils.genPassword(length, ...options));
	}, [length, allowAlphaUpp, allowAlphaLow, allowNumbers, allowSymbols])

	return (
		<>
			<main className={styles.main}>
				<section className={styles.section}>
					<PWDisplay password={password}/>
					<hr />
					<Options
						length={[length, setLength]}
						alphaUpp={[allowAlphaUpp, setAlphaUpp]}
						alphaLow={[allowAlphaLow, setAlphaLow]}
						numbers={[allowNumbers, setNumbers]}
						symbols={[allowSymbols, setSymbols]}
						/>
				</section>
			</main>
		</>
	);
}
