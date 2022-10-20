import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Abuot from './abuot';
import Gallery from './gallery';
import Home from './home';
import Layout from './layuot';

function AppSearch() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home/>} />
                    <Route path="/about" element={<Abuot />} />
                    <Route path="/gallery/:search" element={<Gallery/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppSearch