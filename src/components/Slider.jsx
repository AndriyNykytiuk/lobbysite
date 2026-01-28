import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import '../css/slider.css';
import nazk from '../pict/nazk.svg';
import gric from '../pict/gric.svg';
import alumni from '../pict/alumni.svg';

const slides = [
    { id: 1, image: nazk, alt: 'NAZK Logo', link: '#' },
    { id: 2, image: gric, alt: 'GRIC Logo', link: '#' },
    { id: 3, image: alumni, alt: 'Alumni Logo', link: '#' },
    { id: 4, image: nazk, alt: 'NAZK Logo', link: '#' },
    { id: 5, image: gric, alt: 'GRIC Logo', link: '#' },
    { id: 6, image: alumni, alt: 'Alumni Logo', link: '#' },
    { id: 7, image: nazk, alt: 'NAZK Logo', link: '#' },
    { id: 8, image: gric, alt: 'GRIC Logo', link: '#' },
    { id: 9, image: alumni, alt: 'Alumni Logo', link: '#' },
];

const Slider = () => {
    return (
        <div className="slider-container">
            <Swiper
                modules={[Autoplay]}
                spaceBetween={20}
                slidesPerView={7}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: false
                }}
                speed={2000}
                loop={true}
                loopAdditionalSlides={3}
                allowTouchMove={false}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 6,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 7,
                        spaceBetween: 40,
                    },
                }}
            >
                {[...slides, ...slides, ...slides].map((slide, index) => (
                    <SwiperSlide key={`${slide.id}-${index}`}>
                        <div className="slide-content">
                            <a href={slide.link}>
                                <img src={slide.image} alt={slide.alt} />
                            </a>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Slider;
