import React, { useState, useEffect } from "react";
import Results from './components/Results'
import Filter from './components/Filter'
import Form from './components/Form'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newQuery, setNewQuery] = useState("");

  useEffect(() => {
    axios.get('http://localhost:3001/persons')
      .then(res => {
        setPersons(res.data)
      })
  },[])

  const results = persons.filter((person) =>
    person.name.toLowerCase().includes(newQuery.toLowerCase())
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    const personObject = {
      name: newName,
      number: newNumber,
    };

    if (
      persons.some(
        (person) =>
          person.name.toLowerCase() === personObject.name.toLowerCase()
      )
    ) {
      alert(`${personObject.name} is already in phonebook!`);
      return;
    }

    setPersons(persons.concat(personObject));
    setNewName("");
    setNewNumber("");
  };

  const handleName = (e) => {
    setNewName(e.target.value);
  };

  const handleNumber = (e) => {
    setNewNumber(e.target.value);
  };

  const handleQuery = (e) => {
    setNewQuery(e.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newQuery={newQuery} handleQuery={handleQuery} />
      <h2>add a new</h2>
      <Form handleSubmit={handleSubmit} newName={newName} handleName={handleName} handleNumber={handleNumber} />
      <h2>Numbers</h2>
      <Results results={results} />
      ...
    </div>
  );
};

export default App;
