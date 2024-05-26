import { Link } from 'react-router-dom'

const Navbar = () => {
	return (
		<div>
			<Link to="/">Home</Link>
			<Link to="/about">About</Link>
			<Link to="/messages">Messages</Link>
			<Link to="/messages/president">President</Link>
		</div>
	)
}

export default Navbar
