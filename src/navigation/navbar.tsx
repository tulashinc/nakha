import { Link } from 'react-router-dom'

import './navbar.css'
import EstDateTime from './est-datetime'
import NstDateTime from './nst-datetime'
import HistoryDropdown from './history-dropdown/history-dropdown'

const Navbar = () => {
	return (
		<div className="navbar">
			<div className="est-datetime">
				<EstDateTime />
			</div>
			{/* <div className="abc"> */}
			<Link to="/history" className="menu-items">
				History
				<HistoryDropdown />
			</Link>
			<Link to="/events" className="menu-items">
				Events
			</Link>
			<Link to="/messages" className="menu-items">
				Messages
			</Link>

			<div className="logo">
				<Link to="/" className="menu-items">
					<img src="./Logo_Background.jpg" className="home-logo" />
				</Link>
			</div>

			<Link to="/media" className="menu-items">
				Media
			</Link>
			<Link to="/gallery" className="menu-items">
				Gallery
			</Link>
			<Link to="/contact" className="menu-items">
				Contact Us
			</Link>
			{/* </div> */}
			<div className="nst-datetime">
				<NstDateTime />
			</div>
		</div>
	)
}

export default Navbar
