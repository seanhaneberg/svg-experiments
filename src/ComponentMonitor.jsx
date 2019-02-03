import React, { Component } from 'react';
import './SVGWave.css'
import 'rc-slider/assets/index.css';
import MetadataRenderer from './MetadataRenderer';

class ComponentMonitor extends Component {

  render() {
    return (
      // Need to return:
      <div className="container">
        <div className="data-pane">
          <MetadataRenderer title="props" metadata={this.props.subject.props} />
          <MetadataRenderer title="state" metadata={this.props.subject.state} />
        </div>
      </div>
    );
  }
}

export default ComponentMonitor;
