import React from 'react';

const Person = ({ person, handleUpdate, handleDelete }) => {
  const updatedInfo = {
    firstName: 'Updated First Name',
    lastName: 'Updated Last Name',
    email: 'updated.email@example.com'
  };

  return (
    <div>
      <h2>{person.firstName} {person.lastName}</h2>
      <p>Email: {person.email}</p>
      <button onClick={() => handleUpdate(person.id, updatedInfo)}>Update</button>
      <button onClick={() => handleDelete(person.id)}>Delete</button>
    </div>
  );
};

export default Person;
