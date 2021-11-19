import React, { useState, useEffect } from "react";
import Results from "./components/Results";
import Filter from "./components/Filter";
import Form from "./components/Form";
import db from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newQuery, setNewQuery] = useState("");

  useEffect(() => {
    db.getAll().then((persons) => setPersons(persons));
  }, []);

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
      let updatedPerson = persons.find(person => person.name === newName)
      return window.confirm(
        "User is alreydy in the DB. Do you want to replace the number?"
      )
        ? db.modNumber(personObject, updatedPerson.id).then((res) => {
            setPersons(persons.map( person => person.id !== updatedPerson.id ? person : res ));
            setNewName("");
            setNewNumber("");
          })
        : false;
    }

    db.addNumber(personObject).then((res) => {
      setPersons(persons.concat(res));
      setNewName("");
      setNewNumber("");
    });
  };

  const removeContact = (id) => {
    return window.confirm("Poistetaanko yhteystieto?")
      ? db.removeNumber(id).then((res) => {
          setPersons(persons.filter((person) => person.id !== id));
        })
      : null;
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
      <Form
        handleSubmit={handleSubmit}
        newName={newName}
        newNumber={newNumber}
        handleName={handleName}
        handleNumber={handleNumber}
      />
      <h2>Numbers</h2>
      <Results results={results} removeContact={removeContact} />
      ...
    </div>
  );
};

export default App;
