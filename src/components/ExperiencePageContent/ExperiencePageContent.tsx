import React, { useState } from 'react';

import Heading from '../Reusable/Heading';
import DividerLine from '../Reusable/DividerLine';
import Button from '../Reusable/Button';
import Text from '../Reusable/Text';
import FullTimeSection from './FullTimeSection/FullTimeSection';
import InternshipsSection from './InternshipsSection/InternshipsSection';
import ExperienceMenu from './ExperienceMenu';
import TeachingSection from './TeachingSection/TeachingSection';
import CurrentlyDoingSection from './CurrentlyDoingSection/CurrentlyDoingSection';
import EducationSection from './EducationSection/EducationSection';
import TextLink from '../Reusable/TextLink';

function ExperiencePageContent() {
	const [currentContent, setCurrentContent] = useState({
		name: 'Currently Doing',
		key: 'currently_doing'
	});

	function showExperienceContent() {
		const { key } = currentContent;
		switch (key) {
			case 'full_time':
				return <FullTimeSection />;
			case 'internships':
				return <InternshipsSection />;
			case 'teaching':
				return <TeachingSection />;
			case 'currently_doing':
				return <CurrentlyDoingSection />;
			case 'education':
				return <EducationSection />;
			default:
				return (
					<Text style='text-center'>
						Click on the <b>Dropdown Menu</b> to explore my
						experience!
					</Text>
				);
		}
	}

	return (
		<>
			<Heading
				type='h1'
				style='font-libre font-semibold leading-none mt-5'
			>
				Experience
			</Heading>

			<DividerLine style='mb-6 mt-4' />

			<div className='grid gap-6'>
				<Text>
					If you want more detail on my experience, go to{' '}
					<b>
						<TextLink href='https://www.linkedin.com/in/salvadorvillalon/'>
							<i className='bi bi-linkedin'></i> LinkedIn
						</TextLink>{' '}
					</b>
					and{' '}
					<b>
						<TextLink href='https://github.com/salvillalon45'>
							<i className='bi bi-github'></i> GitHub
						</TextLink>{' '}
					</b>
					. Resume is shared when requested.
				</Text>

				<div className='flex justify-evenly'>
					{/* <Button
						buttonAction={() =>
							window.open(
								'https://www.linkedin.com/in/salvadorvillalon/'
							)
						}
					>
						LinkedIn
					</Button> */}
					<ExperienceMenu
						currentContent={currentContent}
						setCurrentContent={setCurrentContent}
					/>
					{/* <Button
						buttonAction={() =>
							window.open('https://github.com/salvillalon45')
						}
					>
						GitHub
					</Button> */}
				</div>

				<div className='mt-6'>{showExperienceContent()}</div>
			</div>
		</>
	);
}

export default ExperiencePageContent;
