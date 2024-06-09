import { Link } from 'react-router-dom'

import './history-dropdown.css'

const HistoryDropdown = () => {
	return (
		<div className="history-dropdown">
			<ul>
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
			</ul>
		</div>
	)
}

export default HistoryDropdown
