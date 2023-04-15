import React from "react";
import logo from "../../images/eli1.png";
import { Link } from "react-router-dom";
// import { FaBars } from "react-icons/fa";
import Sort from "@mui/icons-material/Sort";
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
				<div className="hamburger" onClick={props.toggleBtn}>
					<Sort />
				</div>
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
