import React, { useEffect, useState } from "react";
import logo from "../../images/eli1.png";
import { Link } from "react-router-dom";
// import { FaBars } from "react-icons/fa";
import Sort from "@mui/icons-material/Sort";
import "./Navbar.css";
import Container from "react-bootstrap/Container";

const Navbar = (props) => {
	const [sticky, setSticky] = useState(false);

	useEffect(() => {
		const scrollEffect = () => {
			setSticky(window.scrollY > 10);
		};

		window.addEventListener("scroll", scrollEffect);
		return () => window.removeEventListener("scroll", scrollEffect);
	});

	return (
		<header data-scroll-section className={`${sticky ? "sticky" : ""}`}>
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
							<Link to="/" className="nav_link">
								home
							</Link>
						</li>
						<li>
							<Link to="/about-us" className="nav_link">
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
