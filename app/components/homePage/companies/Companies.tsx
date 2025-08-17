import Image from "next/image";
import Alisa from "../../reusable/icons/companies/Alisa";
import Happy from "../../reusable/icons/companies/Happy";
import Natural from "../../reusable/icons/companies/Natural";
import Smile from "../../reusable/icons/companies/Smile";
import Urban from "../../reusable/icons/companies/Urban";
import Wave from "../../reusable/icons/companies/Wave";
import CompaniesBanner from "./CompaniesBanner";

const Companies = () => {
	const companiesDummyData = [
		{
			id: 1,
			icon: <Smile />,
			name: "Smile",
		},
		{
			id: 2,
			icon: <Urban />,
			name: "Urban",
		},
		{
			id: 3,
			icon: <Natural />,
			name: "Natural",
		},
		{
			id: 4,
			icon: <Wave />,
			name: "Wave",
		},
		{
			id: 5,
			icon: <Happy />,
			name: "Wave",
		},
		{
			id: 6,
			icon: <Alisa />,
			name: "Alisa",
		},
	];
	return (
		<section className="bg-second pt-28 pb-28 xl:pb-[20.19rem] flex flex-col items-center relative">
			<h2 className="lg:w-[35.44rem] pb-[4.38rem] text-center">
				Companies we Worked With in Since 2015
			</h2>
			<div className="companies_container px-4 md:px-8 xl:px-[10.31rem] flex flex-wrap xl:flex-nowrap justify-center gap-[1.87rem] ">
				{companiesDummyData.map((company) => (
					<div
						key={company.id}
						className="company_box flex items-center justify-center py-[1.7rem] px-[1.87rem] bg-black rounded-[0.625rem]"
					>
						{company.icon}
					</div>
				))}
			</div>
			<div className="companies_banner mt-8 xl:mt-0 xl:absolute top-[31rem] left-0 w-full z-1">
				<CompaniesBanner />
				
			</div>
		</section>
	);
};

export default Companies;
