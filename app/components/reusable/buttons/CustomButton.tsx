"use client";

interface CustomButtonProps {
	title: string;
	action?: () => void;
	url?: string;
	disabled?: boolean;
	customClass?: string;
}

const CustomButton = ({ title, action, url, disabled, customClass }: CustomButtonProps) => {
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
			className={`py-3 px-7 font-semibold text-base bg-main text-white rounded-lg transition-all duration-200 hover:opacity-90 ${
				disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
			} ${customClass}`}
			disabled={disabled}
		>
			{title}
		</button>
	);
};

export default CustomButton;
