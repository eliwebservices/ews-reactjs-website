import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import MobileNavbar from "../components/MoblieNavbar/MobileNavbar";
import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../css/Home.css";

const Home = () => {
	const [open, setOpen] = useState(false);

	function toggleDropdown() {
		setOpen(!open);
	}

	function closeDropdown() {
		setOpen(!open);
	}

	useEffect(() => {
		document.title = "Home | Eli Web Services";
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
			<Container fluid className="hero-section">
				<div className="hero-overlay"></div>
				<Container className="text_and_pic">
					<Col lg={10} className="header_text">
						<h1
							className="wow fadeIn"
							data-wow-duration="2s"
							data-wow-delay="0.4s"
						>
							Take your business to <span>new heights</span> with our{" "}
							<span>software solutions</span>
						</h1>
						<div className="start-btn-div">
							<a href="/contact-us" className="start-btn">
								Start Building Today
							</a>
						</div>
					</Col>
					<div className="header_pic col-lg-4"></div>
				</Container>
			</Container>
			<Footer />
		</motion.div>
	);
};

export default Home;
