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
    // const maxY = height;
    // const minY = 0;
    const dProp = "M " + startX + " " + startY + " C " + periodWidth / 2 + " 10, " + periodWidth / 2 + " 10, " + startX + periodWidth + " " + startY + " S " + periodWidth * 2 + " " + periodWidth * 2 + ", " + periodWidth * 2 + " " + startY;
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
