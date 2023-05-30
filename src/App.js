import React, { useState, useEffect } from "react";
import { getAll } from "./services/personService";
import PersonList from "./components/PersonList";
import PersonForm from "./components/PersonForm";

function App() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    getAll().then((initialPeople) => {
      setPeople(initialPeople);
    });
  }, []);

  return (
    <div className="App">
      <h1>People List</h1>
      <PersonForm />
      <PersonList people={people} />
    </div>
  );
}

export default App;
