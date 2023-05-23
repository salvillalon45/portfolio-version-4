import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';

import WelcomePicture1 from '../../../../images/about_me_page_images/welcome/1.jpg';
import WelcomePicture2 from '../../../../images/about_me_page_images/welcome/2.png';
import WelcomePicture4 from '../../../../images/about_me_page_images/welcome/4.jpg';
import WelcomePicture5 from '../../../../images/about_me_page_images/welcome/5.jpg';
import WelcomePicture6 from '../../../../images/about_me_page_images/welcome/6.jpg';
import WelcomePicture7 from '../../../../images/about_me_page_images/welcome/7.jpg';
import WelcomePicture8 from '../../../../images/about_me_page_images/welcome/8.jpg';
import WelcomePicture9 from '../../../../images/about_me_page_images/welcome/9.jpg';
import WelcomePicture10 from '../../../../images/about_me_page_images/welcome/10.jpg';

import './welcomeCarouselStyles.css';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

function WelcomeCarousel() {
	const autoPlayOptions = {
		delay: 2500
	};

	return (
		<>
			<Swiper
				modules={[Navigation, Autoplay]}
				autoplay={autoPlayOptions}
				navigation={true}
				loop={true}
				className='mySwiper'
			>
				<SwiperSlide>
					<img src={WelcomePicture1} />
				</SwiperSlide>
				<SwiperSlide>
					<img src={WelcomePicture2} />
				</SwiperSlide>
				<SwiperSlide>
					<img src={WelcomePicture4} />
				</SwiperSlide>
				<SwiperSlide>
					<img src={WelcomePicture5} />
				</SwiperSlide>
				<SwiperSlide>
					<img src={WelcomePicture6} />
				</SwiperSlide>
				<SwiperSlide>
					<img src={WelcomePicture7} />
				</SwiperSlide>
				<SwiperSlide>
					<img src={WelcomePicture8} />
				</SwiperSlide>
				<SwiperSlide>
					<img src={WelcomePicture9} />
				</SwiperSlide>
				<SwiperSlide>
					<img src={WelcomePicture10} />
				</SwiperSlide>
			</Swiper>
		</>
	);
}

export default WelcomeCarousel;
