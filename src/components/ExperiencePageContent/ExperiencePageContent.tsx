import React, { useState } from 'react';

import Heading from '../Reusable/Heading';
import DividerLine from '../Reusable/DividerLine';
import FullTimeExperienceSection from './FullTimeExperienceSection/FullTimeExperienceSection';
import ExperienceMenu from './ExperienceMenu';

function ExperiencePageContent() {
	const [currentContent, setCurrentContent] = useState({
		name: 'Currently Doing'
	});

	return (
		<>
			<Heading
				type='h1'
				style='font-libre font-semibold leading-none mt-5'
			>
				Experience
			</Heading>
			<DividerLine style='mb-12 mt-4' />
			<ExperienceMenu
				currentContent={currentContent}
				setCurrentContent={setCurrentContent}
			/>
			<p>TEST {currentContent}</p>
			{/* <FullTimeExperienceSection /> */}
		</>
	);
}

export default ExperiencePageContent;
