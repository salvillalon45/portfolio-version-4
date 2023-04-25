import React from 'react';

import Heading from '../../Reusable/Heading';
import Text from '../../Reusable/Text';
import UciPortal from '../../../images/about_me_page_images/acceptance_letter/uci_portal.jpg';
import UciAcceptance from '../../../images/about_me_page_images/acceptance_letter/uci_acceptance.png';
import Tennis1 from '../../../images/about_me_page_images/tennis_pics/tennis1.jpeg';
import Tennis2 from '../../../images/about_me_page_images/tennis_pics/tennis2.jpg';

function ANewWorldSection() {
	return (
		<section id='a-new-world-section' className='grid gap-20'>
			<Heading type='h3' style='font-libre font-semibold leading-none'>
				It’s a whole new world!
			</Heading>

			<div className='grid gap-12'>
				<div className='flex gap-8 justify-center'>
					<img className='w-2/5' src={UciPortal} alt='' />
					<img className='w-2/5' src={UciAcceptance} alt='' />
				</div>

				<div className='grid gap-6 w-9/12 mx-auto'>
					<Text style='leading-10'>
						When I enrolled at UC Irvine (UCI), I was
						Undecided/Undeclared student pursuing Electrical
						Engineering. Being on campus felt like stepping into a
						new world. I explored places like Chipotle and
						Yogurtland that were not in my hometown!
					</Text>
				</div>
			</div>

			<div className='grid gap-12'>
				<div className='grid gap-4'>
					<div className='flex gap-8 justify-center'>
						<img className='w-2/5' src={Tennis1} alt='' />
						<img className='w-2/5' src={Tennis2} alt='' />
					</div>
					<Text style='justify-self-center'>
						Senior Year High School - I was #1 Doubles! That year I
						went to CIF!
					</Text>
				</div>

				<div className='grid gap-6 w-9/12 mx-auto'>
					<Text style='leading-10'>
						There were so many extracurricular activities to choose
						from! I played tennis in high school and wanted to
						continue playing! I thought I could play for the NCAA
						tennis team, but the coach said otherwise. Then I looked
						for the Intramural Tennis Club competitive team, but I
						was not at the same level as those players. As I was
						training to improve my tennis game, I joined the Rowing
						Intramural Club to become a better tennis player!
					</Text>
					<Text style='leading-10'>
						I was also involved in several organizations, including
						Circle K, the Society of Hispanic Professional Engineers
						at UCI (SHPE-UCI), and the Student Retention & Outreach
						Center (SOAR). In addition, I worked as a busboy,
						dishwasher, and cook at the Lot 5 Eatery in Mesa Court.
					</Text>
					<Text style='leading-10'>
						All this happened in my first year.{' '}
						<b>
							All of these activities added up to a crucial moment
							in my life.
						</b>
					</Text>
				</div>
			</div>
		</section>
	);
}

export default ANewWorldSection;
