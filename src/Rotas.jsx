import React from 'react';
import { Route, Routes } from "react-router-dom";


import Home from './views/home/Home';
import FormInstituicao from './views/instituicao/FormInstituicao';


function Rotas() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="form-instituicao" element={<FormInstituicao />} />
            </Routes>
        </>
    )
}

export default Rotas
