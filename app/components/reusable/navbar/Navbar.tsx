import Link from "next/link";
import CustomButton from "../buttons/CustomButton";
import Logo from "../icons/Logo";

const Navbar = () => {
	return (
		<nav className="flex justify-between items-center px-[10.31rem] py-[1.69rem]">
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
						<CustomButton
							title="Download Template"
							url="https://github.com/mohamedahmede/landing-page-template/tree/main"
						/>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
