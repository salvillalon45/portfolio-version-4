import React from 'react';

import DividerLine from '../Reusable/DividerLine';
import AboutMeSection from './AboutMeSection/AboutMeSection';
import HomeHeroSection from './HomeHeroSection/HomeHeroSection';
import ExploreSection from './ExploreSection/ExploreSection';
import ContactSection from './ContactSection/ContactSection';

import './HomePageContent.css';

function HomePageContent() {
	return (
		<>
			<HomeHeroSection />
			<DividerLine style='mb-4' />
			<AboutMeSection />
			<DividerLine style='mt-12 mb-4' />
			<ExploreSection />
			<DividerLine style='mt-12 mb-4' />
			<ContactSection />
		</>
	);
}

export default HomePageContent;
