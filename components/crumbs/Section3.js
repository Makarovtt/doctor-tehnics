import styled from "styled-components";

const Section3 = () => {

    return (
        <Section>
            <div className="main_section">
                <h2>Почему это удобно?</h2>
                <div className="block">

                    <div className="li">
                        <div className="left">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="53" viewBox="0 0 22 53" fill="none">
                                <path d="M9.34083 12.12L0.660828 12.68V4.98001L10.7408 0.640015H21.4508V53H9.34083V12.12Z" fill="#EBF0F7"></path>
                            </svg>
                        </div>
                        <div className="right">
                            <h3>НЕ НУЖНО НИКУДА ЕХАТЬ</h3>
                            <p>Вы не тратите время и силы на дорогу. Мастер сам подъедет в любое удобное для Вас место: домой, в офис или даже в кафе</p>
                        </div>
                    </div>
                    
                    <div className="li">
                        <div className="left">
                            <svg xmlns="http://www.w3.org/2000/svg" width="37" height="53" viewBox="0 0 37 53" fill="none">
                                <path d="M0.570557 43.34L17.2306 26.54C19.0972 24.72 20.4506 23.0867 21.2906 21.64C22.1772 20.1933 22.6206 18.7 22.6206 17.16C22.6206 15.4334 22.1306 14.1733 21.1506 13.38C20.1706 12.54 18.5606 12.12 16.3206 12.12H1.55056V2.53002C4.77056 1.92335 7.64056 1.45668 10.1606 1.13001C12.6806 0.803347 15.5039 0.640015 18.6306 0.640015C24.5106 0.640015 28.6639 1.85335 31.0906 4.28001C33.5172 6.66001 34.7306 10.2533 34.7306 15.06C34.7306 18.3733 34.0772 21.3134 32.7706 23.88C31.5106 26.4467 29.5039 29.1067 26.7506 31.86L16.5306 42.15H36.2006V53H0.570557V43.34Z" fill="#EBF0F7"></path>
                            </svg>
                        </div>
                        <div className="right">
                            <h3>БЫСТРО</h3>
                            <p>Большинство операций специалист сможет выполнить всего за 20 минут. Нет смысла ради этого тратить время на дорогу в сервис и оставлять телефон на сутки.</p>
                        </div>
                    </div>
                    
                    <div className="li">
                        <div className="left">
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="54" viewBox="0 0 36 54" fill="none">
                                <path d="M20.5498 53.42C13.1765 53.42 6.43313 52.86 0.319794 51.74V42.01H15.8598C18.6598 42.01 20.6198 41.73 21.7398 41.17C22.8598 40.61 23.4198 39.6067 23.4198 38.16V36.48C23.4198 33.7267 21.3898 32.28 17.3298 32.14L4.72979 31.58V22.27L16.7698 21.5C18.8698 21.4067 20.3865 21.08 21.3198 20.52C22.2998 19.96 22.7898 19.05 22.7898 17.79V16.6C22.7898 15.0133 22.2298 13.87 21.1098 13.17C20.0365 12.47 18.1931 12.12 15.5798 12.12H1.22979V2.46001C8.50979 1.24668 14.6465 0.640015 19.6398 0.640015C24.4931 0.640015 28.2265 1.73668 30.8398 3.93002C33.4531 6.07668 34.7598 9.32002 34.7598 13.66V17.37C34.7598 22.3633 32.7065 25.5367 28.5998 26.89C30.6998 27.5433 32.3798 28.8733 33.6398 30.88C34.8998 32.84 35.5298 35.2667 35.5298 38.16V40.47C35.5298 44.6233 34.1998 47.82 31.5398 50.06C28.9265 52.3 25.2631 53.42 20.5498 53.42Z" fill="#EBF0F7"></path>
                            </svg>
                        </div>
                    <div className="right">
                        <h3>НЕ НУЖНО ОСТАВЛЯТЬ УСТРОЙСТВО ЧУЖИМ ЛЮДЯМ</h3>
                        <p>Сегодня телефон стал частью владельца. Он хранит огромное количество приватной информации. Не хотелось бы чтоб она попала к чужим людям? Наш мастер выполнит все работы на месте. Вы сможете проконтролировать все его действия</p>
                    </div>

                </div>
            </div>
        </div>
    </Section>
    );
}

export default Section3;

const Section = styled.section`
    background-color: #fff;
    p {
        margin: 0 0 10px;
        line-height: 1.5;
    }
    .main_section {
        margin: 0 auto;
        padding: 10px 0;
    }
    .block {
        max-width: 600px;
        margin: 0 auto;
    }
    .li {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        margin: 20px 0;
    }
    .left {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        padding: 20px;
        margin: 0 40px 0 0;
        min-width: 72px;
    }

    @media (min-width: 120px) {
        .main_section {
            max-width: 210px;
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