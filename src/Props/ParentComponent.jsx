import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {   
    constructor(props) {
        super(props)
            //here method is defined 
            this.state = {
                parentName:'parent'
            }
            this.greetParent = this.greetParent.bind(this)
        }

        greetParent (childName){
            alert(`hello ${this.state.parentName} from ${childName}`)       
        }
    

  render() {
    return (
      <div>
        <ChildComponent greethandler={this.greetParent}/>
      </div>
    )
  }
}


export default ParentComponent