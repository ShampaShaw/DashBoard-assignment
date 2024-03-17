import React, { useState } from 'react';
import './form.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import the default CSS for react-datepicker

function Form() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className='container'>
      <div className='form'>
        <div className='title'>ADD NEW DATA</div>
        <form>
          <div className='user-details'>
            <div className='input-box'>
              <input type='text' placeholder='Enter Product Name' required />
            </div>
            <div className='input-box'>
              <input type='number' placeholder='Sales' required />
            </div>
            <div className='input-box'>
              <input type='text' placeholder='Enter Customer Name' />
            </div>
            <div className='input-box'>
              <DatePicker
                selected={startDate}
                onChange={date => setStartDate(date)}
                dateFormat="MMMM d, yyyy" // Date format
                placeholderText="Select Date" // Placeholder text for the input field
                className='date-picker' // Custom class name for styling
              />
            </div>
          </div>
          <div className='button'>
            <input type='submit' value='Add Product' />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
