import React from 'react';
import Button from '../../Reusable/Button';

import Heading from '../../Reusable/Heading';
import Text from '../../Reusable/Text';

function HomeHeroIntro() {
	return (
		<div className='home-hero-intro grid gap-6'>
			<div>
				<Heading type={'h1'} style='font-libre leading-none'>
					Salvador Villalon Jr
				</Heading>
				<Heading
					type={'h2'}
					style='font-poppins font-medium leading-none'
				>
					Building for web and people
				</Heading>
			</div>

			<Text style='w-3/5'>
				I am a Software Engineer that build digial experiences with
				optimism, collaboration, and a growth-mindset. Currently I work
				at Accenture where I listen to the pain points of organizations
				and cooperate with my team to innovate solutions for clients.
			</Text>
		</div>
	);
}

export default HomeHeroIntro;
