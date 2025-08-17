import Companies from "./components/homePage/companies/Companies";
import FeatureBoxes from "./components/homePage/featureBoxes/FeatureBoxes";
import GetInTouch from "./components/homePage/getInTouch/GetInTouch";
import GuideSection from "./components/homePage/guideSection/GuideSection";
import HomeHeaderSection from "./components/homePage/HomeHeaderSection";

export default function Home() {
	return (
		<main className="overflow-hidden bg-main">
			<HomeHeaderSection
				title="Beautiful Landing Page Design for You"
				description="A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem"
				buttonTitle="Download Template"
				buttonUrl="https://github.com/mohamedahmede/landing-page-template/tree/main"
			/>
			<div className="relative h-[24rem] w-full overflow-hidden -mt-px  lg:block">
				<div className="h-[24rem] bg-black absolute top-0 left-[-5%] rounded-b-[35%] lg:rounded-b-[50%] w-[110%]"></div>
			</div>
			<div className="h-[5rem] lg:h-[18rem]"></div>
			<div className="absolute h-[24rem] w-full overflow-hidden  lg:block">
				<div className="h-[24rem] bg-black absolute top-0 left-[-5%] rounded-t-[35%] lg:rounded-t-[50%] w-[110%]"></div>
			</div>
			<FeatureBoxes />
			<GuideSection />
			<Companies />
			<GetInTouch />
		</main>
	);
}
