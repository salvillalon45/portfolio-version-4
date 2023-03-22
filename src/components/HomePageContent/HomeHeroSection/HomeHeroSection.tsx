import React from 'react';

import HomeHeroImage from './HomeHeroImage';
import HomeHeroIntro from './HomeHeroIntro';

function HomeHeroSection() {
	return (
		<div className='home-hero-section'>
			<div className='flex justify-around items-center'>
				<HomeHeroIntro />

				<HomeHeroImage />
			</div>
		</div>
	);
}

export default HomeHeroSection;
