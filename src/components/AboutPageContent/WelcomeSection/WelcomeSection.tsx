import React from 'react';

import Heading from '../../Reusable/Heading';
import Text from '../../Reusable/Text';
import WelcomeCarousel from './WelcomeCarousel/WelcomeCarousel';

function WelcomeSection() {
	return (
		<section id='welcome-section'>
			<Heading type='h2' style='font-libre font-semibold leading-none'>
				Welcome
			</Heading>

			<div className='carousel-about-wrapper flex gap-4 mx-auto w-9/12 mt-4'>
				<WelcomeCarousel />

				<div className='grid gap-4'>
					<Text style='leading-10'>
						Welcome to my space on the internet. My name is Salvador
						Villalon Jr. I am happy you decided to learn more about
						me!
					</Text>
					<Text style='leading-10'>
						I graduated from the University of California, Irvine
						(UC Irvine) in March 2020 with a degree in Computer
						Science! Then I started my first full-time job on
						February 2021 at Accenture as part of the Technology
						Development Program (TDP).
					</Text>
					<Text style='leading-10'>
						I am an Advanced Application Engineering Senior Analyst.
						I have worked with Code.org, a Big Tech Company (part of
						the FAANG Companies). For my most recent project, I will
						be working with the U.S. Government. This is a brief
						about me, but let's get into how I got to where I am
						today!
					</Text>
				</div>
			</div>
		</section>
	);
}

export default WelcomeSection;
