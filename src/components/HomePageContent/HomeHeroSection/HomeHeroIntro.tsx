import React from 'react';

import Heading from '../../Reusable/Heading';
import Text from '../../Reusable/Text';

function HomeHeroIntro() {
	return (
		<div className='home-hero-intro'>
			<Heading
				type={'h1'}
				value='Welcome! I am'
				style='text-base font-poppins'
			/>
			<Heading
				type={'h2'}
				value='Salvador Villalon Jr'
				style='text-5xl font-libre'
			/>
			<Text
				value='I build digial experiences with optimism, collaboration, and a
			growth-mindset.'
			/>
		</div>
	);
}

export default HomeHeroIntro;
