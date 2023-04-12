import { ItemTheme } from '@/components'
import { node } from 'prop-types'
import { useState } from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'
import { HiComputerDesktop } from 'react-icons/hi2'
import styles from './ThemeOptions.module.css'

export const ThemeOptions = () => {
	const [show, setShow] = useState(false)
	const [icon, setIcon] = useState(HiComputerDesktop)

	const showBox = () => {
		setShow(!show)
	}

	const getIcon = (selected) => {
		const icons = {
			Dark: <FiMoon />,
			Linght: <FiSun />,
			System: <HiComputerDesktop />,
		}
		return icons[selected]
	}

	const getTheme = (evt) => {
		const id = evt.currentTarget?.id
		const selectedIcon = getIcon(id)
		setIcon(selectedIcon)
		showBox()
	}

	return (
		<div className={styles.option}>
			<button
				className={styles.option__btn}
				onClick={showBox}
				aria-haspopup='true'
				aria-controls='list-themes'
				aria-expanded={show}
			>
				{icon}
			</button>
			{show && (
				<ul
					className={styles.option__box}
					id='list-themes'
					role='listbox'
					aria-orientation='vertical'
					aria-activedescendant='option-theme'
					tabIndex={0}
				>
					<ItemTheme label='Dark' onClick={(evt) => getTheme(evt)}>
						<FiMoon />
					</ItemTheme>
					<ItemTheme label='Linght' onClick={(evt) => getTheme(evt)}>
						<FiSun />
					</ItemTheme>
					<ItemTheme label='System' onClick={(evt) => getTheme(evt)}>
						<HiComputerDesktop />
					</ItemTheme>
				</ul>
			)}
		</div>
	)
}

ThemeOptions.propTypes = {
	children: node,
}
