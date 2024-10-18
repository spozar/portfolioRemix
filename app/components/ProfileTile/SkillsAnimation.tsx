import { useState, useEffect } from 'react';

import { motion, AnimatePresence } from 'framer-motion';

const words = ['Web development', 'DevOps', 'Full-stack'];

const SkillsAnimation = () => {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex((prevIndex) => (prevIndex + 1) % words.length);
		}, 3000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="flex justify-center items-center -mt-3 ml-1">
			<AnimatePresence mode="wait">
				<motion.div
					key={words[index]}
					initial={{ opacity: 0 }}
					animate={{ opacity: 0.8 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.5 }}
					className="text-4xl animate-fadeInLeftToRight text-gray-100"
					style={{ userSelect: 'none' }}
				>
					{words[index]}
				</motion.div>
			</AnimatePresence>
		</div>
	);
};

export default SkillsAnimation;
