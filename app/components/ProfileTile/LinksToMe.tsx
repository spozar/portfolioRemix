import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faGithub,
	faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const LinksToMe = () => {
	return (
		<div className="flex space-x-4 mr-4 ml-1">
			<a
				href="https://github.com/spozar"
				target="_blank"
				rel="noopener noreferrer"
			>
				<FontAwesomeIcon
					icon={faGithub}
					size="2x"
					className="text-white opacity-80"
				/>
			</a>
			<a
				href="https://www.linkedin.com/in/sandro-pozar/"
				target="_blank"
				rel="noopener noreferrer"
			>
				<FontAwesomeIcon
					icon={faLinkedin}
					size="2x"
					className="text-white opacity-80"
				/>
			</a>
			<a href="mailto:youremail@example.com">
				<FontAwesomeIcon
					icon={faEnvelope}
					size="2x"
					className="text-white opacity-80"
				/>
			</a>
		</div>
	);
};

export default LinksToMe;
