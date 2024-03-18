// components/Comment.js
import React from 'react';


const Comment = ({ author, content, date }) => {
  return (
    <div className="comment">
      <div className="comment-header">
        <img src='/images/avatar.png' alt='avatar' />
        <div className='flex gap4'>
          <p className="author">{author}</p>
          <p className="date">{date}</p>
        </div>
      </div>
      <p className="content">{content}</p>
    </div>
  );
};

export default Comment;
