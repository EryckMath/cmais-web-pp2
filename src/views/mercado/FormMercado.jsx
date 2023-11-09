import axios from "axios";
import React, { useEffect, useState } from "react";
import InputMask from 'react-input-mask';
import { useLocation } from "react-router-dom";
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import MenuSistema from "../../MenuSistema";

export default function FormMercado() {

    const { state } = useLocation();
    const [idMercado, setIdMercado] = useState();

    const [nomeEmpreendimento, setNomeEmprendimento] = useState();
    const [tipoEmpreendimento, setTipoEmpreendimento] = useState();
    const [telefoneContato, setTelefoneContato] = useState();
    const [endereco, setEndereco] = useState();
    const [redesSociais, setRedesSociais] = useState();
    const [nomeCompletoResponsavel, setNomeCompletoResponsavel] = useState();
    const [cargoResponsavel, setCargoResponsavel] = useState();
    const [senhaDeAcesso, setSenhaDeAcesso] = useState();

    useEffect(() => {
        if (state != null && state.id != null) {
            axios.get("http://localhost:3000/api/Mercado/" + state.id)
                .then((response) => {
                    setIdMercado(response.data.id)
                    setNomeEmprendimento(response.data.nomeEmpreendimento)
                    setTipoEmpreendimento(response.data.tipoEmpreendimento)
                    setTelefoneContato(response.data.telefoneContato)
                    setEndereco(response.data.endereco)
                    setRedesSociais(response.data.redesSociais)
                    setNomeCompletoResponsavel(response.data.nomeCompletoResponsavel)
                    setCargoResponsavel(response.data.cargoResponsavel)
                    setSenhaDeAcesso(response.data.senhaDeAcesso)
                })
        }
    }, [state])

    function salvar() {

        let MercadoRequest = {
            nomeEmpreendimento: nomeEmpreendimento,
            tipoEmpreendimento: tipoEmpreendimento,
            telefoneContato: telefoneContato,
            endereco: endereco,
            redesSociais: redesSociais,
            nomeCompletoResponsavel: nomeCompletoResponsavel,
            cargoResponsavel: cargoResponsavel,
            senhaDeAcesso: senhaDeAcesso
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
                                    value={nomeEmpreendimento}
                                    onChange={e => setNomeEmprendimento(e.target.value)}
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='CNPJ'>
                                    <InputMask
                                        required
                                        label='Qual o seu tipo de empreendimento?'
                                        value={tipoEmpreendimento}
                                        onChange={e => setTipoEmpreendimento(e.target.value)}
                                    />
                                </Form.Input>

                            </Form.Group>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='Endereço'
                                    maxLength="100"
                                    value={endereco}
                                    onChange={e => setEndereco(e.target.value)}
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='Telefone para Contato'
                                    width={6}>
                                    <InputMask
                                        mask="(99) 9999.9999"
                                        value={telefoneContato}
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
                                    value={redesSociais}
                                    onChange={e => setRedesSociais(e.target.value)}
                                >
                                </Form.Input>

                                <Form.Input
                                    required
                                    fluid
                                    label='Nome completo do responsável:'
                                    maxLength="100"
                                    value={nomeCompletoResponsavel}
                                    onChange={e => setNomeCompletoResponsavel(e.target.value)}
                                >
                                </Form.Input>

                                <Form.Input
                                    required
                                    fluid
                                    label='Cargo:'
                                    maxLength="100"
                                    value={cargoResponsavel}
                                    onChange={e => setCargoResponsavel(e.target.value)}
                                >
                                </Form.Input>

                            </Form.Group>

                            <Form.Group widths='equal'>
                                <Form.Input
                                    fluid
                                    label='Crie uma senha'
                                    maxLength="100"
                                    value={senhaDeAcesso}
                                    onChange={e => setSenhaDeAcesso(e.target.value)}
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

