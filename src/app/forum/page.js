'use client'
import React from 'react';
import Sidebar from '@/components/Sidebar';
import ForumCard from '@/components/ForumCard';

const Forum = () => {

  const forumCards = [
    {
      title: 'Forum Card 1',
      description: 'Description of forum card 1',
      author: 'John Doe',
      date: '2024-03-21'
    },
    {
      title: 'Forum Card 2',
      description: 'Description of forum card 2',
      author: 'Jane Smith',
      date: '2024-03-22'
    },
    {
      title: 'Forum Card 1',
      description: 'Description of forum card 1',
      author: 'John Doe',
      date: '2024-03-21'
    },
    {
      title: 'Forum Card 2',
      description: 'Description of forum card 2',
      author: 'Jane Smith',
      date: '2024-03-22'
    },
    {
      title: 'Forum Card 1',
      description: 'Description of forum card 1',
      author: 'John Doe',
      date: '2024-03-21'
    },
    {
      title: 'Forum Card 2',
      description: 'Description of forum card 2',
      author: 'Jane Smith',
      date: '2024-03-22'
    },
    // Add more forum cards as needed
  ];

  // Array of categories
  const categories = ['General', 'Technology', 'Programming', 'Science', 'C code', 'Microprocessor'];


  return (
    <div className="forum-page-container">
      <Sidebar />
      <div className="forum-content">
        <div className="search-forum">
          <div className='search-wrapper-forum'>
            <input type="text" placeholder="Search..." />
          </div>
        </div>
        <div className='forum-btns'>
          <button>Create Forum</button>     
          <button>My Forums</button>
          <button>Other Forums</button>
        </div>
        <div className='forum-box'>
          <div className='forum-cards'>
            {forumCards.map((card, index) => (
              <ForumCard key={index} {...card} />
            ))}
          </div>
          <div className='forum-categories'>
            {categories.map((category, index) => (
              <button key={index}>{category}</button>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Forum;
