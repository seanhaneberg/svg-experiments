import React, { Component } from 'react';
import './SVGWave.css'
import 'rc-slider/assets/index.css';
import MetadataRenderer from './MetadataRenderer';

class ComponentMonitor extends Component {

  render() {
    const sliders = [];
    return (
      // Need to return:
      <div className="container">
        <div className="slider-pane">
        {sliders}
        </div>
        <div className="data-pane">
          Props
          <MetadataRenderer metadata={this.props.subject.props} />
          State
          <MetadataRenderer metadata={this.props.subject.state} />
        </div>
      </div>
    );
  }
}

export default ComponentMonitor;
