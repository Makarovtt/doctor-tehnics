import { useState } from "react";
import styled from "styled-components";

const SectionForm = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const [emailDirty, setEmailDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);

    const [emailError, setEmailError] = useState('Email не может быть пустым');
    const [passwordError, setPasswordError] = useState('Пароль не может быть пустым');

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true)
                break
            case 'password':
                setPasswordDirty(true)
                break
        }
    }

    return (
        <Section>
            <div className="main_section">
                <h2>Сломался любимый девайс? Приедем и починим. Просто оставьте заявку!</h2>
                <form>
                    {(emailDirty && emailError) && <div style={{color: 'red'}}>{emailError}</div>}
                    <input onBlur={e => blurHandler(e)} type="text" name="email" placeholder="Введите Email" />
                    {(passwordDirty && passwordError) && <div style={{color: 'red'}}>{passwordError}</div>}
                    <input onBlur={e => blurHandler(e)} type="password" name="password" placeholder="Введите пароль" />
                    <button type="submit">Регистрация</button>
                </form>
            </div>
        </Section>
    );
}

export default SectionForm;

const Section = styled.section`
    background-color: #c6d4f5;

    .main_section {
        max-width: 1140px;
        margin: 0 auto;
        padding: 10px 0;
    }
`;