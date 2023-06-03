import React from 'react';

// This is a functional component for displaying a person's information.
const Person = ({ person, handleUpdate, handleDelete }) => {

  // This is a static object for updated person's information. This might be replaced by an input form in a real-world application.
  const updatedInfo = {
    firstName: 'Updated First Name',
    lastName: 'Updated Last Name',
    email: 'updated.email@example.com'
  };

  return (
    // This div will act as a container for a person's information.
    <div className="person-card">
      // We use h2 tag to display the person's first name and last name.
      <h2>{person.firstName} {person.lastName}</h2>
      // We display the person's email in a paragraph tag.
      <p>Email: {person.email}</p>
      // This is a button for updating the person's information. It calls the handleUpdate function when clicked.
      <button onClick={() => handleUpdate(person.id, updatedInfo)}>Update</button>
      // This is a button for deleting the person's information. It calls the handleDelete function when clicked.
      <button onClick={() => handleDelete(person.id)}>Delete</button>
    </div>
  );
};

// We export the Person component so that it can be imported and used in other parts of the application.
export default Person;
