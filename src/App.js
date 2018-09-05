import React from 'react';
import AppStyle from './AppStyle';
import Botao from './Components/Botao/Botao';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      minutos: 1,
      segundos: 0,
      contando: false
    };
    this.interval = null;
  }

  contar = () => {
    if(this.state.minutos === 0 && this.state.segundos === 0){
      this.parar();
    }
    else{
      let proxSegundos = this.state.segundos - 1;
      let proxMinutos = this.state.minutos;
      if(proxSegundos < 0){
        proxSegundos = 59;
        proxMinutos = this.state.minutos - 1
      }
      this.setState({
        minutos: proxMinutos,
        segundos: proxSegundos
      });
    }
  }

  iniciar = () => {
    this.interval = setInterval(this.contar, 1000);
    this.setState({
      contando: true
    });
  }

  parar = () => {
    clearInterval(this.interval);
    this.setState({
      contando: false
    });
  }

  mais = () => {
    if(!this.state.contando){
      this.setState({
        minutos: this.state.minutos + 1
      });
    }
  }
  
  menos = () => {
    if(!this.state.contando && this.state.minutos >= 1){
      this.setState({
        minutos: this.state.minutos - 1
      });
    }
  }

  reset = () => {
    this.parar();
    this.setState({
      minutos: 1,
      segundos: 0
    });
  }

  render() {

    let minutos = this.state.minutos < 10 ? `0${this.state.minutos}` : this.state.minutos;
    let segundos = this.state.segundos < 10 ? `0${this.state.segundos}` : this.state.segundos;

    return (
      <div style={AppStyle.divDeFora}>
        <div style={AppStyle.divDeDentro}>
          <h1 style={AppStyle.titulo}>Timer</h1>
          <div style={AppStyle.timer}>{`${minutos}:${segundos}`}</div>
          <div>
            <Botao clique={this.state.contando ? this.parar : this.iniciar} texto={this.state.contando ? "Stop" : "Start"} tamanho="grande"/>
            <div>
              <Botao pressionar={this.menos} texto="-"/>
              <Botao pressionar={this.mais} texto="+"/>
            </div>
            <Botao clique={this.reset} texto="Reset" tamanho="grande"/>
          </div>
        </div>
      </div>
      );
  }
}

export default App;