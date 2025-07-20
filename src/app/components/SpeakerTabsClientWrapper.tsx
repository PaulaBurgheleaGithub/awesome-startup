"use client";

import { useEffect, useState } from "react";
import { SpeakerTabs } from "./SpeakerTabs";
import { Employee } from "@/app/types";
import { SkeletonSpeakerCard } from "./Skeletons/SkeletonSpeakerCard";

type SpeakerTrack = "Day 1" | "Day 2" | "Day 3";

interface Props {
	speakersByTrack: Record<SpeakerTrack, Employee[]>;
}

export default function SpeakerTabsWrapper({ speakersByTrack }: Props) {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setIsLoading(false);
		}, 1000); // simulate 1 second delay

		return () => clearTimeout(timeout);
	}, []);

	if (isLoading || !speakersByTrack) {
		return (
			<div className="space-y-4">
				<SkeletonSpeakerCard />
				<SkeletonSpeakerCard />
				<SkeletonSpeakerCard />
				<SkeletonSpeakerCard />
				<SkeletonSpeakerCard />
				<SkeletonSpeakerCard />
			</div>
		);
	}

	return <SpeakerTabs speakersByTrack={speakersByTrack} />;
}
