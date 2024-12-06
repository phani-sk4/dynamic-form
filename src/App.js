import './App.css';
import React, { useState } from 'react';
import FormComponent from './components/FormComponent';
import FormDataDisplay from './components/FormDataDisplay'; // Assuming you have a separate FormComponent file
import { formData } from './data/formData';

const App = () => {
  // Define multiple form data (Login and Register)
  

  // State to track the selected form type
  const [selectedForm, setSelectedForm] = useState('login');
  const [submittedData, setSubmittedData] = useState(null);

  const handleFormSubmit = (formData) => {
    setSubmittedData(formData); // Save the form data after submission
  };

  const handleFormChange = (e) => {
    setSelectedForm(e.target.value);
    setSubmittedData(null);
  };

  const currentFormData = formData[selectedForm];

  return (
    <div>
      <img className = 'bgimg' src='https://images7.alphacoders.com/134/1345367.png'/>
      <div className='formcontainer'>
      {/* Select menu to choose between login and register forms */}
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="form-select">Choose Form: </label>
        <select id="form-select" onChange={handleFormChange} value={selectedForm}>
          <option value="login">Login</option>
          <option value="register">Register</option>
          <option value="contact">Contact</option>
          <option value="feedback">Feedback</option>
          <option value="profile">Profile</option>
          <option value="survey">Survey</option>
          <option value="payment">Payment</option>
          <option value="address">Address</option>
          <option value="newsletter">Newsletter</option>
          <option value="resetPassword">Reset Password</option>
        </select>
      </div>

      {/* Render the selected form */}
      <h1>{selectedForm.toUpperCase()} FORM </h1>
      <FormComponent formData={currentFormData} onSubmit={handleFormSubmit} />

      {/* Display the submitted data */}
      {submittedData && <FormDataDisplay formData={submittedData} />}
    </div>
    </div>
  );
};

export default App;

