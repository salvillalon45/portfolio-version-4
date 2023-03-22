import React from 'react';

import Heading from '../../Reusable/Heading';

function HomeHeroIntro() {
	return (
		<div className='home-hero-intro'>
			<p>Hi! My name is,</p>
			<Heading
				type={'h1'}
				value='Salvador Villalon Jr'
				style='text-4xl font-bold font-merriweather'
			/>
		</div>
	);
}

export default HomeHeroIntro;
