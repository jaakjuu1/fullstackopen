import React from 'react';
import Person from './Person'

const Results = ({results, removeContact}) => {
  return (
    <>
    {results.map((person) => (
        <div key={person.id}>
          <Person name={person.name} number={person.number} />
          <button onClick={() => removeContact(person.id)}>Delete</button>
        </div>
      ))}
    </>
  )
}

export default Results