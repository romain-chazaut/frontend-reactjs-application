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

  return (
    <div>
      <h2>{person.firstName} {person.lastName}</h2>
      <p>Email: {person.email}</p>
      <button onClick={() => handleUpdate(person.id)}>Update</button>
      <button onClick={deletePerson}>Delete</button>
    </div>
  );
};

export default Person;
