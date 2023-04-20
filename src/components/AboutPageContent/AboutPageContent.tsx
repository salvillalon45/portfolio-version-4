import React from 'react';

import Heading from '../Reusable/Heading';
import DividerLine from '../Reusable/DividerLine';
import WelcomeSection from './WelcomeSection/WelcomeSection';
import ANewWorldSection from './ANewWorldSection/ANewWorldSection';
import FailureSection from './FailureSection/FailureSection';

function AboutPageContent() {
	return (
		<>
			<Heading type='h1' style='font-libre font-semibold leading-none'>
				About Me
			</Heading>
			<DividerLine style='mb-4' />
			<WelcomeSection />
			<DividerLine style='mb-4' />
			<Heading type='h2' style='font-libre font-semibold leading-none'>
				How I got to where I am
			</Heading>
			<ANewWorldSection />
			<DividerLine style='mb-4' />
			<FailureSection />
		</>
	);
}

export default AboutPageContent;
