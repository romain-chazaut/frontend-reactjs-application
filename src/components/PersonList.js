import React from 'react';

// This is a functional component for displaying a list of people.
const PersonList = ({ people, handleUpdate, handleDelete }) => {

  // This is the updated info for a person. It's used when clicking the update button.
  const updatedInfo = {
    firstName: 'Updated First Name',
    lastName: 'Updated Last Name',
    email: 'updated.email@example.com'
  };

  // These are the styles for the table, header, and buttons.
  const tableStyle = {
    width: "60vw", 
    borderSpacing: "15px",
    border: "1px solid #000",
    fontFamily: "'Arial', sans-serif",
    margin: "40px"
  };

  const headerStyle = {
    backgroundColor: "#ddd",
    fontWeight: "bold",
  };

  const buttonStyle = {
    backgroundColor: "#0056B3",
    color: "white",
    padding: "10px 24px",
    margin: "8px 0",
    border: "none",
    cursor: "pointer",
    borderRadius: "10px",
    textAlign: "center",
  };

  // This is the JSX that will be rendered by the PersonList component.
  return (
    <div className="person-list">
    <table style={tableStyle}>
      <thead>
        <tr style={headerStyle}>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th colSpan={2}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {people.sort((a, b) => a.lastName.localeCompare(b.lastName)).map((person, index) => (
          <tr key={index}>
            <td>{person.firstName}</td>
            <td>{person.lastName}</td>
            <td>{person.email}</td>
            <td><button style={buttonStyle} onClick={() => handleUpdate(person.id, updatedInfo)}>Update</button></td>
            <td><button style={buttonStyle} onClick={() => handleDelete(person.id)}>Delete</button></td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

// We export the PersonList component so that it can be imported and used in other parts of the application.
export default PersonList;
