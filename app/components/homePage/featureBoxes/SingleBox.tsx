const SingleBox = ({
	icon,
	color,
	title,
	description,
}: {
	icon: React.ReactNode;
	color?: string;
	title: string;
	description: string;
}) => {
	return (
		<div className="bg-second text-center flex flex-col items-center pt-[3.13rem] pb-12 rounded-[1.25rem]">
			<div
				className={`${
					color ? color : "bg-third"
				} w-26 h-21 rounded-[1.875rem] flex items-center justify-center `}
			>
				{icon}
			</div>
			<h3 className="pt-[2.44rem] pb-[0.94rem] px-[4.88rem]">{title}</h3>
			<p className="w-[18.9375rem]">{description}</p>
		</div>
	);
};

export default SingleBox;
