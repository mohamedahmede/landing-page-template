const RadialOrbitIcon = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="32"
			height="32"
			viewBox="0 0 32 32"
			fill="none"
		>
			<circle
				cx="16"
				cy="16"
				r="16"
				fill="url(#paint0_radial_0_493)"
				fillOpacity="0.3"
			/>
			<circle cx="16" cy="16" r="9.05882" fill="url(#paint1_radial_0_493)" />
			<defs>
				<radialGradient
					id="paint0_radial_0_493"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(10.1818 -2.1818) rotate(68.4287) scale(33.628 396.153)"
				>
					<stop stopColor="#FF9898" />
					<stop offset="1" stopColor="#8054FF" />
				</radialGradient>
				<radialGradient
					id="paint1_radial_0_493"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(12.7059 5.70588) rotate(68.4287) scale(19.0394 224.292)"
				>
					<stop stopColor="#FF9898" />
					<stop offset="1" stopColor="#8054FF" />
				</radialGradient>
			</defs>
		</svg>
	);
};

export default RadialOrbitIcon;
