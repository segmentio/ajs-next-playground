import { analytics } from "@/lib/segment";
import { User } from "@segment/analytics-next";
import { useEffect, useState } from "react";

export default function Form() {
	const [email, setEmail] = useState("");
	const [user, setUser] = useState<User | null>(null);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// generate unique ID for user
		const userId = `UNIQUE-DB-ID-for-${email}-${Math.random().toString(36).substring(7)}`;
		analytics.identify(userId, { email });
		analytics.track("User Sign Up", {
			email,
		});

		setEmail("");
		alert("User Identified!");
	};

	useEffect(() => {
		const getUser = async () => {
			const user = await analytics.user();
			setUser(user);
		};
		getUser();
	}, []);

	return (
		<>
			<form onSubmit={handleSubmit}>
				<label>
					<span>Email: &nbsp;</span>
					<input type="text" onChange={(e) => setEmail(e.target.value)} value={email} />
				</label>
				<button type="submit">Identify</button>
				<h4>Segment User ID: {user?.id() || user?.anonymousId()}</h4>
			</form>

			<style jsx>{`
				textarea {
					min-width: 300px;
					min-height: 120px;
				}

				button {
					margin-left: 12px;
				}
			`}</style>
		</>
	);
}
