import React, { useState } from 'react';

function PersonForm({ person, onSave, onCancel }) {
  const [formPerson, setFormPerson] = useState(person);

  const handleInputChange = (event) => {
    setFormPerson({
      ...formPerson,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSave(formPerson);
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          value={formPerson.firstName}
          onChange={handleInputChange}
        />
      </label>

      <label>
        Last Name:
        <input
          type="text"
          name="lastName"
          value={formPerson.lastName}
          onChange={handleInputChange}
        />
      </label>

      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formPerson.email}
          onChange={handleInputChange}
        />
      </label>

      <button type="submit">Save</button>
      <button type="button" onClick={handleCancel}>Cancel</button>
    </form>
  );
}

export default PersonForm;
