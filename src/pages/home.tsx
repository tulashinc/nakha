import { ReactNode } from 'react'
import Navbar from '../navigation/navbar'
import Advertisements from './advertisements/advertisements'
import Footer from '../navigation/footer'

import './home.css'

interface IChildren {
	children: ReactNode
}

function Home({ children }: IChildren) {
	return (
		<div className="container">
			<div className="navbar-sticky">
				<Navbar />
			</div>
			<div className="main-container">
				<div className="child-container">{children}</div>
				<Advertisements />
			</div>
			<div className="footer-sticky">
				<Footer />
			</div>
		</div>
	)
}

export default Home
