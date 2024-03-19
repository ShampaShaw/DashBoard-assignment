import React, { useState } from 'react';
import Navbar from './content/navbar/Navbar';
import Dashboard from './content/dashboard/Dashboard';
import Footer from './content/footer/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'app dark' : 'app bright'}>
      <Navbar toggleTheme={toggleTheme} />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;
