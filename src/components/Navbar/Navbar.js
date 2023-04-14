import React from "react";
import logo from "../../images/eli1.png";
import { Link } from "react-router-dom";
// import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
import Container from "react-bootstrap/Container";

const Navbar = (props) => {
	return (
		<header data-scroll-section>
			<Container className="navigation">
				<div className="logo-container">
					<Link to="/">
						<img src={logo} alt="logo" />
					</Link>
				</div>
				{/* <faBars className="hamburger" onClick={props.toggleBtn} /> */}
				<div className="navmenu_div">
					<ul className="navmenu">
						<li>
							<Link to="/home" className="nav_link">
								home
							</Link>
						</li>
						<li>
							<Link to="/about" className="nav_link">
								about us
							</Link>
						</li>
						<li>
							<Link to="/our-services" className="nav_link">
								services
							</Link>
						</li>
						<li>
							<Link to="/portfolio" className="nav_link">
								Our Work
							</Link>
						</li>
						<li className="contact-us-btn">
							<Link to="/contact-us">Contact Us</Link>
						</li>
					</ul>
				</div>
			</Container>
		</header>
	);
};

export default Navbar;
