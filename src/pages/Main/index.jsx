import React from 'react';
import 'normalize.css';

import MainHeader from './components/MainHeader/MainHeader';
import MainContainer from './components/MainContainer/MainContainer';

import { useWindowDimensions } from '@Helpers/useWindowDimensions';

import './styles.css';

const Main = () => {
    const { width } = useWindowDimensions;

    return (
        <div className="main-page">
            <MainHeader />
            <MainContainer />
        </div>
    );
};

export default Main;
