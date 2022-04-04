import styled from "styled-components";

const MainBlock = ({props}) => {

    return (
        <Main>
            {props}
        </Main>
    );
}

export default MainBlock;

const Main = styled.div`

    margin: 0 auto;
    padding: 10px 0;

    @media (min-width: 120px) {
        max-width: 210px;
    }
    @media (min-width: 320px) {
        max-width: 310px;
    }
    @media (min-width: 120px) {
        max-width: 210px;
    }
    @media (min-width: 320px) {
        max-width: 310px;
    }
    @media (min-width: 576px) {
        max-width: 540px;
    }
    @media (min-width: 768px) {
        max-width: 720px;
    }
    @media (min-width: 992px) {
        max-width: 960px;
    }
    @media (min-width: 1200px) {
        max-width: 1140px;
    }
    @media (min-width: 1400px) {
        max-width: 1320px;
    }
`;