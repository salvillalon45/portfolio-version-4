import React, { useState } from 'react';

import Carousel from 'react-bootstrap/Carousel';

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

function WelcomeCarousel() {
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
		<div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group'>
			<div
				style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
				className='w-full h-full rounded-2xl bg-center bg-cover '
			></div>
			{/* <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500'> */}
			{/* <img
				className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
				src={slides[currentIndex].url}
			/> */}
			{/* </div> */}

			{/* Left Arrow */}
			<div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
				{/* <BsChevronCompactLeft onClick={prevSlide} size={30} /> */}
				<i className='bi bi-linkedin' onClick={prevSlide}></i>
			</div>

			{/* Right Arrow */}
			<div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
				{/* <BsChevronCompactRight onClick={nextSlide} size={30} /> */}
				<i className='bi bi-linkedin' onClick={nextSlide}></i>
			</div>
			<div className='flex top-4 justify-center py-2'>
				{slides.map((slide, slideIndex) => (
					<div
						key={slideIndex}
						onClick={() => goToSlide(slideIndex)}
						className='text-2xl cursor-pointer'
					>
						{/* <i className='bi bi-linkedin' onClick={nextSlide}></i> */}
						{/* <RxDotFilled /> */}
						<i className='bi bi-circle-fill'></i>
					</div>
				))}
			</div>
		</div>
	);
}

export default WelcomeCarousel;
