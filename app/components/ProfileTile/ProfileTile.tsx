import { useEffect, useState } from 'react';

const ProfileTile = () => {
	const firstName = ['S', 'a', 'n', 'd', 'r', 'o', ' '];
	const lastName = ['P', 'o', 'ž', 'a', 'r'];
	const [visibleChars, setVisibleChars] = useState(
		firstName.concat(lastName).map(() => false) // Create an array of false values
	);
	const [firstNameComplete, setFirstNameComplete] = useState(false);

	useEffect(() => {
		const interval = setInterval(() => {
			setVisibleChars((prev) => {
				const next = [...prev];
				const nextIndex = next.indexOf(false);

				if (nextIndex !== -1) {
					next[nextIndex] = true;
					if (nextIndex === firstName.length - 1) {
						setFirstNameComplete(true);
					}
				}

				return next;
			});
		}, 200);

		return () => clearInterval(interval);
	}, [firstName.length]);

	return (
		<div className="flex flex-col md:flex-row justify-center items-start">
			<div className="flex">
				{firstName.map((char, index) => (
					<h1
						key={index}
						className="text-8xl font-bold text-gray-100"
						style={{
							opacity: visibleChars[index] ? 0.8 : 0,
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
						key={index + firstName.length} // adjust key based on combined array
						className="text-8xl font-bold text-gray-100 -mt-3 md:mt-0"
						style={{
							opacity:
								firstNameComplete &&
								visibleChars[index + firstName.length]
									? 0.8
									: 0,
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
