import axios from "axios";
import React, { useEffect, useState } from "react";
import InputMask from 'react-input-mask';
import { useLocation } from "react-router-dom";
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';

export default function FormProduto() {
    const { state } = useLocation();
    const [idProduto, setIdProduto] = useState();
    

    const [CodigoDeBarrasDoProduto, setCodigoDeBarrasDoProduto] = useState();
    const [Descrição, setDescrição] = useState();
    const [DataDeFabricação, setDataDeFabricação] = useState();
    const [DataDeValidade, setDataDeValidade] = useState();
    const [Quantidade, setQuantidade] = useState();
    const [Observações, setObservações] = useState();
    const [AnexeAquiUmaOuMaisImagensDoProduto, setAnexeAquiUmaOuMaisImagensDoProduto] = useState();

    
    useEffect(() => {

        if (state != null && state.id != null) {

            axios.get("http://localhost:3000/api/produto/" + state.id)
                       .then((response) => {
                           setIdProduto(response.data.id)
                           setCodigoDeBarrasDoProduto(response.data.CodigoDeBarrasDoProduto)
                           setDescrição(response.data.Descrição)
                           setDataDeFabricação(formatarData(response.data.DataDeFabricação))
                           setDataDeValidade(formatarData(response.data.DataDeValidade))
                           setQuantidade(response.data.Quantidade)
                           setObservações(response.data.Observações)
                            setAnexeAquiUmaOuMaisImagensDoProduto(response.data.AnexeAquiUmaOuMaisImagensDoProduto)
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
        CodigoDeBarrasDoProduto: CodigoDeBarrasDoProduto,
        Descrição: Descrição,
        DataDeFabricação: DataDeFabricação,
        DataDeValidade: DataDeValidade,
        Quantidade: Quantidade,
        Observações: Observações,
        AnexeAquiUmaOuMaisImagensDoProduto: AnexeAquiUmaOuMaisImagensDoProduto
    }

    if (setIdProduto != null) { //Alteração:
        axios.put("http://localhost:3000/api/produto/" + idProduto, produtoRequest)
        .then((response) => { console.log('Produto alterado com sucesso.') 
    })
        .catch((error) => { console.log('Erro ao alterar um produto.') 
    })
    } else { //Cadastro:
        axios.post("http://localhost:3000/api/produto", produtoRequest)
        .then((response) => { console.log('Produto cadastrado com sucesso.') 
    })
        .catch((error) => { console.log('Erro ao incluir o produto.') 
    })
    }
}


    return (

        <div>
            <MenuSistema />


            <div style={{ marginTop: '3%' }}>

                <Container textAlign='justified' >

                { idProduto === undefined &&
    <h2> <span style={{color: 'darkgray'}}> Produto &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro</h2>
}
{ idProduto != undefined &&
    <h2> <span style={{color: 'darkgray'}}> Produto &nbsp;<Icon name='angle double right' size="small" /> </span> Alteração</h2>
}

                    <Divider />

                    <div style={{ marginTop: '4%' }}>

                        <Form>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='Codigo de barras do produto'
                                    maxLength="100"
                                    value={CodigoDeBarrasDoProduto}
                                    onChange={e => setCodigoDeBarrasDoProduto(e.target.value)}

                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='Descrição'>
                                    <InputMask
                                        required
                                        mask="999.999.999-99"
                                        value={Descrição}
                                        onChange={e => setDescrição(e.target.value)}
                                    />
                                </Form.Input>

                            </Form.Group>

                            <Form.Group>

                                <Form.Input
                                    fluid
                                    label='Data de fabricação'
                                    width={6}
                                >
                                    <InputMask
                                        mask="99/99/9999"
                                        maskChar={null}
                                        placeholder="Ex: 20/11/2023"
                                        value={DataDeFabricação}
                                        onChange={e => setDataDeFabricação(e.target.value)}
                                    />
                                </Form.Input> 

                                 <Form.Input
                                    fluid
                                    label='Data de validade'
                                    width={6}
                                >
                                    <InputMask
                                        mask="99/99/9999"
                                        maskChar={null}
                                        placeholder="Ex: 20/11/2023"
                                        value={DataDeValidade}
                                        onChange={e => setDataDeValidade(e.target.value)}
                                    />
                                </Form.Input>

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
                                Voltar
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
                                Salvar
                            </Button>


                        </div>

                    </div>

                </Container>
            </div>
        </div>

    );

}