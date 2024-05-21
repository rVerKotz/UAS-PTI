import React, { useState } from 'react';
import '../styles/Contact.css'; 

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://api.apispreadsheets.com/data/dx5hDvBO8sOoum6l/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Form Data Submitted :)");
      } else {
        alert("There was an error :(");
      }
    } catch (error) {
      console.error('Error:', error);
      alert("There was an error :(");
    }
  };

  return (
    <form id="myForm" onSubmit={handleSubmit} className="vintage-form">
      <label>Full Name <span style={{color: 'red'}}>*</span></label>
      <br/>
      <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      <br/>
      <label>Email <span style={{color: 'red'}}>*</span></label>
      <br/>
      <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      <br/>
      <label>Message <span style={{color: 'red'}}>*</span></label>
      <br/>
      <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>
      <br/>
      <br/>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;