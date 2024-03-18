'use client'
import React from 'react';
import Sidebar from '@/components/Sidebar';
import Comment from '@/components/ForumComment';

const ForumDetail = () => {
  
  const comments = [
    {
      author: 'John Doe',
      content: 'This is a comment.',
      date: '10:43 am'
    },
    {
      author: 'Jane Smith',
      content: 'Another comment here.',
      date: '11:00 am'
    },
    // Add more comments as needed
  ];

  return (
    <div className="forum-page-container">
      <Sidebar />
      <div className="forum-detail">
        <p>Forum Title · All about coding and media! </p>
        <div className='line'></div>
        <div className="comments">
          {comments.map((comment, index) => (
            <Comment key={index} {...comment} />
          ))}
        </div>
        <div className='forum-input'>
            <textarea placeholder="Type new message..." />
        </div>
      </div>
    </div>
  );
};

export default ForumDetail;
