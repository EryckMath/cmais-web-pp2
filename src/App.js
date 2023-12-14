import { Segment, Grid, Icon } from 'semantic-ui-react';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import './App.css';
import Rotas from './Rotas';

function CustomFooter() {
  return (
    <Segment color='blue' vertical textAlign='center' style={{ backgroundColor: '#4755f5', position: 'fixed', bottom: '0', width: '100%', padding: '50px' }} >
      <Grid columns={4} divided stackable style={{ borderColor: '#FFFFFF' }}>
        <Grid.Row>
          <Grid.Column style={{ borderRight: '2px solid #FFFFFF' }}>
            <h4 style={{ color: 'white' }}>Institucional</h4>
            <p>
              <a href="/sobre" style={{ color: 'white' }}>Sobre o come+</a><br />
              <a href="/guia" style={{ color: 'white' }}>Guia come+</a><br />
              <a href="/afiliado" style={{ color: 'white' }}>Nossos Afiliados</a>
            </p>
          </Grid.Column>
          <Grid.Column style={{ borderRight: '2px solid #FFFFFF' }}>
            <h4 style={{ color: 'white' }}>Ajuda</h4>
            <p>
              <a href="/conta" style={{ color: 'white' }}>Minha Conta</a><br />
              <a href="/acessibilidade" style={{ color: 'white' }}>Acessibilidade</a>
            </p>
          </Grid.Column>
          <Grid.Column style={{ borderRight: '2px solid #FFFFFF' }}>
            <h4 style={{ color: 'white' }}>Central de Atendimento</h4>
            <p>
              <a href="/duvida" style={{ color: 'white' }}>Tire suas dúvidas</a>
            </p>
          </Grid.Column>
          <Grid.Column style={{}}>
            <h4 style={{ color: 'white' }}>Nossas Redes Sociais</h4>
            <div className="social-icons">
              <a href="/facebook" style={{ color: 'white' }}><Icon name='facebook' /></a>
              <a href="/instagram" style={{ color: 'white' }}><Icon name='instagram' /></a>
              <a href="/twitter" style={{ color: 'white' }}><Icon name='twitter' /></a>
            </div>
            <div style={{ textAlign: 'center', backgroundColor: '#4755f5', color: 'white', padding: '10px', fontSize: '0.8em' }}>
              &copy; 2023 - Projeto PP2 - IFPE Jaboatão dos Guararapes - For 4
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

  );
}

function App() {
  return (
    <div className="App">
      <Rotas />
      <CustomFooter />
      <ToastContainer />
    </div>
  );
}

export default App;
