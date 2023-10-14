import React, { Component } from "react";
import "./ProgressBar.css";

class ProgressBar extends Component {
  render() {
    const { progress } = this.props;
    return (
      <div className="progress-bar">
        <div
          className="progress-bar-fill"
          style={{ width: `${progress}%`}}
        ></div>
      </div>
    );
  }
}

export default ProgressBar;
