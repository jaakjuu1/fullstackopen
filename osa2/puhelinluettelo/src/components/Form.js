import React from "react";

const Form = ({handleSubmit, newName, handleName, newNumber, handleNumber}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        Name: <input value={newName} onChange={handleName} />
      </div>
      <div>
        Number: <input value={newNumber} onChange={handleNumber} />
      </div>

      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default Form;
