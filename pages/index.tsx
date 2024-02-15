import Form from "@/components/form";
import Head from "next/head";

export default function Home() {
	return (
		<>
			<Head>
				<title>Identify Users</title>
			</Head>
			<div>
				<h1>Identify</h1>
				<i>Identify anonymous users</i>
				<br />
				<br />
				<Form />
			</div>
		</>
	);
}
