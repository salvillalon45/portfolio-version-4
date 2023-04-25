import React from 'react';

import Heading from '../../Reusable/Heading';
import Text from '../../Reusable/Text';

import Steve from '../../../images/about_me_page_images/aip/steve.jpg';
import KarateKid from '../../../images/about_me_page_images/aip/karate_kid.gif';

function IdeaSection() {
	return (
		<section id='the-idea-section' className='grid gap-4'>
			<Heading type='h3' style='font-libre font-semibold leading-none'>
				The Idea
			</Heading>

			<div className='grid gap-6 w-9/12 mx-auto'>
				<Text style='leading-10'>
					I noticed that the AIP website was old. It had pictures from
					two years ago. Also, it was not a standalone website. AIP
					deserved better. This was a perfect opportunity to create a
					technical project for myself. I asked my manager if I can
					create a new WordPress website for my intern project. She
					asked, "Have you created websites in the past?" With the
					most confidence in the world, I said, "No!"
				</Text>

				<Text style='leading-10'>
					My manager laughed and introduced me to Steven Tajiri from
					the SLL IT Department. Steven and I had a Karate Kid Moment
					as he mentored me in website development! Just like
					Mr.Miyagi did to Daniel.
				</Text>

				<Text style='leading-10'>
					After multiple attempts and errors, I finally completed the
					website!{' '}
					<a
						href='https://adminintern.studentlife.uci.edu/'
						target='_blank'
					>
						Also, the website is still functional and in use today.
						Take a look!
					</a>
				</Text>
			</div>

			<div className='grid gap-4'>
				<div className='flex gap-8 justify-center items-center'>
					<img className='h-2/4' src={KarateKid} alt='' />
					<img className='w-1/4' src={Steve} alt='' />
				</div>
				<Text style='justify-self-center'>
					Steve and I at a Student Conference!
				</Text>
			</div>
		</section>
	);
}

export default IdeaSection;
