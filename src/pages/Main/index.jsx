import React from 'react';
import 'normalize.css';

import MainHeader from './components/MainHeader/MainHeader';
import MainContainer from './components/MainContainer/MainContainer';
import MainFooter from './components/MainFooter/MainFooter';

import './styles.css';

const Main = () => (
    <div className="main-page">
        <MainHeader />
        <MainContainer />
        <MainFooter />
    </div>
);

export default Main;
