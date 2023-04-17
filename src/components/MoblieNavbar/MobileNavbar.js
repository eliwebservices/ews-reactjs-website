import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./MobileNavbar.css";

const MobileNavbar = (props) => {
	return (
		<div className="DropdownContainer" style={props.mobileTab}>
			<div className="CloseBtnContainer">
				<AiOutlinePlus
					className="CloseIcon"
					onClick={() => {
						props.closeDropdown();
					}}
				/>
			</div>

			<div className="DropdownWrapper">
				<div className="DropdownMenu">
					<ul className="mob_navmenu">
						<li>
							<Link to="/" className="mob_nav_link home">
								home
							</Link>
						</li>
						<li>
							<Link to="/about-us" className="mob_nav_link about">
								about us
							</Link>
						</li>
						<li>
							<Link to="/our-services" className="mob_nav_link services">
								services
							</Link>
						</li>
						<li>
							<Link to="/portfolio" className="mob_nav_link portfolio">
								Our Work
							</Link>
						</li>
						<li className="mob-contact-us-btn">
							<Link to="/contact-us">Contact Us</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default MobileNavbar;
