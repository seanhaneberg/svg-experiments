import React, { Component } from 'react';
import SVGWave from './SVGWave';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          React SVG Wave
        </header>
        <div style={{ margin: 10 }}>
          <SVGWave numCycles={1}/>
        </div>
      </div >
    );
  }
}

export default App;
