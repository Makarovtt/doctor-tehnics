import styled from "styled-components";
import Image from "next/image";

const Header = () => {

    return (
        <HeaderBlock>
            <div className="main">
                <div className="logo_block">
                    <Image width={250} height={100} src='/img/logo.png' title='Логотип Доктор Техникс' alt='Логотип' />
                </div>
                <div className="right_block">

                </div>
            </div>
        </HeaderBlock>
    );
}

export default Header;

const HeaderBlock = styled.header`

    display: flex;

    @media (min-width: 576px) {
        .main {
            max-width: 540px;
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