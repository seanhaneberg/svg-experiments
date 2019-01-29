import React, { Component } from 'react';
import Slider from 'rc-slider';
import SVGWave from './SVGWave';
import './App.css';
import 'rc-slider/assets/index.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { strokeWidth: 1 };
  }

  handleChange(val) {
    this.setState({ strokeWidth: val });
  }

  render() {
    const svg = <SVGWave strokeWidth={this.state.strokeWidth} />;
    return (
      <div className="App">
        {svg}
        <div style={{ padding: 50 }}>
          <Slider onChange={this.handleChange.bind(this)} />
        </div>
      </div>
    );
  }
}

export default App;
