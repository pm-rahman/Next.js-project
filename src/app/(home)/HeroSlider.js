// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';

const HeroSlider = () => {
    return (
        <Swiper
            modules={[Navigation,EffectFade,Autoplay]}
            navigation
            autoplay
            effect='fade'
            slidesPerView={1}
        >
            <SwiperSlide>Slide 1</SwiperSlide>
            ...
        </Swiper>
    );
};

export default HeroSlider;