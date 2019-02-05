import React, { Component } from 'react';
import './SVGWave.css'
import 'rc-slider/assets/index.css';
import MetadataSliders from './MetadataSliders';

class ComponentMonitor extends Component {
  constructor(props) {
    super(props);

    const subjectProps = this.props.subject.props;
    const propKeys = subjectProps ? Object.keys(subjectProps) : [];
    const initialState = {};
    propKeys.map((val, index) => {
      return initialState[index] = val;
    });
    this.state = { initialState };
  }

  render() {
    return (
      // Need to return:
      <div className="container">
        <div className="slider-pane">
          <MetadataSliders title="props"
            onChange={this.props.onChange}
            metadata={this.props.subject.props}
          />
        </div>
      </div>
    );
  }
}

export default ComponentMonitor;
