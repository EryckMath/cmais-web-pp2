import axios from "axios";
import React, { useEffect, useState } from "react";
import InputMask from 'react-input-mask';
import { useLocation } from "react-router-dom";
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import MenuSistema from "../../MenuSistema";

export default function FormMercado() {

    const { state } = useLocation();
    const [idMercado, setIdMercado] = useState();


    const [NomeDoEmpreendimento, setNomeEmprendimento] = useState();
    const [TipoDeEmpreendimento, settipoEmpreendemento] = useState();
    const [TelefoneParaContato, setTelefoneContato] = useState();
    const [Endereco, setendereco] = useState();
    const [RedesSocias, setRedessociais] = useState();
    const [NomeCompletoDoResponsavelPorCadastrar, setNomeRespon] = useState();
    const [Cargoercado, setcargoRes] = useState();
    const [SenhaDeAcesso, setSenha] = useState();

    useEffect(() => {
        if (state != null && state.id != null) {
            axios.get("http://localhost:3000/api/Mercado/" + state.id)
                .then((response) => {
                    setIdMercado(response.data.id)
                    setNomeEmprendimento(response.data.NomeDoEmpreendimento)
                    settipoEmpreendemento(response.data.TipoDeEmpreendimento)
                    setTelefoneContato(response.data.TelefoneParaContato)
                    setendereco(response.data.Endereco)
                    setRedessociais(response.data.RedesSocias)
                    setNomeRespon(response.data.NomeCompletoDoResponsavelPorCadastrar)
                    setcargoRes(response.data.Cargoercado)
                    setSenhaAcesso(response.data.SenhaDeAcesso)
                })
        }
    }, [state])

    function salvar() {

        let MercadoRequest = {
            NomeDoEmpreendimento: NomeDoEmpreendimento,
            TipoDeEmpreendimento: TipoDeEmpreendimento,
            TelefoneParaContato: TelefoneParaContato,
            Endereco: Endereco,
            RedesSocias: RedesSocias,
            NomeCompletoDoResponsavelPorCadastrar: NomeCompletoDoResponsavelPorCadastrar,
            Cargoercado: Cargoercado,
            SenhaDeAcesso: SenhaDeAcesso
        }

        if (idMercado != null) { //Alteração:
            axios.put("http://localhost:3000/api/Mercado/" + idMercado, MercadoRequest)
                .then((response) => { console.log('mercado alterada com sucesso.') })
                .catch((error) => { console.log('Erro ao alterar uma mercado.') })
        } else { //Cadastro:
            axios.post("http://localhost:3000/api/Mercado", MercadoRequest)
                .then((response) => { console.log('Mercado cadastrada com sucesso.') })
                .catch((error) => { console.log('Erro ao incluir a mercado.') })
        }
    }

    return (

        <div>

            <MenuSistema />

            <div style={{ marginTop: '3%' }}>

                <Container textAlign='justified' >

                    {idMercado === undefined &&
                        <h2> <span style={{ color: 'darkgray' }}> mercado &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro</h2>
                    }
                    {idMercado !== undefined &&
                        <h2> <span style={{ color: 'darkgray' }}> mercado &nbsp;<Icon name='angle double right' size="small" /> </span> Alteração</h2>
                    }


                    <Divider />

                    <div style={{ marginTop: '4%' }}>

                        <Form>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='Nome do Empreendimento:'
                                    maxLength="100"
                                    value={NomeDoEmpreendimento}
                                    onChange={e => setNomeEmprendimento(e.target.value)}
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='CNPJ'>
                                    <InputMask
                                        required
                                        label= 'Qual o seu tipo de empreendimento?'
                                        value={TipoDeEmpreendimento}
                                        onChange={e => settipoEmpreendemento(e.target.value)}
                                    />
                                </Form.Input>

                            </Form.Group>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='Endereço'
                                    maxLength="100"
                                    value={Endereco}
                                    onChange={e => setendereco(e.target.value)}
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='Telefone para Contato'
                                    width={6}>
                                    <InputMask
                                        mask="(99) 9999.9999"
                                        value={TelefoneParaContato}
                                        onChange={e => setTelefoneContato(e.target.value)}
                                    />
                                </Form.Input>

                            </Form.Group>

                            <Form.Group widths='equal'>
                                <Form.Input
                                    required
                                    fluid
                                    label='Rede social (Instagram/Facebook):'
                                    maxLength="100"
                                    value={redesSociaisMercado}
                                    onChange={e => setRedessociais(e.target.value)}
                                >
                                </Form.Input>

                                <Form.Input
                                    required
                                    fluid
                                    label='Nome completo do responsável:'
                                    maxLength="100"
                                    value={NomeCompletoDoResponsavelPorCadastrar}
                                    onChange={e => setNomeRespon(e.target.value)}
                                >
                                </Form.Input>

                                <Form.Input
                                    required
                                    fluid
                                    label='Cargo:'
                                    maxLength="100"
                                    value={cargoResponsavel}
                                    onChange={e => setcargoRes(e.target.value)}
                                >
                                </Form.Input>

                            </Form.Group>

                            <Form.Group widths='equal'>
                                <Form.Input
                                    fluid
                                    label='Crie uma senha'
                                    maxLength="100"
                                    value={SenhaDeAcesso}
                                    onChange={e => setSenhaAcesso(e.target.value)}
                                >
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