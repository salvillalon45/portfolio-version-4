import React from 'react';

import Heading from '../../Reusable/Heading';
import Text from '../../Reusable/Text';
import TextLink from '../../Reusable/TextLink';

function FailureSection() {
	return (
		<section id='failure-section' className='grid gap-4'>
			<Heading type='h3' style='font-libre font-semibold leading-none'>
				Failure
			</Heading>

			<div className='grid gap-6 w-9/12 mx-auto'>
				<Text style='leading-10'>
					I invested too much time in extracurricular activities and
					forgot my main reason for enrolling in college, to graduate
					with a degree. That Winter quarter 2016 I failed{' '}
					<TextLink
						style='underline hover:text-grey'
						href='https://catalogue.uci.edu/allcourses/physics/'
					>
						<b>Physics 2</b>
					</TextLink>
					(I got a 3/16 on the final. You need a 12/16 to pass) and
					Math 2B. I was put on{' '}
					<TextLink
						style='underline hover:text-grey'
						href='https://catalogue.uci.edu/informationforadmittedstudents/academicregulationsandprocedures/#:~:text=An%20undergraduate%20student%20normally%20is,average%2C%20is%20less%20than%202.0.'
					>
						<b>Academic Probation</b>
					</TextLink>
					. I thought “I just got into UC Irvine and I am already
					going to get kicked out!”
				</Text>

				<Text style='leading-10'>
					I learned an important lesson from this experience -{' '}
					<b>
						the value of investing time in activities that help me
						achieve my goals
					</b>
					(Read about it in the lessons and values section!). I passed
					my classes for the Spring Quarter 2016 and got on Dean's
					Honor List. I also got out of Academic Probation! That
					Summer quarter 2016 I retook the classes I failed.
				</Text>

				<Text style='leading-10'>
					I improved in Physics! I got an 8/16 on the final (I went to
					see the professor, but he could not look me in the eyes. I
					went many times to office hours. He knew my story of wanting
					to become an Electrical Engineer. He knew all the effort I
					put in. But I still failed)
				</Text>

				<Text style='leading-10'>
					I went back to my counselor. He suggested picking something
					not STEM like Sociology, but I did not want to leave STEM!
					He introduced me to Computer Science, which I had never
					heard of before.
				</Text>

				<Text style='leading-10'>
					Here I learned of the option to declare a Computer Science
					major.{' '}
					<b>
						At this point, Computer Science was an option, not a
						passion
					</b>
					. I enrolled in the ICS 31 class for Winter Quarter 2017. To
					prepare, I took a Python Course on Codecademy that Fall
					Quarter 2016!
				</Text>
			</div>
		</section>
	);
}

export default FailureSection;
