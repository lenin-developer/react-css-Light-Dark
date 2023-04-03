import { useState } from 'react'
import { Header } from '@/components'
import styles from './App.module.css'

function App() {
	const [count, setCount] = useState(0)
	console.log('desde app')

	return (
		<div className={styles.app}>
			<Header>
				<p>hola</p>
			</Header>
		</div>
	)
}

export default App
