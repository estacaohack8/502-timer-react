import React from 'react';
import AppStyle from './AppStyle';

class App extends React.Component {
  render() {
    return (
      <div style={AppStyle.divDeFora}>
        <div style={AppStyle.divDeDentro}>
          <h1 style={AppStyle.titulo}>Timer</h1>
          <div style={AppStyle.timer}>00:00</div>
          <div>
            <button style={AppStyle.botoesMaiores}>Start/Stop</button>
            <div>
              <button style={AppStyle.botoesMenores}>+</button>
              <button style={AppStyle.botoesMenores}>-</button>         
            </div>
            <button style={AppStyle.botoesMaiores}>Reset</button>
          </div>
        </div>
      </div>
      );
  }
}

export default App;