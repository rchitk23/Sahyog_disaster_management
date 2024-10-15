
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/RegistrationPage.css';

function RegistrationPage() {
  // Fetch the role from the query parameters
  const query = new URLSearchParams(useLocation().search);
  const roleParam = query.get('role') || 'User'; // Default to 'User' if no role is provided
  const [role, setRole] = useState(roleParam);

  // Render the registration form based on the role
  const renderUserForm = () => (
    <form className="registrationForm">
      <label>
        Name:
        <input type="text" name="name" required />
      </label>
      <label>
        Phone Number:
        <input type="tel" name="phone" required />
      </label>
      <label>
        Emergency Phone Number:
        <input type="tel" name="emergencyPhone" required />
      </label>
      <label>
        Email:
        <input type="email" name="email" required />
      </label>
      <label>
        Address:
        <textarea name="address" required />
      </label>
      <button type="submit">Register</button>
    </form>
  );

  const renderVolunteerOrNgoForm = () => (
    <form className="registrationForm">
      <label>
        Organization Name:
        <input type="text" name="organizationName" required />
      </label>
      <label>
        Contact Person:
        <input type="text" name="contactPerson" required />
      </label>
      <label>
        Email:
        <input type="email" name="email" required />
      </label>
      <label>
        Phone Number:
        <input type="tel" name="phone" required />
      </label>
      <button type="submit">Register</button>
    </form>
  );

  return (
    <div className="registrationPage">
      <h2>Register as {role}</h2>
      {role === 'User' ? renderUserForm() : renderVolunteerOrNgoForm()}
    </div>
  );
}

export default RegistrationPage;