import React, { useState, useEffect } from "react";
import { getAll, remove } from "./services/personService";
import PersonList from "./components/PersonList";
import PersonForm from "./components/PersonForm";


// This is the main App component.
function App() {
  // These are the state variables for the list of people and the person to update.
  const [people, setPeople] = useState([]);
  const [personToUpdate, setPersonToUpdate] = useState(null);

   // This useEffect hook is used to fetch the initial list of people when the component mounts.
  useEffect(() => {
    getAll().then((initialPeople) => {
      setPeople(initialPeople);
    });
  }, []);

   // This function is used to update the list of people after a person is added, updated, or deleted.
  const updatePersonList = () => {
    getAll().then((updatedPeople) => {
      setPeople(updatedPeople);
    });
  };

  // This function is called when the update button is clicked for a person.
  const handleUpdate = (id) => {
    const person = people.find((person) => person.id === id);
    setPersonToUpdate(person);
  };

  // This function is called when the delete button is clicked for a person.
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

   // This is the JSX that will be rendered by the App component.
  return (
    <div className="App">

      <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
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
      
    </div>
  );
}

// We export the App component so that it can be rendered in the root component.
export default App;
