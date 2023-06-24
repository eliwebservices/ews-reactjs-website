import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import MobileNavbar from "../components/MoblieNavbar/MobileNavbar";
import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../css/Portfolio.css";

const Portfolio = () => {
	const [open, setOpen] = useState(false);

	function toggleDropdown() {
		setOpen(!open);
	}

	function closeDropdown() {
		setOpen(!open);
	}

	useEffect(() => {
		document.title = "Our Work | Eli Web Services";
	}, []);

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
		>
			<Navbar toggleBtn={toggleDropdown} />
			<MobileNavbar
				mobileTab={{ marginLeft: open ? "0" : "100%" }}
				closeDropdown={closeDropdown}
			/>
			{/* Hero Section */}
			<Container fluid className="portfolio-container">
				<div src="" alt="" className="pc-ab-img-1 pc-ab-img" />
				<div src="" alt="" className="pc-ab-img-2 pc-ab-img" />
				<div src="" alt="" className="pc-ab-img-3 pc-ab-img" />
				<div src="" alt="" className="pc-ab-img-4 pc-ab-img" />
				<div src="" alt="" className="pc-ab-img-5 pc-ab-img" />
				<div src="" alt="" className="pc-ab-img-6 pc-ab-img" />
				<Col className="portfolio-header-text">
					<h1>
						experience our <span>expertise</span>
					</h1>
					<p>see our custom software solutions in action</p>
				</Col>
			</Container>
			<Footer />
		</motion.div>
	);
};

export default Portfolio;
