import React, { Component } from 'react';

class SVGWave extends Component {
  render() {
    // Use the same padding for x & y
    const amplitude = this.props.amplitude ? this.props.amplitude : 50;
    const padding = this.props.padding ? this.props.padding : 2;
    const height = amplitude * 2 + (padding * 2);
    const periodWidth = this.props.periodWidth ? this.props.periodWidth : 80;
    const strokeWidth = this.props.strokeWidth ? this.props.strokeWidth : 1;
    const width = (periodWidth * 2) + (padding * 2) + (strokeWidth * 2);
    const startX = 0 + padding + strokeWidth;
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

    const dProp =
      `M
      ${startX} ${startY}
      C
      ${dx1} ${dy1}
      ${dx2} ${dy2}
      ${dx} ${dy}
      S
      ${dx + periodWidth} ${startY + (startY - dy1)}
      ${dx + periodWidth} ${startY}`;
    return (
      <svg height={height} width={width}>
        <rect height={height} width={width} stoke-width="2" stroke="#afafaf" fillOpacity={0.0}/>
        <path
          d={dProp}
          stroke="black"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          fill="transparent"
        />
      </svg>
    );
  }
}

export default SVGWave;
