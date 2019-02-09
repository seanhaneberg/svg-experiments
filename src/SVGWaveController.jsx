import React, { Component } from 'react';
import './SVGWave.css'
import SVGWave from './SVGWave';
import ComponentMonitor from './ComponentMonitor';

const minStroke = 2;
const maxStroke = 10;
const minPeriodWidth = 50;
const maxPeriodWidth = 150;
const minAmplitude = 50;
const maxAmplitude = 150;
const minCycles = 2;
const maxCycles = 20;
const minHeight = 75;
const maxHeight = 200;
const minWidth = 75;
const maxWidth = 400;

class SVGWaveController extends Component {
  constructor(props) {
    super(props);

    this.state = {
      strokeWidth: minStroke,
      periodWidth: minPeriodWidth,
      amplitude: minAmplitude,
      numCycles: minCycles,
      height: minHeight,
      width: minWidth,
    };
  }

  onChange(fieldName, oldVal, newVal) {
    const newState = {};
    newState[fieldName] = newVal;
    this.setState(newState);
  }

  render() {
    const wave = (
      <SVGWave
        height={this.state.height}
        width={this.state.width}
        showDebug={true}
        strokeWidth={this.state.strokeWidth}
        periodWidth={this.state.periodWidth}
        amplitude={this.state.amplitude}
        numCycles={this.state.numCycles}
      />
    );

    const monitor = (
      <ComponentMonitor
        subject={wave}

        mins={{
          strokeWidth: minStroke,
          periodWidth: minPeriodWidth,
          amplitude: minAmplitude,
          numCycles: minCycles,
          height: minHeight,
          width: minWidth,
        }}

        maxes={{
          strokeWidth: maxStroke,
          periodWidth: maxPeriodWidth,
          amplitude: maxAmplitude,
          numCycles: maxCycles,
          height: maxHeight,
          width: maxWidth,
        }}

        onChange={this.onChange.bind(this)}
      />
    );
    return (
      <div>
        {wave}
        {monitor}
      </div>
    );
  }
}

export default SVGWaveController;
