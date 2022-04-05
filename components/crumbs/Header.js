import styled from "styled-components";
import Image from "next/image";

import WhatsappSvg from '../SVG/header_whatsapp.svg';
import PhoneSvg from '../SVG/header_phone.svg';
import TelegramSvg from '../SVG/footer_telegram.svg';

const Header = () => {

    return (
        <HeaderBlock>
            <div className="main">
                <div className="logo_block">
                    <Image width={250} height={100} src='/img/logo.png' title='Логотип Доктор Техникс' alt='Логотип' />
                </div>
                <div className="right_block">
                    <div className="top_block">
                        <div className="time_work_out">
                            <div className="time_work">
                                Работаем для вас: с 10-00 до 22-00 без перерывов и выходных
                            </div>
                        </div>
                        <div className="dash">
                        </div>
                        <div className="society">
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
                            <div className="icon_soc">
                                7 (988) 172-87-76
                            </div>
                        </div>
                    </div>
                    {/* <div clasName='bottom_block'>

                    </div> */}
                </div>
            </div>
        </HeaderBlock>
    );
}

export default Header;

const HeaderBlock = styled.header`

    display: flex;
    .main {
        margin: 0 auto 20px;
        width: 100%;
        padding: 15px 0;
        align-items: center;
    }
    main div {
        -webkit-flex: 1;
        -ms-flex: 1;
        flex: 1;
    }
    .logo_block {
        flex-direction: column;
    }
    .right_block {
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }
    .top_block {
        align-items: center;
    }
    .top_block div {
        -webkit-flex: 1;
        -ms-flex: 1;
        flex: 1;
    }
    .time_work_out {
        max-width: 100%;
        flex: 0 0 auto;
        width: auto;
        border-radius: 6px;
        background: #dfd;
        margin: 0 7px;
    }
    .time_work {
        display: flex;
        align-items: center;
        padding: 7px 10px;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
    }
    .dash {
        border-top: 2px dashed rgba(33, 36, 89, 0.5);
        width: auto;
        margin: 0 7px;
    }
    .society {
        display: flex;
        //flex-direction: column;
        align-items: center;
        justify-content: center;
        width: auto;
        white-space: nowrap;
        background: #dfd;
        padding: 7px 10px;
        border-radius: 6px;
        margin: 0 7px;
    }
    .icon_soc {
        margin: 0 4px;
    }

    @media (min-width: 120px) {
        .main {
            max-width: 210px;
            display: block;
            span {
                max-width: 250px;
            }
        }
        .logo_block {
            display: block;
            padding: 20px 20px;
            text-align: center;
        }
        .top_block {
            display: block;
            margin: 5px 0;
        }
        .time_work {
            white-space: normal;
        }
    }
    @media (min-width: 320px) {
        .main {
            max-width: 530px;
        }
        .society {
            padding: 10px 150px;
        }
    }
    @media (min-width: 576px) {
        .main {
            max-width: 540px;
            span {
                max-width: 250px;
            }
        }
        .society {
            padding: 10px 250px;
        }
    }
    @media (min-width: 768px) {
        .main {
            max-width: 720px;
        }
    }
    @media (min-width: 992px) {
        .main {
            max-width: 960px;
            display: flex;
        }
        .logo_block {
            display: flex;
            padding: 0;
        }
        .top_block {
            display: flex;
            margin: 5px 40px;
        }
        .time_work {
            white-space: nowrap;
        }
        .society {
            padding: 7px 10px;
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