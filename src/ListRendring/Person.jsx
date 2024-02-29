import React from 'react'

function Person({person,key}) {
  return (
    <div>
        i am {person.name}. I am {person.age} years old  i know {person.skill}
    </div>
  )
}

export default Person