import React, { useState, useEffect } from 'react';
import personService from '../services/personService'; 

function PersonList() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetchPeople();
  }, []);

  const fetchPeople = async () => {
    try {
      const peopleData = await personService.getPeople();
      setPeople(peopleData);
    } catch (error) {
      console.error("Failed to fetch people", error);
    }
  };

  return (
    <div>
      {people.map(person => (
        <div key={person.id}>
          <h2>{person.firstName} {person.lastName}</h2>
          <p>{person.email}</p>
        </div>
      ))}
    </div>
  );
}

export default PersonList;
