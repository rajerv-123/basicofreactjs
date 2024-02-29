import React from 'react'
import { PureComponent } from 'react'

class PureComponents extends PureComponent {
  render() {
    console.log("Pure components")
    return (
      <div>
        pure components{this.props.name}
      </div>
    )
  }
}

export default PureComponents
