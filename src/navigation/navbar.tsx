import { Link } from 'react-router-dom'

import './navbar.css'
import EstDateTime from './est-datetime'
import NstDateTime from './nst-datetime'

const Navbar = () => {
	return (
		<div className="navbar">
			<div className="est-datetime">
				<EstDateTime />
			</div>

			<Link to="/" className="menu-items">
				History
			</Link>
			<Link to="/about" className="menu-items">
				Events
			</Link>
			<Link to="/messages" className="menu-items">
				Messages
			</Link>

			<div className="logo">
				<img src="./Logo_Background.jpg" className="home-logo" />
			</div>

			<Link to="/messages/president" className="menu-items">
				Media
			</Link>
			<Link to="/messages/president" className="menu-items">
				Gallery
			</Link>
			<Link to="/messages/contact" className="menu-items">
				Contact Us
			</Link>

			<div className="nst-datetime">
				<NstDateTime />
			</div>
		</div>
	)
}

export default Navbar
