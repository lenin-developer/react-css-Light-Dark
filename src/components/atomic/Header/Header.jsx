import { node } from 'prop-types'
import styles from './Header.module.css'

export const Header = ({ children }) => {
	return (
		<header className={styles.header}>
			<div>
				<h2>Themes in CSS</h2>
			</div>
			<div className={styles.header__itemSection}>{children}</div>
		</header>
	)
}

Header.propTypes = {
	children: node,
}
