import React, { Component } from 'react';
import Slider from 'rc-slider';
import './SVGWave.css'
import 'rc-slider/assets/index.css';
import MetadataRenderer from './MetadataRenderer';

const minStroke = 2;
const maxStroke = 10;

const minPeriodWidth = 50;
const maxPeriodWidth = 150;

const minAmplitude = 50;
const maxAmplitude = 150;

const minCycles = 1;
const maxCycles = 7;

class SVGWave extends Component {
  constructor(props) {
    super(props);

    this.state = {
      strokeWidth: minStroke,
      periodWidth: minPeriodWidth,
      amplitude: minAmplitude,
      numCycles: minCycles,
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

  handleCyclesChange(val) {
    this.setState({ numCycles: val });
  }

  render() {

    const amplitude = this.state.amplitude;
    const height = amplitude * 2;
    const periodWidth = this.state.periodWidth;
    const strokeWidth = this.state.strokeWidth;
    const width = (periodWidth * (this.state.numCycles));
    const startX = 0;
    const startY = height / 2;

    // 1st control pt
    const dx1 = startX;
    const dy1 = startY + amplitude;

    // Destination
    const dx = startX + periodWidth;
    const dy = startY;

    // 2nd control pt
    const dx2 = dx;
    const dy2 = dy1;

    const metadata = this.state;

    const numCycles = this.state.numCycles;

    let suffix = '';

    // The first cycle doesn't require a suffix
    for (let i = 1; i < numCycles; i++) {
      // Every other cycle needs inverted control points
      let thisY = (i % 2) ? startY + (startY - dy1) : dy1;
      suffix += `S ${dx + (i  * periodWidth)} ${thisY} ${dx + (periodWidth * i)} ${startY}`;
    }

    const dProp =
      `M
      ${startX} ${startY}
      C
      ${dx1} ${dy1}
      ${dx2} ${dy2}
      ${dx} ${dy}
      ${suffix}`;
    return (
      // Need to return:
      <div className="container">
        <div className="slider-pane">
          stroke
          <Slider
            min={minStroke}
            max={maxStroke}
            onChange={this.handleStrokeChange.bind(this)}
          />
          height
          <Slider
            min={minAmplitude}
            max={maxAmplitude}
            onChange={this.handleAmplitudeChange.bind(this)}
          />
          width
          <Slider
            min={minPeriodWidth}
            max={maxPeriodWidth}
            onChange={this.handleWidthChange.bind(this)}
          />
          cycles
          <Slider
            min={minCycles}
            max={maxCycles}
            onChange={this.handleCyclesChange.bind(this)}
          />
        </div>
        <div className="data-pane">
          <MetadataRenderer
            metadata={metadata}
          />
        </div>
        <div className="content-pane">
          <svg height={height} width={width}>
            <rect
              height={height}
              width={width}
              stoke-width="2"
              stroke="#afafaf"
              fillOpacity={0.0}
            />
            <path
              class="wave"
              d={dProp}
              stroke="black"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              fill="transparent"
            />
          </svg>
        </div>
      </div>
    );
  }
}

export default SVGWave;
