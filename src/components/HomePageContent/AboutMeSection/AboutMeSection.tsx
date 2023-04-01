import React from 'react';

import Heading from '../../Reusable/Heading';
import Text from '../../Reusable/Text';
import Test from '../../../images/icon.png';

function AboutMeSection() {
	return (
		<section
			id='about-me-section'
			arial-label='about-me'
			className='flex justify-between items-center'
		>
			<div className='w-3/6 grid gap-4'>
				<Heading
					type='h2'
					style='font-libre font-semibold leading-none'
				>
					About Me
				</Heading>
				<Text>
					Glad you made it to my site! This is the fourth version
					(lol)
				</Text>
				<Text>
					My name is Salvador Villalon Jr. Alot of people call me Sal
					(Feel free to call me that)
				</Text>
				<Text>
					At UC Irvine, I created my first WordPress (still used
					today!). With just one website, I created so much impact
					that I wanted to learn how websites were made! Thus began my
					passion for Computer Science and my goal of becoming a
					Software Engineer.
				</Text>
				<Text>
					Fast-forward to today, I am working at Accenture! I use Full
					Stack expertise, optimism, and agile learning to listen to
					the pain points of organizations and cooperate with my team
					to innovate digital experiences.
				</Text>
				<Heading type='h3' style='font-libre font-semibold	leading-none'>
					Technologies
				</Heading>
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
				<img className='h-80' src={Test} />
			</div>
		</section>
	);
}

export default AboutMeSection;
