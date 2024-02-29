
import React from 'react'

function ChildComponent(props) {
  return (
    <div>
        {/* <button onClick={props.greethandler}>Greet Parent</button> */}
        <button onClick={()=>props.greethandler('child')}>Greet Parent</button>
    </div>
     //here we access the parent method by using Props
  )
}

export default ChildComponent