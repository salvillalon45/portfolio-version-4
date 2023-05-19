import React from 'react';

import Text from '../Reusable/Text';
import TextLink from '../Reusable/TextLink';

type ExperienceItemProps = {
	roleTitle: string;
	organization: string;
	date: string;
	description: string;
	orgLink: string;
	skills: string;
};

function ExperienceItem({
	roleTitle,
	organization,
	date,
	description,
	orgLink,
	skills
}: ExperienceItemProps) {
	return (
		<div className='grid gap-2'>
			<Text>
				{roleTitle} @{' '}
				<TextLink href={orgLink}>
					<b>{organization}</b>
				</TextLink>
			</Text>

			<Text style='text-grey'>{date}</Text>

			<Text>{description}</Text>

			<Text>
				{!!skills ? (
					<>
						<span className='text-grey'>Tech:</span> {skills}
					</>
				) : null}
			</Text>
		</div>
	);
}

export default ExperienceItem;
