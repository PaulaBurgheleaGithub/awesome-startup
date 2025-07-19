export const SkeletonSpeakerCard = () => (
	<div className="border p-4 rounded-md shadow-sm flex gap-4 animate-pulse">
		<div className="w-16 h-16 bg-gray-300 rounded-full" />
		<div className="flex-1 space-y-3 py-1">
		<div className="h-4 bg-gray-300 rounded w-3/4" />
		<div className="h-3 bg-gray-200 rounded w-1/2" />
		<div className="h-3 bg-gray-200 rounded w-full" />
		</div>
	</div>
);
