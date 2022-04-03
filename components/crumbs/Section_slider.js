import Image from "next/image";
import styled from "styled-components";

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';


const Section_slider = () => {
    return (
        <SliderBlock>
            <Swiper
                spaceBetween={50}
                width={1200}
                height={420}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <img src='/img/slide1.jpg' alt='Слайд 1' />
                </SwiperSlide>
            </Swiper>
        </SliderBlock>
    );
};

export default Section_slider;

const SliderBlock = styled.section`
    .swiper {
        width: 1200px;
        height: 420px;
    }
`;