import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import MobileNavbar from "../components/MoblieNavbar/MobileNavbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../css/About.css";
import Aos from "aos";
import "aos/dist/aos.css";
import GradientContact from "../components/GradientContact/GradientContact";

const About = () => {
	const [open, setOpen] = useState(false);

	function toggleDropdown() {
		setOpen(!open);
	}

	function closeDropdown() {
		setOpen(!open);
	}

	useEffect(() => {
		document.title = "About Us | Eli Web Services";
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
			<Container fluid className="about-hero-container">
				<Row className="hero_text_and_img">
					<Col lg={7} sm={12} className="about_hero_text">
						<h1 data-aos="fade">
							It's actually not
							<span> About Us</span>, It's about{" "}
							<span className="you-span">YOU</span>
						</h1>
					</Col>

					<Col lg={5} className="hero_image">
						<img
							src="accessimages/happy-man-sitting-cafe-circle.png"
							alt=""
							className="cafe-guy-svg"
							data-aos="fade-left"
						/>
						<img
							src="accessimages/aboutpage-pick-circle.png"
							alt=""
							className="pink-circle-svg wow fadeInLeft"
							data-aos="fade-right"
						/>
						<img
							src="accessimages/aboutpage-yello-circle.png"
							alt=""
							className="yello-circle-svg wow fadeInUp"
							data-aos="fade-up"
						/>
						<img
							src="accessimages/handshake-with-peopleonlaptop.png"
							alt=""
							className="big-img"
						/>
					</Col>
				</Row>
			</Container>

			<Container fluid className="about-timeline-section">
				<Container>
					<Row className="about-timeline-section-wrap">
						<Col lg={4} className="content-text" data-aos="fade">
							<div className="yr_n_sol">
								<div className="years">
									<h2>1+</h2>
									<p>Years in business</p>
								</div>
								<div className="solutions">
									<h2>6+</h2>
									<p>Solutions delivered</p>
								</div>
							</div>

							<p className="as-a-company">
								As a company that just gained its wings to get of the ground, we
								aim to keep soaring and never looking back, delivering the best
								of our expertise to our clients.
							</p>
						</Col>
						<Col lg={8} className="content-img">
							<div className="border-line">
								<div className="image">
									<img
										src="accessimages/women-looking-at-computer.jpg"
										alt=""
									/>
								</div>
							</div>
						</Col>
					</Row>
				</Container>
			</Container>

			<Container fluid className="core-value-section">
				<Row className="value-content">
					<Col lg={6} md={9} className="core-value-text">
						<h2>Our Core Value</h2>
						<p>
							Our clients’ vision is our vision and their success is our
							success. This is what drives us here at EWS. We are stern on
							delivering the best, not only in products but also in service. Our
							tireless efforts to <span className="co-create">co-create</span>{" "}
							with our clients is what sets us apart.
						</p>
					</Col>
				</Row>
				<div className="core-overlay"></div>
			</Container>

			{/*************************** Our Calling *****************************/}
			<Container className="our-calling-section">
				<Row className="calling-content">
					<Col lg={6} className="calling-text" data-aos="fade">
						<h2>Our Calling</h2>
						<p>
							Inspired by the passion to put Ghana on the pedestal of technology
							in Africa, Eli Web Services is a software company that helps bring
							the best out of our clients. Our passion makes the most complexity
							of projects an adventure. We believe that with the right
							collaboration our clients vision can graduate from just an idea
							into a reality, therefore we listen, we learn, and we deliver! Our
							goal is to become a household name in the industry of software
							technology not only in Africa but all over the world. And with
							your confidence in us, you and your vision will be a part of
							something bigger. Join us!
						</p>
					</Col>
					<Col lg={6} className="calling-image">
						<div className="image">
							<img src="accessimages/our-calling-side-pics.png" alt="" />
						</div>
					</Col>
				</Row>
			</Container>

			<GradientContact />
			<Footer />
		</motion.div>
	);
};

export default About;
