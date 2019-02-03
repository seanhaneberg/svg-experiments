import React, { Component } from 'react';
import './SVGWave.css'
import 'rc-slider/assets/index.css';
import MetadataSliders from './MetadataSliders';

class ComponentMonitor extends Component {

  render() {
    return (
      // Need to return:
      <div className="container">
        <div className="slider-pane">
          <MetadataSliders title="props" metadata={this.props.subject.props} />
        </div>
      </div>
    );
  }
}

export default ComponentMonitor;
