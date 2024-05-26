import { ReactNode } from 'react'
import Navbar from '../navigation/navbar'
import Footer from '../navigation/footer'
import Advertisements from './advertisements/advertisements'

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
