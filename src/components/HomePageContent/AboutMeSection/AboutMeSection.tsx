import React from 'react';

import Heading from '../../Reusable/Heading';
import Test from '../../../images/icon.png';

function AboutMeSection() {
	return (
		<div className='about-me-section flex justify-center gap-10'>
			<div className='w-3/6 grid gap-4'>
				<Heading
					type='h2'
					value='About Me'
					style='text-3xl font-bold font-merriweather'
				/>
				<p>
					Hey! Thanks for visiting my place in the internet! I am a
					Software Engineer with 3+ years of experience. I studied
					Computer Science degree from the University of California,
					Irvine. I use my Full Stack expertise,
					self-awareness/optimism, and agile learning to listen to the
					pain points of organizations and cooperate with my team to
					innovate digital experiences.
				</p>
				<Heading
					type='h3'
					value='Technologies'
					style='text-2xl font-bold font-merriweather'
				/>
				<div className='flex justify-around'>
					<ul className='list-disc'>
						<li>HTML/CSS</li>
						<li>JavaScript</li>
						<li>TypeScript/Flow</li>
					</ul>
					<ul className='list-disc'>
						<li>React.js</li>
						<li>Node.js</li>
						<li>Express.js</li>
					</ul>
					<ul className='list-disc'>
						<li>GraphQL</li>
						<li>MongoDB</li>
						<li>MySQL</li>
					</ul>
					<ul className='list-disc'>
						<li>Java</li>
						<li>Python</li>
					</ul>
				</div>
			</div>

			<div className='about-image'>
				<img className='h-40' src={Test} />
			</div>
		</div>
	);
}

export default AboutMeSection;
