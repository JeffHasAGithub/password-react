import styles from "./options.module.css"

import Toggle, { createToggle } from "./toggle"
import Range, { setRange } from "./range"

export default function Options() {
	const [length, setLength] = setRange(8, 24);
	const [allowAlphaUpp, setAlphaUpp] = createToggle(false);
	const [allowAlphaLow, setAlphaLow] = createToggle(false);
	const [allowNumbers, setNumbers] = createToggle(false);
	const [allowSymbols, setSymbols] = createToggle(false);

	return (
		<>
			<div className={styles.options}>
				<Range min={8} max={24} value={length} callback={setLength}/>
				<Toggle token="A" label="Allow uppercase" state={allowAlphaUpp} callback={setAlphaUpp} />
				<Toggle token="a" label="Allow lowercase" state={allowAlphaLow} callback={setAlphaLow} />
				<Toggle token="#" label="Allow numbers" state={allowNumbers} callback={setNumbers} />
				<Toggle token="@" label="Allow symbols" state={allowSymbols} callback={setSymbols} />
			</div>		
		</>
	);
}
