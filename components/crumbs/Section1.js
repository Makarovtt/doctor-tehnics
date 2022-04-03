import styled from "styled-components";

const Section1 = () => {

    return (
        <Section>
            <div className="main_section">
                <h1>Ремонт цифровой техники</h1>
                <p>Компания <a href="/" title="Доктор Техникс">Доктор Техникс</a> выполняет ремонт цифровой техники в любом удобном для Вас месте</p>
                
                <Block>
                    <div className="left">
                        <h2>Ремонт мобильных телефонов</h2>
                        <ul>
                            <li>Замена дисплея (экрана)</li>
                            <li>Замена тачскрина (переклейка стекла)</li>
                            <li>Замена аккумулятора</li>
                            <li>Замена системного разъёма (зарядки)</li>
                            <li>Замена динамиков и микрофонов</li>
                            <li>Замена камер</li>
                            <li>Замена всех микросхем</li>
                            <li>Прочие работы, включая все виды пайки</li>
                            <li>Восстановление после воды</li>
                            <li>Внутренняя очистка от пыли</li>
                            <li>Замена программного обеспечения (прошивка)</li>
                            <li>Выкуп неисправных телефонов</li>
                        </ul>
                    </div>
                    
                    <div className="right">
                        <h2>Ремонт ноутбуков и ПК</h2>
                        <ul>
                            <li>Апгрэйд</li>
                            <li>Замена комплектующих</li>
                            <li>Восстановление микросхем</li>
                            <li>Чистка от пыли</li>
                            <li>Настройка программного обеспечения</li>
                        </ul>
                    </div>
                </Block>
                
                <p>Звоните и мы вернём к жизни Ваш девайс!</p>
            </div>
        </Section>
    );
}

export default Section1;

const Section = styled.section`
    margin: 15px 0;

    .main_section {
        max-width: 1140px;
        margin: 0 auto;
        padding: 10px 0;
    }
    p {
        margin: 15px 0 10px;
        line-height: 1.5;
        text-align: center;
        color: #6a6a6a;
        font-family: "Exo 2",Exo2;
        font-size: 22px;
        font-weight: 600;
        line-height: 29px;
    }
`;

const Block = styled.div`
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    margin: 30px 0;

    div {
        -webkit-flex: 1;
        -ms-flex: 1;
        flex: 1;
    }
    .left {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
    }
    h2 {
        box-shadow: -1.216px 6.894px 15px 0 rgb(37 117 252 / 20%);
        border-radius: 0 0 5px 5px;
        background-color: #fff;
        padding: 18px 20px;
        margin: 0 10px;
    }
    ul {
        margin: 30px 0 20px 90px;
    }
    li {
        display: list-item;
        text-align: -webkit-match-parent;
    }
`;