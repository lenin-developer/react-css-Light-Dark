import { string } from 'prop-types'
import styles from './Item.module.css'

export const Item = ({ label }) => {
	return (
		<li className={styles.item}>
			<a href='#'>{label} </a>
		</li>
	)
}

Item.propTypes = {
	label: string,
}
