import React, { Component } from 'react'

class FormHandlin extends Component {
    constructor(props) {
      super(props)    
      this.state = {
         username: '',
         comments: '',
         topic:''
      }
    }
    handleUsernamechange = event => {
        this.state=({
            username: event.target.value
        })
    }
    handleTopicChange = event => {
        this.setState({
            comments: event.target.value
        })
    }

  render() {
    return (
        <form>
            <div>
            <label >Username</label>
            <input type="text" value={this.state.username} 
            onChange={this.handleUsernamechange}/>     
      </div>
      <div>
        <label >Comments</label>
        <input type="text" value={this.state.comments}
            onChange={this.handleCommentsChange}/>
      </div>
      <div>
            <label>Topic</label>
            <select value={this.state.topic} onClick={this.handleTopicChange}>
                <option value="react">React</option>
                <option value="angular">Angular</option>
                <option value="vue">Vue</option>
            </select>
      </div>
      <button>Submit</button>
        </form>
      
    )
  }
}
export default FormHandlin
