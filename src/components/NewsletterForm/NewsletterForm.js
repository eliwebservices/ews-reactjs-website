import React, { useState } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import "./NewsletterForm.css";

const NewsletterForm = () => {
	const url =
		"https://eliwebservices.us21.list-manage.com/subscribe/post?u=f84148b25b8acf8d490a47ace&amp;id=3fba0eafd0&amp;f_id=000cb2e1f0";

	const [nlerror, setNlerror] = useState(null);
	const [email, setEmail] = useState(null);

	const handleFormSubmit = () => {
		setNlerror(null);

		if (!email) {
			setNlerror("Please enter a valid email address");
		}
		return null;
	};

	const handleInputKeyEvent = (event) => {
		setNlerror(null);
		if (event.keyCode === 13) {
			event.preventDefault();
			handleFormSubmit();
		}
	};

	return (
		<MailchimpSubscribe
			url={url}
			render={(props) => {
				const { subscribe, status, message } = props || {};
				return (
					<form action="/" method="post">
						<input
							onChange={(event) => setEmail(event?.target?.value ?? "")}
							onKeyUp={(event) => handleInputKeyEvent(event)}
							type="email"
							className="form-control"
							placeholder="E-mail"
							required
							pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
						/>
						<button
							onClick={handleFormSubmit}
							type="submit"
							className="btn"
							id="subscribe_btn"
							name="subscribe_btn"
						>
							Subscribe
						</button>
					</form>
				);
			}}
		/>
	);
};

export default NewsletterForm;
