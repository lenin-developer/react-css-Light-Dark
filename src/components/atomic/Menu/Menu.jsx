import { node } from 'prop-types'
import styles from './Menu.module.css'
import { ThemeOptions } from '@/components'

export const Menu = ({ children }) => {
	return (
		<nav className={styles.nav}>
			<ul className={styles.nav__ul}>{children}</ul>
			<section className={styles.nav__section}>
				<ThemeOptions />
			</section>
		</nav>
	)
}

Menu.propTypes = {
	children: node,
}
