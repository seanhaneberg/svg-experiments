import React, { Component } from 'react';
import './SVGWave.css'

class SVGWave extends Component {

  render() {
    const amplitude = this.props.amplitude;
    const height = amplitude * 2;
    const periodWidth = this.props.periodWidth;
    const strokeWidth = this.props.strokeWidth;
    const width = (periodWidth * (this.props.numCycles - 2));
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

    const numCycles = this.props.numCycles;

    let suffix = '';

    // The first cycle doesn't require a suffix
    for (let i = 1; i < numCycles; i++) {
      // Every other cycle needs inverted control points
      let thisY = (i % 2) ? startY + (startY - dy1) : dy1;
      suffix += `S ${dx + (i * periodWidth)} ${thisY} ${dx + (periodWidth * i)} ${startY}`;
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
              className="wave"
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
