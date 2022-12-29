import React, { useState } from 'react';
import AuthModal from './components/AuthModal/AuthModal';
import HeaderMenu from './components/HeaderMenu/HeaderMenu';
import MainFooter from './components/MainFooter/MainFooter';

const Container = (props) => {
    const [showModal, setShowModal] = useState(false);
    return (
        <div>
            {showModal && <AuthModal onClick={() => setShowModal(false)} />}
            <HeaderMenu onClick={() => setShowModal(true)} />
            {props.children}
            <MainFooter />
        </div>
    );
};

export default Container;
