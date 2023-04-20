import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Ews404 from "../images/ews-404.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/NoPage.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import MobileNavbar from "../components/MoblieNavbar/MobileNavbar";
import Footer from "../components/Footer/Footer";

const NoPage = () => {
	useEffect(() => {
		document.title = "Page Not Found | Eli Web Services";
	}, []);
	const navigate = useNavigate();
	// console.log(navigate);

	const goBack = () => {
		navigate(-1);
	};

	const [open, setOpen] = useState(false);

	function toggleDropdown() {
		setOpen(!open);
	}

	function closeDropdown() {
		setOpen(!open);
	}

	return (
		<div>
			<Navbar toggleBtn={toggleDropdown} />
			<MobileNavbar
				mobileTab={{ marginLeft: open ? "0" : "100%" }}
				closeDropdown={closeDropdown}
			/>
			<Container className="nopage-container">
				<Row className="page_404_text">Oops!</Row>
				<Row>
					<div className="page-404-image">
						<img src={Ews404} alt="" />
					</div>
				</Row>
				<Row className="page_404_text">sorry, page not found</Row>
				<Row className="page_404_btn">
					<button onClick={goBack}>Go Back</button>
				</Row>
			</Container>
			<Footer />
		</div>
	);
};

export default NoPage;
