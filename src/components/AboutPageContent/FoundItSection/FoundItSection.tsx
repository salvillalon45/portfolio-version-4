import React from 'react';

import Heading from '../../Reusable/Heading';
import Text from '../../Reusable/Text';

function FoundItSection() {
	return (
		<section id='found-it-section' className='grid gap-4'>
			<div className='grid gap-6 w-9/12 mx-auto'>
				<Heading
					type='h3'
					style='font-libre font-semibold leading-none'
				>
					I Found It!
				</Heading>
				<Text style='leading-10'>
					I sat in the SLL office and realized a fact that lit up my
					mind like a light bulb.{' '}
					<b>
						By creating a simple website, I was made an impact on an
						organization and prospective students
					</b>
					. I revitalized the brand for an organization! Also,
					prospectives students can now learn about this internship
					opportunity with its new online presence. Now everyone can
					share the website and learn about it! At that moment, my
					perception of Computer Science transformed from an option to
					a passion. I had a new goal of becoming a Software Engineer,
					someone who could help others and create an impact in the
					world.
				</Text>
			</div>
		</section>
	);
}

export default FoundItSection;
