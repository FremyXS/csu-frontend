import React, { useEffect, useState } from 'react';
import HeaderButtonon from './HeaderButton/HeaderButton';

import ButtonComponent from '@Components/ButtonComponent/ButtonComponent';

import car from '@Assets/images/car.png';
import blank from '@Assets/images/blank.png';

import { useWindowDimensions } from '@Helpers/useWindowDimensions';

import './MainHeader.css';

const styleAdvancaed = {
    mobile: {
        padding: '0 15px',
        paddingBottom: '32px',
        paddingTop: '185px',
    },
};

const headerText = {
    sliderOne: {
        name: 'Срочная доставка день в день',
        desk: 'Для тех, кто не может ждать у нас есть услуга\
            срочной курьерской доставки корреспондеции и других видов отправлений.',
        image: car,
        backgroundSize: '510px',
        backgroundPosition: 'right 130px bottom',
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
    const { width } = useWindowDimensions();

    const onClickSlidbar = (e) => {
        const ID = e.target.id;

        if (ID === '2') {
            setHeader(headerText.sliderTwo);
        } else {
            setHeader(headerText.sliderOne);
        }
    };

    const changeSlider = () => {
        setHeader(
            header === headerText.sliderOne
                ? headerText.sliderTwo
                : headerText.sliderOne
        );
    };

    useEffect(() => {
        setInterval(changeSlider, 8000);
    }, [header]);

    return (
        <div className="header">
            {width < 768 && (
                <div className="header-main" style={styleAdvancaed.mobile}>
                    <div className="header-main__info">
                        <div className="main-header__text">
                            <div className="main-header__text-name">
                                {header.name}
                            </div>
                            <div className="main-header__text-desk">
                                {header.desk}
                            </div>
                            <ButtonComponent
                                value="Заказать доставку"
                                style={{ marginTop: 87 }}
                                styleColor="color-out"
                            />
                        </div>
                    </div>
                    <div className="main-header__buttons">
                        <HeaderButtonon
                            id="1"
                            isActive={header === headerText.sliderOne}
                            onClick={onClickSlidbar}
                        />
                        <HeaderButtonon
                            id="2"
                            isActive={header === headerText.sliderTwo}
                            onClick={onClickSlidbar}
                        />
                    </div>
                </div>
            )}
            {width >= 768 && width < 1440 && (
                <div className="header-main" style={styleAdvancaed.mobile}>
                    <div className="header-main__info">
                        <div className="main-header__text">
                            <div className="main-header__text-name">
                                {header.name}
                            </div>
                            <div className="main-header__text-desk">
                                {header.desk}
                            </div>
                            <ButtonComponent
                                value="Заказать доставку"
                                style={{ marginTop: 87 }}
                                styleColor="color-out"
                            />
                        </div>
                    </div>
                    <div className="main-header__buttons">
                        <HeaderButtonon
                            id="1"
                            isActive={header === headerText.sliderOne}
                            onClick={onClickSlidbar}
                        />
                        <HeaderButtonon
                            id="2"
                            isActive={header === headerText.sliderTwo}
                            onClick={onClickSlidbar}
                        />
                    </div>
                </div>
            )}
            {width >= 1440 && (
                <div
                    className="header-main"
                    style={{
                        backgroundImage: `url(${header.image})`,
                        backgroundPosition: `${header.backgroundPosition}`,
                        backgroundSize: `${header.backgroundSize}`,
                        backgroundRepeat: 'no-repeat',
                        padding: '0 135px',
                        paddingBottom: '32px',
                        paddingTop: '185px',
                    }}
                >
                    <div className="header-main__info">
                        <div className="main-header__text">
                            <div className="main-header__text-name">
                                {header.name}
                            </div>
                            <div className="main-header__text-desk">
                                {header.desk}
                            </div>
                            <ButtonComponent
                                value="Заказать доставку"
                                style={{ marginTop: 87 }}
                                styleColor="color-out"
                            />
                        </div>
                    </div>
                    <div className="main-header__buttons">
                        <HeaderButtonon
                            id="1"
                            isActive={header === headerText.sliderOne}
                            onClick={onClickSlidbar}
                        />
                        <HeaderButtonon
                            id="2"
                            isActive={header === headerText.sliderTwo}
                            onClick={onClickSlidbar}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};
export default MainHeader;
