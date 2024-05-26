import { ReactNode } from 'react'
import Navbar from '../navigation/navbar'
import Footer from '../navigation/footer'

interface IChildren {
	children: ReactNode
}

function Home({ children }: IChildren) {
	return (
		<>
			<Navbar />
			{children}
			<Footer />
		</>
	)
}

export default Home
