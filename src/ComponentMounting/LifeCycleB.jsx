import React, { Component } from 'react'

class LifeCycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Rajeev '
      }
      console.log('LifeCycleA constructor')
    }
    static gerDerivedStatefromProps(props,state) {
        console.log('lifecycle a getDerivedStateFromProps')
        return null
    }
    componentDidMount(){
        console.log('lifecycle a componentDidMount')
    }

  render() {
    return (
      <div>
        LifeCycleB
      </div>
    )
  }
}

export default LifeCycleB
