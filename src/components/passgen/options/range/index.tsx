import styles from "./range.module.css"

import { useState } from "react"

type Props = {
	min: number;
	max: number;
	value: number;
	callback: (n: number) => void;
}

export default function Range({ min, max, value, callback }: Props) {

	const changeHandler = (ev: React.ChangeEvent<HTMLInputElement>) => {
		callback(Number(ev.currentTarget.value));
	}

	return (
		<>
			<div className={styles.slider}>
				<input
					className={styles.range}
					type="range"
					min={min}
					max={max}
					value={value}
					onChange={changeHandler}
				></input>
				<label className={styles["value-label"]}>Length</label>
				<input
					className={styles.value}
					type="number"
					value={value}
					onChange={changeHandler}
				></input>
			</div>
		</>
	)
}

export function setRange(min: number, max: number): [number, (n: number) => void] {
	const [value, setValue] = useState(min);
	return [value, (n: number) => {
		setValue(Math.max(min, Math.min(max, n)));
	}];
}
