import { node, string } from 'prop-types'
import styles from './ItemTheme.module.css'

export const ItemTheme = ({ label, children, ...res }) => {
	return (
		<li className={styles.item} id={label} role='opcion' tabIndex={-1} aria-selected={'false'} {...res}>
			<figure className={styles.item__icon}>{children}</figure>
			<p className={styles.item__text}>{label}</p>
		</li>
	)
}

ItemTheme.propTypes = {
	label: string,
	children: node,
}
