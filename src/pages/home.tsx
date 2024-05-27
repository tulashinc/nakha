import { ReactNode } from 'react'
import Navbar from '../navigation/navbar'
import Advertisements from './advertisements/advertisements'
import Footer from '../navigation/footer'

interface IChildren {
	children: ReactNode
}

function Home({ children }: IChildren) {
	return (
		<>
			<Navbar />
			{children}
			<Advertisements />
			<Footer />
		</>
	)
}

export default Home
