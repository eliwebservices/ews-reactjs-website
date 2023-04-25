import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

const GradientContact = () => {
	return (
		<div class="gradient-conatact-section">
			<div class="gradient-conatact-content">
				<h2>Interested in working with us?</h2>
				<Link to="/contact-us">Contact us today</Link>
			</div>
		</div>
	);
};

export default GradientContact;
