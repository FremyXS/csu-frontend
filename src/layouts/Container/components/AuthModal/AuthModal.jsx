import React from 'react';

import ButtonComponent from '../../../../components/ButtonComponent/ButtonComponent';
import InputComponent from '@Components/InputComponent/InputComponent';
import exitIcon from '@Assets/images/icons/exit-icon.svg';

import './AuthModal.less';

const AuthModal = ({ onClick }) => {
    return (
        <div className="auth-modal">
            <div className="auth-modal__window">
                <button
                    className="auth-modal__window-exit"
                    type="submit"
                    onClick={onClick}
                >
                    <img src={exitIcon} />
                </button>
                <div className="auth-modal__window-head">Авторизация</div>
                <div className="auth-modal__window-desk">
                    Введите логин и пароль, чтобы войти в личный кабинет
                </div>
                <div className="auth-modal__window-inputs">
                    <InputComponent type="text" placeholder="Логин" />
                    <InputComponent type="password" placeholder="Пароль" />
                </div>
                <ButtonComponent value="Войти" styleColor="color-out" />
            </div>
        </div>
    );
};

export default AuthModal;
