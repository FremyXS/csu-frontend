import React from 'react';
import { Route, Routes } from 'react-router-dom';
import News from './pages/News/News';

import Main from '@Pages/Main';
import Container from '@Layouts/Container/Container';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/add-news" element={<News />} />
        </Routes>
    );
};

export default App;
