import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assests/logo.png';
import { FaMoon } from 'react-icons/fa';
import { IoSunnyOutline } from 'react-icons/io5';
import { IoPersonCircleOutline } from 'react-icons/io5';
import User from '../../assests/hacker.png';

const Navbar = ({ darkMode, toggleTheme }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleToggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    // Implement logout logic here
  };

  return (
    <div className={`navbar ${darkMode ? 'dark' : 'bright'}`}>
      <div className='logo'>
        <img src={logo} alt='Logo' />
      </div>
      <div className='title1'>ADMIN DASHBOARD</div>
      <div className='buttons'>
        <div className='mode-switch'>
          <button className='mode' onClick={toggleTheme}>
            {darkMode ? <IoSunnyOutline className='sun' /> : <FaMoon className='moon' />}
          </button>
        </div>
        <div className='account'>
          <IoPersonCircleOutline onClick={handleToggleDropdown} className='account-icon' />
          {showDropdown && (
            <div className='dropdown'>
              <div className='avatar'>
                <img src={User} alt='User'/>
              </div>
              <div className='name'>Shampa Shaw</div>
              <div className='settings'>
                <button>Settings</button>
              </div>
              <div className='logout'>
                <button onClick={handleLogout}>Logout</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
