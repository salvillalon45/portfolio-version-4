import React from 'react';

import Heading from '../../Reusable/Heading';
import ExperienceItem from '../../Reusable/ExperienceItem';

import { fullTimeExperienceData } from '../../../data/experienceData';
import DividerLine from '../../Reusable/DividerLine';

function FullTimeExperienceSection() {
	return (
		<section id='full-time-experience-section' className='grid gap-4'>
			<div className='grid gap-6 w-9/12 mx-auto'>
				<Heading
					type='h2'
					style='font-libre font-semibold leading-none'
				>
					Full - Time Experience
				</Heading>

				{fullTimeExperienceData.map(
					({
						org_link,
						organization,
						role_title,
						description,
						date,
						skills
					}) => {
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
								<DividerLine style='mb-2 mt-2' />
							</>
						);
					}
				)}
			</div>
		</section>
	);
}

export default FullTimeExperienceSection;
