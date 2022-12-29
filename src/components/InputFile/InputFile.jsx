import React from 'react';

import photoIcon from '@Assets/images/icons/image-icon.svg';

import './InputFile.less';

const InputFile = ({ style }) => {
    return (
        <div class="input-file" style={style}>
            <img src={photoIcon} sizes={20} />
            <input class="input-file__button" type="file" />+ Добавить
            изображение
        </div>
    );
};

export default InputFile;
