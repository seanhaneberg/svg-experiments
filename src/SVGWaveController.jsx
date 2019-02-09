import React, { Component } from 'react';
import './SVGWave.css'
import SVGWave from './SVGWave';
import ComponentMonitor from './ComponentMonitor';
import { Spring, config } from 'react-spring/renderprops';

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
const minXOffset = -200;
const maxXOffset = 200;

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
      showDebug: false,
      startXOffset: 0,
    };
  }

  onChange(fieldName, oldVal, newVal) {
    const newState = {};
    newState[fieldName] = newVal;
    this.setState(newState);
  }

  render() {
    const springWave = (
      <Spring
        to={{
          strokeWidth: this.state.strokeWidth,
          periodWidth: this.state.periodWidth,
          amplitude: this.state.amplitude,
          numCycles: this.state.numCycles,
          height: this.state.height,
          width: this.state.width,
          startXOffset: this.state.startXOffset,
        }}
        delay={100}
        onRest={(item) => {
          this.setState({ startXOffset: item.startXOffset });
        }}
      >
        {(animatedProps) => {

          const props = { ...animatedProps, showDebug: this.state.showDebug };
          const wave = <SVGWave {...props} />

          const monitor = <ComponentMonitor
            subject={wave}
            mins={{
              strokeWidth: minStroke,
              periodWidth: minPeriodWidth,
              amplitude: minAmplitude,
              numCycles: minCycles,
              height: minHeight,
              width: minWidth,
              startXOffset: minXOffset,
            }}

            maxes={{
              strokeWidth: maxStroke,
              periodWidth: maxPeriodWidth,
              amplitude: maxAmplitude,
              numCycles: maxCycles,
              height: maxHeight,
              width: maxWidth,
              startXOffset: maxXOffset,
            }}

            onChange={this.onChange.bind(this)}
          />;
          return (
            <div>
              {wave}
              {monitor}
            </div>
          );
        }}
      </Spring>
    );

    return (
      <div>
        <Spring
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
          delay={200}
          config={config.molasses}>
          {(props) => {
            return (<div
              style={props}>
              {springWave}
            </div>
            );
          }}
        </Spring>
      </div>
    );
  }
}

export default SVGWaveController;
