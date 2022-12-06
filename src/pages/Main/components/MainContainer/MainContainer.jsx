import React from 'react';

import ContainerComponent from './ContainerComponent/ContainerComponent';
import './MainContainer.css';

import costIcon from '@Assets/images/icons/costIcon.svg';
import courierIcon from '@Assets/images/icons/courierIcon.svg';
import paymentIcon from '@Assets/images/icons/paymentIcon.svg';
import contractIcon from '@Assets/images/icons/contractIcon.svg';
import dataIcon from '@Assets/images/icons/dataIcon.svg';

const MainContainer = () => (
    <div className="main-container">
        <div className="main-container--name">5 шагов к заявке</div>
        <div className="main-container--components">
            <div className="components-row">
                <ContainerComponent
                    value="Расчетать стоимость"
                    icon={costIcon}
                    desk="Lorem ipsum dolor sit amet, consectetur adipisicing elitsequi nesciunt."
                />
                <ContainerComponent
                    value="Вызвать курьера"
                    icon={courierIcon}
                    desk="Lorem ipsum dolor sit amet, consectetur adipisicing elitsequi nesciunt."
                />
                <ContainerComponent
                    value="Оплатить услуги"
                    icon={paymentIcon}
                    desk="Lorem ipsum dolor sit amet, consectetur adipisicing elitsequi nesciunt."
                />
            </div>
            <div className="components-row">
                <ContainerComponent
                    value="Заключить договор"
                    icon={contractIcon}
                    desk="Lorem ipsum dolor sit amet, consectetur adipisicing elitsequi nesciunt."
                />
                <ContainerComponent
                    value="Предоставить данные"
                    icon={dataIcon}
                    desk="Lorem ipsum dolor sit amet, consectetur adipisicing elitsequi nesciunt."
                />
            </div>
        </div>
    </div>
);

export default MainContainer;
