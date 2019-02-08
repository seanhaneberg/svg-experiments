import React, { Component } from 'react';
import './SVGWave.css'

class SVGWave extends Component {

  render() {
    const amplitude = this.props.amplitude;
    const periodWidth = this.props.periodWidth;
    const strokeWidth = this.props.strokeWidth;
    const height = this.props.height;
    const width = this.props.width;
    const startX = 0;
    const startY = height / 2;

    // 1st control pt
    const dx1 = startX;
    const dy1 = startY + amplitude;

    // Destination
    const dx = startX + periodWidth;
    const dy = startY;

    // 2nd control pt
    const dx2 = dx;
    const dy2 = dy1;

    let cubicCurveData = {
      startPts: [[startX, startY]],
      firstControlPts: [[dx1, dy1]],
      secondControlPts: [[dx2, dy2]],
      destination: [[dx, dy]],
    };

    const numCycles = this.props.numCycles;


    for (let i = 1; i < numCycles; i++) {
      // Every other cycle needs inverted control points
      let thisY = (i % 2) ? startY + (startY - dy1) : dy1;
      let thisX = cubicCurveData.destination[i - 1][0];
      let nextX = thisX + periodWidth;
      cubicCurveData.startPts[i] = cubicCurveData.destination[i - 1];
      cubicCurveData.firstControlPts[i] = [thisX, thisY];
      cubicCurveData.secondControlPts[i] = [nextX, thisY];
      cubicCurveData.destination[i] = [nextX, cubicCurveData.destination[i - 1][1]];
    }

    let suffix = '';

    // The first cycle doesn't require a suffix
    for (let i = 1; i < numCycles; i++) {
      suffix += `S
        ${cubicCurveData.secondControlPts[i][0]} ${cubicCurveData.secondControlPts[i][1]}
        ${cubicCurveData.destination[i][0]} ${cubicCurveData.destination[i][1]}`;
    }

    const debugJSX = [];
    if (this.props.showDebug) {
      for (let i = 0; i < numCycles; i++) {
        const line1StartX = cubicCurveData.startPts[i][0];
        const line1StartY = cubicCurveData.startPts[i][1];
        const line1EndX = cubicCurveData.firstControlPts[i][0];
        const line1EndY = cubicCurveData.firstControlPts[i][1];
        const line2StartX = cubicCurveData.destination[i][0];
        const line2StartY = cubicCurveData.destination[i][1];
        const line2EndX = cubicCurveData.secondControlPts[i][0];
        const line2EndY = cubicCurveData.secondControlPts[i][1];

        debugJSX.push(
          <line
            key={"line1" + i}
            x1={line1StartX}
            y1={line1StartY}
            x2={line1EndX}
            y2={line1EndY}
            stroke="grey"
          />
        );

        debugJSX.push(
          <line
            key={"line2" + i}
            x1={line2StartX}
            y1={line2StartY}
            x2={line2EndX}
            y2={line2EndY}
            stroke="grey"
          />
        );

        debugJSX.push(<circle key={"circle1" + i} r={3} cx={line1EndX} cy={line1EndY} fill="grey" />);
        debugJSX.push(<circle key={"circle2" + i} r={3} cx={line2EndX} cy={line2EndY} fill="grey" />);
      }
    }

    const dProp =
      `M
      ${startX} ${startY}
      C
      ${dx1} ${dy1}
      ${dx2} ${dy2}
      ${dx} ${dy}
      ${suffix}`;

    return (
      // Need to return:
      <div className="container">
        <div className="content-pane">
          <svg height={height} width={width}>
            <rect height={height} width={width} style={{stroke: "grey"}} fillOpacity={0.0}/>
            <g className="wave">
              <path
                d={dProp}
                stroke="black"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                fill="transparent"
              />
              {debugJSX}
            </g>
          </svg>
        </div>
      </div>
    );
  }
}

export default SVGWave;
