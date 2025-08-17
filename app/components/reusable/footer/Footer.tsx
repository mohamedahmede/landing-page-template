// app/components/layout/Footer.tsx
import Link from "next/link";
import LogoWithoutText from "../icons/LogoWithoutText";
import FooterLink from "./FooterLink";
import Social from "./Social";

type LinkItem = { label: string; href: string };
const brand = "Inkycom"; // change me
const year = new Date().getFullYear();

const columnLinks: LinkItem[] = [
	{ label: "Home", href: "#" },
	{ label: "Section One", href: "#" },
	{ label: "Section Two", href: "#" },
	{ label: "Section Three", href: "#" },
];

const columns: LinkItem[][] = [columnLinks, columnLinks, columnLinks];

export default function Footer() {
	return (
		<footer className="bg-second  pt-16">
			{/* Top */}
			<div className="px-4 md:px-6 lg:px-[10.31rem]">
				<div className="md:flex justify-between items-start pb-[1.94rem]">
					{/* Brand + blurb */}
					<div className="space-y-4">
						<LogoWithoutText />
						<p className="md:w-[18.9375rem] pb-4 md:pb-0">
							A good design is not only aesthetically pleasing, but also
							functional. It should be able to solve the problem.
						</p>
					</div>

					{/* Sections */}
					<div className="">
						<h4 className="pb-7 text-sm font-semibold text-white/90">
							Sections
						</h4>
						<div className="flex gap-8 md:flex-row md:gap-26">
							{columns.map((links, i) => (
								<nav key={i} className="space-y-7">
									{links.map((item, index2) => (
										<FooterLink key={index2} href={item.href}>
											{item.label}
										</FooterLink>
									))}
								</nav>
							))}
						</div>
					</div>
				</div>
			</div>

			{/* Bottom bar */}
			<div className="bg-black ps-4 pe-4 md:ps-[9.06rem] md:pe-[10.31rem] py-8 flex flex-col md:flex-row justify-between items-center">
				<p className="text-xs pb-4 md:pb-0">
					All Rights Reserved {brand}.com {year}
				</p>

				<ul className="flex items-center gap-3">
					<Social href="#" label="Twitter">
						{/* Replace these with your preferred icons if you have a library */}
						<svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
							<path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.55-1.37 1.87-2.37-.82.49-1.73.85-2.7 1.05A4.14 4.14 0 0 0 12 8.15c0 .32.03.64.1.94-3.43-.17-6.47-1.81-8.51-4.3-.36.63-.57 1.36-.57 2.14 0 1.48.76 2.78 1.9 3.54-.7-.02-1.36-.22-1.93-.54v.05c0 2.07 1.53 3.79 3.56 4.18-.37.1-.77.15-1.18.15-.29 0-.57-.03-.84-.08.57 1.77 2.23 3.06 4.19 3.09A8.31 8.31 0 0 1 2 19.54a11.73 11.73 0 0 0 6.29 1.85c7.55 0 11.68-6.25 11.68-11.67l-.01-.53A8.1 8.1 0 0 0 22.46 6z" />
						</svg>
					</Social>
					<Social href="#" label="LinkedIn">
						<svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
							<path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5zM3 9h4v12H3zM9 9h3.8v1.8h.05c.53-.95 1.84-2 3.78-2 4.05 0 4.8 2.67 4.8 6.14V21h-4v-5.3c0-1.26-.03-2.88-1.76-2.88-1.77 0-2.04 1.38-2.04 2.79V21H9z" />
						</svg>
					</Social>
					<Social href="#" label="Discord">
						<svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
							<path d="M20.3 5.3A16.9 16.9 0 0 0 16 4l-.3.6a12.4 12.4 0 0 1 3 1.5c-1.3-.6-2.6-1-4-1.3a14.4 14.4 0 0 0-4 0c-1.4.2-2.7.6-4 1.3.9-.6 2-1.1 3-1.5L9 4a16.8 16.8 0 0 0-4.3 1.3C2.6 8 2 10.8 2 13.6c1.8 2.1 4.5 3.3 7.4 3.5l.9-1.1c-.5-.2-1-.5-1.5-.8.3.1.7.2 1 .3 1.3.4 2.7.4 4 0 .4-.1.7-.2 1-.3-.5.3-1 .6-1.5.8l.9 1.1c2.9-.2 5.6-1.4 7.4-3.5 0-2.8-.6-5.6-1.7-8.3zM9.7 14.2c-.8 0-1.4-.8-1.4-1.7 0-.9.6-1.7 1.4-1.7s1.4.8 1.4 1.7-.6 1.7-1.4 1.7zm4.6 0c-.8 0-1.4-.8-1.4-1.7 0-.9.6-1.7 1.4-1.7s1.4.8 1.4 1.7-.6 1.7-1.4 1.7z" />
						</svg>
					</Social>
				</ul>
			</div>
		</footer>
	);
}
