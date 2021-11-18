import React from 'react';

const Maa = ({nimi, lippu}) => {
  return (
    <div>
      <img src={lippu} alt={nimi} />
      <h3>{nimi}</h3>
    </div>
  )
}

export default Maa