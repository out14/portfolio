// import React from 'react';
import { Routes,Route } from 'react-router-dom';
import {Main} from '@src/page/main'
import { Portfolio, PortfolioView } from '@/src/page/portfolio';
import { About } from '@/src/page/about/About';



const MainRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/portfolio" element={<Portfolio/>} />
            <Route path="/portfolioView/:nickname" element={<PortfolioView/>} />
        </Routes>
    );
};

export default MainRouter;