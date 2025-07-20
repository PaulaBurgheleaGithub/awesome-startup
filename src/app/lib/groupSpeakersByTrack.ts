import { Employee } from "@/app/types/events";

export type SpeakerTrack = "Day 1" | "Day 2" | "Day 3";
export type SpeakersByTrack = Record<SpeakerTrack, Employee[]>;

/**
 * Example grouping logic — here we assign employees to tracks arbitrarily or by some rule.
 */
export function groupSpeakersByTrack(employees: Employee[]): SpeakersByTrack {
	const grouped: SpeakersByTrack = {
		"Day 1": [],
		"Day 2": [],
		"Day 3": [],
	};

	employees.forEach((employee, index) => {
		// Rotate assignment by index as a placeholder
		const track = (["Day 1", "Day 2", "Day 3"] as SpeakerTrack[])[index % 3];
		grouped[track].push(employee);
	});

	return grouped;
}
