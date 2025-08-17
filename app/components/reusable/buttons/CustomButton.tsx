"use client";

interface CustomButtonProps {
	title: string;
	action?: () => void;
	url?: string;
	disabled?: boolean;
	customClass?: string;
	black?: boolean;
	type?: "button" | "submit" | "reset";
}

const CustomButton = ({
	title,
	action,
	url,
	disabled,
	customClass,
	black,
	type,
}: CustomButtonProps) => {
	const handleClick = () => {
		if (url) {
			window.open(url, "_blank");
		}
		if (action) {
			action();
		}
	};

	return (
		<button
			onClick={handleClick}
			className={`py-3 px-7 font-semibold text-[0.875rem]  ${
				black ? "bg-black text-white " : "bg-main text-white"
			} rounded-[0.3125rem] transition-all duration-200 hover:opacity-90 ${
				disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
			} ${customClass}`}
			disabled={disabled}
			type={type}
		>
			{title}
		</button>
	);
};

export default CustomButton;
