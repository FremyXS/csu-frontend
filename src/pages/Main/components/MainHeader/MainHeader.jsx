import React, { useState } from 'react';
import './MainHeader.css';
import HeaderButtonon from './HeaderButton/HeaderButton';

import ButtonComponent from '@Components/ButtonComponent/ButtonComponent';
import HeaderMenu from './HeaderMenu/HeaderMenu';

import car from '@Assets/images/car.png';
import blank from '@Assets/images/blank.png';

const headerText = {
    sliderOne: {
        name: 'Срочная доставка день в день',
        desk: 'Для тех, кто не может ждать у нас есть услуга\
            срочной курьерской доставки корреспондеции и других видов отправлений.',
        image: car,
        backgroundSize: '510px',
        backgroundPosition: 'right 132px bottom',
    },
    sliderTwo: {
        name: 'Подписание договора за 1 час',
        desk: 'В течение часа наш курьер заберет вашу посылку и подпишет\
            с Вами договор о предоставлении услуг.',
        image: blank,
        backgroundSize: '575px',
        backgroundPosition: 'right bottom',
    },
};

const MainHeader = () => {
    const [header, setHeader] = useState(headerText.sliderOne);
    return (
        <div className="header">
            <div
                className="main-header"
                style={{
                    backgroundImage: `url(${header.image})`,
                    backgroundPosition: `${header.backgroundPosition}`,
                    backgroundSize: `${header.backgroundSize}`,
                    backgroundRepeat: 'no-repeat',
                    padding: '0 135px',
                    paddingBottom: '32px',
                }}
            >
                <HeaderMenu />
                <div className="main-header--info">
                    <div className="main-header--text">
                        <div className="text-name">{header.name}</div>
                        <div className="text-desk">{header.desk}</div>
                        <ButtonComponent
                            value="Заказать доставку"
                            style={{ marginTop: 87 }}
                            styleColor="color-out"
                        />
                    </div>
                </div>
                <div className="main-header--btns">
                    <HeaderButtonon
                        onClick={() => setHeader(headerText.sliderOne)}
                    />
                    <HeaderButtonon
                        onClick={() => setHeader(headerText.sliderTwo)}
                    />
                </div>
            </div>
        </div>
    );
};
export default MainHeader;
