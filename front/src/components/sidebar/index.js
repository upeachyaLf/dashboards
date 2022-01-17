import { Link, Outlet, useLocation } from 'react-router-dom';

import routes from '../../constants/route';

export default function Sidebar() {
	const current_location = useLocation().pathname;

	const _getNavClass = (link) => {
		if (`/${link}` == current_location) return "nav-link active"
		return "nav-link text-white"
	}

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
						<Link to={routes.HOME} className={_getNavClass("")}>
							Home
						</Link>
					</li>
					<li>
						<Link to={routes.GENERATION} className={_getNavClass(routes.GENERATION)}>
							Generation
						</Link>
					</li>
					<li>
						<Link to={routes.CONSUMPTION} className={_getNavClass(routes.CONSUMPTION)}>
							Consumption
						</Link>
					</li>
					<li>
						<Link to={routes.STORAGE} className={_getNavClass(routes.STORAGE)}>
							Storage
						</Link>
					</li>
					<li>
						<Link to={routes.EVENTS} className={_getNavClass(routes.EVENTS)}>
							Events
						</Link>
					</li>
					<li>
						<Link to={routes.ABOUT} className={_getNavClass(routes.ABOUT)}>
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
