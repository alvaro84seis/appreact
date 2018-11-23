import React, { Component } from 'react';

import './App.css';
import Navigation from './components/Navigation' 
import FormPaciente from './components/FormPaciente' 
import Pacientes from './components/Pacientes' 
class App extends Component {
  
  render() {
    return (
      
      <div className="App">
          <div className="Container">
          
          <Navigation titulo="Ingreso Paciente" />
            <div align="center" className="col-md-8 offset-md-2">
              
              <FormPaciente getPaciente={this.getPaciente} />
              <Pacientes  />
            </div>
            
          </div>
          
    
      </div>
    );
  }
}

export default App;
