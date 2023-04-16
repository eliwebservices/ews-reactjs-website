import React from "react";
import "./Footer.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebook,
	faInstagram,
	faTwitter,
	faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { Phone, MailOutlined } from "@mui/icons-material";

const Footer = () => {
	return (
		<div>
			<Container fluid className="footer_section">
				<Container className="footer_bt_cn">
					<Row className="footer_content">
						<Col lg={4} md={6} className="footer_socials">
							<h5>Follow us</h5>
							<div className="social_handles">
								<a href="https://web.facebook.com/eliwebservices">
									<FontAwesomeIcon icon={faFacebook} />
								</a>
								<a href="https://instagram.com/eliwebservices">
									<FontAwesomeIcon icon={faInstagram} />
								</a>
								<a href="https://twitter.com/eliwebservices">
									<FontAwesomeIcon icon={faTwitter} />
								</a>
								<a href="https://www.linkedin.com/company/eliwebservices">
									<FontAwesomeIcon icon={faLinkedinIn} />
								</a>
							</div>

							{/* <!-- <img src="../img/footer_logo_.png" alt="" className="footer_logo_img" /> --> */}
						</Col>

						<Col lg={4} md={6} className="contact_info">
							<div className="footer_contact_container">
								<h5>Contact us</h5>
								<p><MailOutlined/> : info@eliwebservices.com</p>
								{/* <p>P.O BOX MS 102 MILE7, ACCRA-GHANA</p> */}
								<p><Phone/> : +233(0)201599071</p>
							</div>
						</Col>

						<Col lg={4} md={6} className="footer_form">
							<h5>Subscribe to our newsletter</h5>
							<form action="/" method="post">
								<input
									type="email"
									name="email"
									id=""
									className="form-control"
									placeholder="E-mail"
									required
									pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
								/>
								<button
									type="submit"
									className="btn"
									id="subscribe_btn"
									name="subscribe_btn"
								>
									Subscribe
								</button>
							</form>
						</Col>

						<Col lg={12} md={12} sm={12} className="logo-slogan">
							{/* <img src="../img/footer_logo_.png" alt="" /> */}
							<p className="footer-slogan">...building Visions Together</p>
						</Col>

						{/* <!-- <div className="contact_info">
            <p>+233(0)201599071 | info@eliwebdev.com</p>
        </div> --> */}
					</Row>
				</Container>
			</Container>
		</div>
	);
};

export default Footer;
