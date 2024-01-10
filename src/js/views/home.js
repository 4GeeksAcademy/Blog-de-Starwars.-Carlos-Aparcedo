import React, { useState, useEffect, useContext } from 'react';
// import rigoImage from "../../img/rigo-baby.jpg";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from 'react-router-dom';

export const Home = () => {
	const { store, actions } = useContext(Context);
	// console.log(store.personajes)
	// console.log(store.planetas)
	useEffect(() => { // cada vez que quiera ejecutar una funcion ni bien se cargue el componente debo hacer un useEffect, React dice esto va asi! siempre antes del return
		// obtenerPersonajes, obtenerPlanetas()
		actions.getPersonajes()
		actions.getPlanetas()
		actions.getVehiculos()

	}, [])
	return ( //en la parte de abajo deberia de ir un div PADRE donde colocar las clases 
		<div className='bg-primary'>
			<div className="row row-cols-sm-12 row-cols-md-6 p-5">
				{store.personajes.map((item) => (
					<div className="col" key={item.uid}>
						<div className="card">
							<img src={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`} className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">{item.name}</h5>
								<Link to={"/detailview"}><button>detalles</button></Link>
							</div>
						</div>
					</div>
				))} </div>
			<div className="row row-cols-sm-12 row-cols-md-6 p-5">
				{store.planetas.map((item) => (
					<div className="col" key={item.uid}>
						<div className="card">
							<img src={`https://starwars-visualguide.com/assets/img/planets/${item.uid}.jpg`} className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">{item.name}</h5>
								<Link to={"/detailview"}><button>detalles</button></Link>
							</div>
						</div>
					</div>
				))}
			</div><div className="row row-cols-sm-12 row-cols-md-6 p-5">
				{store.vehiculos.map((item) => (
					<div className="col" key={item.uid}>
						<div className="card">
							<img src={`https://starwars-visualguide.com/assets/img/vehicles/${item.uid}.jpg`} className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">{item.name}</h5>
								<Link to={"/detailview"}><button>detalles</button></Link>
							</div>
						</div>
					</div>
				))} </div>

		</div>
	);
}
export default Home;