import Link from "next/link";

interface FooterLinkProps {
	href: string;
	children: React.ReactNode;
}

export default function FooterLink({ href, children }: FooterLinkProps) {
	return (
		<Link
			href={href}
			className="block text-sm text-white/70 transition hover:text-white"
		>
			{children}
		</Link>
	);
}
