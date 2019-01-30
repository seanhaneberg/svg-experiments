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

  handleAmplitudeChange(val) {
    this.setState({ amplitude: val });
  }

  handleWidthChange(val) {
    this.setState({ periodWidth: val });
  }

  handleStrokeChange(val) {
    this.setState({ strokeWidth: val });
  }

  render() {
    const svg =
      <SVGWave
        strokeWidth={this.state.strokeWidth}
        periodWidth={this.state.periodWidth}
        width={this.state.width}
        amplitude={this.state.amplitude}
        />;
    return (
      <div className="App">
        {svg}
        <div style={{ padding: 50 }}>
          <br></br>
          Stroke
          <Slider onChange={this.handleStrokeChange.bind(this)} />
          <br></br>
          Height
          <Slider onChange={this.handleAmplitudeChange.bind(this)} />
          <br></br>
          Width
          <Slider onChange={this.handleWidthChange.bind(this)} />
        </div>
      </div>
    );
  }
}

export default App;
