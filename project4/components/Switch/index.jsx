import React from "react";
import "./styles.css";

import States from "../States";
import Example from "../Example";

class Switch extends React.Component {
    constructor(props) {
        super(props);
        this.state={
          example: true
        };
      }
    changeView=()=>{
        const n = !this.state.example;
        this.setState({example:n});
    }
    render() {

      return (<div>
        <button type='button' onClick={this.changeView}>
            {this.state.example?'Switch to States':'Switch to Example'}
        </button>
        {this.state.example? <Example/>:<States/>}
      </div>);
    }
  }
export default Switch;