import Link from "next/link";

interface SocialProps {
	href: string;
	label: string;
	children: React.ReactNode;
}

export default function Social({ href, label, children }: SocialProps) {
	return (
		<li>
			<Link
				href={href}
				aria-label={label}
				className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/80 transition hover:bg-white/15 hover:text-white"
			>
				{children}
			</Link>
		</li>
	);
}
