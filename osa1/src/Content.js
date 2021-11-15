import React from 'react'
import Part from './Part'

const Content = (props) => {
  return (
    <>
      {props.parts.map((part) => <Part nimi={part.name} lkm={part.exercises} />)}
    </>
  )
}

export default Content