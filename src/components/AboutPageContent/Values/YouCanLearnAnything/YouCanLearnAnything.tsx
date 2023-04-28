import React from 'react';
import Heading from '../../../Reusable/Heading';
import Text from '../../../Reusable/Text';
import TextLink from '../../../Reusable/TextLink';

function YouCanLearnAnything() {
	return (
		<section id='you-can-learn-anything-section'>
			<div className='grid gap-6 w-9/12 mx-auto mb-4'>
				<Heading
					type='h3'
					style='font-libre font-semibold leading-none'
				>
					You Can Learn Anything
				</Heading>
				<Text style='leading-10'>
					I believe that anyone can learn anything. As human beings,
					we are capable of so much. We can learn anything from sports
					to complex mathematics. We just need guidance, resources,
					and patience.
				</Text>

				<Text style='leading-10'>
					When I was in college I found{' '}
					<TextLink href='https://youtu.be/JC82Il2cjqA'>
						<b>this youtube video posted by Khan Academy</b>
					</TextLink>
					. This video told me that I may not understand something at
					first, but with practice and not giving up I will get it!
				</Text>

				<Text style='leading-10'>
					The “You Can Learn Anything” movement from Khan Academy has
					motivated me through college and now to continue pushing
					myself to try new things! I hope it motivates you too.
				</Text>
			</div>
		</section>
	);
}

export default YouCanLearnAnything;
