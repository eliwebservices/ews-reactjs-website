import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import MobileNavbar from "../components/MoblieNavbar/MobileNavbar";
import { Container } from "react-bootstrap";
import ContactForm from "../components/ContactForm/ContactForm";
import "../css/Contact.css";

const Contact = () => {
	const [open, setOpen] = useState(false);

	function toggleDropdown() {
		setOpen(!open);
	}

	function closeDropdown() {
		setOpen(!open);
	}

	useEffect(() => {
		document.title = "Contact Us | Eli Web Services";
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
			<Container fluid>
				<Container className="contactpage-container" data-scroll-section>
					<div className="contactpage_text">
						<h1 className="contactpage_title">
							We are excited to work with <span className="youTxt">you.</span>
						</h1>
					</div>
					<div className="contactpage-divider"></div>

					{/* Contact Form */}
					<ContactForm />
				</Container>
			</Container>
			<Footer />
		</motion.div>
	);
};

export default Contact;
