import React from 'react';

import Test from '../../../images/icon.png';

function HomeHeroImage() {
	return (
		<div className='home-hero-image'>
			<div id='outer-orbit'>
				<div className='outer-orbit-cirlces'>
					<img className='h-40' src={Test} />
				</div>
			</div>
		</div>
	);
}

export default HomeHeroImage;
