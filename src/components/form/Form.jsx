import React, { useState } from 'react';
import './form.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function Form({ onSubmit }) {
  const getCurrentDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}`;
  };

  const [formData, setFormData] = useState(() => {
    return {
      User_Name: '',
      email: '',
      sales: '',
      productName: '',
      date: getCurrentDate(),
        year: getCurrentDate()
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
      //id: prevFormData + 1,
      User_Name: '',
      email: '',
      sales: '',
      productName: '',
      date: getCurrentDate(),
        year: getCurrentDate()
    }));
  };

  return (
    <div className='container'>
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
                type='number'
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
              <DatePicker
                selected={new Date(formData.date)}
                onChange={(date) => setFormData({ ...formData, date: date.toISOString().split('T')[0] })}
                dateFormat='yyyy-MM-dd'
                placeholderText='Select Date'
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
    </div>
  );
}

export default Form;
