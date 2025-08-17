const BackgroundCircle = ({ className }: { className: string }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="136"
			height="136"
			viewBox="0 0 136 136"
			fill="none"
			className={className}
		>
			<g filter="url(#filter0_f_0_134)">
				<circle cx="68" cy="68" r="48" fill="url(#paint0_radial_0_134)" />
			</g>
			<defs>
				<filter
					id="filter0_f_0_134"
					x="0"
					y="0"
					width="136"
					height="136"
					filterUnits="userSpaceOnUse"
					colorInterpolationFilters="sRGB"
				>
					<feFlood floodOpacity="0" result="BackgroundImageFix" />
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="BackgroundImageFix"
						result="shape"
					/>
					<feGaussianBlur
						stdDeviation="10"
						result="effect1_foregroundBlur_0_134"
					/>
				</filter>
				<radialGradient
					id="paint0_radial_0_134"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(61.2 13.1999) rotate(87.7365) scale(101.279 1193.11)"
				>
					<stop stopColor="#494955" />
					<stop offset="1" stopColor="#141414" />
				</radialGradient>
			</defs>
		</svg>
	);
};

export default BackgroundCircle;
