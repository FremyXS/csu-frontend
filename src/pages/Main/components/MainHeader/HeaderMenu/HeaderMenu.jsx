import ButtonComponent from '@Components/ButtonComponent/ButtonComponent';
import React from 'react';

import phoneIcon from '@Assets/images/icons/phoneIcon.svg';
import logoIcon from '@Assets/images/icons/logoIcon.svg';
import { useWindowDimensions } from '@Helpers/useWindowDimensions';
import './HeaderMenu.css';

const HeaderMenu = () => {
    const { width } = useWindowDimensions();
    return (
        <div className="header-menu">
            {width <= 400 && (
                <>
                    <div className="header-menu--clmn">
                        <img className="menu-logo" src={logoIcon} />
                    </div>
                    <div className="header-menu--clmn">
                        <ButtonComponent value="Вход" styleColor="color-in" />
                    </div>
                </>
            )}
            {width > 800 && (
                <>
                    <div className="header-menu--clmn">
                        <img className="menu-logo" src={logoIcon} />
                        <span className="menu-separator">|</span>
                        <div className="menu-name">
                            Курьерская служба доставки
                        </div>
                    </div>
                    <div className="header-menu--clmn">
                        <div className="header-menu--number">
                            <img className="number-icon" src={phoneIcon} />
                            <div className="number-value">
                                8 (909) 023-12-51
                            </div>
                        </div>
                        <ButtonComponent value="Вход" styleColor="color-in" />
                    </div>
                </>
            )}
        </div>
    );
};

export default HeaderMenu;
