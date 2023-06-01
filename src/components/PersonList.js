import React from 'react';
// import './PersonList.css';

const PersonList = ({ people, handleUpdate, handleDelete }) => {

  const updatedInfo = {
    firstName: 'Updated First Name',
    lastName: 'Updated Last Name',
    email: 'updated.email@example.com'
  };


  return (
    <div className="person-list">
    <table style={{width: "80vw", borderSpacing: "10px"}}>
      <thead>
        <tr>
          <th>Nom</th>
          <th>Prenom</th>
          <th>Email</th>
          <th colSpan={2}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {people.sort((a, b) => a.lastName.localeCompare(b.lastName)).map((person) => (
          <tr>
            <td>{person.firstName}</td>
            <td>{person.lastName}</td>
            <td>{person.email}</td>
            <td><button onClick={() => handleUpdate(person.id, updatedInfo)}>Update</button></td>
            <td><button onClick={() => handleDelete(person.id)}>Delete</button></td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default PersonList;
