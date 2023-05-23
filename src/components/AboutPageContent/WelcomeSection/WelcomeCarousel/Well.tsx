// import Carousel from 'react-bootstrap/Carousel';

import WelcomePicture1 from '../../../../images/about_me_page_images/welcome/1.jpg';
import WelcomePicture2 from '../../../../images/about_me_page_images/welcome/2.png';
// import WelcomePicture3 from '../../../../images/about_me_page_images/welcome/3.JPEG';
import WelcomePicture4 from '../../../../images/about_me_page_images/welcome/4.jpg';
import WelcomePicture5 from '../../../../images/about_me_page_images/welcome/5.jpg';
import WelcomePicture6 from '../../../../images/about_me_page_images/welcome/6.jpg';
import WelcomePicture7 from '../../../../images/about_me_page_images/welcome/7.jpg';
import WelcomePicture8 from '../../../../images/about_me_page_images/welcome/8.jpg';
import WelcomePicture9 from '../../../../images/about_me_page_images/welcome/9.jpg';
import WelcomePicture10 from '../../../../images/about_me_page_images/welcome/10.jpg';

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import './styles.css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';

function Well() {
	const slides = [
		{
			url: WelcomePicture1
		},
		{
			url: WelcomePicture2
		},
		// {
		// 	url: WelcomePicture3
		// },

		// {
		// 	url: WelcomePicture4
		// },
		// {
		// 	url: WelcomePicture5
		// },
		{
			url: WelcomePicture6
		},
		{
			url: WelcomePicture7
		},
		{
			url: WelcomePicture8
		},
		{
			url: WelcomePicture9
		},
		{
			url: WelcomePicture10
		}
	];

	const [currentIndex, setCurrentIndex] = useState(0);

	const prevSlide = () => {
		const isFirstSlide = currentIndex === 0;
		const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex);
	};

	const nextSlide = () => {
		const isLastSlide = currentIndex === slides.length - 1;
		const newIndex = isLastSlide ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	};

	const goToSlide = (slideIndex: React.SetStateAction<number>) => {
		setCurrentIndex(slideIndex);
	};

	return (
		<>
			<Swiper
				navigation={true}
				modules={[Navigation]}
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

export default Well;
