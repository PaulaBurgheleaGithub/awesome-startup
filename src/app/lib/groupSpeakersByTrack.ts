import { Employee } from "@/app/types/events";

export type SpeakerTrack = "Track A" | "Track B" | "Track C";
export type SpeakersByTrack = Record<SpeakerTrack, Employee[]>;

/**
 * Example grouping logic — here we assign employees to tracks arbitrarily or by some rule.
 */
export function groupSpeakersByTrack(employees: Employee[]): SpeakersByTrack {
	const grouped: SpeakersByTrack = {
		"Track A": [],
		"Track B": [],
		"Track C": [],
	};

	employees.forEach((employee, index) => {
		// Rotate assignment by index as a placeholder
		const track = (["Track A", "Track B", "Track C"] as SpeakerTrack[])[index % 3];
		grouped[track].push(employee);
	});

	return grouped;
}
