'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import mainSlider from '@/data/mainSlider';
import SingleHero from './SingleHero';
import { Autoplay, EffectFade, Navigation } from 'swiper';

const HeroSlider = () => {
    return (
        <section className="main-slider">
        <Swiper
          slidesPerView={1}
          loop
          navigation
          effect="fade"
          autoplay
          modules={[Navigation, EffectFade, Autoplay]}
        >
          {mainSlider.map((slider) => (
            <SwiperSlide key={slider.id}>
              <SingleHero slider={slider} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    );
};

export default HeroSlider;