import React, { Component } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './MetadataRenderer.css'


class MetadataSliders extends Component {

  handlePropChange(val) {

  }

  render() {
    // Process all fields on the metadata object
    const metadata = this.props.metadata ? this.props.metadata : {};
    const items = Object.keys(metadata).map((key, index) => {
      const item = metadata[key];
      return (
        <div key={index}>
          <Slider
            key={index}
            min={10}
            max={100}
            onChange={this.handlePropChange.bind(this)}
          />
          <div key={index}> {key} - {item} </div>
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
