import { fetchEventData } from "../lib/fetchEventData";
import SpeakerTabsClientWrapper from "./SpeakerTabsClientWrapper";

export default async function SpeakerTabsWrapper() {
	const data = await fetchEventData();

	if (!data) {
		return <p className="text-red-500">⚠️ Failed to load speakers.</p>;
	}

	const tracks = {
		"Track A": [] as typeof data.Employees,
		"Track B": [] as typeof data.Employees,
		"Track C": [] as typeof data.Employees,
	};

	data.Employees.forEach((emp, i) => {
		const track = i % 3 === 0 ? "Track A" : i % 3 === 1 ? "Track B" : "Track C";
		tracks[track].push(emp);
	});

	return <SpeakerTabsClientWrapper speakersByTrack={tracks} />;
}
