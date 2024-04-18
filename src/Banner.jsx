// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import './Style.css';

// import required modules
import { Navigation, Keyboard, Pagination, Autoplay, EffectFade } from 'swiper/modules';

const Banner = () => {
    return (
        <div className='mt-12 lg:mx-24'>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                keyboard={{
                    enabled: true,
                }}
                effect={'fade'}
                loop={true}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: true,
                  }}
                // pagination={{
                //     clickable: true,
                // }}
                navigation={true} modules={[Keyboard, Pagination, Navigation, Autoplay, EffectFade ]}
                className="mySwiper rounded-2xl">
                <SwiperSlide className='py-52 slide8'>
                    <p className='text-3xl font-bold'>I've carcked it</p>
                </SwiperSlide>
                <SwiperSlide className='py-52 slide2'>Slide 2</SwiperSlide>
                <SwiperSlide className='py-52 slide3'>Slide 3</SwiperSlide>
                <SwiperSlide className='py-52 slide4'>Slide 4</SwiperSlide>
                <SwiperSlide className='py-52 slide5'>Slide 5</SwiperSlide>
                <SwiperSlide className='py-52 r slide7'>Slide 6</SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;