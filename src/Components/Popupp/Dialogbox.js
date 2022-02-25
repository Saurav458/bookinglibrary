import React, { Component } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

class Dialogbox extends Component {
  render() {
    return (
      <div>
        <Popup
        >
          <div>{this.props.Message}</div>
         
        </Popup>
      </div>
    );
  }
}
export default Dialogbox
