import styled from "styled-components";

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
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                            <circle cx="11.1729" cy="10.7243" r="10.7243" fill="#fff"></circle>
                            <path d="M11.1536 3.91125H11.1502C7.40522 3.91125 4.35983 6.95749 4.35983 10.7033C4.35983 12.1891 4.83867 13.5662 5.65287 14.6843L4.80641 17.2076L7.41711 16.373C8.4911 17.0844 9.77225 17.4954 11.1536 17.4954C14.8986 17.4954 17.9439 14.4483 17.9439 10.7033C17.9439 6.95834 14.8986 3.91125 11.1536 3.91125Z" fill="#4CAF50"></path>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.93927 10.7032C3.93927 6.72523 7.17285 3.4906 11.1502 3.4906H11.1536C15.131 3.4906 18.3645 6.72612 18.3645 10.7032C18.3645 14.6803 15.131 17.9158 11.1536 17.9158C9.76015 17.9158 8.46129 17.5216 7.35653 16.8338L4.93447 17.608C4.78349 17.6563 4.61819 17.6156 4.50691 17.5027C4.39563 17.3898 4.35727 17.224 4.40769 17.0737L5.18641 14.7524C4.39858 13.598 3.93927 12.2022 3.93927 10.7032ZM11.1502 4.33172C7.63759 4.33172 4.78039 7.18956 4.78039 10.7032C4.78039 12.0973 5.22938 13.3882 5.99285 14.4366C6.07301 14.5467 6.09491 14.6888 6.05159 14.818L5.4692 16.5541L7.28905 15.9723C7.41052 15.9335 7.54305 15.9518 7.64937 16.0223C8.65647 16.6894 9.85721 17.0747 11.1536 17.0747C14.6661 17.0747 17.5234 14.2161 17.5234 10.7032C17.5234 7.19038 14.6661 4.33172 11.1536 4.33172H11.1502Z" fill="#4CAF50"></path>
                            <path d="M15.0254 13.4582C14.8626 13.9233 14.2166 14.3091 13.7013 14.4218C13.3487 14.4977 12.8882 14.5583 11.3381 13.908C9.35524 13.0767 8.07833 11.0377 7.97881 10.9054C7.88351 10.7731 7.17758 9.82571 7.17758 8.84591C7.17758 7.8661 7.66928 7.389 7.86748 7.18416C8.03026 7.01602 8.2993 6.93921 8.55738 6.93921C8.64088 6.93921 8.71594 6.94348 8.78341 6.94689C8.98161 6.95543 9.08113 6.96737 9.21186 7.28402C9.37464 7.68089 9.77103 8.6607 9.81826 8.76141C9.86634 8.86212 9.91441 8.99868 9.84694 9.13097C9.78368 9.26753 9.72802 9.32813 9.6285 9.4442C9.52898 9.56028 9.43452 9.64904 9.335 9.77365C9.24391 9.88204 9.14101 9.99812 9.25572 10.1987C9.37042 10.395 9.76682 11.0496 10.3504 11.5754C11.1036 12.2539 11.7142 12.4707 11.9327 12.5629C12.0954 12.6311 12.2894 12.6149 12.4083 12.4869C12.5593 12.3222 12.7457 12.0491 12.9355 11.7802C13.0704 11.5873 13.2408 11.5634 13.4196 11.6317C13.6018 11.6957 14.5658 12.1779 14.764 12.2778C14.9622 12.3785 15.0929 12.4263 15.141 12.5108C15.1882 12.5953 15.1882 12.9922 15.0254 13.4582Z" fill="#fff"></path>
                        </svg>
                    </div>
                    <div className="icon_soc">
                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none">
                            <path d="M22.4299 10.7664C22.4299 16.7125 17.6097 21.5327 11.6636 21.5327C5.7174 21.5327 0.897217 16.7125 0.897217 10.7664C0.897217 4.82018 5.7174 0 11.6636 0C17.6097 0 22.4299 4.82018 22.4299 10.7664Z" fill="#9330B2"></path>
                            <path d="M13.1017 3.68689H10.2255C7.34199 3.68689 4.99622 6.03267 4.99622 8.91613V10.9149C4.99622 12.2928 5.55477 13.6205 6.51894 14.5949V17.2355C6.51894 17.4954 6.65759 17.7354 6.8825 17.8655C6.99519 17.9306 7.12087 17.9631 7.24654 17.9631C7.37206 17.9631 7.49757 17.9308 7.60993 17.8659L10.5964 16.1442H13.1017C15.9852 16.1442 18.3309 13.7984 18.3309 10.9149V8.91613C18.3309 6.03267 15.9852 3.68689 13.1017 3.68689ZM17.2174 10.9968C17.2174 13.1906 15.4225 14.9857 13.2285 14.9857H10.8851L7.21024 17.2355V13.7393C6.52962 13.0228 6.10972 12.0569 6.10972 10.9969V8.83416C6.10972 6.64034 7.90466 4.8454 10.0985 4.8454H13.2285C15.4223 4.8454 17.2174 6.64034 17.2174 8.83416V10.9968Z" fill="white"></path>
                            <path d="M10.9028 6.91068C10.8885 6.89655 10.8764 6.87979 10.8668 6.86073C10.8199 6.76627 10.8583 6.6516 10.9528 6.60446C11.9649 6.10028 13.3046 6.38087 14.2105 7.28672C15.116 8.19224 15.3967 9.5313 14.8931 10.5431C14.8461 10.6376 14.7314 10.676 14.6368 10.629C14.5423 10.582 14.5039 10.4674 14.5509 10.3729C14.9824 9.506 14.7312 8.34798 13.9402 7.5568C13.1489 6.76545 11.9904 6.51459 11.1231 6.94665C11.0477 6.98411 10.9593 6.96719 10.9028 6.91068Z" fill="white"></path>
                            <path d="M11.3369 7.7518C11.3216 7.73636 11.3086 7.71829 11.2989 7.69759C11.2541 7.60198 11.2953 7.4883 11.3909 7.44361C12.0867 7.11817 12.9647 7.31005 13.5759 7.92118C14.1868 8.53231 14.379 9.40973 14.0541 10.105C14.0092 10.2006 13.8956 10.2418 13.7999 10.1971C13.7045 10.1524 13.6633 10.0386 13.7078 9.94316C13.965 9.39314 13.8034 8.68919 13.3056 8.19142C12.8078 7.69365 12.1036 7.53216 11.5529 7.78975C11.478 7.82474 11.3921 7.807 11.3369 7.7518Z" fill="white"></path>
                            <path d="M11.7661 8.59156C11.7476 8.57316 11.7326 8.55049 11.7228 8.52437C11.6853 8.4258 11.7349 8.3154 11.8335 8.27795C12.2005 8.13863 12.636 8.2469 12.943 8.55394C13.2501 8.86098 13.3587 9.29633 13.2195 9.66284C13.1822 9.76157 13.0718 9.81118 12.9733 9.77373C12.8745 9.73627 12.8249 9.62604 12.8624 9.52731C12.9468 9.30454 12.8706 9.02198 12.6728 8.82418C12.4752 8.62639 12.1923 8.55049 11.9692 8.63526C11.8966 8.66269 11.8177 8.64314 11.7661 8.59156Z" fill="white"></path>
                            <path d="M10.3868 8.25645L9.06041 6.93004C8.89186 6.76165 8.65382 6.72206 8.53126 6.84445L8.40312 6.97276C7.77819 7.59752 7.66254 8.50846 8.17017 9.12747C8.80019 9.89532 9.50118 10.6734 10.1751 11.3215C10.8232 11.9953 11.6012 12.6963 12.369 13.3263C12.9881 13.834 13.899 13.7183 14.5238 13.0936L14.6521 12.9653C14.7745 12.8429 14.7349 12.6047 14.5663 12.4363L13.2399 11.1099C12.9251 10.7949 12.7175 10.8385 12.5949 10.9609C12.5949 10.9609 12.4277 11.1309 12.3971 11.166V11.1655C12.2779 11.285 11.9758 11.3116 11.7029 11.1407C11.4545 10.985 11.1974 10.759 10.9664 10.5301C10.7376 10.2991 10.5115 10.042 10.3558 9.79363C10.1849 9.52076 10.2115 9.21865 10.331 9.09938H10.3305C10.3656 9.06882 10.5357 8.90158 10.5357 8.90158C10.6582 8.77903 10.7016 8.57138 10.3868 8.25645Z" fill="white"></path>
                        </svg>
                    </div>
                    <div className="icon_soc">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.7243 21.4486C16.6472 21.4486 21.4486 16.6472 21.4486 10.7243C21.4486 4.80144 16.6472 0 10.7243 0C4.80143 0 0 4.80144 0 10.7243C0 16.6472 4.80143 21.4486 10.7243 21.4486ZM14.6134 16.9214C15.4518 16.7269 16.5028 16.0607 16.7676 15.2574C17.0325 14.4527 17.0325 13.7673 16.9556 13.6214C16.8936 13.5057 16.7469 13.4298 16.5278 13.3165C16.4708 13.287 16.4089 13.255 16.3423 13.2191C16.0198 13.0466 14.4515 12.2139 14.1551 12.1033C13.8642 11.9854 13.587 12.0267 13.3675 12.3598C13.3258 12.4225 13.2842 12.4854 13.2428 12.548C12.9779 12.9481 12.7223 13.3342 12.5099 13.5802C12.3165 13.8013 12.0009 13.8293 11.736 13.7113C11.7072 13.6984 11.6741 13.6841 11.637 13.668C11.2177 13.4861 10.2877 13.0826 9.16194 12.0061C8.21243 11.0982 7.56753 9.96771 7.38092 9.62872C7.1977 9.28865 7.35575 9.08925 7.50181 8.90494L7.5099 8.89473C7.60407 8.76958 7.69547 8.66536 7.78731 8.56061C7.85337 8.48528 7.91966 8.40967 7.9874 8.32582L8.01679 8.28947C8.16062 8.11185 8.24627 8.00606 8.34278 7.78491C8.45255 7.55646 8.37434 7.32063 8.29613 7.14671C8.24232 7.02493 7.90991 6.15863 7.62456 5.41492C7.50244 5.09665 7.38893 4.80084 7.30957 4.59544C7.09689 4.04865 6.93498 4.028 6.61253 4.01326L6.58236 4.01163C6.4805 4.00609 6.36832 4 6.2448 4C5.82493 4 5.38722 4.13264 5.1224 4.423L5.09349 4.45464C4.7547 4.82472 4 5.64919 4 7.29263C4 8.93924 5.08766 10.5328 5.28893 10.8277L5.30352 10.8491C5.31563 10.8662 5.33846 10.9017 5.37169 10.9534C5.78265 11.5926 7.78413 14.706 10.7687 16.0342C13.2907 17.1573 14.0398 17.0526 14.6134 16.9214Z" fill="#fff"></path>
                        </svg>
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
        white-space: nowrap;
    }

    .main {
        margin: 0 auto;
        padding: 10px 0 20px;
        display: flex;
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
        margin-left: 130px;

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