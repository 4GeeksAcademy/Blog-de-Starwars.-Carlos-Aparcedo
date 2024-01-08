import React, { useState, useEffect } from 'react';
// import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {

	function obtenerPersonajes() {
		fetch("https://www.swapi.tech/api/planets/1/")
			.then(res => res.json())
			.then(data => console.log(data))
			.catch(err => console.error(err))
	}

	useEffect(() => { // // cada vez que quiera ejecutar una funcion ni bien se cargue el componente debo hacer un useEffect, React dice esto va asi! siempre antes del return
        obtenerPersonajes()
    }, [])

	return (
		<div className="row row-cols-sm-12 row-cols-md-6 p-5">
			<div className="col">
				<div className="card">
					<img src="https://starwars-visualguide.com/assets/img/characters/1.jpg" className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">hola.</p>
					</div>
				</div>
			</div>
			<div className="col">
				<div className="card">
					<img src="https://starwars-visualguide.com/assets/img/characters/1.jpg" className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">hola</p>
					</div>
				</div>
			</div>
			<div className="col">
				<div className="card">
					<img src="https://starwars-visualguide.com/assets/img/characters/1.jpg" className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">hola</p>
					</div>
				</div>
			</div>
			<div className="col">
				<div className="card">
					<img src="https://starwars-visualguide.com/assets/img/characters/1.jpg" className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">hola.</p>
					</div>
				</div>
			</div>
		</div>
	);
}