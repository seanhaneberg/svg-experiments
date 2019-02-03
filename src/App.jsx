import React, { Component } from 'react';
import SVGWaveController from './SVGWaveController';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          React SVG Wave
        </header>
        <div style={{ margin: 10 }}>
          <SVGWaveController />
        </div>
      </div >
    );
  }
}

export default App;
