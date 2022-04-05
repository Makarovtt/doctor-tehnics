import styled from "styled-components";
import Left from '../SVG/section2_left.svg';
import Center from '../SVG/section2_center.svg';
import Right from '../SVG/section2_right.svg';

const Section2 = () => {

    return (
        <Section>
            <div className="main_section">
                <h2>Как мы работаем?</h2>
                <div className="block">
                    <div className="left">
                        <Left 
                            width="119"
                            height="84"
                        />
                        <h3>ПОЗВОНИТЕ НАМ ИЛИ ОСТАВЬТЕ ЗАЯВКУ</h3>
                        <p>Оператор свяжется с Вами, сориентирует по цене, согласует удобное время и место, оформит заявку</p>
                    </div>
                    
                    <div className="left">
                        <Center 
                            width="179"
                            height="88"
                        />
                        <h3>МАСТЕР ВЫЕДЕТ К ВАМ</h3>
                        <p>Наш специалист выедет к Вам со всеми необходимыми материалами и оборудованием и произведёт ремонт устройства</p>
                    </div>
                    
                    <div className="left">
                        <Right 
                            width="143"
                            height="88"
                        />
                        <h3>ОПЛАТИТЕ НА МЕСТЕ</h3>
                        <p>Когда всё будет готово, оплатите ремонт на месте. Мы принимаем наличные или перевод на Сбербанк Он-Лайн</p>
                    </div>
                </div>
            </div>
        </Section>
    );
}

export default Section2;

const Section = styled.section`
    background-color: #c6d4f5;

    .main_section {
        margin: 0 auto;
        padding: 10px 0;
    }
    .block {
        margin: 20px 0;
    }
    .block div {
        -webkit-flex: 1;
        -ms-flex: 1;
        flex: 1;
        padding: 0 30px;
    }
    .left {
        display: flex;
        flex-direction: column;
    }

    .img_left {
        /* width: 154px;
        height: 110px; */
    }

    @media (min-width: 120px) {
        .main_section {
            max-width: 210px;
        }
        .block {
            display: block;
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
        .block {
            display: flex;
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