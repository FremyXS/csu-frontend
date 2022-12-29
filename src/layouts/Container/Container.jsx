import React from 'react';
import HeaderMenu from './components/HeaderMenu/HeaderMenu';
import MainFooter from './components/MainFooter/MainFooter';

const Container = (props) => {
    return (
        <div>
            <HeaderMenu />
            {props.children}
            <MainFooter />
        </div>
    );
};

export default Container;
