import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext.js";
import "../../styles/home.css";
import { Character } from "../component/character";
import { Planet } from "../component/planets.js";
import { Vehicle } from "../component/vehicle.js";



export const Home = () => {

    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getCharacter();
        actions.getPlanet();
        actions.getVehicle();
    }, []);

    return (
        <div className="mt-5">
            <h1 className="text-danger m-3">Characters</h1>
            <ul className="list-group d-flex flex-row flex-wrap" id="contact-list">
                {store.listCharacter.map((item) => (<Character key={item.uid} id={item.uid} name={item.name} />))}
            </ul>
            <h1 className="text-danger m-3">Planets</h1>
            <span className="list-group d-flex flex-row flex-wrap" id="contact-list">
                {store.listPlanet.map((item) => (<Planet id={item.uid} name={item.name} />))}
            </span>
            <h1 className="text-danger m-3">Vehicles</h1>
            <ul className="list-group pull-down d-flex flex-wrap d-inline-flex flex-row m-3" id="contact-list">
                {store.listVehicle.map((item) => (<Vehicle id={item.uid} name={item.name} />))}
            </ul>

        </div>
    )
};