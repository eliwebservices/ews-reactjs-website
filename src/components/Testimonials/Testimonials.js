import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import TestimonialData from "../../data/TestimonialData";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Testimonials.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
// import Aos from "aos";
// import "aos/dist/aos.css";

function Testimonials() {
	return (
		<Container fluid className="testmonial-section">
			<div class="carousel_heading" data-aos="fade">
				<h3>Client's words, not ours</h3>
			</div>
			<div class="testimonial_before"></div>
			<Container data-aos="fade">
				<Carousel
					indicators={false}
					nextIcon={<FontAwesomeIcon icon={faAngleRight} />}
					prevIcon={<FontAwesomeIcon icon={faAngleLeft} />}
					className="slider-inner-ci"
				>
					{TestimonialData.map((data, index) => {
						return (
							<Carousel.Item>
								<p>{data.testimonial}</p>
								<div className="carousel-avatar">
									<img className="d-" src={data.avatar} alt="" />
									<span>{data.position}</span>
								</div>
							</Carousel.Item>
						);
					})}
				</Carousel>
			</Container>
		</Container>
	);
}

export default Testimonials;
