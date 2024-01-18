// Profile.js

import React from 'react';
import './Profile.css';
import profilePhoto from '../assets/Profile.jpeg';

export const Profile = () => {
  // Dummy data for the profile
  const profileData = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    photo: profilePhoto,
    bloodGroup: 'AB+',
    height: '175 cm',
    weight: '70 kg',
    registrationDate: '01/01/2021',
    dummy: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae .',
    // Add more health-related information as needed
  };

  return (
    <>
    {/* <h2 className="profile-title">User Profile</h2> */}
    <div className="profile-container">
      <div className="profile-details">
        
        <div className="profile-column">
        <div className="profile-photo">
        <img src={profileData.photo} alt="User Photo" />
      </div>
          <div className="profile-info">
            <label className="profile-label">Name:</label>
            <p className="profile-text">{profileData.name}</p>
          </div>
          <div className="profile-info">
            <label className="profile-label">Email:</label>
            <p className="profile-text">{profileData.email}</p>
          </div>
          <div className="profile-info">
            <label className="profile-label">Registration Date:</label>
            <p className="profile-text">{profileData.registrationDate}</p>
          </div>
          <div className="profile-info">
            <label className="profile-label">Realtive Data:</label>
            <p className="profile-text">{profileData.dummy}</p>
          </div>
          <div className="profile-info">
            <label className="profile-label">Realtive Data:</label>
            <p className="profile-text">{profileData.dummy}</p>
          </div>
        </div>
        <div className="profile-column">
          <div className="profile-info">
            <label className="profile-label">Blood Group:</label>
            <p className="profile-text">{profileData.bloodGroup}</p>
          </div>
          <div className="profile-info">
            <label className="profile-label">Height:</label>
            <p className="profile-text">{profileData.height}</p>
          </div>
          <div className="profile-info">
            <label className="profile-label">Realtive Data:</label>
            <p className="profile-text">{profileData.dummy}</p>
          </div>
          <div className="profile-info">
            <label className="profile-label">Realtive Data:</label>
            <p className="profile-text">{profileData.dummy}</p>
          </div>
          <div className="profile-info">
            <label className="profile-label">Realtive Data:</label>
            <p className="profile-text">{profileData.dummy}</p>
          </div>
          <div className="profile-info">
            <label className="profile-label">Realtive Data:</label>
            <p className="profile-text">{profileData.dummy}</p>
          </div>
        </div>
        {/* Add more health-related information as needed */}
      </div>
      
    </div>
    </>
  );
};
