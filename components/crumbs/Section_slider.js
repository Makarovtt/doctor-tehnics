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
    background: #eee;
    height: 420px;
    /* .swiper {
        max-width: 1200px;
        height: 420px;
    } */
    @media (min-width: 576px) {
        .swiper {
            max-width: 540px;
        }
    }
    @media (min-width: 768px) {
        .swiper {
            max-width: 720px;
        }
    }
    @media (min-width: 992px) {
        .swiper {
            max-width: 960px;
        }
    }
    @media (min-width: 1200px) {
        .swiper {
            max-width: 1140px;
        }
    }
    @media (min-width: 1400px) {
        .swiper {
            max-width: 1200px;
        }
    }
`;