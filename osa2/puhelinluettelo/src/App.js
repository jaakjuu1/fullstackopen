import React, { useState, useEffect } from "react";
import Results from "./components/Results";
import Filter from "./components/Filter";
import Form from "./components/Form";
import db from "./services/persons";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newQuery, setNewQuery] = useState("");
  const [notification, setNotification] = useState(null);
  const [notificationState, setNotificationState] = useState("notice");

  useEffect(() => {
    db.getAll().then((persons) => setPersons(persons));
    setNotification("Luettelo ladattu");
    setTimeout(() => setNotification(null), 4000);
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

    if (persons.some((person) => person.name === personObject.name)) {
      let updatedPerson = persons.find(
        (person) => person.name === personObject.name
      );
      console.log(updatedPerson);
      return window.confirm(
        "User is alreydy in the DB. Do you want to replace the number?"
      )
        ? db
            .modNumber(personObject, updatedPerson.id)
            .then((res) => {
              console.log(res);
              setPersons(
                persons.map((person) =>
                  person.name !== updatedPerson.name ? person : res
                )
              );
              setNotification(`${res.name} numero päivitetty`);
              setNotificationState("notice");
              setTimeout(() => setNotification(null), 3000);
              setNewName("");
              setNewNumber("");
            })
            .catch((err) => {
              if (err.response.data.error) {
                setNotification(err.response.data.error);
                setNotificationState("notice");
                setTimeout(() => setNotification(null), 3000);
              } else {
                setNotification(
                  `${updatedPerson.name} has already been removed from the server!`
                );
                setNotificationState("remove");
                setTimeout(() => setNotification(null), 4000);
              }
            })
        : false;
    }

    db.addNumber(personObject)
      .then((res) => {
        setPersons(persons.concat(res));
        setNotification(`Added ${res.name}`);
        setNotificationState("add");
        setTimeout(() => setNotification(null), 4000);
        setNewName("");
        setNewNumber("");
      })
      .catch((error) => {
        console.log(error.response.data);
        setNotification(`${error.response.data.error}`);
        setNotificationState("notice");
        setTimeout(() => setNotification(null), 7000);
      });
  };

  const removeContact = (id) => {
    return window.confirm("Poistetaanko yhteystieto?")
      ? db.removeNumber(id).then((res) => {
          setPersons(persons.filter((person) => person.id !== id));
          setNotification(`${id} was removed!`);
          setNotificationState("remove");
          setTimeout(() => setNotification(null), 4000);
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
      <Notification message={notification} state={notificationState} />
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
