import useMousePosition from '../hooks/useMousePosition';

const Flashlight = () => {
	const position = useMousePosition();

	return (
		<div
			className="fixed top-0 left-0 w-[50rem] h-[50rem] rounded-full pointer-events-none"
			style={{
				transform: `translate(${position.x! - 400}px, ${
					position.y! - 400
				}px)`,
				background: `radial-gradient(circle, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0) 70%)`,
			}}
		></div>
	);
};

export default Flashlight;
