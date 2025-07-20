import { fetchEventData } from "../lib/fetchEventData";
import SpeakerTabsClientWrapper from "./SpeakerTabsClientWrapper";




export default async function SpeakerTabsWrapper() {
	const data = await fetchEventData();

	if (!data) {
		return <p className="text-red-500">⚠️ Failed to load speakers.</p>;
	}

	const tracks = {
		"Day 1": [] as typeof data.Employees,
		"Day 2": [] as typeof data.Employees,
		"Day 3": [] as typeof data.Employees,
	};

	data.Employees.forEach((emp, i) => {
		const track = i % 3 === 0 ? "Day 1" : i % 3 === 1 ? "Day 2" : "Day 3";
		tracks[track].push(emp);
	});

	return <SpeakerTabsClientWrapper speakersByTrack={tracks} />;
}
