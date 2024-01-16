import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Planet = (props) => {

	const url = `/details/planets/${props.id}`

	return (
		<div className="card" style={{width: "18rem"}}>
			<img src="https://www.servithermic.cl/images/400X200.gif" className="card-img-top" alt="Planet img"/>
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>
				<p className="card-text"></p>
				<Link to={url}>
					<button type="button" className="btn btn-primary" >
						Learn More!
					</button>
				</Link>
			</div>
		</div>
	);
};

Planet.propTypes = { 
	key: PropTypes.string,
	name: PropTypes.string
}