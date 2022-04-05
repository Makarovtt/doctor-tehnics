import styled from "styled-components";

import LeftSvg from '../SVG/section4_left.svg';
import CenterSvg from '../SVG/section4_center.svg';
import RightSvg from '../SVG/section4_right.svg';

const Section4 = () => {

    return (
        <Section>
            <div className="main_section">
                <h2>
                    Почему клиенты выбирают нас?
                </h2>
                <div className="three_blocks">
                    <div className="left">
                        <LeftSvg 
                            width="83"
                            height="79"
                        />
                        <p>Только оригинальные запчасти и копии хорошего качества всегда в наличии</p>
                    </div>
                    <div className="center">
                        <CenterSvg 
                            width="135"
                            height="28"
                        />
                        <p>Большой опыт работы - более 4-х лет</p>
                    </div>
                    <div className="right">
                        <RightSvg 
                            width="75"
                            height="61"
                        />
                        <p>Гарантия, на все виды работ. Официальные квитанции бланков строгой отчётности</p>
                    </div>
                </div>
            </div>
        </Section>
    );
}

export default Section4;

const Section = styled.section`
    margin: 15px 0;

    .main_section {
        margin: 0 auto;
        padding: 10px 0;
    }
    svg {
        margin: 0 auto;
        height: 90px;
    }
    .three_blocks {
        margin: 30px 0;
    }
    .three_blocks div {
        flex: 1;
        text-align: center;
    }
    .left {
        display: flex;
        flex-direction: column;
    }

    @media (min-width: 120px) {
        .main_section {
            max-width: 210px;
        }
        .three_blocks {
            display: block;
        }
        .three_blocks div {
            margin: 0 20px;
            width: auto;
        }
    }
    @media (min-width: 320px) {
        .main_section {
            max-width: 310px;
        }
    }
    @media (min-width: 576px) {
        .main_section {
            max-width: 540px;
        }
    }
    @media (min-width: 768px) {
        .main_section {
            max-width: 720px;
        }
        .three_blocks {
            display: flex;
        }
        .three_blocks div {
            margin: 0 50px;
            width: 100%;
        }
    }
    @media (min-width: 992px) {
        .main_section {
            max-width: 960px;
        }
    }
    @media (min-width: 1200px) {
        .main_section {
            max-width: 1140px;
        }
    }
    @media (min-width: 1400px) {
        .main_section {
            max-width: 1320px;
        }
    }
`;