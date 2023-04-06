import { useState } from 'react'
import { Header, Menu, Item, ThemeOptions } from '@/components'
import styles from './App.module.css'

function App() {
	return (
		<div className={styles.app}>
			<Header label='Themes CSS'>
				<Menu>
					<Item label='opcion' />
					<Item label='opcion' />
					<Item label='opcion' />
					<Item label='opcion' />
				</Menu>
			</Header>
		</div>
	)
}

export default App
