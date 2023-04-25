import React from 'react';

import Heading from '../Reusable/Heading';
import DividerLine from '../Reusable/DividerLine';
import WelcomeSection from './WelcomeSection/WelcomeSection';
import ANewWorldSection from './ANewWorldSection/ANewWorldSection';
import FailureSection from './FailureSection/FailureSection';
import ComeUpSection from './ComeUpSection/ComeUpSection';
import IdeaSection from './IdeaSection/IdeaSection';
import FoundItSection from './FoundItSection/FoundItSection';
import FromHereAndOutSection from './FromHereAndOutSection/FromHereAndOutSection';

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
			<DividerLine style='mb-4' />
			<ComeUpSection />
			<DividerLine style='mb-4' />
			<IdeaSection />
			<DividerLine style='mb-4' />
			<FoundItSection />
			<DividerLine style='mb-4' />
			<FromHereAndOutSection />
		</>
	);
}

export default AboutPageContent;
