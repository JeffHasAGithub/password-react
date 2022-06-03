import styles from "./range.module.css"
import * as Utils from "./utils"

import { useState } from "react"

type Props = {
	min: number;
	max: number;
	value: number;
	callback: (n: number) => void;
}

export default function Range({ min, max, value, callback }: Props) {

	const decrementHandler = (ev: React.MouseEvent<HTMLButtonElement>) => {
		callback(value - 1);
	}

	const changeHandler = (ev: React.ChangeEvent<HTMLInputElement>) => {
		callback(Number(ev.currentTarget.value));
	}

	const incrementHandler = (ev: React.MouseEvent<HTMLButtonElement>) => {
		callback(value + 1);
	}

	return (
		<>
			<h2 className={styles.header} >Password length: {value}</h2>
			<div className={styles.slider}>
				<button
					className={styles.incr}
					onClick={decrementHandler}
				>&#60;</button>
				<div className={styles["bar-outer"]}>
					<div
						className={styles["bar-inner"]}
						style={{width: `${Utils.toPercent(min, max, value)}%`}}
					>
					</div>
				</div>
				<button
					className={styles.incr}
					onClick={incrementHandler}
				>&#62;</button>
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

