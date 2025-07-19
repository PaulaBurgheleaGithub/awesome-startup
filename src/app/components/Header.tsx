import { fetchEventData } from "../lib/fetchEventData";

export async function Header() {
	const data = await fetchEventData();
	const newsItem = data?.RecentNews?.[1];

	if (!newsItem) {
		return (
			<header className="text-center sm:text-left max-w-2xl">
				<h1 className="text-4xl font-bold">Exciting Event Coming Soon</h1>
				<p className="text-lg text-gray-600 mt-2">
					Stay tuned for updates from Awesome Startup.
				</p>
			</header>
		);
	}

	const { Title: headline, Summary: subheadline } = newsItem;

	return (
		<header className="text-center sm:text-left max-w-2xl">
			<h1 className="text-4xl font-bold">{headline}</h1>
			<p className="text-lg text-gray-600 mt-2">{subheadline}</p>
		</header>
	);
}
