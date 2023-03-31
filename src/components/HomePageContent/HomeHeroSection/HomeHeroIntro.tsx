import React from 'react';
import Button from '../../Reusable/Button';

import Heading from '../../Reusable/Heading';
import Text from '../../Reusable/Text';

function HomeHeroIntro() {
	return (
		<div className='home-hero-intro grid gap-6'>
			<div>
				<Heading
					type={'h1'}
					value='Salvador Villalon Jr'
					style='font-libre leading-none'
				/>
				<Heading
					type={'h2'}
					value='Building for web and people'
					style='font-poppins font-medium leading-none'
				/>
			</div>

			<Text
				style='w-3/5'
				value='I am a Software Engineer that build digial experiences with optimism, collaboration, and a
			growth-mindset. Currently I work at Accenture where I listen to the pain points of organizations and cooperate with my team to innovate solutions for clients.'
			/>
		</div>
	);
}

export default HomeHeroIntro;
