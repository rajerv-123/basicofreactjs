import React, { Component, PureComponent } from "react";
import MemoComponent from "../Memo/MemoComponent";
import RegulorComponent from "./RegulorComponent";

class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Rajeev",
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Patel",
      });
    }, 2000);
  }

  render() {
    console.log("parent component");
    return (
      <div>
        ParentComponent
        <MemoComponent />
        <RegulorComponent name={this.state.name} />
        <PureComponent name={this.state.name} />
      </div>
    );
  }
}

export default ParentComponent;
