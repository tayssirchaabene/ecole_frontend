import React from 'react';
import './Topbar.css';
import profileImage from './image.png';
import { FaSearch, FaBell, FaEnvelope, FaGlobe } from 'react-icons/fa';
function Topbar() {
  return (
    <div className="topbar">
      <div className="search-bar">
        <FaSearch style={{ color: '#aaa', marginRight: '8px' }} />
        <input type="text" placeholder="Find Something..." />
      </div>
      <div className="user-section">
        <div className="profile-info">
          <span style={{ color: '#888', fontSize: '12px' }}>Admin</span>
        </div>
        <img src={profileImage} alt="Profile" />
        <div className="notifications">
          <div className="notification-badge">
            <FaEnvelope />
            <span>5</span>
          </div>
          <div className="notification-badge">
            <FaBell />
            <span>8</span>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Topbar;