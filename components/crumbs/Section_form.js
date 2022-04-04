import { useState, useEffect } from "react";
import styled from "styled-components";

const stateDefault = {
    inputName: '',
    inputPhone: '',
    showData: {
        nameU: '',
        phone: '',
    }
}

const SectionForm = () => {

    const [userState, setUserState] = useState(stateDefault);

    const { inputName, inputPhone, showData } = userState;
    const { nameU, phone } = showData;

    const [nameUserDirty, setNameUserDirty] = useState(false);
    const [phoneUserDirty, setPhoneUserDirty] = useState(false);

    const [nameUserError, setNameUserError] = useState('Поле Имя не может быть пустым');
    const [phoneUserError, setPhoneUserError] = useState('Поле Телефон не может быть пустым');

    const handleNameChange = ({ target: {value } }) => {
        setUserState(pre => {
            return {
                ...pre,
                inputName: value,
            }
        })

        if(value.length < 3 || value.length > 24) {
            setNameUserError('Поле Имя должено быть длиннее 2 и короче 24 символов')
            if(!value) {
                setNameUserError('Поле Имя не может быть пустым');
            }
        } else {
            setNameUserError(null);
        }
    }
    const handlePhoneChange = ({ target: {value } }) => {
        setUserState(pre => {
            return {
                ...pre,
                inputPhone: value,
            }
        })

        if(value.length < 7 || value.length > 24) {
            setPhoneUserError('Поле Телефон должно быть длиннее 6 и короче 24 символов')
            if(!value) {
                setPhoneUserError('Поле Телефон не может быть пустым');
            }
        } else {
            setPhoneUserError(null);
        }
    }

    const handleShow = (e) => {
        e.preventDefault();
        const { inputName, inputPhone} = userState;
        setUserState(pre => {
            return {
                ...pre,
                inputName: '',
                inputPhone: '',
                showData: {
                    nameU: inputName,
                    phone: inputPhone,
                }
            }
        })
    }
    // const [nameUser, setNameUser] = useState();
    // const [password, setPassword] = useState();

    const[formValid, setFormValid] = useState(false)
    useEffect( () => {
        if (nameUserError || phoneUserError) {
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    }, [nameUserError, phoneUserError])

    // const nameUserHandler = (e) => {
    //     setNameUser(e.target.value);
    //     const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        
    //     if(!re.test(String(e.target.value).toLowerCase())) {
    //         setNameUserError('Некорректный Email')
    //     } else {
    //         setNameUserError('');
    //     }
    // }

    // const passwordHandler = (e) => {
    //     setPassword(e.target.value)
    //     if(e.target.value.length < 3 || e.target.value.length > 8) {
    //         setPasswordError('Пароль должен быть длиннее 3 и короче 8 символов')
    //         if(!e.target.value) {
    //             setPasswordError('Пароль не может быть пустым');
    //         }
    //     } else {
    //         setPasswordError('');
    //     }
    // }

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'nameUser':
                setNameUserDirty(true)
                break
            case 'phoneUser':
                setPhoneUserDirty(true)
                break
        }
    }

    return (
        <Section>
            <div className="main_section">
                <h2>Сломался любимый девайс? Приедем и починим. Просто оставьте заявку!</h2>
                <form>
                    <div className="inputDiv">
                        <label>
                            <input 
                                onBlur={e => blurHandler(e)} 
                                value={inputName}
                                onChange={handleNameChange}
                                type="text" 
                                name="nameUser" 
                                placeholder="Ваше Имя" 
                            />
                            <div className='error_text'>
                            {(nameUserDirty && nameUserError) && <span>{nameUserError}</span>}
                            </div>
                        </label>
                    </div>
                    <div className="inputDiv">
                        <label>
                            <input 
                                onBlur={e => blurHandler(e)} 
                                value={inputPhone}
                                onChange={handlePhoneChange}
                                type="text" 
                                name="phoneUser" 
                                placeholder="Ваше Телефон" 
                            />
                            <div className='error_text'>
                                {(phoneUserDirty && phoneUserError) && <span>{phoneUserError}</span>}
                            </div>
                        </label>
                    </div>
                    <div className="inputDiv btn_div">
                        <button 
                            onClick = { handleShow }
                            disabled={!formValid}
                        >
                            Заказать
                        </button>
                    </div>
                </form>

                <h1>{nameU}</h1>
                <h2>{phone}</h2>
            </div>
        </Section>
    );
}

export default SectionForm;

const Section = styled.section`
    background-color: #c6d4f5;

    .main_section {
        margin: 0 auto;
        padding: 10px 0;
    }

    form {
        max-width: 500px;
        width: 100%;
        margin: 40px auto 10px;
    }
    input {
        width: 100%;
    }
    .inputDiv {
        margin: 15px 0;
    }
    .inputDiv input {
        display: block;
        width: 100%;
        height: calc(2.25rem + 2px);
        padding: 0.375rem 0.75rem;
        font-family: inherit;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        color: #212529;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid #bdbdbd;
        border-radius: 0.25rem;
        transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    }
    .inputDiv input::placeholder {
        color: #212529;
        opacity: 0.4;
    }

    .inputDiv input:focus {
        color: #212529;
        background-color: #fff;
        border-color: #bdbdbd;
        outline: 0;
        box-shadow: 0 0 0 0.2rem rgba(158, 158, 158, 0.25);
    }

    .inputDiv input:disabled,
    .inputDiv input[readonly] {
        background-color: #f5f5f5;
        opacity: 1;
    }
    .error_text {
        color: red;
        height: 15px;
        font-size: 14px;
    }

    .inputDiv button {
        display: inline-block;	
        box-sizing: border-box;
        padding: 0 24px;
        margin: 0 auto 0;
        outline: none;
        border: none;    
        border-radius: 3px;
        height: 37px;
        line-height: 37px;
        font-size: 14px;
        text-transform: uppercase;
        font-weight: bold;
        text-decoration: none;
        color: #07bc4c;
        background-color: #fff;
        cursor: pointer;
        user-select: none;
        appearance: none;
        touch-action: manipulation;  
        transition: box-shadow .18s ease-out,background .18s ease-out,color .18s ease-out;
    }
    .inputDiv button:focus-visible {
        box-shadow: 0 0 0 3px lightskyblue;
    }
    .inputDiv button:hover {
        box-shadow: 0 1px 1px 0  #cfcfcf, 0 2px 5px 0  #cfcfcf;
    }
    .inputDiv button:active {
        background-color: #efefef !important;
    }
    .inputDiv button:disabled {
        background-color: #eee;
        color: #444;
        pointer-events: none;
    }
    .btn_div {
        text-align: center;
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