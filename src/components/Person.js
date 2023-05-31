import React from 'react';
import axios from 'axios';

const Person = ({ person, handleUpdate, handleDelete }) => {
  const deletePerson = async () => {
    try {
      await axios.delete(`http://localhost:3000/people/${person.id}`);
      handleDelete(person.id);
    } catch (error) {
      console.error('Error deleting person:', error);
    }
  };

  const updatePerson = async (updatedInfo) => {
    try {
      await axios.put(`http://localhost:3000/people/${person.id}`, updatedInfo);
      handleUpdate(person.id, updatedInfo);
    } catch (error) {
      console.error('Error updating person:', error);
    }
  };

  // Ceci est juste une démonstration de ce à quoi pourrait ressembler updatedInfo.
  // En réalité, vous devriez probablement recueillir ces informations à partir d'un formulaire ou d'une autre interface utilisateur.
  const updatedInfo = {
    firstName: 'Updated First Name',
    lastName: 'Updated Last Name',
    email: 'updated.email@example.com'
  };

  return (
    <div>
      <h2>{person.firstName} {person.lastName}</h2>
      <p>Email: {person.email}</p>
      <button onClick={() => updatePerson(updatedInfo)}>Update</button>
      <button onClick={deletePerson}>Delete</button>
    </div>
  );
};

export default Person;
