import React, { Component } from 'react';
import './MetadataRenderer.css'

class MetadataRenderer extends Component {
  render() {
    // Process all fields on the metadata object
    const metadata = this.props.metadata ? this.props.metadata : {};
    const items = Object.keys(metadata).map((fieldName, index) => {
      const item = metadata[fieldName];
      return (
        <div key={index}> {fieldName} - {item} </div>
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

export default MetadataRenderer;
