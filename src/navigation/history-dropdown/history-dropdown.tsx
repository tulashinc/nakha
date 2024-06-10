import { Link } from 'react-router-dom'

import './history-dropdown.css'

const HistoryDropdown = () => {
	return (
		<div className="history-dropdown">
			<Link to="history/introduction" className="sub-dropdown">
				Introduction
			</Link>

			<Link to="history/objectives" className="sub-dropdown">
				Objectives
			</Link>

			<Link to="history/currentecmembers" className="sub-dropdown">
				Current EC Members
			</Link>

			<Link to="history/pastecmembers" className="sub-dropdown">
				Past EC Members
			</Link>

			<Link to="history/members" className="sub-dropdown">
				General Members
			</Link>

			<Link to="history/bylaws" className="sub-dropdown">
				By Laws
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

export default HistoryDropdown
