import React from "react";
import Chartbar from "./Chartbar";
import "./Chart.css";

function Chart(props) {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoints) => (
        <Chartbar
          id={dataPoints.label}
          value={dataPoints.value}
          label={dataPoints.label}
          maxValue={totalMaximum}
        />
      ))}
    </div>
  );
}

export default Chart;
