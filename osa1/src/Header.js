import React from 'react'

const Header = (props) => {
  console.log(props)
  return (
    <h1>{props.title}</h1>
  )
}

export default Header