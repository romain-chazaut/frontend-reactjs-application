import React, { useState, useEffect } from "react";
import axios from "axios";

// This is a functional component for the form to add or update a person.
const PersonForm = ({ personToUpdate, updatePersonList }) => {
  // We use the useState hook to create state variables for person and error.
  const [person, setPerson] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
  });

  const [error, setError] = useState(null);

  // We use the useEffect hook to update the person state if a personToUpdate prop is passed.
  useEffect(() => {
    if (personToUpdate) {
      setPerson(personToUpdate);
    }
  }, [personToUpdate]);

  // This function handles changes to the form inputs. It updates the person state with the new input values.
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
        // If the person object doesn't have an id, it's a new person. So, we send a POST request.
        await axios.post("http://localhost:3000/people", person);
      } else {
        // If the person object has an id, we're updating an existing person. So, we send a PUT request.
        await axios.put(`http://localhost:3000/people/${person.id}`, person);
      }
      updatePersonList();  // We call this function to update the list of people after the POST/PUT request.
      setPerson({ id: "", firstName: "", lastName: "", email: "" }); // We reset the form inputs after the form submission.
    } catch (error) {
      console.error('Error:', error);
      setError('Something went wrong. Please try again.'); // We update the error state if there was an error with the form submission.
    }
  };
  
   // This is the JSX that will be rendered by the PersonForm component.
  return (
    <div>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit} className="person-form" style={{display: "flex", flexDirection: "column" }}>
        <input
          type="text"
          name="firstName"
          value={person.firstName}
          onChange={handleChange}
          placeholder="First Name"
          required
          className="form-input"
          style={{border: "none", outline: "none", background: "#F9F9F9", padding: "8px 16px", margin: 8,}}
        />
        <input
          type="text"
          name="lastName"
          value={person.lastName}
          onChange={handleChange}
          placeholder="Last Name"
          required
          className="form-input"
          style={{border: "none", outline: "none", background: "#F9F9F9", padding: "8px 16px", margin: 8}}
        />
        <input
          type="email"
          name="email"
          value={person.email}
          onChange={handleChange}
          placeholder="Email"
          required
          className="form-input"
          style={{border: "none", outline: "none", background: "#F9F9F9", padding: "8px 16px", margin: 8}}
        />
        <button 
          type="submit" 
          className="form-btn" 
          style={{
            outline: "none", 
            border: "none", 
            background: "#0056B3", 
            padding: 8, 
            borderRadius: 6, 
            color: "#fff" 
          }}
        >
          {person.id ? "Update" : "Add"}
        </button>
      </form>
    </div>
  );
};

// We export the PersonForm component so that it can be imported and used in other parts of the application.
export default PersonForm;
