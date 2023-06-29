import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import MobileNavbar from "../components/MoblieNavbar/MobileNavbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../css/Services.css";
import Aos from "aos";
import "aos/dist/aos.css";
import GradientContact from "../components/GradientContact/GradientContact";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Services = () => {
	const [open, setOpen] = useState(false);

	function toggleDropdown() {
		setOpen(!open);
	}

	function closeDropdown() {
		setOpen(!open);
	}

	useEffect(() => {
		document.title = "Our Services | Eli Web Services";
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
			<Container fluid className="services-hero">
				<div className="hero-overlay"></div>
				<Container>
					<Row className="services-hero-wrap">
						<Col lg={9} md={12} className="services-hero-text" data-aos="fade">
							<h1>
								<span className="span-gradient-effect">Innovative</span>{" "}
								software <span>solutions</span> that <span>power</span> your
								<span> business</span>
							</h1>
						</Col>
						{/* <Col lg={5} md={5} className="services-hero-images">
							<img src="accessimages/circle-develop-list-img.png" alt=""/>
							<img src="accessimages/services-hero-pink.png" alt=""  data-aos="fade-left" />
							<img src="accessimages/services-hero-yellow.png" alt=""  data-aos="fade-right" />
							<img src="accessimages/circle-mother-n-daughter.png" alt="" />
						</Col> */}
						<Col lg={3} className="services-hero-images">
							<img src="accessimages/woman-pc-circle.png" alt="" />
						</Col>
					</Row>
				</Container>
			</Container>

			<Container fluid className="services-board">
				<Container className="services-type-container" id="design">
					<Row className="service-type design" data-aos="fade-up">
						<Col lg={6} className="service-type-text">
							<h2>Design.</h2>
							<p>
								Beautifully designed software that's a joy to use. Our expert
								design team creates intuitive and visually appealing interfaces
								that delight your users and keep them coming back for more.
							</p>
						</Col>
						<Col lg={6} className="service-type-image">
							<LazyLoadImage src="accessimages/design-side-img.png" alt="" />
						</Col>
					</Row>
				</Container>

				<Container fluid className="services-type-container" id="development">
					<Row className="service-type development" data-aos="fade-up">
						<Col lg={6} md={11} className="service-type-text">
							<h2>Development.</h2>
							<p>
								Expertly crafted software that meets your unique business needs.
								Our experienced development team creates custom software
								solutions that help you optimize your operations and achieve
								your business goals.
							</p>
						</Col>
						<Col lg={6} className="service-type-image">
							<LazyLoadImage
								src="accessimages/services-dv-side-img.png"
								alt=""
							/>
						</Col>
					</Row>
				</Container>

				<Container className="services-type-container" id="branding">
					<Row className="service-type branding" data-aos="fade-up">
						<Col lg={6} className="service-type-text">
							<h2>Branding.</h2>
							<p>
								Powerful branding that sets you apart from the competition. Our
								branding experts help you develop a unique brand identity that
								communicates your values, resonates with your target audience,
								and helps you achieve your business objectives.
							</p>
						</Col>
						<Col lg={6} className="service-type-image">
							<p>transform your brand story into a compelling experience</p>
						</Col>
					</Row>
				</Container>

				<Container fluid className="services-type-container" id="business-marketing">
					<Row className="service-type business-marketing" data-aos="fade-up">
						<Col lg={6} md={11} className="service-type-text">
							<h2>Business Marketing.</h2>
							<p>
								Effective marketing strategies that drive business growth. Our
								marketing team helps you identify your target audience, develop
								a compelling message, and create a comprehensive marketing plan
								that helps you reach your business goals.
							</p>
						</Col>
						<Col lg={6} className="service-type-image">
							<LazyLoadImage
								src="accessimages/business-marketing-image-colored.png"
								alt=""
							/>
						</Col>
					</Row>
				</Container>
			</Container>

			<GradientContact />
			<Footer />
		</motion.div>
	);
};

export default Services;
