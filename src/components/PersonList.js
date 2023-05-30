import React from 'react';

const PersonList = ({ people }) => {
  return (
    <div>
      {people.map((person) => (
        <div key={person.id}>
          {person.firstName} {person.lastName}
        </div>
      ))}
    </div>
  );
};

export default PersonList;
