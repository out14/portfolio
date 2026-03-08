import React from 'react';
import { Routes,Route } from 'react-router-dom';
//import {Main} from '@src/page/main'
import {Main} from '../../src/page/main'

const MainRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Main/>} />
        </Routes>
    );
};

export default MainRouter;