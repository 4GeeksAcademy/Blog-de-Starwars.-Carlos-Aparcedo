import React, { useState, useEffect, useContext } from 'react';
// import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
export const Home = () => {
    const { store, actions } = useContext(Context);
    // const [personajes, setPersonajes] = useState([]);
    useEffect(() => { // cada vez que quiera ejecutar una funcion ni bien se cargue el componente debo hacer un useEffect, React dice esto va asi! siempre antes del return
        actions.getPersonajes()
        actions.getPlanetas()
        actions.getVehiculos()
        actions.setFavorites()
    }, [])
    return (
        <div className=''>
            <h1>characters</h1>
            <div className="d-flex gap-0 column-gap-3 overflow-auto">
                {store.personajes.map((item) => (
                    <div className="col p-5" key={item.uid}>
                        <div className="p-2 g-col-6" style={{ width: "250px" }}>
                            <img src={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`} className="card-img-top" alt="..." />
                            <div className="card-body p-7">
                                <h5 className="card-title text-center">{item.name}</h5>
                                <p>{store.detallespersonaje.gender}</p>
                                <Link className='btn btn-primary mx-3' to={`/detailview/personaje/${item.uid}`}>Learn more!</Link>
                                <button className='btn btn-warning'
                                    onClick={() => {
                                        let name = item.name
                                        actions.setFavorites(name)
                                    }}
                                ><i className="fa fa-heart text-light"></i></button>
                            </div>
                        </div>
                    </div>
                ))} </div>
            <h1>Planets</h1>
            <div className="d-flex gap-0 column-gap-3 overflow-auto">
                {store.planetas.map((item) => (
                    <div className="col p-5" key={item.uid}>
                        <div className="p-2 g-col-6" style={{ width: "250px" }}>
                            <img src={
                                item.uid == 1 ?
                                    `https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/Tatooine_%28fictional_desert_planet%29.jpg/220px-Tatooine_%28fictional_desert_planet%29.jpg`
                                    :
                                    `https://starwars-visualguide.com/assets/img/planets/${item.uid}.jpg`
                            } className="card-img-top" alt="..." />
                            {/* <img src={`https://starwars-visualguide.com/assets/img/planets/${item.uid}.jpg`} className="card-img-top" alt="..." /> */}
                            <div className="card-body p-7">
                                <h5 className="card-title text-center">{item.name}</h5>
                                <Link className='btn btn-primary mx-3' to={`/planetas/${item.uid}`}>Learn more!</Link>
                                <button className='btn btn-warning'
                                    onClick={() => {
                                        let name = item.name
                                        actions.setFavorites(name)
                                    }}
                                ><i className="fa fa-heart text-light"></i></button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <h1>Vehicles</h1>
            <div className="d-flex gap-0 column-gap-3 overflow-auto">
                {store.vehiculos.map((item) => (
                    <div className="col p-5" key={item.uid}>
                        <div className="card p-2 g-col-6" style={{ width: "250px" }}>
                            <img src={`https://starwars-visualguide.com/assets/img/vehicles/${item.uid}.jpg`} className="card-img-top" alt="..." />
                            <div className="card-body p-7">
                                <h5 className="card-title text-center">{item.name}</h5>
                                <Link className='btn btn-primary mx-3' to={`/vehicles/${item.uid}`}>Learn more!</Link>
                                <button className='btn btn-warning'
                                    onClick={() => {
                                        let name = item.name
                                        actions.setFavorites(name)
                                    }}
                                ><i className="fa fa-heart text-light"></i></button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}