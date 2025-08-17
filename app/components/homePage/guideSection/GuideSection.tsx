import Image from "next/image";
import CustomButton from "../../reusable/buttons/CustomButton";
import RadialOrbitIcon from "../../reusable/icons/guideSection/RadialOrbitIcon";
import Orbit from "./Orbit";
import OrbitLogo from "../../reusable/icons/guideSection/OrbitLogo";

const GuideSection = () => {
	return (
		<section className="px-4 md:px-8 xl:px-[10.31rem] pt-[1.94rem] pb-11 -mt-px bg-black">
			<div className="flex flex-col justify-center items-center md:flex-row gap-6">
				<div className="relative left w-[20rem] h-[20rem] lg:w-[42.375rem] lg:h-[42.375rem]">
					<Orbit
						className="w-full h-full"
						center={
							<span className=" w-[4.0625rem] h-[3.3125rem]">
								<OrbitLogo />
							</span>
						}
						rings={[1, 0.78, 0.58, 0.4]}
						items={[
							// IMAGES — exactly 4.125rem (66px)
							{
								id: "img-1",
								orbit: 0.58,
								speed: 28,
								startAngle: 0,
								sizePx: 66, // <- 4.125rem
								zIndex: 10,
								render: (
									<Image
										src="/images/homePage/guide1.png"
										alt="orbit1"
										fill
										className="object-cover"
									/>
								),
							},
							{
								id: "img-2",
								orbit: 0.58,
								speed: 28,
								startAngle: 120,
								sizePx: 66, // <- 4.125rem
								zIndex: 10,
								render: (
									<Image
										src="/images/homePage/guide2.png"
										alt="orbit2"
										fill
										className="object-cover"
									/>
								),
							},
							{
								id: "img-3",
								orbit: 0.58,
								speed: 24,
								startAngle: 240,
								sizePx: 66, // <- 4.125rem
								zIndex: 10,
								render: (
									<Image
										src="/images/homePage/guide3.png"
										alt="orbit3"
										fill
										className="object-cover"
									/>
								),
							},

							// RADIAL ORBIT ICONS — keep your own sizes
							{
								id: "dot-a",
								orbit: 0.58,
								speed: 14,
								startAngle: 60,
								sizePx: 32,
								zIndex: 5, // under images
								render: (
									<span className="w-8 h-8">
										<RadialOrbitIcon />
									</span>
								),
							},
							{
								id: "dot-b",
								orbit: 0.58,
								speed: 18,
								startAngle: 120,
								sizePx: 32,
								zIndex: 5,
								render: (
									<span className="w-8 h-8">
										<RadialOrbitIcon />
									</span>
								),
							},
							{
								id: "dot-c",
								orbit: 0.58,
								speed: 18,
								startAngle: 360,
								sizePx: 32,
								zIndex: 5,
								render: (
									<span className="w-8 h-8">
										<RadialOrbitIcon />
									</span>
								),
							},
						]}
					/>
				</div>

				{/* RIGHT */}
				<div className="right flex flex-col items-start justify-center text-white">
					<h2 className="lg:w-[27.6875rem] pb-3">
						We&apos;re here to guide and help you at all times
					</h2>
					<p className="lg:w-[24.0625rem] pb-[1.56rem]">
						A good design is not only aesthetically pleasing, but also
						functional. It should be able to solve the problem
					</p>
					<CustomButton
						title="Download"
						url="https://github.com/mohamedahmede/landing-page-template/tree/main"
					/>
				</div>
			</div>
		</section>
	);
};

export default GuideSection;
