import React from 'react';
import { Route, Routes } from "react-router-dom";

import Home from './views/home/Home';
import FormInstituicao from './views/instituicao/FormInstituicao';
import ListInstituicao from './views/instituicao/ListInstituicao';
import FormMercado from './views/mercado/FormMercado';
import ListMercado from './views/mercado/ListMercado';
import FormProduto from './views/produto/FormProduto';
import ListProduto from './views/produto/ListProduto';

function Rotas() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="form-instituicao" element={<FormInstituicao />} />
                <Route path="list-instituicao" element={<ListInstituicao />} />
                <Route path="form-mercado" element={<FormMercado />} />
                <Route path="list-mercado" element={<ListMercado />} />
                <Route path="form-produto" element={<FormProduto />} />
                <Route path="list-produto" element={<ListProduto />} />
            </Routes>
        </>
    )
}

export default Rotas
