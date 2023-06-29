import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import MobileNavbar from "../components/MoblieNavbar/MobileNavbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../css/Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPalette,
	faTools,
	faBullseye,
} from "@fortawesome/free-solid-svg-icons";
import { faChartBar } from "@fortawesome/free-regular-svg-icons";
import Wuvideo from "../images/team-video.mp4";
// import Whyus from "../components/Whyus/Whyus";
import Testimonials from "../components/Testimonials/Testimonials";
// import ReactPlayer from "react-player";
import Aos from "aos";
import "aos/dist/aos.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

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
			<Container fluid className="hero-section">
				<div className="hero-overlay"></div>
				<Container className="text_and_pic">
					<Col lg={10} className="header_text">
						<h1 data-aos="fade">
							Take your business to <span>new heights</span> with our{" "}
							<span>software solutions</span>
						</h1>
						<div className="start-btn-div">
							<Link to="/contact-us" className="start-btn">
								Start Building Today
							</Link>
						</div>
					</Col>
					<div className="header_pic col-lg-4"></div>
				</Container>
			</Container>

			{/* Services Section */}
			<Container fluid className="services_section">
				<Container className="what_we_offer">
					<div className="service_heading">
						<h3 className="heading_text" data-aos="fade">
							Services
						</h3>
					</div>
					<Container fluid className="services_tabs">
						<Row className="bs-row">
							<Col lg={5} className="tabs tab-1" data-aos="fade">
								<div className="tabs-overlay"></div>
								<div className="wrap">
									<FontAwesomeIcon icon={faPalette} />
									<div className="tabs_text">
										<h4>Design</h4>
										<p>
											Strategic design plans tailored to meet the specifics of
											your project no matter how big or small.
										</p>
									</div>
								</div>
							</Col>

							<Col lg={5} className="tabs tab-2" data-aos="fade-up">
								<div className="tabs-overlay"></div>
								<div className="wrap">
									<FontAwesomeIcon icon={faTools} />
									<div className="tabs_text">
										<h4>Develop</h4>
										<p>
											A dedicated team driven by the passion to solve complex
											problems and ready to deliver quality work on time.
										</p>
									</div>
								</div>
							</Col>
						</Row>

						<Row className="bs-row">
							<Col lg={5} className="tabs tab-3" data-aos="fade">
								<div className="tabs-overlay"></div>
								<div className="wrap">
									<FontAwesomeIcon icon={faBullseye} />
									<div className="tabs_text">
										<h4>Branding</h4>
										<p>
											Creating brands and transforming your idea or business to
											stand out is what we are here for.
										</p>
									</div>
								</div>
							</Col>

							<Col lg={5} className="tabs tab-4" data-aos="fade-up">
								<div className="tabs-overlay"></div>
								<div className="wrap">
									<FontAwesomeIcon icon={faChartBar} />
									<div className="tabs_text">
										<h4>Business Marketing</h4>
										<p>
											Utilizing the power and efficiency of social media and
											bringing customers/clients to your doorstep fast and easy.
										</p>
									</div>
								</div>
							</Col>
						</Row>
					</Container>
				</Container>
			</Container>

			{/* Why Us Section */}
			<Container fluid className="explore_section">
				<div className="explore_div">
					<div className="explore_heading">
						<h3 className="heading_text" data-aos="fade">
							Why Us?
						</h3>
					</div>
					<div className="explore_before"></div>
					<div className="explore_tabs container" data-aos="fade-up">
						<div className="tab1 tab">
							{/* <ReactPlayer controls={false} url={Wuvideo}/> */}
							<video
								no-controls
								src={Wuvideo}
								autoPlay={true}
								loop={true}
								muted
							></video>
						</div>
						<div className="tab2 tab" data-aos="fade-up">
							<h3>We Bring Your Ideas To Life</h3>
						</div>
						<div className="tab3 tab" data-aos="fade-up">
							<h3>Because We Believe In Your Vision</h3>
						</div>
						<div className="tab4 tab" data-aos="fade-up"></div>
						<div className="tab5 tab" data-aos="fade-up"></div>
					</div>
				</div>
			</Container>

			{/* <Whyus/> */}

			<Testimonials />

			{/* Where we're heading */}
			<Container className="press" data-aos="fade">
				<div className="press-title">
					<h3>Where we're headed...</h3>
					<p>
						Our goal is to be one of best software companies, not only in
						Africa, but in the world and to be featured in big tech press
						companies. Join us and become part of something bigger!
					</p>
				</div>
				<div className="press-imgs">
					<LazyLoadImage
						className="press-image"
						src="pressImages/TechCrunch.png"
						alt="tc-logo"
					/>
					<LazyLoadImage
						className="press-image"
						src="pressImages/bizinsider.png"
						alt="biz-insider-logo"
					/>
					<LazyLoadImage
						className="press-image"
						src="pressImages/mashable.png"
						alt="mashable-logo"
					/>
					<LazyLoadImage
						className="press-image"
						src="pressImages/tnw.png"
						alt="tnw-logo"
					/>
				</div>
			</Container>
			{/* Everything comes on top of this */}
			<Footer />
		</motion.div>
	);
};

export default Home;
