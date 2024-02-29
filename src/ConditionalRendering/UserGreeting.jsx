import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false,
            //isLoggedIn: true
        }
    }

    render() {
        //Short Circuit operator apporach 
        
       return this.state.isLoggedIn && <div>welcome to bangalore</div>
        // if condition are true then method return the value if the 
        // method is not true then it not returing any value .

        // Ternary Conditional approach 
        // return (
        //     this.state.isLoggedIn ?
        //         <div>Welcome Rajeev </div> :
        //         <div>Welcome Rajeev in the reactjs</div>
        // )



        // This is element variable approach 

        // let message
        // if(this.state.isLoggedIn){
        //     message = <div>Welcome Rajeev</div>
        // }else {
        //     message = <div>Welcome</div>
        // }
        // return <div>{message}</div>




        // is is If / else approach
        
        // if(this.state.isLoggedIn){
        //     return(<div>Welcome Rajeev</div>
        // )}else{
        //     return(<div>Welcome Rajeev Patel</div>
        // )}
        // return (
        //     <div>
        //         <div>Welcome Rajeev in my Reactjs class today is 08/01/23 !!</div>
        //         <div>Welcome guest</div>
        //     </div>


        // )
    }
}

export default UserGreeting