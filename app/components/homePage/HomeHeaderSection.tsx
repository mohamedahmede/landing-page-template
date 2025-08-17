import Image from "next/image";
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
		<section className="pt-[10.56rem] text-center bg-black relative">
			<header className="flex flex-col items-center">
				<h1 className="text-h1 font-semibold tracking-tight px-8 lg:px-[21.62rem] pb-[1.13rem]">
					{title}
				</h1>
				<p className="text-body text-text-secondary pb-[1.56rem] px-8 lg:px-0 lg:w-[36.0625rem]">
					{description}
				</p>

				<CustomButton title={buttonTitle} url={buttonUrl} customClass="mb-16" />
			</header>

			<div
				aria-hidden
				className="
          pointer-events-none
          absolute left-1/2 -translate-x-1/2
          -bottom-[15rem] lg:-bottom-[38.5625rem]  /* 34.5625rem image height */
          z-20
          w-[20.125rem] h-[14.5625rem] lg:w-[54.125rem] lg:h-[34.5625rem]
        "
			>
				<div className="relative w-full h-full">
					<Image
						src="/images/header-image.png"
						alt="header-image"
						fill
						className="object-contain"
						priority
					/>
				</div>
			</div>
		</section>
	);
};

export default HomeHeaderSection;
