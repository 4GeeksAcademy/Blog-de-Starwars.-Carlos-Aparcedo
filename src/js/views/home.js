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
            <spam className="list-group d-flex flex-row flex-wrap" id="contact-list">
                {store.listCharacter.map((item) => ( <div><Character key={item.uid} id={item.uid} name={item.name} /></div>) ) }
            </spam>
            
            <h1 className="text-danger m-3">Planets</h1>
            <span className="list-group d-flex flex-row flex-wrap" id="contact-list">
                {store.listPlanet.map((item) => (<div key={item.uid}><Planet id={item.uid} name={item.name} /></div>) ) }
            </span>
            <h1 className="text-danger m-3">Vehicles</h1>
            <spam className="list-group pull-down d-flex flex-wrap d-inline-flex flex-row m-3" id="contact-list">
                {store.listVehicle.map((item) => ( <div key={item.uid}><Vehicle id={item.uid} name={item.name} /></div> ) ) }
            </spam>

        </div>
    )
};