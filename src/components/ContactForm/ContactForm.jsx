import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "./ContactForm.module.css";

const ContactForm = ({
	serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID,
	templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
	publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
	onSuccess,
	onError,
	submitLabel = "Send Message",
	className = "",
}) => {
	const [values, setValues] = useState({
		name: "",
		email: "",
		message: "",
		website: "",
	});
	const [errors, setErrors] = useState({});
	const [status, setStatus] = useState("idle");
	const formRef = useRef(null);

	const validate = () => {
		const errs = {};
		if (!values.name.trim()) errs.name = "Please enter your name";
		if (!values.email.trim()) errs.email = "Please enter your email";
		else if (!/^\S+@\S+\.\S+$/.test(values.email))
			errs.email = "Please enter a valid email";
		if (!values.message.trim()) errs.message = "Please enter a message";
		setErrors(errs);
		return Object.keys(errs).length === 0;
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setValues((v) => ({ ...v, [name]: value }));
		if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		// simple honeypot spam protection
		if (values.website) return;
		if (!validate()) return;
		setStatus("sending");
		try {
			await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
			setStatus("success");
			setValues({ name: "", email: "", message: "", website: "" });
			setErrors({});
			if (onSuccess) onSuccess();
		} catch (err) {
			console.error("EmailJS error:", err);
			setStatus("error");
			if (onError) onError(err);
		}
	};

	return (
		<div className={`${styles.formCard} bg-card/70 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 md:p-8 shadow-xl max-w-2xl mx-auto ${className}`}>
			<form ref={formRef} onSubmit={handleSubmit} className="space-y-4" noValidate>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<div>
					<label htmlFor="name" className="block text-sm font-medium text-gray-100 mb-1">
						Your Name
					</label>
					<input
						id="name"
						name="name"
						type="text"
						value={values.name}
						onChange={handleChange}
						aria-invalid={errors.name ? "true" : "false"}
						aria-describedby={errors.name ? "name-error" : undefined}
						className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-gray-100 placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
						placeholder="Enter your name"
					/>
					{errors.name && (
						<p id="name-error" className="text-sm text-red-400 mt-2">
							{errors.name}
							</p>
						)}
					</div>

					<div>
						<label htmlFor="email" className="block text-sm font-medium text-gray-100 mb-1">
							Email
						</label>
						<input
							id="email"
							name="email"
							type="email"
							value={values.email}
							onChange={handleChange}
							aria-invalid={errors.email ? "true" : "false"}
							aria-describedby={errors.email ? "email-error" : undefined}
							className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-gray-100 placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
							placeholder="you@example.com"
						/>
						{errors.email && (
							<p id="email-error" className="text-sm text-red-400 mt-2">
								{errors.email}
							</p>
						)}
					</div>
				</div>

				<div>
					<label htmlFor="message" className="block text-sm font-medium text-gray-100 mb-1">
						Message
					</label>
					<textarea
						id="message"
						name="message"
						value={values.message}
						onChange={handleChange}
						aria-invalid={errors.message ? "true" : "false"}
						aria-describedby={errors.message ? "message-error" : undefined}
						className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-gray-100 placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors h-32 resize-y"
						placeholder="Write your message..."
					/>
					{errors.message && (
						<p id="message-error" className="text-sm text-red-400 mt-2">
							{errors.message}
						</p>
					)}
				</div>

				<input
					type="text"
					name="website"
					value={values.website}
					onChange={handleChange}
					autoComplete="off"
					tabIndex="-1"
					className={styles.srOnly}
				/>

				<div className="flex items-center justify-between">
					<button
						type="submit"
						disabled={status === "sending"}
						className="btn-primary w-full md:w-auto text-center px-6 py-3 rounded-xl font-bold shadow-lg disabled:opacity-60"
					>
						{status === "sending" ? "Sending..." : submitLabel}
					</button>
				</div>

				{status === "success" && (
					<p className={`${styles.success} text-sm text-primary mt-2`}>Message sent — thank you!</p>
				)}
				{status === "error" && (
					<p className={`${styles.error} text-sm text-red-400 mt-2`}>Something went wrong. Please try again later.</p>
				)}
			</form>
		</div>
	);
};

export default ContactForm;

