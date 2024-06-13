import { Link } from 'react-router-dom'

import '../history-dropdown/history-dropdown.css'

const MessageDropdown = () => {
	return (
		<div className="history-dropdown">
			<Link to="/messages/president" className="sub-dropdown">
				President
			</Link>

			<Link to="/messages/vice-president" className="sub-dropdown">
				Vice President
			</Link>

			<Link to="/messages/general-secretary" className="sub-dropdown">
				General Secretary
			</Link>

			<Link to="/messages/secretary" className="sub-dropdown">
				Secretary
			</Link>

			<Link to="/messages/treasurer" className="sub-dropdown">
				Treasurer
			</Link>

			<Link to="/messages/advisor" className="sub-dropdown">
				Advisor
			</Link>

			{/* <ul>
				<li>
					<Link to="history/introduction" className="active">
						Introduction
					</Link>
				</li>
				<li>
					<Link to="history/objectives">Objectives</Link>
				</li>
				<li>
					<Link to="history/currentecmembers">Current EC Members</Link>
				</li>
				<li>
					<Link to="history/pastecmembers">Past EC Members</Link>
				</li>
				<li>
					<Link to="history/members">General Members</Link>
				</li>
				<li>
					<Link to="history/bylaws">By Laws</Link>
				</li>
			</ul> */}
		</div>
	)
}

export default MessageDropdown
