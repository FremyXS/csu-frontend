import React from 'react';

import logoIcon from '@Assets/images/icons/logoIcon.svg';

import './MainFooter.css';

const MainFooter = () => (
    <div className="main-footer">
        <div className="footer-logo">
            <img className="menu-logo" src={logoIcon} />
        </div>
        <div className="footer-list">
            <div className="list-element">
                <dl>
                    <dt>О компании</dt>
                    <dt>Вакансии</dt>
                    <dt>Клиенту</dt>
                    <dt>Франчайзинг</dt>
                </dl>
            </div>
            <div className="list-element">
                <dl>
                    <dt>Доставка из Китая</dt>
                    <dt>Все услуги</dt>
                    <dt>Акции</dt>
                </dl>
            </div>
        </div>
        <div className="footer-contacts">
            <dl>
                <dt>manager@uexpress.ru</dt>
                <dt>115221, г. Челябинск, ул. Северная, д. 29-в</dt>
                <dt>Мы работаем по 24 часа 5 дней в неделю</dt>
            </dl>
        </div>
    </div>
);

export default MainFooter;
