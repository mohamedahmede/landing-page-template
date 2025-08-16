"use client";

interface CustomButtonProps {
  title: string;
  action?: () => void;
  url?: string;
}

const CustomButton = ({ title, action, url }: CustomButtonProps) => {
  const handleClick = () => {
    if (url) {
      window.open(url, '_blank');
    }
    if (action) {
      action();
    }
  };

  return (
    <button
      onClick={handleClick}
      className="py-3 px-7 font-semibold text-base bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
    >
      {title}
    </button>
  );
};

export default CustomButton;