"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { type Employee } from "@/app/types";
import { BioWithToggle } from "./BioWithToggle";

type SpeakerTrack = "Day 1" | "Day 2" | "Day 3";

interface Props {
  speakersByTrack: Record<SpeakerTrack, Employee[]>;
}

export function SpeakerTabs({ speakersByTrack }: Props) {
	const [activeTab, setActiveTab] = useState<SpeakerTrack>("Day 1");
	const tabs = Object.keys(speakersByTrack) as SpeakerTrack[];

	return (
		<section className="w-full bg-black text-white py-24 px-6 sm:px-12 md:px-20">
		<div className="max-w-6xl mx-auto">
			{/* Stylized Heading */}
			<h2 className="heading-display text-4xl sm:text-6xl font-bold text-green-400 text-center mb-10">
			<span className="text-7xl sm:text-8xl inline-block leading-none mr-2 text-green-500">
				S
			</span>
			peaker Lineup
			</h2>

			{/* Tabs */}
			<div className="flex justify-center gap-4 mb-12 flex-wrap">
			{tabs.map((track) => (
				<button
				key={track}
				onClick={() => setActiveTab(track)}
				className={`px-4 py-2 rounded-full border transition-all duration-200 text-sm sm:text-base font-medium ${
					activeTab === track
					? "bg-white text-black"
					: "bg-gray-800 text-white hover:bg-gray-700"
				}`}
				>
				{track}
				</button>
			))}
			</div>

			{/* Grid of Animated Cards */}
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
			{speakersByTrack[activeTab]?.length > 0 ? (
				speakersByTrack[activeTab].map((speaker, index) => (
				<motion.div
					key={speaker.EmployeeID}
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: index * 0.1 }}
					whileHover={{ scale: 1.05 }}
					className="bg-[#111] border border-gray-800 rounded-xl p-5 shadow-md flex flex-col items-center text-center transition-transform duration-200 hover:shadow-green-500/30 hover:shadow-lg"
				>
					{/* Avatar */}
					<Image
					src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
						`${speaker.FirstName} ${speaker.LastName}`
					)}&background=random`}
					alt={`${speaker.FirstName} ${speaker.LastName}`}
					width={96}
					height={96}
					className="rounded-full object-cover mb-4"
					/>

					{/* Info */}
					<h3 className="text-lg font-semibold text-white">
					{speaker.FirstName} {speaker.LastName}
					</h3>
					<p className="text-sm text-gray-400 mb-2">
					{speaker.Title ?? "Guest Speaker"}
					</p>
					<BioWithToggle bio={speaker.Biography} />
				</motion.div>
				))
			) : (
				<p className="text-gray-400 italic col-span-full text-center">
				No speakers in this track yet.
				</p>
			)}
			</div>
		</div>
		</section>
	);
}
