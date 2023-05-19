import React from 'react';

import Heading from '../../Reusable/Heading';

import { currentlyDoingExperienceData } from '../../../data/experienceData';
import { renderExperienceData } from '../../../lib/utils';

function CurrentlyDoingSection() {
	return (
		<section id='full-time-experience-section' className='grid gap-4'>
			<div className='grid gap-6 w-9/12 mx-auto'>
				<Heading
					type='h2'
					style='font-libre font-semibold leading-none'
				>
					Currently Doing
				</Heading>

				{renderExperienceData(currentlyDoingExperienceData)}
			</div>
		</section>
	);
}

export default CurrentlyDoingSection;
