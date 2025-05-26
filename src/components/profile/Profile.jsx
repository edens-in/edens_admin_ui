import React from 'react';
import { FaUser } from "react-icons/fa";
import './Profile.css';

import { useAuth } from '../../context/AuthContext';

const Profile = () => {
  const {user, isAuthenticated, loading} = useAuth();

  if(loading) return <div>Loading . . . </div>

  if(!isAuthenticated) return <div>Unauthorised Access</div>
  console.log(user, "from profile pagae")

  const SellerName = () => { 
    return user.user.seller.email.split('@')[0].split('.').map(name => name.charAt(0).toUpperCase() + name.slice(1)).join(' '); 
  }

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-avatar">
          <FaUser size={64} />
        </div>
        <h1 className="profile-name">{SellerName()}</h1>
        <p className="profile-email">{user.user.seller.email}</p>
      </div>
      
      <div className="profile-content">
        <div className="profile-section">
          <h2>Personal Information</h2>
          <div className="info-grid">
            <div className="info-item">
              <label>Full Name</label>
              <p>{SellerName()}</p>
            </div>
            <div className="info-item">
              <label>Email</label>
              <p>{user.user.seller.email}</p>
            </div>
            <div className="info-item">
              <label>Phone</label>
              <p>{user.user.seller.phone}</p>
            </div>
            <div className="info-item">
              <label>Verification</label>
              <p>{user.user.seller.isVerified ? "Verified" : "Not Verified"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile; 