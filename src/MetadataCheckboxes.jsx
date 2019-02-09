import React, { Component } from 'react';
import './MetadataCheckboxes.css';

class MetadataCheckboxes extends Component {

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
          {fieldName}
          <input
            type="checkbox"
            onChange={() => {
              this.onChange(fieldName, curFieldVal, !curFieldVal);
            }}
            checked={curFieldVal}
          />
        </div>
      );
    });


    return (
      <div>
        <div className="metadata-item">{items}</div>
      </div>
    );
  }
}

export default MetadataCheckboxes;
