import React from 'react'
import Part from './Part'

const Content = ({parts}) => {
  return (
    <>
      {parts.map((part) => <Part name={part.name} count={part.exercises} key={part.id} />)}
    </>
  )
}

export default Content