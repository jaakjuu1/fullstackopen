import React from 'react';
import Person from './Person'

const Results = ({results}) => {
  return (
    <>
    {results.map((person) => (
        <Person key={person.name} name={person.name} number={person.number} />
      ))}
    </>
  )
}

export default Results