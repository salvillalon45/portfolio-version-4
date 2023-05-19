import React from 'react';

import Heading from '../../Reusable/Heading';

import { educationData } from '../../../data/experienceData';
import { renderExperienceData } from '../../../lib/utils';

function EducationSection() {
	return (
		<section id='full-time-experience-section' className='grid gap-4'>
			<div className='grid gap-6 w-9/12 mx-auto'>
				<Heading
					type='h2'
					style='font-libre font-semibold leading-none'
				>
					Education
				</Heading>

				{renderExperienceData(educationData)}
			</div>
		</section>
	);
}

export default EducationSection;
