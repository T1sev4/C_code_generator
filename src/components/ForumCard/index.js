// components/ForumCard.js
import React from 'react';
import { useRouter } from 'next/navigation';

const ForumCard = ({ title, description, author, date }) => {
  const router = useRouter();
  return (
    <div className="forum-card" onClick={() => router.push('/forum-detail')}>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="details">
        <p>Author: {author}</p>
        <p>Date: {date}</p>
      </div>
    </div>
  );
};

export default ForumCard;
