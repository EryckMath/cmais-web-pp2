import axios from "axios";
import React, { useEffect, useState } from "react";
import InputMask from 'react-input-mask';
import { useLocation, Link } from "react-router-dom";
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import MenuSistema from "../../MenuSistema";

export default function FormInstituicao() {

    const { state } = useLocation();
    const [idInstituicao, setIdInstituicao] = useState();


    const [nomeInstituicao, setNomeInstituicao] = useState();
    const [cnpjInstituicao, setCnpjInstituicao] = useState();
    const [enderecoInstituicao, setEnderecoInstituicao] = useState();
    const [telefoneInstituicao, setTelefoneInstituicao] = useState();
    const [finalidade, setFinalidade] = useState();
    const [dataConstituicao, setDataConstituicao] = useState();
    const [emailInstituicao, setEmailInstituicao] = useState();
    const [redesSociaisInstituicao, setRedesSociaisIntituicao] = useState();
    const [comprovanteCadastro, setComprovanteCadastro] = useState();
    const [nomeResponsavel, setNomeResponsavel] = useState();
    const [cpfResponsavel, setCpfReponsavel] = useState();
    const [telefoneResponsavel, setTelefoneResponsavel] = useState();
    const [emailResponsavel, setEmailResponsavel] = useState();
    const [cargoResponsavel, setCargoReponsavel] = useState();
    const [senhaAcesso, setSenhaAcesso] = useState();


    useEffect(() => {
        if (state != null && state.id != null) {
            axios.get("http://localhost:8080/api/instituicao/" + state.id)
                .then((response) => {
                    setIdInstituicao(response.data.id)
                    setNomeInstituicao(response.data.nomeInstituicao)
                    setCnpjInstituicao(response.data.cnpjInstituicao)
                    setEnderecoInstituicao(response.data.enderecoInstituicao)
                    setTelefoneInstituicao(response.data.telefoneInstituicao)
                    setFinalidade(response.data.finalidade)
                    setDataConstituicao(formatarData(response.data.dataConstituicao))
                    setEmailInstituicao(response.data.emailInstituicao)
                    setRedesSociaisIntituicao(response.data.redesSociaisInstituicao)
                    setComprovanteCadastro(response.data.comprovanteCadastro)
                    setNomeResponsavel(response.data.nomeResponsavel)
                    setCpfReponsavel(response.data.cpfResponsavel)
                    setTelefoneResponsavel(response.data.telefoneResponsavel)
                    setEmailResponsavel(response.data.emailResponsavel)
                    setCargoReponsavel(response.data.cargoResponsavel)
                    setSenhaAcesso(response.data.senhaAcesso)
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

        let instituicaoRequest = {
            nomeInstituicao: nomeInstituicao,
            cnpjInstituicao: cnpjInstituicao,
            enderecoInstituicao: enderecoInstituicao,
            telefoneInstituicao: telefoneInstituicao,
            finalidade: finalidade,
            dataConstituicao: dataConstituicao,
            emailInstituicao: emailInstituicao,
            redesSociaisInstituicao: redesSociaisInstituicao,
            comprovanteCadastro: comprovanteCadastro,
            nomeResponsavel: nomeResponsavel,
            cpfResponsavel: cpfResponsavel,
            telefoneResponsavel: telefoneResponsavel,
            emailResponsavel: emailResponsavel,
            cargoResponsavel: cargoResponsavel,
            senhaAcesso: senhaAcesso
        }

        if (idInstituicao != null) { //Alteração:
            axios.put("http://localhost:8080/api/instituicao/" + idInstituicao, instituicaoRequest)
                .then((response) => { console.log('Instituição alterada com sucesso.') })
                .catch((error) => { console.log('Erro ao alterar uma instituição.') })
        } else { //Cadastro:
            axios.post("http://localhost:8080/api/instituicao", instituicaoRequest)
                .then((response) => { console.log('Instituicao cadastrada com sucesso.') })
                .catch((error) => { console.log('Erro ao incluir a instituicao.') })
        }
    }

    return (

        <div>

            <MenuSistema />

            <div style={{ marginTop: '3%' }}>

                <Container textAlign='justified' >

                    {idInstituicao === undefined &&
                        <h2> <span style={{ color: 'darkgray' }}> Instituição &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro</h2>
                    }
                    {idInstituicao !== undefined &&
                        <h2> <span style={{ color: 'darkgray' }}> Instituição &nbsp;<Icon name='angle double right' size="small" /> </span> Alteração</h2>
                    }


                    <Divider />

                    <div style={{ marginTop: '4%' }}>

                        <Form>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='Nome da Instituição'
                                    maxLength="100"
                                    value={nomeInstituicao}
                                    onChange={e => setNomeInstituicao(e.target.value)}
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='CNPJ'>
                                    <InputMask
                                        required
                                        mask="00.000.000/0000-00"
                                        value={cnpjInstituicao}
                                        onChange={e => setCnpjInstituicao(e.target.value)}
                                    />
                                </Form.Input>

                            </Form.Group>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='Endereço'
                                    maxLength="100"
                                    value={enderecoInstituicao}
                                    onChange={e => setEnderecoInstituicao(e.target.value)}
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='Telefone para Contato'
                                    width={6}>
                                    <InputMask
                                        mask="(99) 9999.9999"
                                        value={telefoneInstituicao}
                                        onChange={e => setTelefoneInstituicao(e.target.value)}
                                    />
                                </Form.Input>

                            </Form.Group>

                            <Form.Group widths='equal'>
                                <Form.Input
                                    required
                                    fluid
                                    label='Finalidade'
                                    maxLength="100"
                                    value={finalidade}
                                    onChange={e => setFinalidade(e.target.value)}
                                >
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Data de Constituição'
                                    width={6}
                                >
                                    <InputMask
                                        mask="99/99/9999"
                                        maskChar={null}
                                        placeholder="Ex: 20/03/1985"
                                        value={dataConstituicao}
                                        onChange={e => setDataConstituicao(e.target.value)}
                                    />
                                </Form.Input>

                                <Form.Input
                                    required
                                    fluid
                                    label='E-mail'
                                    maxLength="100"
                                    value={emailInstituicao}
                                    onChange={e => setEmailInstituicao(e.target.value)}
                                >
                                </Form.Input>

                            </Form.Group>

                            <Form.Group widths='equal'>
                                <Form.Input
                                    fluid
                                    label='Redes Sociais'
                                    maxLength="100"
                                    value={redesSociaisInstituicao}
                                    onChange={e => setRedesSociaisIntituicao(e.target.value)}
                                >
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Anexe aqui comprovante de cadastro da instituição'
                                    maxLength="100"
                                    value={comprovanteCadastro}
                                    onChange={e => setComprovanteCadastro(e.target.value)}
                                >
                                </Form.Input>

                            </Form.Group>

                            <Form.Group widths='equal'>
                                <Form.Input
                                    required
                                    fluid
                                    label='Nome completo do responsável por cadastrar a instituição'
                                    maxLength="100"
                                    value={nomeResponsavel}
                                    onChange={e => setNomeResponsavel(e.target.value)}
                                >
                                </Form.Input>

                                <Form.Input
                                    required
                                    fluid
                                    label='CPF do responsável'
                                    maxLength="100"
                                    value={cpfResponsavel}
                                    onChange={e => setCpfReponsavel(e.target.value)}
                                >
                                </Form.Input>

                                <Form.Input
                                    required
                                    fluid
                                    label='Telefone do responsável'
                                    maxLength="100"
                                    value={telefoneResponsavel}
                                    onChange={e => setTelefoneResponsavel(e.target.value)}
                                >
                                </Form.Input>

                            </Form.Group>

                            <Form.Group widths='equal'>
                                <Form.Input
                                    required
                                    fluid
                                    label='Email do responsável'
                                    maxLength="100"
                                    value={emailResponsavel}
                                    onChange={e => setEmailResponsavel(e.target.value)}
                                >
                                </Form.Input>

                                <Form.Input
                                    required
                                    fluid
                                    label='Cargo do responsável'
                                    maxLength="100"
                                    value={cargoResponsavel}
                                    onChange={e => setCargoReponsavel(e.target.value)}
                                >
                                </Form.Input>

                                <Form.Input
                                    required
                                    fluid
                                    label='Crie uma senha de acesso'
                                    maxLength="100"
                                    value={senhaAcesso}
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
                                Registrar
                            </Button>

                        </div>

                    </div>

                </Container>
            </div>
        </div>

    );

}