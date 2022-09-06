import React from "react";
import "./style.scss";

export default function StepBarSection() {
  return (
    <div id="progress">
      <div id="progress-bar"></div>
      <ul id="progress-num">
        <li className="step">
          <span className="progress-text">1</span>
        </li>
        <li className="step">
          <span className="progress-text">2</span>
        </li>
        <li className="step">
          <span className="progress-text">3</span>
        </li>
        <li className="step lastest">
          <span className="progress-text">4</span>
        </li>
      </ul>
    </div>
  );
}
