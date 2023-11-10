import axios from 'axios';
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Divider, Header, Icon, Modal, Table } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';

export default function ListInstituicao() {

    const [lista, setLista] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [idRemover, setIdRemover] = useState();


    useEffect(() => {
        carregarLista();
    }, [])

    function carregarLista() {

        axios.get("http://localhost:8080/api/instituicao")
            .then((response) => {
                setLista(response.data)
            })
    }
    function formatarData(dataParam) {

        if (dataParam === null || dataParam === '' || dataParam === undefined) {
            return ''
        }

        let arrayData = dataParam.split('-');
        return arrayData[2] + '/' + arrayData[1] + '/' + arrayData[0];
    }
    function confirmaRemover(id) {
        setOpenModal(true)
        setIdRemover(id)
    }
    async function remover() {

        await axios.delete('http://localhost:8080/api/instituicao/' + idRemover)
            .then((response) => {

                console.log('Instituição removido com sucesso.')

                axios.get("http://localhost:8080/api/instituicao")
                    .then((response) => {
                        setLista(response.data)
                    })
            })
            .catch((error) => {
                console.log('Erro ao remover um instituição.')
            })
        setOpenModal(false)
    }

    return (
        <div>
            <MenuSistema />
            <div style={{ marginTop: '3%' }}>

                <Container textAlign='justified' >

                    <h2> Instituição </h2>
                    <Divider />

                    <div style={{ marginTop: '4%' }}>
                        <Button
                            label='Novo'
                            circular
                            color='orange'
                            icon='clipboard outline'
                            floated='right'
                            as={Link}
                            to='/form-instituicao'
                        />
                        <br /><br /><br />

                        <Table color='orange' sortable celled>

                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>Nome da instituição</Table.HeaderCell>
                                    <Table.HeaderCell>CNPJ da instituição</Table.HeaderCell>
                                    <Table.HeaderCell>Endereço da instituição</Table.HeaderCell>
                                    <Table.HeaderCell>Telefone da instituição</Table.HeaderCell>
                                    <Table.HeaderCell>Finalidade</Table.HeaderCell>
                                    <Table.HeaderCell>Email da instituicao</Table.HeaderCell>
                                    <Table.HeaderCell>Redes sociais da intituição</Table.HeaderCell>
                                    <Table.HeaderCell>Data da constituição</Table.HeaderCell>
                                    <Table.HeaderCell>Comprovante de cadastro</Table.HeaderCell>
                                    <Table.HeaderCell>Nome do responsavel</Table.HeaderCell>
                                    <Table.HeaderCell>CPF do responsavel</Table.HeaderCell>
                                    <Table.HeaderCell>Telefone do responsavel</Table.HeaderCell>
                                    <Table.HeaderCell>Email do responsavel</Table.HeaderCell>
                                    <Table.HeaderCell>Cargo do responsavel</Table.HeaderCell>
                                    <Table.HeaderCell>Senha de acesso</Table.HeaderCell>
                                    <Table.HeaderCell textAlign='center'>Ações</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>

                                {lista.map(instituicao => (

                                    <Table.Row key={instituicao.id}>
                                        <Table.Cell>{instituicao.NomeInstituicao}</Table.Cell>
                                        <Table.Cell>{instituicao.CNPJInstituicao}</Table.Cell>
                                        <Table.Cell>{instituicao.EnderecoInstituicao}</Table.Cell>
                                        <Table.Cell>{instituicao.TelefoneInstituicao}</Table.Cell>
                                        <Table.Cell>{instituicao.Finalidade}</Table.Cell>
                                        <Table.Cell>{instituicao.EmailInstituicao}</Table.Cell>
                                        <Table.Cell>{instituicao.RedesSociaisIntituicao}</Table.Cell>
                                        <Table.Cell>{formatarData(instituicao.DataConstituicao)}</Table.Cell>
                                        <Table.Cell>{instituicao.ComprovanteCadastro}</Table.Cell>
                                        <Table.Cell>{instituicao.Observações}</Table.Cell>
                                        <Table.Cell>{instituicao.NomeResponsavel}</Table.Cell>
                                        <Table.Cell>{instituicao.CpfReponsavel}</Table.Cell>
                                        <Table.Cell>{instituicao.TelefoneResponsavel}</Table.Cell>
                                        <Table.Cell>{instituicao.EmailResponsavel}</Table.Cell>
                                        <Table.Cell>{instituicao.CargoReponsavel}</Table.Cell>
                                        <Table.Cell>{instituicao.SenhaAcesso}</Table.Cell>
                                        <Table.Cell textAlign='center'>

                                            <Button
                                                inverted
                                                circular
                                                color='green'
                                                title='Clique aqui para editar os dados da instituição.'
                                                icon>
                                                <Link to="/form-instituicao" state={{ id: instituicao.id }} style={{ color: 'green' }}> <Icon name='edit' /> </Link>

                                            </Button> &nbsp;
                                            <Button
                                                inverted
                                                circular
                                                color='red'
                                                title='Clique aqui para remover a instituição'
                                                icon
                                                onClick={e => confirmaRemover(instituicao.id)}>

                                                <Icon name='trash' />
                                            </Button>

                                        </Table.Cell>
                                    </Table.Row>
                                ))}

                            </Table.Body>
                        </Table>
                    </div>
                </Container>
            </div>
            <Modal
                basic
                onClose={() => setOpenModal(false)}
                onOpen={() => setOpenModal(true)}
                open={openModal}
            >
                <Header icon>
                    <Icon name='trash' />
                    <div style={{ marginTop: '5%' }}> Tem certeza que deseja remover esse registro? </div>
                </Header>
                <Modal.Actions>
                    <Button basic color='red' inverted onClick={() => setOpenModal(false)}>
                        <Icon name='remove' /> Não
                    </Button>
                    <Button color='green' inverted onClick={() => remover()}>
                        <Icon name='checkmark' /> Sim
                    </Button>
                </Modal.Actions>
            </Modal>

        </div>
    )
}




