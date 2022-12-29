import React, { useState } from 'react';

import './HeaderButton.css';

const HeaderButton = ({ id, onClick, isActive }) => {
    return (
        <button
            id={id}
            className={`header-btn ${isActive && 'active'}`}
            type="button"
            onClick={onClick}
        ></button>
    );
};

export default HeaderButton;
