import React from 'react';
import Button from '../../Reusable/Button';

import Heading from '../../Reusable/Heading';
import Text from '../../Reusable/Text';
import { navigate } from 'gatsby';

function ExploreSection() {
	return (
		<section className='explore-section grid gap-8' arial-label='explore'>
			<div>
				<Heading
					type='h2'
					style='font-libre font-semibold leading-none'
				>
					Explore
				</Heading>

				<Text>
					Navigate my site, by clicking on the links below! (I
					recommend starting with the About Me)
				</Text>
			</div>

			<div className='flex justify-evenly	'>
				<Button buttonAction={() => navigate(`/about`)}>
					About Me
				</Button>
				<Button buttonAction={() => navigate(`/projects`)}>
					Project
				</Button>
				<Button buttonAction={() => navigate(`/experience/`)}>
					Experience
				</Button>
			</div>
		</section>
	);
}

export default ExploreSection;
