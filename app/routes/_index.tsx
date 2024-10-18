import type { MetaFunction } from '@remix-run/node';
import Flashlight from '~/components/Flashlight';
import LinksToMe from '~/components/ProfileTile/LinksToMe';
import ProfileTile from '~/components/ProfileTile/ProfileTile';
import SkillsAnimation from '~/components/ProfileTile/SkillsAnimation';

export const meta: MetaFunction = () => {
	return [
		{ title: 'Sandro Pozar' },
		{ name: 'description', content: 'Sandro Pozar Portfolio' },
	];
};

export const loader = async () => {
	return null;
};

const PageLayout = () => {
	return (
		<div>
			<div className="flex flex-col items-center justify-center min-h-screen">
				<Flashlight />
				<div className="flex flex-col items-start">
					<ProfileTile />
					<div className="flex flex-col md:flex-row justify-between w-full items-start">
						<SkillsAnimation />
						<LinksToMe />
					</div>
				</div>
			</div>
		</div>
	);
};

export default PageLayout;
