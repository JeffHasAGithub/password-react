import styles from "./toggle.module.css"

import React, { useState } from "react"
type Props = {
	token: string;
	label: string;	
	state: boolean;
	callback: () => void;
}

export default function Toggle({ token, label, state, callback }: Props) {
	return (
		<>
			<div className={styles.toggle}>
				<p className={styles.label}>
					{label}
				</p>
				<div className={styles.slider}>
					<div
						className={`
							${styles["slider-bg"]}
							${(state) ? styles["slider-bg-right"] : styles["slider-bg-left"]}
						`}
					>
						<button
							className={styles.thumb}
							onClick={callback}
						>
							{token}
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

export function createToggle(initial: boolean): [boolean, () => void] {
	const [isOn, setOn] = useState(initial);

	return [isOn, () => {
		setOn(!isOn);
	}];
}
