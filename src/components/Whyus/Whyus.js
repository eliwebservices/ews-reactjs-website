import React from "react";
import "./Whyus.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Wuvideo from "../../images/team-video.mp4";

const Whyus = () => {
	return (
		<Container fluid className="whyus_section">
			<Container className="whyus_div">
				<h3 className="heading_text">Why Us?</h3>

				<div className="whyus_before"></div>

				<Row className="whyus_tabs">
					<Col lg={8} className="tab1 tab">
						<video
							no-controls
							src={Wuvideo}
							autoPlay={true}
							loop={true}
							muted
						></video>
					</Col>
					<Col lg={4} className="tab2 tab">
						<h3>We Bring Your Ideas To Life</h3>
					</Col>
				</Row>
				<Row>
					<Col lg={4} className="tab3 tab wow fadeInUp">
						<h3>Because We Believe In Your Vision</h3>
					</Col>
					<Col lg={4} className="tab4 tab wow fadeInUp"></Col>
					<Col lg={4} className="tab5 tab wow fadeInUp"></Col>
				</Row>
			</Container>
		</Container>
	);
};

export default Whyus;
