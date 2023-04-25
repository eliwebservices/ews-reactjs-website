import React, { useRef, useState } from "react";
import "./ContactForm.css";
import emailjs from "emailjs-com";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";

const ContactForm = () => {
	//This is handling emailjs functionality
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_7xgrkg2",
				"template_8ef7wfn",
				form.current,
				"gZMtlLtTLvJUhhQ5-"
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
		e.target.reset();
	};

	// This is handling the hidden file button
	const hiddenInputFile = useRef();
	const messageColorChange = useRef();

	const [selectedFileName, setSelectedFileName] = useState();
	const [fileSize, setFileSize] = useState();

	const handleFileUpload = (event) => {
		hiddenInputFile.current.click();
		// console.log(hiddenInputFile.current.style);
	};

	const handleFileChange = (event) => {
		const fileUpload = event.target.files[0];
		console.log(fileUpload);
		setSelectedFileName(fileUpload.name);

		if (fileUpload.size > 5000) {
			setFileSize("File size cannot be more than 50KB");
			messageColorChange.current.style.color = "red";
		} else {
			setFileSize(null);
			messageColorChange.current.style.color = "#000000";
		}
	};

	return (
		<div className="contact_form">
			<form ref={form} onSubmit={sendEmail} className="form">
				<div className="name_email">
					<input
						type="text"
						name="user_name"
						id=""
						className="form_name"
						placeholder="Full name"
					/>
					<input
						type="email"
						name="user_email"
						id=""
						className="form_email"
						placeholder="Email"
					/>
				</div>

				<input
					type="text"
					name="user_company"
					className="company_name"
					placeholder="Company"
				/>
				<textarea
					name="message"
					id=""
					cols="30"
					rows="7"
					placeholder="Type your message"
					className="form_message"
				></textarea>
				<div className="attach_file_btn">
					<input
						type="file"
						name="user_attachment"
						id=""
						ref={hiddenInputFile}
						onChange={handleFileChange}
            accept=".doc, .docx, .pdf, .png"
					/>
					<div className="file_custom_btn" onClick={handleFileUpload}>
						Attach File
						<FontAwesomeIcon icon={faPaperclip} />
					</div>
					<p className="message" ref={messageColorChange}>
						{fileSize || selectedFileName}
					</p>
				</div>
				<button type="submit" className="send_btn" value="Send">
					Send Message
				</button>
			</form>
		</div>
	);
};

export default ContactForm;
