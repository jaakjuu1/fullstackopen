import React from 'react'

const Total = (props) => {
  return (
    <p><strong>total of { props.parts.reduce((acc, part) => { return acc + part.exercises}, 0 ) } exercises</strong></p>
  )
}

export default Total