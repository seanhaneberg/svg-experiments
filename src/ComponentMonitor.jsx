import React, { Component } from 'react';
import MetadataSliders from './MetadataSliders';
import './ComponentMonitor.css'
import MetadataCheckboxes from './MetadataCheckboxes';

class ComponentMonitor extends Component {

  render() {

    let sliderProps = {};
    let checkboxProps = {};

    if (!this.props.subject) {
      return null;
    }

    Object.keys(this.props.subject.props).map((fieldName) => {
      const val = this.props.subject.props[fieldName];
      const type = (typeof val);
      switch (type) {
        case "number":
          sliderProps[fieldName] = val;
          break;
        case "boolean":
          checkboxProps[fieldName] = val;
          break;
        default:
          // Ignore unknown types
          break;
      }
      return null;
    });

    return (
      <div className="container">
        <div className="slider-pane">
          <MetadataSliders
            title="props"
            onChange={this.props.onChange}
            metadata={sliderProps}
            mins={this.props.mins}
            maxes={this.props.maxes}
          />
        </div>
        <MetadataCheckboxes
          onChange={this.props.onChange}
          metadata={checkboxProps}
        />
      </div>
    );
  }
}

export default ComponentMonitor;
