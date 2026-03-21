import type React from "react";
import { useRef, useState } from "react";

interface Position {
	x: number;
	y: number;
}

interface SpotlightCardProps extends React.PropsWithChildren {
	className?: string;
	spotlightColor?: `rgba(${number}, ${number}, ${number}, ${number})`;
}

const SpotlightCard: React.FC<SpotlightCardProps> = ({
	children,
	className = "",
	spotlightColor = "rgba(255, 255, 255, 0.25)",
}) => {
	const divRef = useRef<HTMLDivElement>(null);
	const [isFocused, setIsFocused] = useState<boolean>(false);
	const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
	const [opacity, setOpacity] = useState<number>(0);

	const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
		if (!divRef.current || isFocused) return;

		const rect = divRef.current.getBoundingClientRect();
		setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
	};

	const handleFocus = () => {
		setIsFocused(true);
		setOpacity(0.6);
	};

	const handleBlur = () => {
		setIsFocused(false);
		setOpacity(0);
	};

	const handleMouseEnter = () => {
		setOpacity(0.6);
	};

	const handleMouseLeave = () => {
		setOpacity(0);
	};

	return (
		// biome-ignore lint/a11y/noStaticElementInteractions: spotlight visual effect
		<div
			ref={divRef}
			onMouseMove={handleMouseMove}
			onFocus={handleFocus}
			onBlur={handleBlur}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			className={`relative overflow-hidden p-8 ${className}`}
			style={{
				height: "80svh",
				maxHeight: "540px",
				aspectRatio: "0.718",
				borderRadius: "30px",
				backgroundColor: "rgba(0, 0, 0, 0.9)",
				backgroundImage: "linear-gradient(145deg, rgba(31,41,55,0.6) 0%, rgba(75,85,99,0.3) 100%)",
				boxShadow: "rgba(0, 0, 0, 0.8) 0px 4px 20px -5px",
			}}
		>
			<div
				className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out"
				style={{
					opacity,
					background: `radial-gradient(circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 80%)`,
				}}
			/>
			{children}
		</div>
	);
};

export default SpotlightCard;
