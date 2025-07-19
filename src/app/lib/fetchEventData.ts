import type { EventData } from "@/app/types";

export async function fetchEventData(): Promise<EventData | null> {
	try {
		const res = await fetch("https://v0-next-js-startup-api.vercel.app/api/startup-data", {
		next: { revalidate: 60 },
		});

		if (!res.ok) {
		console.error("API Error", res.status);
		return null;
		}

		return res.json();
	} catch (error) {
		console.error("Failed to fetch event data:", error);
		return null;
	}
}
