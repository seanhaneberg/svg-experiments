import React, { Component } from 'react';
import MetadataSliders from './MetadataSliders';
import './ComponentMonitor.css'

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
      <div className="container">
        <div className="slider-pane">
          <MetadataSliders
            title="props"
            onChange={this.props.onChange}
            metadata={this.props.subject.props}
            mins={this.props.mins}
            maxes={this.props.maxes}
          />
        </div>
      </div>
    );
  }
}

export default ComponentMonitor;
