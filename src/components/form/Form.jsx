import React, { useState } from 'react';
import './form.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import DataTable from '../table/dataTable/DataTable';
import 'react-datepicker/dist/react-datepicker.css'; // Import the default CSS for react-datepicker

function Form() {
  const [startDate, setStartDate] = useState(new Date());
  const [productName, setProductName] = useState('');
  const [sales, setSales] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [email, setEmail] = useState('');
  const [data, setData] = useState([]); // State to store the data
  const [message, setMessage] = useState(''); // State to store the message

  const handleAddProduct = (e) => {
    e.preventDefault();
    const newData = {
      id: data.length + 1,
      name: productName,
      Sales: sales,
      customerName: customerName,
      email: email,
      date: startDate.toLocaleDateString(), // Format the date to string
    };
    setData([...data, newData]); // Add new data to the existing data array
    // Reset form fields
    setProductName('');
    setSales('');
    setCustomerName('');
    setEmail('');
    setStartDate(new Date());
    // Set message
    setMessage('Data added successfully🎉!');
    // Clear message after 3 seconds
    setTimeout(() => {
      setMessage('');
    }, 3000);
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
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                required
              />
            </div>
            <div className='input-box'>
              <input
                type='number'
                placeholder='Sales'
                value={sales}
                onChange={(e) => setSales(e.target.value)}
                required
              />
            </div>
            <div className='input-box'>
              <input
                type='text'
                placeholder='Enter Customer Name'
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
              />
            </div>
            <div className='input-box'>
              <input
                type='email'
                placeholder='Enter Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className='input-box'>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                dateFormat='MMMM d, yyyy'
                placeholderText='Select Date'
                className='date-picker'
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
