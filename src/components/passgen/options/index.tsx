import styles from "./options.module.css"

import Toggle, { createToggle } from "./toggle"
import Range, { setRange } from "./range"

type Props = {
	length: [number, (n: number) => void];
	alphaUpp: [boolean, () => void];
	alphaLow: [boolean, () => void];
	numbers: [boolean, () => void];
	symbols: [boolean, () => void];
}

export default function Options(props: Props) {
	return (
		<>
			<div className={styles.options}>
				<Range min={8} max={16} value={props.length[0]} callback={props.length[1]}/>
				<hr />
				<Toggle token="A" label="Allow uppercase" state={props.alphaUpp[0]} callback={props.alphaUpp[1]} />
				<Toggle token="a" label="Allow lowercase" state={props.alphaLow[0]} callback={props.alphaLow[1]} />
				<Toggle token="#" label="Allow numbers" state={props.numbers[0]} callback={props.numbers[1]} />
				<Toggle token="@" label="Allow symbols" state={props.symbols[0]} callback={props.symbols[1]} />
			</div>		
		</>
	);
}
