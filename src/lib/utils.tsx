import React from 'react';

import DividerLine from '../components/Reusable/DividerLine';
import { ExperienceItemData } from './types';
import ExperienceItem from '../components/Reusable/ExperienceItem';

function renderExperienceData(experienceData: Array<ExperienceItemData>) {
	return experienceData.map(
		(
			{ org_link, organization, role_title, description, date, skills },
			index
		) => {
			return (
				<>
					<div className='flex items-start gap-x-3'>
						<div className='mt-2 h-1.5 w-1.5 rounded-full bg-gray-200 flex-shrink-0'></div>
						<ExperienceItem
							roleTitle={role_title}
							organization={organization}
							date={date}
							orgLink={org_link}
							description={description}
							skills={skills}
						/>
					</div>
					{index + 1 === experienceData.length ? null : (
						<DividerLine style='mb-2 mt-2' />
					)}
				</>
			);
		}
	);
}

export { renderExperienceData };
