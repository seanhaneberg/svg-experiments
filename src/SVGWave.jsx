import React, { Component } from 'react';

class SVGWave extends Component {
  render() {
    return (
        <svg height="400" width="450">
          <path
            d="M 10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80"
            stroke="black"
            strokeWidth="5"
            fill="transparent"
            />
        </svg>
    );
  }
}

export default SVGWave;
