'use client'
// components/Profile.js
import React, { useState } from 'react';
// import './Profile.css'; // Styles for Profile component
import Sidebar from '@/components/Sidebar';

const Chat = () => {
  const [inputValue, setInputValue] = useState('');
  const [chat, setChat] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSendClick = () => {
    if (inputValue.trim() !== '') {
      setChat([...chat, { sender: 'user', message: inputValue }]);
      setInputValue('');
      // Call function to get AI response
      // Add AI response to chat
    }
  };

  return (
    <div className="chat-container">
      <Sidebar />
      <div className='chat-content'>
        <p>How can I help you today?</p>
        <div className='line'></div>
        <p></p>
        <div className="chat-page-container">
      <div className="chat-box">
          {chat.map((msg, index) => (
            <div key={index} className={`message ${msg.sender}`}>
              {msg.message}
            </div>
          ))}
        </div>
        <div className="input-box">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Type your prompt..."
          />
          <button onClick={handleSendClick}>Send</button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Chat;
