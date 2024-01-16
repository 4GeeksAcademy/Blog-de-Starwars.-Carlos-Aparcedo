import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext.js";
import "../../styles/home.css";
import { Information } from "../component/information.js";
import { useParams } from "react-router-dom";
export const Details = (props) => {

	const params = useParams();

	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getDetail(`https://www.swapi.tech/api/${params.category}/${params.theid}`);
	}, []);
	
	console.log(store.listDetails);
	console.log(store.listDescription);
	
	// const componentInfo = null;
	// if (params.category==="planets") {
	// 	componentInfo=<Information name={store.listDetails.name} description={store.listDescription}/>
	// }
	// else if (params.category==="people"){
	// 	componentInfo=<Information name={store.listDetails.name} description={store.listDescription}/>
	// }
	// else if (params.category==="vehicles"){
	// 	componentInfo=<Information name={store.listDetails.name} description={store.listDescription}/>
	// }
	
	return (
        // {componentInfo}
		<Information name={store.listDetails.name} description={store.listDescription}/>
	)	
};