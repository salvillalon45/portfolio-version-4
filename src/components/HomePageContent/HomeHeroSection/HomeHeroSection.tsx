import React from 'react';

import HomeHeroImage from './HomeHeroImage';
import HomeHeroIntro from './HomeHeroIntro';

function HomeHeroSection() {
	return (
		<section id='hero-section' arial-label='hero'>
			<div className='flex justify-around items-center'>
				<HomeHeroIntro />

				<HomeHeroImage />
			</div>
		</section>
	);
}

export default HomeHeroSection;
