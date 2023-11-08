//import logo from './logo.svg';
import { Segment } from 'semantic-ui-react';
import './App.css';
import Rotas from './Rotas';
//import Home from './views/home/Home';

//import FormInstituicao from './views/instituicao/FormInstituicao';

function App() {
  return (
    <div className="App">
      
      <Rotas />

      <div style={{ marginTop: '6%' }}>
        <Segment vertical color='grey' size='tiny' textAlign='center'>
          &copy; 2023 - Projeto PP2 - IFPE Jaboatão dos Guararapes - 4 é Demais
        </Segment>
      </div>

    </div>
  );
}

export default App;
