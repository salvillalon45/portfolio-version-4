import React from 'react';

import Heading from '../Reusable/Heading';
import DividerLine from '../Reusable/DividerLine';
import FullTimeExperienceSection from './FullTimeExperienceSection/FullTimeExperienceSection';

function ExperiencePageContent() {
	return (
		<>
			<Heading
				type='h1'
				style='font-libre font-semibold leading-none mt-5'
			>
				Experience
			</Heading>
			<DividerLine style='mb-12 mt-4' />

			<FullTimeExperienceSection />
		</>
	);
}

export default ExperiencePageContent;
