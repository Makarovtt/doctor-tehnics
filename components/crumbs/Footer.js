import styled from "styled-components";
import WhatsappSvg from '../SVG/footer_whatsapp.svg';
import PhoneSvg from '../SVG/footer_phone.svg';
import TelegramSvg from '../SVG/footer_telegram.svg';

const Footer = () => {

    return (
        <FooterBlock>
            <div className="main">
                <div className="left">
                    <p>© ИП Топалов, 2018 - 2022</p>
                </div>
                <div className="center">
                    <p>Работаем для вас: с 10-00 до 19-00 без перерывов и выходных</p>
                </div>
                <div className="right">
                    <div className="icon_soc">
                        <WhatsappSvg 
                            width="22"
                            height="22"
                        />
                    </div>
                    <div className="icon_soc">
                        <TelegramSvg 
                            width="22"
                            height="22"
                        />
                    </div>
                    <div className="icon_soc">
                        <PhoneSvg 
                            width="22"
                            height="22"
                        />
                    </div>
                    <div className="icon_soc phone">
                        7 (988) 172-87-76
                    </div>
                </div>
            </div>
        </FooterBlock>
    );
}

export default Footer;

const FooterBlock = styled.footer`
    background: #439a75;
    padding: 10px 0 60px;

    p {
        color: white;
        font-size: 14px;
    }

    .main {
        margin: 0 auto;
        padding: 10px 0 20px;
        width: 100%;
        padding: 15px 0;
        align-items: center;
    }
    .main div {
        flex: 1;
        /* margin: 0 20px; */
        width: 100%;
    }
    .left {
        display: flex;
        flex-direction: column;
    }

    .right {
        display: flex;
        max-width: 231px;

        div {
            flex: 1;
            margin: 0 5px;
        }
        .icon_soc {
            display: flex;
            flex-direction: column;
        }
        .phone {
            white-space: nowrap;
            color: white;
        }
    }

    @media (min-width: 120px) {
        .main {
            max-width: 210px;
            padding: 0 20px;
        }
        .main {
            display: block;
        }
        p {
            white-space: normal;
        }
        .right {
            margin-left: 0;
        }
    }
    @media (min-width: 320px) {
        .main {
            max-width: 310px;
        }
    }
    @media (min-width: 576px) {
        .main {
            max-width: 540px;
        }
    }
    @media (min-width: 768px) {
        .main {
            max-width: 720px;
            padding: 0;
        }
        .main {
            display: flex;
        }
        p {
            white-space: nowrap;
        }
        .right {
            margin-left: 80px;
        }
    }
    @media (min-width: 992px) {
        .main {
            max-width: 960px;
        }
    }
    @media (min-width: 1200px) {
        .main {
            max-width: 1140px;
        }
    }
    @media (min-width: 1400px) {
        .main {
            max-width: 1320px;
        }
    }
`;