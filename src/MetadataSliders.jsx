import React, { Component } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './MetadataRenderer.css'


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
            min={10}
            max={100}
            onChange={(newVal) => { 
              return this.onChange(fieldName, curFieldVal, newVal);
            }}
          />
          <div key={index}> {fieldName} - {curFieldVal} </div>
        </div>
      );
    });

    const title = this.props.title && items.length > 0 ? <div className="metadata-title">{this.props.title}</div> : null;

    return (
      <div>
        {title}
        <div className="metadata-item">{items}</div>
      </div>
    );
  }
}

export default MetadataSliders;
