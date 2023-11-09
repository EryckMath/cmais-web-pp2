import React from 'react';
import { Route, Routes } from "react-router-dom";

import Home from './views/home/Home';
import FormInstituicao from './views/instituicao/FormInstituicao';
import ListInstituicao from './views/instituicao/ListInstituicao';
import FormProduto from './views/produto/FormProduto';
import ListProduto from './views/produto/ListProduto';
import FormMercado from './views/mercado/FormMercado';

function Rotas() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="form-instituicao" element={<FormInstituicao />} />
                <Route path="list-instituicao" element={<ListInstituicao />} />
                <Route path="form-mercado" element={<FormMercado />} />
                <Route path="form-produto" element={<FormProduto />} />
                <Route path="list-produto" element={<ListProduto />} />
            </Routes>
        </>
    )
}

export default Rotas
