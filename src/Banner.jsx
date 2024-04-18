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
                    <p className='text-3xl font-bold text-white'>Welcome to <br />
                    Amar Bari</p>
                </SwiperSlide>
                <SwiperSlide className='py-52 slide2'>
                <p className='text-3xl font-bold text-white'>Welcome to <br />
                    Amar Bari</p>
                </SwiperSlide>
                <SwiperSlide className='py-52 slide3'>
                <p className='text-3xl font-bold text-white'>Welcome to <br />
                    Amar Bari</p>
                </SwiperSlide>
                <SwiperSlide className='py-52 slide4'>
                <p className='text-3xl font-bold text-white'>Welcome to <br />
                    Amar Bari</p>
                </SwiperSlide>
                <SwiperSlide className='py-52 slide5'>
                <p className='text-3xl font-bold text-white'>Welcome to <br />
                    Amar Bari</p>
                </SwiperSlide>
                <SwiperSlide className='py-52 r slide7'>
                <p className='text-3xl font-bold text-white'>Welcome to <br />
                    Amar Bari</p>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;