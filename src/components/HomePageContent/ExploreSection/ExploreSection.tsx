import React from 'react';
import Button from '../../Reusable/Button';

import Heading from '../../Reusable/Heading';

function ExploreSection() {
	return (
		<div className='explore-section w-4/6 grid gap-4'>
			<Heading
				type='h2'
				value='Explore My Life!'
				style='text-3xl font-bold font-merriweather'
			/>
			{/* <Heading
				type='h3'
				value='Navigate my site and learn about me!'
				style='text-2xl font-bold font-merriweather'
			/> */}
			<div className='flex justify-evenly	'>
				<Button style='p-4 rounded-2xl bg-yellow-400' value='About' />
				<Button style='p-4 rounded-2xl bg-yellow-400' value='Project' />
				<Button
					style='p-4 rounded-2xl bg-yellow-400'
					value='Experience'
				/>
			</div>
		</div>
	);
}

export default ExploreSection;
