'use client'
// components/Profile.js
import React, { useState } from 'react';
// import './Profile.css'; // Styles for Profile component
import Sidebar from '@/components/Sidebar';

const Detail = () => {


  return (
    <div className="detail-container">
      <Sidebar />
      <div className="detail-content">
        <div className='detail-left'>
          <img src='/images/Micro1.jpeg' alt='microprocessor' />
          <div className='detail-microprocessors'>
            <img src='/images/Micro2.jpeg' alt='microprocessor' />
            <img src='/images/Micro3.jpeg' alt='microprocessor' />
            <img src='/images/Micro4.jpeg' alt='microprocessor' />
          </div>
        </div>
        <div className='detail-right'>
          <h2>Microprocessor Detail</h2>
          <h3>Description</h3>
          <p>Explore the intricate world of microprocessor circuits with our detailed guides. Learn how to optimize performance and efficiency in your coding projects. Our tutorials cover everything from basic concepts to advanced techniques, empowering you to create cutting-edge applications.</p>
          <h3>History</h3>
          <p>
          Explore the intricate world of microprocessor circuits with our detailed guides. Learn how to optimize performance and efficiency in your coding projects. Our tutorials cover everything from basic concepts to advanced techniques, empowering you to create cutting-edge applications.
          </p>
          <h3>Characteristic</h3>
          <ul>
            <li>characteristic 1</li>
            <li>characteristic 2</li>
            <li>characteristic 3</li>
          </ul>
        </div>
        
      </div>
    </div>
  );
};

export default Detail;
