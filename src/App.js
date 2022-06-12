import './App.css';
import logo from './images/logo.png';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import React from 'react';


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      numClics: 0
    };

    this.contadorClic = this.contadorClic.bind(this);
    this.reiniciarContador = this.reiniciarContador.bind(this);
  }
  contadorClic() {
    this.setState(({ numClics }) => ({ numClics: numClics + 1 }));
  }

  reiniciarContador() {
    this.setState(({ numClics: 0}))
  }

  render(){
    return (
      <div className='App'>
        <div className='logo-contenedor'>
          <img 
            className='logo'
            src={logo}
            alt='Logo'
          />
        </div>
        <div className='contenedor-principal'>
          <Contador 
            numClics={this.state.numClics} />
          <Boton 
            texto='Clic'
            esBotonDeClic={true}
            manejarClic={this.contadorClic} />
          <Boton 
            texto='Reiniciar'
            esBotonDeClic={false}
            manejarClic={this.reiniciarContador} />
        </div>
      </div>
    );
  }
}

export default App;
