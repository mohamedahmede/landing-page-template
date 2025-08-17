import Companies from "./components/homePage/companies/Companies";
import FeatureBoxes from "./components/homePage/featureBoxes/FeatureBoxes";
import GetInTouch from "./components/homePage/getInTouch/GetInTouch";
import GuideSection from "./components/homePage/guideSection/GuideSection";
import HomeHeaderSection from "./components/homePage/HomeHeaderSection";

export default function Home() {
	return (
		<main className="overflow-hidden">
			<HomeHeaderSection
				title="Beautiful Landing Page Design for You"
				description="A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem"
				buttonTitle="Download Template"
				buttonUrl="https://github.com/mohamedahmede/landing-page-template/tree/main"
			/>
			{/* <ColorBreakEffect /> */}
			<FeatureBoxes />
			<GuideSection />
			<Companies />
			<GetInTouch />
			
		</main>
	);
}
