import React, { useState, useEffect } from "react";
import { getAll, remove } from "./services/personService";
import PersonList from "./components/PersonList";
import PersonForm from "./components/PersonForm";

function App() {
  const [people, setPeople] = useState([]);
  const [personToUpdate, setPersonToUpdate] = useState(null);

  useEffect(() => {
    getAll().then((initialPeople) => {
      setPeople(initialPeople);
    });
  }, []);

  const updatePersonList = () => {
    getAll().then((updatedPeople) => {
      setPeople(updatedPeople);
    });
  };

  const handleUpdate = (id) => {
    const person = people.find((person) => person.id === id);
    setPersonToUpdate(person);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this person?")) {
      try {
        await remove(id);
        updatePersonList();
      } catch (error) {
        console.error('Error deleting person:', error);
      }
    }
  };

  return (
    <div className="App">
      <h1>People List</h1>
      <PersonForm
        personToUpdate={personToUpdate}
        updatePersonList={updatePersonList}
      />
      <PersonList
        people={people}
        handleUpdate={handleUpdate}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
