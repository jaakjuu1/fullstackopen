import React, { useState } from "react";
import Results from './components/Results'
import Filter from './components/Filter'
import Form from './components/Form'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newQuery, setNewQuery] = useState("");

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
