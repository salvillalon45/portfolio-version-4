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
import ValuesSection from './Values/ValuesSection';

import './aboutPageContentStyles.css';

function AboutPageContent() {
	return (
		<>
			<Heading
				type='h1'
				style='font-libre font-semibold leading-none mt-5'
			>
				About Me
			</Heading>
			<DividerLine style='mb-12 mt-4' />

			<WelcomeSection />
			<DividerLine style='mb-12 mt-12' />

			<Heading
				type='h2'
				style='font-libre font-semibold leading-none mb-9'
			>
				How I got to where I am
			</Heading>
			<ANewWorldSection />

			<DividerLine style='mb-12 mt-12' />
			<FailureSection />

			<DividerLine style='mb-12 mt-12' />
			<ComeUpSection />

			<DividerLine style='mb-12 mt-12' />
			<IdeaSection />

			<DividerLine style='mb-12 mt-12' />
			<FoundItSection />

			<DividerLine style='mb-12 mt-12' />
			<FromHereAndOutSection />

			<DividerLine style='mb-12 mt-12' />
			<ValuesSection />
		</>
	);
}

export default AboutPageContent;
