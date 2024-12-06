// src/data/formData.js

export const formData = {
    login: [
      { name: 'email', type: 'email', placeholder: 'Enter your email', label: 'Email', required: true },
      { name: 'password', type: 'password', placeholder: 'Enter your password', label: 'Password', required: true },
    ],
  
    register: [
      { name: 'username', type: 'text', placeholder: 'Enter your username', label: 'Username', required: true },
      { name: 'email', type: 'email', placeholder: 'Enter your email', label: 'Email', required: true },
      { name: 'password', type: 'password', placeholder: 'Enter your password', label: 'Password', required: true },
      { name: 'confirmPassword', type: 'password', placeholder: 'Confirm your password', label: 'Confirm Password', required: true },
    ],
  
    contact: [
      { name: 'name', type: 'text', placeholder: 'Enter your full name', label: 'Full Name', required: true },
      { name: 'email', type: 'email', placeholder: 'Enter your email', label: 'Email', required: true },
      { name: 'message', type: 'textarea', placeholder: 'Enter your message', label: 'Message', required: true },
    ],
  
    feedback: [
      { name: 'name', type: 'text', placeholder: 'Enter your name', label: 'Name', required: true },
      { name: 'email', type: 'email', placeholder: 'Enter your email', label: 'Email', required: true },
      { name: 'rating', type: 'number', placeholder: 'Rate out of 5', label: 'Rating (1-5)', required: true, min: 1, max: 5 },
      { name: 'comments', type: 'textarea', placeholder: 'Your comments', label: 'Comments', required: false },
    ],
  
    profile: [
      { name: 'firstName', type: 'text', placeholder: 'Enter your first name', label: 'First Name', required: true },
      { name: 'lastName', type: 'text', placeholder: 'Enter your last name', label: 'Last Name', required: true },
      { name: 'bio', type: 'textarea', placeholder: 'Write a short bio', label: 'Bio', required: false },
      { name: 'profilePicture', type: 'file', placeholder: '', label: 'Profile Picture', required: false },
    ],
  
    survey: [
      { name: 'age', type: 'number', placeholder: 'Enter your age', label: 'Age', required: true, min: 18, max: 100 },
      { name: 'gender', type: 'select', options: ['Male', 'Female', 'Other'], label: 'Gender', required: true },
      { name: 'satisfaction', type: 'radio', options: ['Very Satisfied', 'Satisfied', 'Neutral', 'Dissatisfied', 'Very Dissatisfied'], label: 'Satisfaction with service', required: true },
      { name: 'newsletter', type: 'checkbox', label: 'Would you like to receive our newsletter?', required: false },
    ],
  
    payment: [
      { name: 'cardNumber', type: 'text', placeholder: 'Enter your card number', label: 'Card Number', required: true },
      { name: 'expiryDate', type: 'text', placeholder: 'MM/YY', label: 'Expiry Date', required: true },
      { name: 'cvv', type: 'text', placeholder: 'Enter CVV', label: 'CVV', required: true },
      { name: 'cardholderName', type: 'text', placeholder: 'Cardholder Name', label: 'Cardholder Name', required: true },
    ],
  
    address: [
      { name: 'addressLine1', type: 'text', placeholder: 'Enter address line 1', label: 'Address Line 1', required: true },
      { name: 'addressLine2', type: 'text', placeholder: 'Enter address line 2', label: 'Address Line 2', required: false },
      { name: 'city', type: 'text', placeholder: 'Enter city', label: 'City', required: true },
      { name: 'zipCode', type: 'text', placeholder: 'Enter zip code', label: 'Zip Code', required: true },
      { name: 'country', type: 'text', placeholder: 'Enter country', label: 'Country', required: true },
    ],
  
    newsletter: [
      { name: 'email', type: 'email', placeholder: 'Enter your email', label: 'Email', required: true },
      { name: 'firstName', type: 'text', placeholder: 'Enter your first name', label: 'First Name', required: false },
      { name: 'lastName', type: 'text', placeholder: 'Enter your last name', label: 'Last Name', required: false },
    ],
  
    resetPassword: [
      { name: 'email', type: 'email', placeholder: 'Enter your email', label: 'Email', required: true },
      { name: 'newPassword', type: 'password', placeholder: 'Enter new password', label: 'New Password', required: true },
      { name: 'confirmPassword', type: 'password', placeholder: 'Confirm new password', label: 'Confirm Password', required: true },
    ],
  };
  