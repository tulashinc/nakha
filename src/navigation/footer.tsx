import { Link } from 'react-router-dom'

import './footer.css'

const Footer = () => {
	return (
		<div className="footer-container">
			<div className="image">
				<Link to="/.">
					<img src="./Logo.png" />
				</Link>
				<span>Newah Nakha New York</span>
			</div>
			<div className="menu-links">
				<Link to="/" className="footer-menu">
					Home
				</Link>
				<Link to="/events" className="footer-menu">
					Events
				</Link>
				<Link to="/messages" className="footer-menu">
					Messages
				</Link>
				<Link to="/media" className="footer-menu">
					Media
				</Link>
				<Link to="/gallery" className="footer-menu">
					Gallery
				</Link>
				<Link to="/contact" className="footer-menu">
					Contact Us
				</Link>
			</div>
			<span>Creative Tech Teams, (c) 2024</span>
		</div>
	)
}

export default Footer
