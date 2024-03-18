'use client'
// components/Profile.js
import React, { useState } from 'react';
// import './Profile.css'; // Styles for Profile component
import Sidebar from '@/components/Sidebar';

const Profile = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1234567890'
  };

  return (
    <div className="profile-container">
      <Sidebar />
      <div className="profile-content">
        <div className='flex flex-ai-c gap4 mb4'>
          <img src='/images/avatar.png' alt='user avatar' />
          <h3>User name</h3>
        </div>
        <form>
          <label>Name</label>
          <input type="text" value={user.name} required disabled />
          <label>Email</label>
          <input type="email" value={user.email} required disabled />
          <label>Phone</label>
          <input type="text" value={user.phone} required disabled />
          <button type="submit">Customize</button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
