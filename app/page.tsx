import FeatureBoxes from "./components/homePage/featureBoxes/FeatureBoxes";
import GuideSection from "./components/homePage/guideSection/GuideSection";
import HomeHeaderSection from "./components/homePage/HomeHeaderSection";
import CustomButton from "./components/reusable/buttons/CustomButton";

export default function Home() {
	return (
		<main className="overflow-hidden">
			<HomeHeaderSection
				title="Beautiful Landing Page Design for You"
				description="A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem"
				buttonTitle="Download Template"
				buttonUrl="https://github.com/mohamedahmede/landing-page-template/tree/main"
			/>
			<FeatureBoxes />
			<GuideSection />
			{/* <svg
						xmlns="http://www.w3.org/2000/svg"
						width="1440"
						height="475"
						viewBox="0 0 1440 475"
						fill="none"
					>
						<path
							d="M1443 474.397H1435.9C1279.94 406.237 1017.23 361.482 719.424 361.482C421.62 361.482 158.908 406.237 2.94922 474.397H-3V0.515625C152.173 70.1548 417.799 116.066 719.424 116.066C1021.8 116.066 1287.99 69.9285 1443 -0.000976562V474.397Z"
							fill="url(#paint0_linear_0_19)"
						/>
						<defs>
							<linearGradient
								id="paint0_linear_0_19"
								x1="-3"
								y1="53.9079"
								x2="1472.83"
								y2="250.809"
								gradientUnits="userSpaceOnUse"
							>
								<stop stop-color="#FF9898" />
								<stop offset="1" stop-color="#8054FF" />
							</linearGradient>
						</defs>
					</svg> */}
		</main>
	);
}
