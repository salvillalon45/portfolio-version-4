import React from 'react';

import Heading from '../../Reusable/Heading';
import Text from '../../Reusable/Text';

function ContactSection() {
	return (
		<section id='contact-section' arial-label='contact' className='flex'>
			<div className='w-3/6 grid gap-4'>
				<Heading
					type='h2'
					style='font-libre font-semibold leading-none'
				>
					Contact
				</Heading>
				<Text>
					Whether you have a question or just want to say hi, I’ll try
					my best to get back to you!
				</Text>
				<div className='flex'>
					<div>
						<a
							href='https://www.linkedin.com/in/salvadorvillalon/'
							className='flex items-center'
						>
							<i className='bi bi-linkedin mx-4 text-2xl'></i>
							<Text>Connect with me on LinkedIn</Text>
						</a>
						<a
							href='https://github.com/salvillalon45'
							className='flex items-center'
						>
							<i className='bi bi-github mx-4 text-2xl'></i>
							<Text>Check out my projects on GitHub</Text>
						</a>
						<a
							href='mailto:someone@example.com'
							className='flex items-center'
						>
							<i className='bi bi-envelope mx-4 text-2xl'></i>
							<Text>Email me for a chat!</Text>
						</a>

						<p></p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ContactSection;
