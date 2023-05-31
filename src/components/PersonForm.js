import React, { useState, useEffect } from "react";
import axios from "axios";

const PersonForm = ({ personToUpdate, updatePersonList }) => {
  const [person, setPerson] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
  });

  const [error, setError] = useState(null);

  useEffect(() => {
    if (personToUpdate) {
      setPerson(personToUpdate);
    }
  }, [personToUpdate]);

  const handleChange = (e) => {
    setPerson({
      ...person,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!person.id) {
        // If the person object doesn't have an id, it's a new person.
        await axios.post("http://localhost:3000/people", person);
      } else {
        // If the person object has an id, we're updating an existing person.
        await axios.put(`http://localhost:3000/people/${person.id}`, person);
      }
      updatePersonList();
      setPerson({ id: "", firstName: "", lastName: "", email: "" });
    } catch (error) {
      console.error('Error:', error);
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <div>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          value={person.firstName}
          onChange={handleChange}
          placeholder="First Name"
          required
        />
        <input
          type="text"
          name="lastName"
          value={person.lastName}
          onChange={handleChange}
          placeholder="Last Name"
          required
        />
        <input
          type="email"
          name="email"
          value={person.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <button type="submit">{person.id ? "Update" : "Add"}</button>
      </form>
    </div>
  );
};

export default PersonForm;
