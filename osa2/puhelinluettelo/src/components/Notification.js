import React from 'react';

const Notification = ({ message, state }) => {
if (message === null) {
  return null
}

const color = state === 'add' ? 'green' : state === 'remove' ? 'red' : 'orange'

const errorStyle = {
  color,
  borderColor: color
}

  return (
    <div style={errorStyle} className="error">
      { message } 
    </div>
  )
}

export default Notification