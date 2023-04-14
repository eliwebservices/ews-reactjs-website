import React from "react";
import "./Footer.css";

const Footer = () => {
	return (
		<div>
			<section className="footer_section">
				<div className="divider_before"></div>
				<div className="footer_content row">
					<div className="footer_logo col-lg-4 col-md-6">
						<h5>Follow us</h5>
						<div className="social_handles">
							<a href="https://web.facebook.com/eliwebservices">
								<i className="fab fa-facebook"></i>
							</a>
							<a href="https://instagram.com/eliwebservices">
								<i className="fab fa-instagram"></i>
							</a>
							<a href="https://twitter.com/eliwebservices">
								<i className="fab fa-twitter"></i>
							</a>
							<a href="https://www.linkedin.com/company/eliwebservices">
								<i className="fab fa-linkedin-in"></i>
							</a>
						</div>

						{/* <!-- <img src="../img/footer_logo_.png" alt="" className="footer_logo_img" /> --> */}
					</div>

					<div className="contact_info col-lg-4 col-md-6">
						<div className="footer_contact_container">
							<h5>Contact us</h5>
							<p>info@eliwebdev.com</p>
							<p>P.O BOX MS 102 MILE7, ACCRA-GHANA</p>
							<p>+233(0)201599071</p>
						</div>
					</div>

					<div className="footer_form col-lg-4 col-md-6">
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
					</div>

					<div className="logo-slogan">
						<img src="../img/footer_logo_.png" alt="" />
						<p className="footer-slogan">...building Visions Together</p>
					</div>

					{/* <!-- <div className="contact_info">
            <p>+233(0)201599071 | info@eliwebdev.com</p>
        </div> --> */}
				</div>
			</section>
		</div>
	);
};

export default Footer;
