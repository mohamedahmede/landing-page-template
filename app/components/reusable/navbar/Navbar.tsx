import Link from "next/link";
import CustomButton from "../buttons/CustomButton";
import Logo from "../icons/Logo";

const Navbar = () => {
	return (
		<nav className="fixed w-full flex justify-between items-center px-4 py-3 md:px-6 md:py-4 lg:px-8 xl:px-[10.31rem] lg:py-[1.69rem] bg-black z-[21]">
			<div className="left">
				<Link href="/">
					<Logo />
				</Link>
			</div>
			<div className="right">
				<ul className="flex items-center gap-[2.13rem]">
					<li>
						<Link href="/">Home</Link>
					</li>
					<li>
						{/* Mobile: Download Icon Only */}
						<Link 
							href="https://github.com/mohamedahmede/landing-page-template/tree/main"
							className="lg:hidden flex items-center justify-center w-10 h-10 bg-main rounded-lg hover:opacity-90 transition-opacity"
							aria-label="Download Template"
						>
							<svg 
								className="w-5 h-5 text-white" 
								fill="none" 
								stroke="currentColor" 
								viewBox="0 0 24 24"
							>
								<path 
									strokeLinecap="round" 
									strokeLinejoin="round" 
									strokeWidth={2} 
									d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
								/>
							</svg>
						</Link>
						
						{/* Desktop: Full Button */}
						<div className="hidden lg:block">
							<CustomButton
								title="Download Template"
								url="https://github.com/mohamedahmede/landing-page-template/tree/main"
							/>
						</div>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
