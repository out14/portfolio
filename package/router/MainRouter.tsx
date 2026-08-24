// import React from 'react';
import { Routes,Route } from 'react-router-dom';
import {Main} from '@src/page/main'
import { Portfolio } from '@/src/page/portfolio';
import { About } from '@/src/page/about/About';



const MainRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/portfolio" element={<Portfolio/>} />
        </Routes>
    );
};

export default MainRouter;