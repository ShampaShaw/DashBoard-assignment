import React from 'react'
import Navbar from './content/navbar/Navbar';
import Dashboard from './content/dashboard/Dashboard';
import Footer from './content/footer/Footer';

function App() {
  return (
    <div className='app'>
      <Navbar/>
      <Dashboard/>
      <Footer/>
    </div>
  )
}

export default App;
