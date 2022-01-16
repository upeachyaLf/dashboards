import { Link, Outlet } from 'react-router-dom';

import routes from '../../constants/route';

export default function Sidebar() {
	return (
		<>
			<div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" 
				style={{
					width: "280px",
					height: "100vh",
					position: "fixed",
					overflowY: "scroll"
				}}
			>
				<Link to={routes.HOME} className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
					<span className="fs-4">Dashboard</span>
				</Link>
				<hr/>
				<ul className="nav nav-pills flex-column mb-auto">
					<li className="nav-item">
						<Link to={routes.HOME} className="nav-link active" aria-current="page">
							Home
						</Link>
					</li>
					<li>
						<Link to={routes.GENERATION} className="nav-link text-white">
							Generation
						</Link>
					</li>
					<li>
						<Link to={routes.CONSUMPTION} className="nav-link text-white">
							Consumption
						</Link>
					</li>
					<li>
						<Link to={routes.STORAGE} className="nav-link text-white">
							Storage
						</Link>
					</li>
					<li>
						<Link to={routes.EVENTS} className="nav-link text-white">
							Events
						</Link>
					</li>
					<li>
						<Link to={routes.ABOUT} className="nav-link text-white">
							About
						</Link>
					</li>
				</ul>
				<hr/>
			</div>

			<Outlet/>
		</>
	)
}
