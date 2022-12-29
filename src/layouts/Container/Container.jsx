import React from 'react';
import MainFooter from './components/MainFooter/MainFooter';

const Container = (props) => {
    return (
        <div>
            {props.children}
            <MainFooter />
        </div>
    );
};

export default Container;
