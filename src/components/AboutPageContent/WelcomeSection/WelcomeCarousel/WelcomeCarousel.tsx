import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';

import WelcomePicture1 from '../../../../images/about_me_page_images/welcome/1.jpg';
import WelcomePicture2 from '../../../../images/about_me_page_images/welcome/2.png';
import WelcomePicture4 from '../../../../images/about_me_page_images/welcome/4.jpg';
import WelcomePicture6 from '../../../../images/about_me_page_images/welcome/6.jpg';
import WelcomePicture7 from '../../../../images/about_me_page_images/welcome/7.jpg';
import WelcomePicture8 from '../../../../images/about_me_page_images/welcome/8.jpg';
import WelcomePicture9 from '../../../../images/about_me_page_images/welcome/9.jpg';
import WelcomePicture10 from '../../../../images/about_me_page_images/welcome/10.jpg';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import './welcomeCarouselStyles.css';

function WelcomeCarousel() {
	const autoPlayOptions = {
		delay: 2500
	};

	function showSwiperSlides() {
		const pictures = [
			WelcomePicture1,
			WelcomePicture2,
			WelcomePicture4,
			WelcomePicture6,
			WelcomePicture7,
			WelcomePicture8,
			WelcomePicture9,
			WelcomePicture10
		];
		return pictures.map((pic) => (
			<SwiperSlide>
				<img src={pic} />
			</SwiperSlide>
		));
	}

	return (
		<>
			<Swiper
				modules={[Navigation, Autoplay]}
				autoplay={autoPlayOptions}
				navigation={true}
				loop={true}
				className='mySwiper'
			>
				{showSwiperSlides()}
			</Swiper>
		</>
	);
}

export default WelcomeCarousel;
