import React, { useState } from 'react';
import './contact.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [messageSent, setMessageSent] = useState(false); // State to track if the message was sent

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate sending message (you can replace this with actual message sending logic)
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);
    // Reset the form fields
    setName('');
    setEmail('');
    setMessage('');
    // Set message sent status to true
    setMessageSent(true);
    // Reset message sent status after 3 seconds
    setTimeout(() => {
      setMessageSent(false);
    }, 3000);
  };

  return (
    <div className='contact'>
      <div className='title2'>SEND MESSAGE TO THE CUSTOMER</div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Customer Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type='email'
          placeholder='Email Address'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <textarea
          placeholder='Message'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <button type='submit'>Send Message</button>
      </form>
      {messageSent && <div className='success-message'>Message sent successfully🎉!</div>}
    </div>
  );
}

export default Contact;
