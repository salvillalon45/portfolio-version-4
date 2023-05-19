import React from 'react';

import Heading from '../../Reusable/Heading';

import { teachingExperienceData } from '../../../data/experienceData';
import { renderExperienceData } from '../../../lib/utils';

function TeachingSection() {
	return (
		<section id='full-time-experience-section' className='grid gap-4'>
			<div className='grid gap-6 w-9/12 mx-auto'>
				<Heading
					type='h2'
					style='font-libre font-semibold leading-none'
				>
					Teaching
				</Heading>

				{renderExperienceData(teachingExperienceData)}
			</div>
		</section>
	);
}

export default TeachingSection;
