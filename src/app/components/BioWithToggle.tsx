import { useState } from "react";

export function BioWithToggle({ bio }: { bio: string }) {
	const [expanded, setExpanded] = useState(false);
	const limit = 160;

	if (!bio) return <p className="text-gray-500">No bio available.</p>;

	const isLong = bio.length > limit;
	const preview = bio.slice(0, limit);

	return (
		<p className="mt-2 text-gray-700">
		{expanded || !isLong ? bio : `${preview}... `}
		{isLong && (
			<button
			onClick={() => setExpanded((prev) => !prev)}
			className="text-blue-600 hover:underline ml-1 text-sm"
			>
			{expanded ? "Show less" : "Read more"}
			</button>
		)}
		</p>
	);
}
