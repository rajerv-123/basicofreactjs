import React, { Component } from "react";

export default class StateInClassBC extends Component {
  constructor() {
    super();
    this.state = {
      name: "Rajeev",
      age: 1,
      array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    };
  }

  changeStatus = () => {
    this.setState({
      age: this.state.age * 2,
      name: "Noddy",
    });
  };
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h1>{this.state.age}</h1>
        <button onClick={this.changeStatus}>change state</button>
      </div>
    );
  }
}
