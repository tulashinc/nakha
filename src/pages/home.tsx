import { ReactNode } from 'react'
import Navbar from '../navigation/navbar'

interface IChildren {
	children: ReactNode
}

function Home({ children }: IChildren) {
	return (
		<>
			<Navbar />
			{children}
		</>
	)
}

export default Home
