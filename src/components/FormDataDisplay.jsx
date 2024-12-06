import React from 'react';

const FormDataDisplay = ({ formData }) => {
  return (
    <div>
      <h2>Form Submitted Data:</h2>
      <ul>
        {Object.entries(formData).map(([key, value]) => (
          <li key={key}>
            <strong>{key}: </strong>{value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FormDataDisplay;
