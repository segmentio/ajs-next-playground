import Link from "next/link";

export default function Header() {
	return (
		<header>
			<nav>
				<ul>
					<li>
						<Link href="/">Home</Link>
					</li>
					<li>
						<Link href="/track">Track</Link>
					</li>
					<li>
						<Link href="/events">Events</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
