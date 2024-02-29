import React from 'react'
import Person  from './Person'



function NameList() {
    //const name = ['rajeev','Bala','Munna']
    //key is a special attribute you need to include when creating lists of elements keys 
    //gives the elements a stable identity
    //* keys help react identify which elements
    const person = [
      {
        id: 1,
        age: 32,
        name: 'raj',
        skill: 'java'
      },
      {
        id: 2,
        age: 42,
        name: 'mona',
        skill:'react',
      },
      {
        id: 3,
        age: 32,
        name: 'mohit',
        skill: 'python'
      }

    ]
    const PersonList =person.map(person => <person key={person.id} person={person}/>)
  return (
    <div>
      {/* <h1>{name[0]}</h1>
      <h1>{name[1]}</h1>
      <h1>{name[2]}</h1> */}
      {PersonList}
    </div>
  )
}

export default NameList
