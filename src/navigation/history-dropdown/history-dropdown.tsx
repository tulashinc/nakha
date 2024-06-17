import { Link } from 'react-router-dom'

// import { HistorySubmenu } from '../navbar/navbar-items.ts'
import { HistorySubmenu } from '../navbar-items.ts'

import './history-dropdown.css'

const HistoryDropdown = () => {
	return (
		<div className="history-dropdown">
			{/* <Link to="/history/introduction" className="sub-dropdown">
				Introduction
			</Link>

			<Link to="/history/objectives" className="sub-dropdown">
				Objectives
			</Link>

			<Link to="/history/currentecmembers" className="sub-dropdown">
				Current EC Members
			</Link>

			<Link to="/history/pastecmembers" className="sub-dropdown">
				Past EC Members
			</Link>

			<Link to="/history/members" className="sub-dropdown">
				General Members
			</Link>

			<Link to="/history/bylaws" className="sub-dropdown">
				By Laws
			</Link> */}

			{/* <ul> */}
			{HistorySubmenu.map((hm) => (
				<Link to={hm.menupath} key={hm.id} className="sub-dropdown">
					{hm.menuname}
				</Link>
			))}
			{/* <li>
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
				</li> */}
			{/* </ul> */}
		</div>
	)
}

export default HistoryDropdown
