import React from 'react';

import DividerLine from '../Reusable/DividerLine';
import AboutMeSection from './AboutMeSection/AboutMeSection';
import HomeHeroSection from './HomeHeroSection/HomeHeroSection';
import ExploreSection from './ExploreSection/ExploreSection';

function HomePageContent() {
	return (
		<>
			<HomeHeroSection />
			<DividerLine />
			<AboutMeSection />
			<DividerLine />
			<ExploreSection />
		</>
	);
}

export default HomePageContent;
