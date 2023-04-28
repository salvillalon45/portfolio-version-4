import React from 'react';

import Heading from '../../Reusable/Heading';
import Text from '../../Reusable/Text';

import AIPTeam from '../../../images/about_me_page_images/aip/aip_intern_team.jpg';
import AIPSolo from '../../../images/about_me_page_images/aip/aip_solo.jpg';
import TextLink from '../../Reusable/TextLink';

function ComeUpSection() {
	return (
		<section id='come-up-section' className='grid gap-8'>
			<div className='grid gap-6 w-9/12 mx-auto'>
				<Heading
					type='h3'
					style='font-libre font-semibold leading-none'
				>
					The ComeUp
				</Heading>
				<Text style='leading-10'>
					My Sophomore year started and I was selected for the
					Administrative Internship Program (AIP). I worked under the
					amazing Sherwynn Umali. When I told other interns they all
					gasped in jealousy because she was famous all over UCI and
					everyone loved her. I had no idea! (Working with her was
					amazing that I made a{' '}
					<TextLink href='https://salvillalon45.github.io/freecodecamp-sherwynnTributepage'>
						<b>tribute page</b>
					</TextLink>{' '}
					). To succeed in Computer Science, you need to gain
					technical experience, but the projects assigned for my
					internship were not technical!
				</Text>
			</div>

			<div className='grid gap-4 about-page-pic-wrapper'>
				<div className='flex gap-8 justify-center'>
					<img className='w-4/12' src={AIPTeam} alt='' />
					<img className='w-3/12' src={AIPSolo} alt='' />
				</div>
				<Text style='justify-self-center'>
					Sophomore Year at AIP. Manager in the middle. Teammate on
					the right side!
				</Text>
			</div>
		</section>
	);
}

export default ComeUpSection;
