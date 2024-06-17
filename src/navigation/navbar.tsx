import { Link } from 'react-router-dom'

import './navbar.css'
import EstDateTime from './est-datetime'
import NstDateTime from './nst-datetime'
import HistoryDropdown from './history-dropdown/history-dropdown'
import MessageDropdown from './message-dropdown/message-dropdown'

const Navbar = () => {
	return (
		<div className="navbar">
			<div className="est-datetime">
				<EstDateTime />
			</div>

			<Link to="/history" className="menu-items">
				History
				<div className="sub-menu">
					<HistoryDropdown />
				</div>
			</Link>
			<Link to="/events" className="menu-items">
				Events
			</Link>
			<Link to="/messages" className="menu-items">
				Messages
				<div className="sub-menu">
					<MessageDropdown />
				</div>
			</Link>

			<div className="logo">
				<Link to="/" className="menu-items">
					<img src="/Logo_Background.jpg" className="home-logo" />
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
			<div className="nst-datetime">
				<NstDateTime />
			</div>
		</div>
	)
}

export default Navbar
