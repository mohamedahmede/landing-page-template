import CustomButton from "../../reusable/buttons/CustomButton";

const CompaniesBanner = () => {
	return (
		<div className="w-full px-[10.31rem]">
			<div
				className=" pt-[6.19rem] pb-18 ps-[6.06rem] w-full rounded-[2.5rem]"
				style={{
					background: "linear-gradient(136deg, #FF9898 14.73%, #8054FF 86.33%)",
				}}
			>
				<h3 className=" pb-3">Love Our Tool?</h3>
				<h2 className="w-[31.1875rem] pb-9">
					Fell Free to Join our 15 Days Free Trial
				</h2>
				<CustomButton
					black
					title="Download Template"
					url="https://github.com/mohamedahmede/landing-page-template/tree/main"
				/>
			</div>
		</div>
	);
};

export default CompaniesBanner;
