import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import MenuSistema from "../../MenuSistema";
import { notifyError } from '../../views/util/Util';
import { registerSuccessfulLoginForJwt } from '../util/AuthenticationService';

export default function FormLogin () {

    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [senha, setSenha] = useState('');

    function entrar() {
        
        if (username !== '' && senha !== '') {

            let authenticationRequest = {
                username: username,
                password: senha,
            }
    
            axios.post("http://localhost:8080/api/login", authenticationRequest)
            .then((response) => {

                registerSuccessfulLoginForJwt(response.data.token, response.data.expiration)
                navigate("/home");
                
            })
            .catch((error) => {

                notifyError('Usuário não encontrado')
            })
        }
    }

    return(

        <div>
            <MenuSistema />
            <Grid textAlign='center' style={{ height: '70vh' }} verticalAlign='middle'>
                
                <Grid.Column style={{ maxWidth: 500 }}>
                        
                    <center> <Image src='/Come2 +.png' size='big' /> </center>
                    
                    <div style={{marginTop: '15%'}}>
                        <Header as='h2' color='black' textAlign='center'>
                            Insira seu email e senha 
                        </Header>
                    </div> <br/> <br/>
                        
                    <Form>
                        <Segment stacked>

                            <Form.Input
                                fluid
                                value={username}
                                onChange={e => setUsername(e.target.value)}
                                icon='user'
                                iconPosition='left'
                                placeholder='Informe seu e-mail'
                                required
                                maxLength="100"
                            />

                            <Form.Input
                                fluid
                                value={senha}
                                onChange={e => setSenha(e.target.value)}
                                icon='lock'
                                iconPosition='left'
                                type='password'
                                placeholder='Senha'
                                required
                                maxLength="100"
                            />

                            <Button 
                                fluid 
                                size='large'
                                color='green' 
                                icon='sign in alternate' 
                                content='Acessar' 
                                onClick={() => entrar()} />

                        </Segment>
                    </Form>
                        
                    <Message>
                        Esqueceu a senha? <Link>clique aqui</Link>
                    </Message>

                </Grid.Column>
            </Grid>
        </div>
    )
}