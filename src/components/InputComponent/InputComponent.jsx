import React from 'react';

import './InputComponent.less';

const InputComponent = ({ type, placeholder }) => {
    return (
        <div className="input-component">
            <input type={type} placeholder={placeholder} />
        </div>
    );
};

export default InputComponent;
