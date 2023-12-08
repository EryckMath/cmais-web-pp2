import axios from "axios";
import React, { useEffect, useState } from "react";
import InputMask from 'react-input-mask';
import { Link, useLocation } from "react-router-dom";
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';

export default function FormProduto() {
    const { state } = useLocation();
    const [idProduto, setIdProduto] = useState();


    const [codigoDeBarras, setCodigoDeBarras] = useState();
    const [descricao, setDescricao] = useState();
    const [dataDeFabricacao, setDataDeFabricacao] = useState();
    const [dataDeValidade, setDataDeValidade] = useState();
    const [quantidade, setQuantidade] = useState();
    const [observacoes, setObservacoes] = useState();
    const [imagem, setImagem] = useState();


    useEffect(() => {

        if (state != null && state.id != null) {

            axios.get("http://localhost:8080/api/produto/" + state.id)
                .then((response) => {
                    setIdProduto(response.data.id)
                    setCodigoDeBarras(response.data.codigoDeBarras)
                    setDescricao(response.data.descricao)
                    setDataDeFabricacao(formatarData(response.data.dataDeFabricacao))
                    setDataDeValidade(formatarData(response.data.dataDeValidade))
                    setQuantidade(response.data.quantidade)
                    setObservacoes(response.data.observacoes)
                    setImagem(response.data.imagem)
                })
        }
    }, [state])

    function formatarData(dataParam) {

        if (dataParam === null || dataParam === '' || dataParam === undefined) {
            return ''
        }

        let arrayData = dataParam.split('-');
        return arrayData[2] + '/' + arrayData[1] + '/' + arrayData[0];
    }

    function salvar() {

        let produtoRequest = {
            codigoDeBarras: codigoDeBarras,
            descricao: descricao,
            dataDeFabricação: dataDeFabricacao,
            dataDeValidade: dataDeValidade,
            quantidade: quantidade,
            observacoes: observacoes,
            imagem: imagem
        }

        if (idProduto != null) { //Alteração:
            axios.put("http://localhost:8080/api/produto/" + idProduto, produtoRequest)
                .then((response) => { console.log('Produto alterado com sucesso.') })
                .catch((error) => { console.log('Erro ao alterar um produto.') })
        } else { //Cadastro:
            axios.post("http://localhost:8080/api/produto", produtoRequest)
                .then((response) => { console.log('Produto cadastrado com sucesso.') })
                .catch((error) => { console.log('Erro ao incluir o produto.') })
        }
    }


    return (

        <div>
            <MenuSistema />

            <div style={{ marginTop: '3%' }}>
                <Container textAlign='justified'>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <h2 style={{ color: 'black', margin: '0 10px' }}>
                            Produto &nbsp;<Icon name='angle double right' size='small' /> {idProduto === undefined ? 'Cadastro' : 'Alteração'}
                        </h2>
                        <div style={{ flex: 1, backgroundColor: 'orange', height: '4px' }}></div>
                    </div>

                    <Divider />
                    <div style={{ marginTop: '4%' }}>

                        <Form enctype="multipart/form-data">

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='Codigo de barras do produto'
                                    maxLength="100"
                                    value={codigoDeBarras}
                                    onChange={e => setCodigoDeBarras(e.target.value)}

                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='Descrição'>
                                    <InputMask
                                        value={descricao}
                                        onChange={e => setDescricao(e.target.value)}
                                    />
                                </Form.Input>

                            </Form.Group>

                            <Form.Group>

                                <Form.Input
                                    fluid
                                    label='Data de fabricação'
                                    width={3}
                                >
                                    <InputMask
                                        mask="99/99/9999"
                                        maskChar={null}
                                        placeholder="Ex: 20/11/2023"
                                        value={dataDeFabricacao}
                                        onChange={e => setDataDeFabricacao(e.target.value)}
                                    />
                                </Form.Input>


                                <Form.Input
                                    fluid
                                    label='Data de validade 2'
                                    width={3}
                                >
                                    <InputMask
                                        mask="99/99/9999"
                                        maskChar={null}
                                        placeholder="Ex: 20/11/2023"
                                        value={dataDeValidade}
                                        onChange={e => setDataDeValidade(e.target.value)}
                                    />
                                </Form.Input>

                                <Form.Input
                                    required
                                    fluid
                                    label='Quantidade'
                                    width={5}
                                >
                                    <InputMask
                                        value={quantidade}
                                        onChange={e => setQuantidade(e.target.value)}
                                    />
                                </Form.Input>

                                <Form.Input
                                    required
                                    fluid
                                    label='Observações'
                                    width={5}
                                >
                                    <InputMask
                                        value={observacoes}
                                        onChange={e => setObservacoes(e.target.value)}
                                    />
                                </Form.Input>

                            </Form.Group>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    //required
                                    fluid
                                    label='Anexe aqui uma ou mais imagens do produto'
                                    type='file'
                                    accept='image/*'
                                    onChange={(e) => {
                                        const selectedFile = e.target.files[0];
                                        setImagem(selectedFile);
                                    }}
                                    style={{ textAlign: 'center' }}
                                />

                            </Form.Group>

                        </Form>

                        <div style={{ marginTop: '4%' }}>

                            <Button
                                type="button"
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='orange'
                            >
                                <Icon name='reply' />
                                <Link to={'/'}>Voltar</Link>
                            </Button>

                            <Button
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='blue'
                                floated='right'
                                onClick={() => salvar()}
                            >
                                <Icon name='save' />
                                Cadastrar
                            </Button>


                        </div>

                    </div>

                </Container>
            </div>
        </div>

    );

}