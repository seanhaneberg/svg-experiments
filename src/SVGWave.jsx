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
    const strokeWidth = this.props.strokeWidth ? this.props.strokeWidth : 1;
    return (
        <svg height="400" width="450">
          <path
            d="M 10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80"
            stroke="black"
            strokeWidth={strokeWidth}
            fill="transparent"
            />
        </svg>
    );
  }
}

export default SVGWave;
