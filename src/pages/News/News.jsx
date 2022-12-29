import React from 'react';

import ButtonComponent from '@Components/ButtonComponent/ButtonComponent';

import './News.less';
import InputFile from '@Components/InputFile/InputFile';

const News = () => {
    return (
        <div className="news-page">
            <div className="news-page__head">Добавить новость</div>
            <div className="news-page__desk">
                {
                    'Введите текст новости, а также приложите изображение (размер: 270х270px, формат JPG,PNG)'
                }
            </div>
            <div className="news-page__text">
                <textarea
                    className="news-page__text-input"
                    placeholder="Введите текст новости"
                ></textarea>
            </div>
            <InputFile style={{ marginBottom: 114 }} />
            <ButtonComponent value="Применить" styleColor="color-out" />
        </div>
    );
};

export default News;
