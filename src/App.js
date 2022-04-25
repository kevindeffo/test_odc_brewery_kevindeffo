import axios from "axios";
import "./styles/App.css";
import React, { useEffect, useState } from "react";
import "jquery/dist/jquery.min.js";
import $ from "jquery";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import { useNavigate, Link } from "react-router-dom";

function App(props) {
	// liste de toutes les brasseries
	const [listBreweries, setListBreweries] = useState([]);

	// recuperation des donnees de l'API apres le chargement de la page
	useEffect(() => {
		if (listBreweries.length === 0) {
			axios.get("https://api.openbrewerydb.org/breweries").then((res) => {
				setListBreweries(res.data);
			});
		}
		console.log(listBreweries);
	});
	//fin

	// parametrage du parquet datata.net
	const navigate = useNavigate();
	useEffect(() => {
		$(document).ready(function () {
			setTimeout(function () {
				$("#braweries").DataTable({
					responsive: true
				});
			}, 1000);
		});
	}, [navigate]);

	// Fin

	return (
		<div className="App bg-light">
			<div className="container">
				<div className="row text-center my-5">
					<h1 className="text-warning">List of Breweries </h1>
				</div>
			</div>

			<div className="container bg-white p-4 tab">
				<div className="row">
					<table id="braweries" className="table table-striped table-bordered ">
						<thead>
							<tr className="table-warning">
								<th>#</th>
								<th>Brewery name</th>
								<th className="country">country</th>
								<th className="city">City</th>
								<th className="phone">phone</th>
								<th>actions</th>
							</tr>
						</thead>
						<tbody>
							{listBreweries.map((key, index) => (
								<tr key={key.id}>
									<th scope="row" className="text-center">
										{index + 1}
									</th>
									<td>{key.name}</td>
									<td className="country">{key.country}</td>
									<td className="city">{key.city}</td>
									<td className="phone"> {key.phone}</td>
									<td>
										<Link
											to={`/brewerie/${key.id}`}
											className="btn btn-outline-warning  fw-bold btn-detail"
										>
											Details
										</Link>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}

export default App;
