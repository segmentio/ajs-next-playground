import { analytics } from "@/lib/segment";
import { useState } from "react";

export default function Form() {
	const [email, setEmail] = useState("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// generate unique ID for user
		const userId = `DB-USER-ID-${Math.random().toString(36).substring(7)}`;
		analytics.identify(userId, { email });
		analytics.track("User Sign Up", {
			email,
		});

		setEmail("");
		alert("User Identified!");
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<label>
					<span>Email:</span>
					<input type="text" onChange={(e) => setEmail(e.target.value)} value={email} />
				</label>
				<button type="submit">submit</button>
			</form>

			<style jsx>{`
				label span {
					display: block;
					margin-bottom: 12px;
				}

				textarea {
					min-width: 300px;
					min-height: 120px;
				}

				button {
					margin-top: 12px;
					display: block;
				}
			`}</style>
		</>
	);
}
