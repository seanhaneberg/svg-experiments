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

  handleHeightChange(val) {
    this.setState({ height: val });
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
        height={this.state.height}
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
          <Slider onChange={this.handleHeightChange.bind(this)} />
          <br></br>
          Width
          <Slider onChange={this.handleWidthChange.bind(this)} />
        </div>
      </div>
    );
  }
}

export default App;
