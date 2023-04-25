import React from 'react';

import Heading from '../../Reusable/Heading';
import Text from '../../Reusable/Text';

import AIP1 from '../../../images/about_me_page_images/aip/aip_intern_team.jpg';
import AIP2 from '../../../images/about_me_page_images/aip/aip_solo.jpg';

function ComeUpSection() {
	return (
		<section id='come-up-section' className='grid gap-4'>
			<Heading type='h3' style='font-libre font-semibold leading-none'>
				The ComeUp
			</Heading>

			<div className='grid gap-4'>
				<div className='flex gap-8 justify-center'>
					<img className='w-1/2' src={AIP1} alt='' />
					<img className='w-2/5' src={AIP2} alt='' />
				</div>
				<Text style='justify-self-center'>
					Sophomore Year at AIP. Manager in the middle. Teammate on
					the right side!
				</Text>
			</div>

			<div className='grid gap-6 w-9/12 mx-auto'>
				<Text>
					My Sophomore year started and I was selected for the
					Administrative Internship Program (AIP). I worked under the
					amazing Sherwynn Umali. When I told other interns they all
					gasped in jealousy because she was famous all over UCI and
					everyone loved her. I had no idea! (Working with her was
					amazing. I made a tribute page. Check it out!). To succeed
					in Computer Science, you need to gain technical experience,
					but the projects assigned for my internship were not
					technical!
				</Text>
			</div>
		</section>
	);
}

export default ComeUpSection;
