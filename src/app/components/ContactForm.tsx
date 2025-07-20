"use client";

import { useState } from "react";
import { toast } from 'react-toastify';

export function ContactForm() {
	const [form, setForm] = useState({ name: "", email: "", message: "" });
	const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

const handleSubmit = async (e: React.FormEvent) => {
	e.preventDefault();
	setStatus("loading");

	try {
		const res = await fetch("https://script.google.com/macros/s/AKfycbzYRG_TjITsiMj4L-J2ltyr-0EEsMbaSfLFEsFrIRiSb-0P_r44E3Eo34FqQTVd8kjMzg/exec", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(form),
		});

		if (res.ok) {
		setForm({ name: "", email: "", message: "" });
		toast.success("Message sent successfully 🎉");
		setStatus("success");
		} else {
		toast.error("Something went wrong. Please try again.");
		setStatus("error");
		}
	} catch (err) {
		toast.error("Network error. Try again later.");
		setStatus("error");
	}
	};
	

	return (
		<section className="bg-black text-white py-20 px-6 sm:px-12 md:px-24">
			<div className="max-w-3xl mx-auto text-center">
				<h2 className="heading-display text-4xl sm:text-5xl font-bold text-green-400 mb-4">
					<span className="text-6xl sm:text-7xl inline-block text-green-500 mr-2">C</span>
					ontact Us
				</h2>
				<p className="text-lg sm:text-xl text-gray-300 mb-10">
					Have questions or want to stay in the loop? Drop us a message below.
				</p>

				<form onSubmit={handleSubmit} className="space-y-6 text-left max-w-xl mx-auto">
					<div>
						<label className="block text-sm text-gray-400 mb-1">Name</label>
						<input
							type="text"
							name="name"
							value={form.name}
							onChange={handleChange}
							required
							className="w-full px-4 py-3 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
						/>
					</div>

					<div>
						<label className="block text-sm text-gray-400 mb-1">Email</label>
						<input
							type="email"
							name="email"
							value={form.email}
							onChange={handleChange}
							required
							className="w-full px-4 py-3 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
						/>
					</div>

					<div>
						<label className="block text-sm text-gray-400 mb-1">Message</label>
						<textarea
							name="message"
							rows={5}
							value={form.message}
							onChange={handleChange}
							required
							className="w-full px-4 py-3 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
						/>
					</div>
					<div className="flex justify-center">
						<button
							type="submit"
							disabled={status === "loading"}
							className="bg-white text-black font-medium text-base px-6 py-3 rounded-full hover:bg-gray-200 transition w-full sm:w-auto"
						>
							{status === "loading" ? "Sending..." : "Send Message"}
						</button>
					</div>
					{status === "success" && (
						<p className="text-green-400 mt-4">Thank you! We’ll be in touch soon.</p>
					)}
					{status === "error" && (
						<p className="text-red-500 mt-4">Something went wrong. Please try again later.</p>
					)}
				</form>
			</div>
		</section>
	);
}
