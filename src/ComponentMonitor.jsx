import React, { Component } from 'react';
import './SVGWave.css'
import 'rc-slider/assets/index.css';
import MetadataRenderer from './MetadataRenderer';

// handleAmplitudeChange(val) {
//   this.setState({ amplitude: val });
// }
//
// handleWidthChange(val) {
//   this.setState({ periodWidth: val });
// }
//
// handleStrokeChange(val) {
//   this.setState({ strokeWidth: val });
// }
//
// handleCyclesChange(val) {
//   this.setState({ numCycles: val });
// }

class ComponentMonitor extends Component {

  render() {
    return (
      // Need to return:
      <div className="container">
        <div className="data-pane">
          <MetadataRenderer title="props" metadata={this.props.subject.props} />
        </div>
      </div>
    );
  }
}

export default ComponentMonitor;
