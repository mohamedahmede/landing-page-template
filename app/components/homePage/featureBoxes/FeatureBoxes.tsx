import CircleBox from "../../reusable/icons/featureBoxes/CircleBox";
import CrossedPencils from "../../reusable/icons/featureBoxes/CrossedPencils";
import Cube from "../../reusable/icons/featureBoxes/Cube";
import Layers from "../../reusable/icons/featureBoxes/Layers";
import Monitor from "../../reusable/icons/featureBoxes/Monitor";
import T from "../../reusable/icons/featureBoxes/T";
import SingleBox from "./SingleBox";

const featureBoxesDummyData = [
	{
		title: "Fully Customizable",
		description:
			"A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem",
		icon: <Cube />,
	},
	{
		title: "Fully Customizable",
		description:
			"A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem",
		icon: <Layers />,
	},
	{
		title: "Fully Customizable",
		description:
			"A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem",
		icon: <CircleBox />,
	},
	{
		title: "Fully Customizable",
		description:
			"A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem",
		icon: <T />,
	},
	{
		title: "Fully Customizable",
		description:
			"A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem",
		icon: <CrossedPencils />,
	},
	{
		title: "Fully Customizable",
		description:
			"A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem",
		icon: <Monitor />,
	},
];

const FeatureBoxes = () => {
	return (
		
		<section className=" px-[10.31rem] bg-black relative z-10 mt-31">
			<h2>Feature Boxes</h2>
			<p className="w-[36.0625rem] pb-[2.06rem]">
				A good design is not only aesthetically pleasing, but also functional.
				It should be able to solve the problem
			</p>
			<div className="boxes_container grid grid-cols-3 gap-[1.88rem]">
				{featureBoxesDummyData.map((box, index) => (
					<SingleBox
						key={index}
						title={box.title}
						description={box.description}
						icon={box.icon}
						color={index === 2 ? "bg-main" : ""}
					/>
				))}
			</div>
		</section>
	);
};

export default FeatureBoxes;
