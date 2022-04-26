import { useParams, useNavigate, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/brewerie.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Brewerie = (props) => {
	const [breweries, setBrewerie] = useState({});

	// récupération de l'identifient de  l'element choisi par l'utilisateur
	let brewerie = useParams();

	// récupération des information complètes de l'element choisi par l'utilisateur
	useEffect(() => {
		axios
			.get(`https://api.openbrewerydb.org/breweries/${brewerie.id}`)
			.then((res) => {
				console.log(res);
				setBrewerie(res.data);
			});
	}, []);

	const navigate = useNavigate();

	return (
		<div className=" min-vh-100 position-relative " >
        <Navigation/>
			<div className="container mt-5 brewery_card" >
				<div className="row justify-content-center d-flex align-items-center">
					<div className="col-md-6">
						<div className="card w-75 mt-5 cards">
							<div className="card-body">
								<h5 className="card-title">{breweries.name}</h5>
								<p className="card-text">
									<ul>
										<li>
											<div className="row d-flex justify-content-between">
												<div className="col-2">
													<span className="fs-0 fw-bold"> id : </span>
												</div>
												<div className="col-10">{breweries.id}</div>
											</div>
										</li>
										<li>
											<div className="row d-flex justify-content-between">
												<div className="col-3">
													<span className="fs-0 fw-bold"> name : </span>
												</div>
												<div className="col-8">{breweries.name}</div>
											</div>
										</li>

										<li>
											<div className="row d-flex justify-content-between">
												<div className="col-5">
													<span className="fs-0 fw-bold"> brewery_type : </span>
												</div>
												<div className="col-5">{breweries.brewery_type}</div>
											</div>
										</li>
										<li>
											<div className="row d-flex justify-content-between">
												<div className="col-5">
													<span className="fs-0 fw-bold"> city : </span>
												</div>
												<div className="col-5">{breweries.city}</div>
											</div>
										</li>
										<li>
											<div className="row d-flex justify-content-between">
												<div className="col-5">
													<span className="fs-0 fw-bold"> postal_code :</span>
												</div>
												<div className="col-5">{breweries.postal_code}</div>
											</div>
										</li>
										<li>
											<div className="row d-flex justify-content-between">
												<div className="col-5">
													<span className="fs-0 fw-bold">Country :</span>
												</div>
												<div className="col-5">{breweries.country}</div>
											</div>
										</li>
										<li>
											<div className="row d-flex justify-content-between">
												<div className="col-5">
													<span className="fs-0 fw-bold"> Phone :</span>
												</div>
												<div className="col-5">{breweries.Phone}</div>
											</div>
										</li>
										<li>
											<div className="row d-flex justify-content-between">
												<div className="col-4">
													<span className="fs-0 fw-bold"> website_url :</span>
												</div>
												<div className="col-8"><a  target="_blank" href={breweries.website_url}>{breweries.website_url}</a> </div>
											</div>
										</li>
									</ul>
								</p>

								<Link to={"/"} className="btn btn-warning">
									Back
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
            <Footer />
		</div>
	);
};

export default Brewerie;
