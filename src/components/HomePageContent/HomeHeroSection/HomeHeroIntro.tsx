import React from 'react';

import Heading from '../../Reusable/Heading';

function HomeHeroIntro() {
	return (
		<div className='home-hero-intro grid gap-6'>
			<div>
				<Heading
					type={'h1'}
					style='font-libre leading-none text-center md:text-left'
				>
					Salvador Villalon Jr
				</Heading>
				<Heading
					type={'h2'}
					style='font-poppins font-medium leading-none'
				>
					Building for web and people
				</Heading>
			</div>
		</div>
	);
}

export default HomeHeroIntro;
