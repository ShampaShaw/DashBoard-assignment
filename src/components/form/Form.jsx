import React, { useState } from 'react';
import './form.css';

function Form({ onSubmit }) {
  const getCurrentDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Add leading zero if needed
    const day = String(date.getDate()).padStart(2, '0'); // Add leading zero if needed
    return `${year}-${month}-${day}`;
  }

  const [formData, setFormData] = useState(() => {
    return {
      User_Name: '',
      email: '',
      sales: '',
      productName: '',
      date: getCurrentDate(),
    };
  });

  const [message, setMessage] = useState('');

  const handleAddProduct = (e) => {
    e.preventDefault();

    onSubmit(formData);
    setMessage('Data added successfully🎉!');
    setTimeout(() => {
      setMessage('');
    }, 3000);

    // Reset form data
    setFormData(() => ({
      User_Name: '',
      email: '',
      sales: '',
      productName: '',
      date: getCurrentDate(),
    }));
  };

  return (
    <div className='form'>
      <div className='title'>ADD NEW DATA</div>
      <form onSubmit={handleAddProduct}>
        <div className='user-details'>
          <div className='input-box'>
            <input
              type='text'
              placeholder='Product Name'
              value={formData.productName}
              onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
              required
            />
          </div>
          <div className='input-box'>
            <input
              type='number'
              placeholder='Sales'
              value={formData.sales}
              onChange={(e) => setFormData({ ...formData, sales: e.target.value })}
              required
            />
          </div>
          <div className='input-box'>
            <input
              type='text'
              placeholder='Enter User Name'
              value={formData.User_Name}
              onChange={(e) => setFormData({ ...formData, User_Name: e.target.value })}
            />
          </div>
          <div className='input-box'>
            <input
              type='email'
              placeholder='Enter Email'
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>
          <div className='input-box'>
            <input
              type='date'
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              required
            />
          </div>
        </div>
        <div className='button'>
          <input type='submit' value='Add Product' />
        </div>
      </form>
      {message && <div className='success-message'>{message}</div>}
    </div>
  );
}

export default Form;
