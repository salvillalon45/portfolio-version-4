import React from 'react';

import Heading from '../../Reusable/Heading';
import Text from '../../Reusable/Text';

import NYSolo from '../../../images/about_me_page_images/from_here_and_out/ny/solo.jpg';
import NYGroup from '../../../images/about_me_page_images/from_here_and_out/ny/group_pic.jpg';
import ChicagoSolo from '../../../images/about_me_page_images/from_here_and_out/chicago/solo.jpg';
import ChicagoGroup from '../../../images/about_me_page_images/from_here_and_out/chicago/group_pic.jpeg';
import BoardMembers from '../../../images/about_me_page_images/from_here_and_out/shpe/board_members.jpg';
import GroupTrophy from '../../../images/about_me_page_images/from_here_and_out/shpe/group_trophy.jpg';
import Sitting from '../../../images/about_me_page_images/from_here_and_out/grad/sitting.jpg';
import Squat from '../../../images/about_me_page_images/from_here_and_out/grad/squat.jpg';
import TextLink from '../../Reusable/TextLink';

function FromHereAndOutSection() {
	return (
		<section id='from-here-and-out-section' className='grid gap-4'>
			<Heading type='h3' style='font-libre font-semibold leading-none'>
				From Here and Out
			</Heading>

			<div className='grid gap-6 w-9/12 mx-auto mb-4'>
				<Text style='leading-10'>
					WordPress did the whole work for you! I wanted to learn the
					process behind making websites using code. I discovered a
					Codecademy course called "Build Websites from Scratch" and
					took it during the summer of 2017. Then I set goals and
					invested my time in priorities that would bring me closer to
					becoming a Software Engineer. I got involved in
					organizations such as:
				</Text>

				<Text style='leading-10'>
					✅{' '}
					<TextLink href='https://mlt.org/'>
						<b>Management Leadership for Tomorrow</b>
					</TextLink>
					. I was a Career Prep fellow and graduated in the top 5% of
					my class.
				</Text>

				<Text style='leading-10'>
					✅
					<TextLink href='https://shpe.eng.uci.edu/'>
						<b>
							Society of Hispanic Professional Engineers
							(SHPE-UCI)
						</b>
						.
					</TextLink>{' '}
					SHPE-UCI was a big part of my college experience. I became a
					general member, then secretary, then External Vice
					President, then{' '}
					<TextLink href='https://www.instagram.com/p/ByOYjwChEeh/'>
						President
					</TextLink>{' '}
					(Being president was one of the best things I have ever
					done!). During the year I served as President, SHPE-UCI{' '}
					<TextLink href='https://drive.google.com/drive/folders/1dBPkwtO-IarsUDfwPUrhO1YxY1aORIq6?usp=sharing'>
						received 13 awards
					</TextLink>{' '}
					and won the coveted{' '}
					<TextLink href='https://engineering.uci.edu/news/2019/11/uci-chapter-hispanic-engineers-earns-national-recognition'>
						National Medium Chapter of the Year award
					</TextLink>
					, beating 245 chapters across the U.S. for the first time in
					SHPE-UCI history.
				</Text>

				<Text style='leading-10'>
					✅ I completed <b>6 Software Engineering internships</b> at{' '}
					<TextLink href='https://www.spglobal.com/spdji/en/'>
						S&P Dow Jones Indices
					</TextLink>
					,{' '}
					<TextLink href='https://studentlife.uci.edu/home.php'>
						UCI Student Life and Leadership
					</TextLink>
					,{' '}
					<TextLink href='https://www.jpmorganchase.com/'>
						JP Morgan Chase & Co
					</TextLink>
					, <TextLink href='https://www.vusar.co/'>Vusar</TextLink>,{' '}
					<TextLink href='https://www.dreamsforschools.org/'>
						Dreams For Schools
					</TextLink>
					, and{' '}
					<TextLink href='https://www.linkedin.com/company/finityone/'>
						FinityOne
					</TextLink>
					.
				</Text>

				<Text>Pictures of my adventures!</Text>
			</div>
			<div className='grid gap-12'>
				{/* New York */}
				<div className='grid gap-4'>
					<div className='flex gap-8 justify-center about-pic-container'>
						<img className='w-1/4' src={NYSolo} alt='' />
						<img className='w-2/5' src={NYGroup} alt='' />
					</div>
					<Text style='justify-self-center'>
						S&P Dow Jones Indices Internship in New York! First in
						my family to explore New York.
					</Text>
				</div>

				{/* Chicago */}
				<div className='grid gap-4'>
					<div className='flex gap-8 justify-center about-pic-container'>
						<img className='w-1/4' src={ChicagoSolo} alt='' />
						<img className='w-2/5' src={ChicagoGroup} alt='' />
					</div>
					<Text style='justify-self-center'>
						JP Morgan Chase & Co in Chicago! First in my family to
						explore Chicago.
					</Text>
				</div>

				{/* SHPE */}
				<div className='grid gap-4'>
					<div className='flex gap-8 justify-center about-pic-container'>
						<img className='w-2/5' src={GroupTrophy} alt='' />
						<img className='w-45' src={BoardMembers} alt='' />
					</div>
					<Text style='justify-self-center'>
						National Convention 2020 (Left). SHPE-UCI 2018-2019
						board members (Right). SHPE-UCI played a big part of my
						life.
					</Text>
				</div>

				{/* Grad */}
				<div className='grid gap-4 about-pic-wrapper'>
					<div className='flex gap-8 justify-center about-pic-container'>
						<img className='w-1/4' src={Squat} alt='' />
						<img className='w-1/4' src={Sitting} alt='' />
					</div>
					<Text style='justify-self-center'>
						Graduated March 2020!
					</Text>
				</div>
			</div>
		</section>
	);
}

export default FromHereAndOutSection;
