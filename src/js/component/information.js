import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const Information = (props) => {
	return (
		<div className="m-auto col-8 d-flex flex-column">
			<div className="d-flex flex-row">
				<img src="https://vasavihospitals.com/public/uploads/images/632ae685ed739.gif" className="col-6" alt="Character img"/>
				<div className="col-6">
					<h1>{props.name}</h1>
					<p>{props.description}</p>
				</div>
			</div>
			<div className="text-danger d-flex flex-row justify-content-between">
				<p>Gender</p>
				<p>Height</p>
				<p>Mass</p>
				<p>Hair Color</p>
				<p>Skin Color</p>
				<p>Eye Color</p>
			</div>
		</div>
	);
};

Information.propTypes = { 
	name: PropTypes.string,
	description: PropTypes.string
}