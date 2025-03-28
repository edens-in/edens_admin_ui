import React from 'react';
import { FaUser } from "react-icons/fa";
import './Profile.css';

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-avatar">
          <FaUser size={64} />
        </div>
        <h1 className="profile-name">John Doe</h1>
        <p className="profile-email">john.doe@example.com</p>
      </div>
      
      <div className="profile-content">
        <div className="profile-section">
          <h2>Personal Information</h2>
          <div className="info-grid">
            <div className="info-item">
              <label>Full Name</label>
              <p>John Doe</p>
            </div>
            <div className="info-item">
              <label>Email</label>
              <p>john.doe@example.com</p>
            </div>
            <div className="info-item">
              <label>Phone</label>
              <p>+1 234 567 8900</p>
            </div>
            <div className="info-item">
              <label>Role</label>
              <p>Administrator</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile; 