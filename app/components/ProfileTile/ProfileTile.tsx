import { useEffect, useState } from 'react';

const ProfileTile = () => {
	const firstName = ['S', 'a', 'n', 'd', 'r', 'o', ' '];
	const lastName = ['P', 'o', 'ž', 'a', 'r'];
	const [visibleFirstName, setVisibleFirstName] = useState(
		Array(firstName.length).fill(false)
	);
	const [visibleLastName, setVisibleLastName] = useState(
		Array(lastName.length).fill(false)
	);

	useEffect(() => {
		const interval = setInterval(() => {
			setVisibleFirstName((prev) => {
				const next = [...prev];
				const nextIndex = next.indexOf(false);
				if (nextIndex !== -1) {
					next[nextIndex] = true;
				} else {
					clearInterval(interval);
					animateLastName();
				}
				return next;
			});
		}, 200);

		return () => clearInterval(interval);
	}, []);

	const animateLastName = () => {
		const interval = setInterval(() => {
			setVisibleLastName((prev) => {
				const next = [...prev];
				const nextIndex = next.indexOf(false);
				if (nextIndex !== -1) {
					next[nextIndex] = true;
				} else {
					clearInterval(interval);
				}
				return next;
			});
		}, 200);
	};

	return (
		<div className="flex flex-col md:flex-row justify-center items-start">
			<div className="flex">
				{firstName.map((char, index) => (
					<h1
						key={index}
						className="text-8xl font-bold text-gray-100"
						style={{
							opacity: visibleFirstName[index] ? 0.8 : 0,
							transition: 'opacity 0.5s',
							userSelect: 'none',
						}}
					>
						{char === ' ' ? '\u00A0' : char}
					</h1>
				))}
			</div>
			<div className="flex">
				{lastName.map((char, index) => (
					<h1
						key={index}
						className="text-8xl font-bold text-gray-100 -mt-3 md:mt-0"
						style={{
							opacity: visibleLastName[index] ? 0.8 : 0,
							transition: 'opacity 0.5s',
							userSelect: 'none',
						}}
					>
						{char}
					</h1>
				))}
			</div>
		</div>
	);
};

export default ProfileTile;
