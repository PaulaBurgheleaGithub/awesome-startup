"use client";

import { useState } from "react";
import { type Employee } from "@/app/types";

type SpeakerTrack = "Track A" | "Track B" | "Track C";

interface Props {
	speakersByTrack: Record<SpeakerTrack, Employee[]>;
}

export function SpeakerTabs({ speakersByTrack }: Props) {
	const [activeTab, setActiveTab] = useState<SpeakerTrack>("Track A");

	const tabs = Object.keys(speakersByTrack) as SpeakerTrack[];

	return (
		<section className="w-full max-w-4xl">
		<h2 className="text-3xl font-bold mb-2">Speaker lineup</h2>
		<div className="flex gap-4 mb-6">
			{tabs.map((track) => (
				<button
				key={track}
				onClick={() => setActiveTab(track)}
				className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
					activeTab === track ? "bg-black text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
				}`}
				>
				{track}
				</button>
			))}
		</div>

			<div className="space-y-4 transition-opacity duration-300 ease-in-out">
			{speakersByTrack[activeTab]?.length > 0 ? (
				speakersByTrack[activeTab].map((speaker) => (
				<div key={speaker.EmployeeID} className="border p-4 rounded-md shadow-sm flex gap-4 items-start">
					{/* Avatar */}
					<div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 text-xl">
						{speaker.FirstName?.[0]}
					</div>

					{/* Speaker Info */}
					<div>
						<h3 className="text-lg font-semibold">
							{speaker.FirstName} {speaker.LastName}
						</h3>
						<p className="text-sm text-gray-500">{speaker.Title ?? "Guest Speaker"}</p>
						<p className="mt-2 text-gray-700">{speaker.Bio ?? "No bio available."}</p>
					</div>
				</div>
				))
			) : (
				<p className="text-gray-500 italic">No speakers in this track yet.</p>
			)}
			</div>
		</section>
	);
}
