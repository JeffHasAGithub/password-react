import styles from "./toggle.module.css"

import React, { useState } from "react"

type Setter<T> = React.Dispatch<React.SetStateAction<T>>;

type Props = {
	token: string;
	setter: Setter<boolean>; 
}

export default function Toggle({ token, setter }: Props) {
	const [isOn, setOn] = createToggle(false, setter);

	return (
		<>
			<div className={styles.toggle}>
				<div className={styles.slider}>
					<div
						className={`
							${styles["slider-bg"]}
							${(isOn) ? styles["slider-bg-right"] : styles["slider-bg-left"]}
						`}
					>
						<button
							className={styles.thumb}
							onClick={setOn}
						>
							{token}
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

function createToggle(initial: boolean, setter: Setter<boolean>): [boolean, () => void] {
	const [isOn, setOn] = useState(initial);

	return [isOn, () => {
		setOn(!isOn);
		setter(!isOn);
	}];
}
