import React from "react";
import { Link } from "react-router-dom";

const Navigation = (props) => {
	return (
		<header>
			<nav className="navbar navbar-expand-md shadow-sm fixed-top mb-5 bg-white navbar-light">
				<div className="container">
					<Link to="/" className="navbar-brand text-uppercase fw-bold">
						<span className="bg-warning bg-gradient p-1 rounded-3 text-light">
							Brewery
						</span>
						DB
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div
						className="collapse navbar-collapse justify-content-end"
						id="navbarNav"
					>
						<ul className="navbar-nav">
							<li className="nav-item active">
								<Link className="nav-link" to={'/'}>
									List Breweries
								</Link>
							</li>
							<li className="nav-item">
								<a
									className="nav-link"
									href="https://www.openbrewerydb.org/documentation/02-getbrewery"
								>
									Documentation
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Navigation;
