import React from 'react';
import Person from './Person';

const PersonList = ({ people, handleUpdate, handleDelete }) => {
  return (
    <div>
      {people.sort((a, b) => a.lastName.localeCompare(b.lastName)).map((person) => (
        <Person
          key={person.id}
          person={person}
          handleUpdate={handleUpdate}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default PersonList;
