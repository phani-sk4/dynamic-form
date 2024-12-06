import React, { useState } from 'react';

const FormComponent = ({ formData, onSubmit }) => {
  const [formValues, setFormValues] = useState(
    formData.reduce((acc, field) => ({ ...acc, [field.name]: '' }), {})
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formValues);
  };

  return (
    <form onSubmit={handleSubmit} className="dynamic-form">
      {formData.map((field) => (
        <div key={field.name} className="form-group">
          <label htmlFor={field.name}>{field.label}</label>
          <input
            type={field.type}
            id={field.name}
            name={field.name}
            value={formValues[field.name]}
            onChange={handleChange}
            placeholder={field.placeholder}
            required={field.required}
          />
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;
