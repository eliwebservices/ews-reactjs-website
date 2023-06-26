import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import MobileNavbar from "../components/MoblieNavbar/MobileNavbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../css/Portfolio.css";
import Aos from "aos";
import "aos/dist/aos.css";
// import pic from "../images/Group 37.png";
import ProjectArrow from "../images/view-project-arrow.svg";
import Projects from "../../src/data/ProjectsData";
import GradientContact from "../components/GradientContact/GradientContact";

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

	useEffect(() => {
		Aos.init({ duration: 2000 });
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
				<Col className="portfolio-header-text" data-aos="fade">
					<h1>
						experience our <span>expertise</span>
					</h1>
					<p>see our custom software solutions in action</p>
				</Col>
			</Container>

			{/* Display Projects */}
			<Container className="projects-container">
				<Container className="projects-list">
					{Projects.map((project, index) => {
						return (
							<Row className="project-item">
								<Col lg={6} md={5} className="project-info">
									<h3>{project.title}</h3>
									<p>{project.description}</p>
									<div className="projects-techs">
										{project.stacks.map((stack, index) => {
											return <div className="project-tech">{stack}</div>;
										})}
									</div>
									<a href={project.link} className="view-project">
										View Project
										<img
											src={ProjectArrow}
											alt=""
											className="view-project-arrow"
										/>
									</a>
								</Col>
								<Col lg={6} md={7} className="project-image">
									<img src={project.image} alt="" />
								</Col>
							</Row>
						);
					})}
				</Container>
			</Container>

			{/* Gradient Contact */}
			<GradientContact />

			<Footer />
		</motion.div>
	);
};

export default Portfolio;
