import CustomButton from "../reusable/buttons/CustomButton";

const HomeHeaderSection = ({
	title,
	description,
	buttonTitle,
	buttonUrl,
}: {
	title: string;
	description: string;
	buttonTitle: string;
	buttonUrl: string;
}) => {
	return (
		<section className="pt-[10.56rem]  text-center">
			<header className="flex flex-col items-center">
				<h1 className="text-h1 font-semibold tracking-tight px-[21.62rem] pb-[1.13rem]">
					{title}
				</h1>
				<p className="text-body text-text-secondary pb-[1.56rem] w-[36.0625rem]">
					{description}
				</p>

				<CustomButton
					title={buttonTitle}
					url={buttonUrl}
					customClass="mb-[24.63rem]"
				/>
			</header>
		</section>
	);
};

export default HomeHeaderSection;
