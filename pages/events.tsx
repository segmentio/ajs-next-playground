import Head from "next/head";

export default function Events() {
	const goToDebugger = () => {
		window.open(process.env.NEXT_PUBLIC_SEGMENT_SOURCE_DEBUGGER_URL, "_blank");
	};
	return (
		<>
			<Head>
				<title>Events</title>
			</Head>
			<div>
				<h1>View Events</h1>
				<div>
					<i>View your Analytics.js events in Segment's debugger</i>
				</div>
				<button onClick={goToDebugger}>Go to Segment debugger</button>
			</div>
			<style jsx>{`
				button {
					padding: 20px;
					margin: 12px;
				}
			`}</style>
		</>
	);
}
