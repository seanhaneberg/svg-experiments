import React, { Component } from 'react';
import Slider from 'rc-slider';
import SVGWave from './SVGWave';
import './App.css';
import 'rc-slider/assets/index.css';

const minStroke = 1;
const maxStroke = 10;

const minPeriodWidth = 5;
const maxPeriodWidth = 100;

const minAmplitude = 5;
const maxAmplitude = 100;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      strokeWidth: minStroke,
      periodWidth: minPeriodWidth,
      amplitude: minAmplitude,
    };
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
          <Slider
            min={minStroke}
            max={maxStroke}
            onChange={this.handleStrokeChange.bind(this)}
          />
          <br></br>
          Height
          <Slider
            min={minAmplitude}
            max={maxAmplitude}
            onChange={this.handleAmplitudeChange.bind(this)}
          />
          <br></br>
          Width
          <Slider
            min={minPeriodWidth}
            max={maxPeriodWidth}
            onChange={this.handleWidthChange.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default App;
