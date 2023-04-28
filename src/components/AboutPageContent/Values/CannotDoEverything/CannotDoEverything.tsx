import React from 'react';
import Heading from '../../../Reusable/Heading';
import Text from '../../../Reusable/Text';
import TextLink from '../../../Reusable/TextLink';

function CannotDoEverything() {
	return (
		<section id='cannot-do-everything-section'>
			<div className='grid gap-6 w-9/12 mx-auto mb-4'>
				<Heading
					type='h3'
					style='font-libre font-semibold leading-none'
				>
					You Can Do Anything, but You Cannot Do Everything
				</Heading>
				<Text style='leading-10'>
					When I was a freshman in college, I had a 1-1 with Stefano
					Ganddini and he showed me this quote that I am still using
					today! Let’s go into more in detail.
				</Text>

				<Text style='leading-10'>
					Previously I mentioned how we can do anything, but we do not
					have all the time in the world!
				</Text>

				<Text style='leading-10'>
					This means we are limited in the things we can do per day.
					It also means that time is valuable. We need to invest our
					time in things that will help us reach our goals.
				</Text>

				<Text style='leading-10'>
					For example, if our goal is to learn to code, then let's
					plan out a plan for the next quarter (three months) to
					invest our time in activities to take us closer to achieving
					our goal.
				</Text>

				<Text style='leading-10'>
					This is what I did when I was on academic probation and how
					I got out of it!
				</Text>
			</div>
		</section>
	);
}

export default CannotDoEverything;
