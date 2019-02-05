import React, { Component } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './MetadataSliders.css';

class MetadataSliders extends Component {

  onChange(fieldName, oldVal, newVal) {
    return this.props.onChange(fieldName, oldVal, newVal);
  }

  render() {
    // Process all fields on the metadata object
    const metadata = this.props.metadata ? this.props.metadata : {};
    const items = Object.keys(metadata).map((fieldName, index) => {
      const curFieldVal = metadata[fieldName];
      return (
        <div key={index}>
          <Slider
            min={this.props.mins[fieldName]}
            max={this.props.maxes[fieldName]}
            onChange={(newVal) => { 
              return this.onChange(fieldName, curFieldVal, newVal);
            }}
          />
          <div> {fieldName} - {curFieldVal} </div>
        </div>
      );
    });

    let title = null;
    if (this.props.title && items.length > 0) {
      title = (
        <div className="metadata-title">
          {this.props.title}
        </div>
      );
    }

    return (
      <div>
        {title}
        <div className="metadata-item">{items}</div>
      </div>
    );
  }
}

export default MetadataSliders;
