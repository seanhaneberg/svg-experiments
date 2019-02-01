import React, { Component } from 'react';
import './MetadataRenderer.css'

class MetadataRenderer extends Component {
  render() {
    // Process all fields on the metadata object
    const metadata = this.props.metadata ? this.props.metadata : {};
    const items = Object.keys(metadata).map((key, index) => {
      const item = metadata[key];
      return (
        <div key={index}> {key} - {item} </div>
      );
    });
    return (<div className="metadata-item">{items}</div>);
  }
}

export default MetadataRenderer;
