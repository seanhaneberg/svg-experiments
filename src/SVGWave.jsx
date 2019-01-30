import React, { Component } from 'react';

/**
 * Properties:
 *  - number of cycles
 *  - offset
 *  - color
 *  - amplitude
 *  - cycle-width
 */

class SVGWave extends Component {
  render() {
    const height = this.props.height ? this.props.height : 200;
    const width = this.props.width ? this.props.width : 200;
    const strokeWidth = this.props.strokeWidth ? this.props.strokeWidth : 1;
    const startX = 0;
    const startY = height / 2;
    const periodWidth = this.props.periodWidth ? this.props.periodWidth : 80;
    const dx1 = startX;
    const dy1 = 20;
    const dx = dx1 + periodWidth; // Destination
    const dy = startY; // Destination
    const dx2 = dx;
    const dy2 = dy1;
    const dProp =
      `M
      ${startX} ${startY}
      C
      ${dx1} ${dy1}
      ${dx2} ${dy2}
      ${dx} ${dy}
      S
      ${dx * 2} ${startY + (startY - dy1)}
      ${dx * 2} ${startY}`;
    return (
      <svg height={height} width={width}>
        <path
          d={dProp}
          stroke="black"
          strokeWidth={strokeWidth}
          fill="transparent"
        />
      </svg>
    );
  }
}

export default SVGWave;
