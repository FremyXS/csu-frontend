import React from 'react';

import photoIcon from '@Assets/images/icons/image-icon.svg';

import './InputFile.less';

const InputFile = ({ style }) => {
    return (
        <label className="input-file" style={style}>
            <img className="input-file__image" src={photoIcon} sizes={20} />
            <input className="input-file__button" type="file" />+ Добавить
            изображение
        </label>
    );
};

export default InputFile;
