import { fetchEventData } from "../lib/fetchEventData";

export async function Header() {
	const data = await fetchEventData();
	const newsItem = data?.RecentNews?.[1];

	const headline = newsItem?.Title ?? "Exciting Event Coming Soon";
	const subheadline =
		newsItem?.Summary ?? "Stay tuned for updates from Awesome Startup.";

	return (
	<section className="bg-black text-white min-h-[50vh] flex items-center justify-center px-6 sm:px-12 md:px-20">
		<div className="text-center">
			<h1 className="heading-display text-4xl sm:text-6xl font-bold text-green-400">
			<span className="text-7xl sm:text-8xl inline-block leading-none mr-2 text-green-500">
				{headline.charAt(0)}
			</span>
			{headline.slice(1)}
			</h1>
			<p className="text-lg sm:text-xl text-gray-300 mt-4 max-w-2xl mx-auto">
			{subheadline}
			</p>
		</div>
	</section>
	);
}
