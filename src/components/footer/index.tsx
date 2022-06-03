import styles from "./footer.module.css"

export default function Footer() {
	return (
		<>
			<footer className={styles.footer}>
				<h3>Developed by <a
					className={styles.link}
					href="https://jeffmadethiswebsite.com">
						Jeff Moore
				</a>
				</h3>
				<h3>
					Source code available <a
						className={styles.link}
						href="https://github.com/JeffHasAGithub">
							here
						</a>
				</h3>
			</footer>
		</>
	);
}
