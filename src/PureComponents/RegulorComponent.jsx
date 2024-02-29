import React, { Component } from 'react'

class RegulorComponent extends Component {
  render() {
    console.log("regulor component")
    return (
      <div>
        RegulorComponent{this.props.name}
      </div>
    )
  }
}

export default RegulorComponent
