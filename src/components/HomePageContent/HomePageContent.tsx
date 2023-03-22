import React from 'react';

import DividerLine from '../Reusable/DividerLine';
import AboutMeSection from './AboutMeSection/AboutMeSection';
import HomeHeroSection from './HomeHeroSection/HomeHeroSection';

function HomePageContent() {
	return (
		<>
			<HomeHeroSection />
			<DividerLine />
			<AboutMeSection />
			<DividerLine />
		</>
	);
}

export default HomePageContent;
