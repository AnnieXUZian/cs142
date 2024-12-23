import React from "react";
import "./styles.css";

/**
 * Define States, a React component of CS142 Project 4, Problem 2. The model
 * data for this view (the state names) is available at
 * window.cs142models.statesModel().
 */
class States extends React.Component {
  constructor(props) {
    super(props);
    this.stateData=window.cs142models.statesModel()
    this.state={
      input: "",
      states: [],
    };
    
    console.log(
      "window.cs142models.statesModel()",
      window.cs142models.statesModel()
    );
    this.searchState = this.searchState.bind(this);
    
  }

  updateInput(e){
    this.setState({input:e.target.value});
  }

  searchState(){
    const inputLower = this.state.input.toLowerCase();
    const matchingStates = this.stateData.filter(state => 
      state.toLowerCase().includes(inputLower)
    );
    this.setState({ states: matchingStates })
  }

  render() {
    return (<div className='state'>
      <input type='text' value={this.state.input} onChange={(e)=>{this.updateInput(e)}} />
      <button type='button' onClick={this.searchState}>Search</button>
      <div>
        <ul>
        {this.state.states.length===0 ? 'No matching states':this.state.states.map(state=> (<li key={state}>{state}</li>))}
        </ul>
      </div>
    </div>);
  }
}

export default States;
