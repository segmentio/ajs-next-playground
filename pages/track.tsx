import { analytics } from "@/lib/segment";
import Head from "next/head";

export default function Track() {
	const trackEvent = (event: string) => {
		analytics.track(event);
		alert(`Tracked event: ${event}`);
	};
	return (
		<>
			<Head>
				<title>Track Events</title>
			</Head>
			<div>
				<button onClick={() => trackEvent("Track Here")}>Track Here</button>
				<button onClick={() => trackEvent("Track There")}>Track There</button>
				<button onClick={() => trackEvent("Track Everywhere!")}>Track Everywhere!</button>
			</div>
			<style jsx>{`
				div {
					display: flex;
					flex-direction: row;
					justify-content: space-between;
				}

				button {
					padding: 20px;
					margin: 12px;
				}
			`}</style>
		</>
	);
}
