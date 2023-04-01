import React from 'react';

import Text from '../../Reusable/Text';

// import {  } from 'bootstrap-icons';

function Footer() {
	return (
		<footer id='footerContainer' className='flex justify-between mb-4'>
			<div className='flex'>
				<Text style='mx-4 text-2xl'>
					<a href='https://www.linkedin.com/in/salvadorvillalon/'>
						<i className='bi bi-linkedin'></i>
					</a>
				</Text>

				<Text style='mx-4 text-2xl'>
					<a href='https://github.com/salvillalon45'>
						<i className='bi bi-github'></i>
					</a>
				</Text>
			</div>

			<Text style='text-xl'>Made By Salvador Villalon Jr</Text>
		</footer>
	);
}

export default Footer;
