import { node, string } from 'prop-types'
import styles from './Header.module.css'

export const Header = ({ label, children }) => {
	return (
		<header className={styles.header}>
			<h2 className={styles.header__tilte}>{label}</h2>
			<div className={styles.header__itemSection}>{children}</div>
		</header>
	)
}

Header.propTypes = {
	label: string,
	children: node,
}
