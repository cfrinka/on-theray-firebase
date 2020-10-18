import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'

/*Páginas*/

import Home from './view/home'
import Login from './view/login'
import CadastroTerapeuta from './view/cadastroTerapeuta'
import CadastroPaciente from './view/cadastroPaciente'
import ListaPacientes from './view/listaPacientes'


function App() {
  return (
    <Router>
      <Route exact path='/' component={Home} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/cadastropaciente' component={CadastroPaciente} />
      <Route exact path='/cadastroterapeuta' component={CadastroTerapeuta} />
      <Route exact path='/listapacientes' component={ListaPacientes} />
      



    </Router>
     
    
  );
}

export default App;
