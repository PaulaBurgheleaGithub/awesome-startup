import { CallToAction } from "./components/CallToAction";
import { ContactForm } from "./components/ContactForm";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import SpeakerTabsWrapper from "./components/SpeakerTabsClientWrapper";
import { fetchEventData } from "./lib/fetchEventData";
import { groupSpeakersByTrack } from "./lib/groupSpeakersByTrack";

  export default async function AwesomeEvent() {
  const eventData = await fetchEventData();
  if (!eventData) {
    return (
      <div className="text-center p-10">
        <h1 className="text-2xl font-semibold">Event data could not be loaded.</h1>
      </div>
    );
  }

  const speakersByTrack = groupSpeakersByTrack(eventData.Employees);
	const newsItem = eventData?.RecentNews?.[1];

	const headline = newsItem?.Title ?? "Exciting Event Coming Soon";
	const subheadline =
		newsItem?.Summary ?? "Stay tuned for updates from Awesome Startup.";

    return (
      <div className="font-sans text-white bg-black grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <div>
              <Header headline={headline} subheadline={subheadline}/>
              <SpeakerTabsWrapper speakersByTrack={speakersByTrack}/>
              <CallToAction />
              <ContactForm />
          </div>
        </main>
        <Footer />
      </div>
    );
  }
