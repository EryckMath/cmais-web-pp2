import React from "react";
import { Container, Grid, Image } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';

export default function Home() {

    return (
        <div>

            <MenuSistema />

            <div style={{ marginTop: '5%' }}>
                <Container>
                    <Grid columns={2} divided>
                        <Grid.Row>
                            <Grid.Column>
                                <Image src='/Come +.png' size='big' />
                            </Grid.Column>

                            <Grid.Column>
                                Bem vindo ao sistema <strong>Come Mais</strong> ! <br />
                                Uma plataforma que conecta mercados e pequenos produtores a instituições filantrópicas e ONGs.<br></br>
                                Um objetivo nobre: contribuir para a diminuição do problema da fome nas comunidades e locais carentes da região. <br /> <br />
                            </Grid.Column>

                        </Grid.Row>
                    </Grid>
                </Container>
            </div>
        </div>
    )
}
