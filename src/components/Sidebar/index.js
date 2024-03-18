// components/Sidebar.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMicrochip, faComment, faPeopleGroup } from '@fortawesome/free-solid-svg-icons'; 
import { useRouter } from 'next/navigation';
const Sidebar = () => {

  const router = useRouter();

  return (
    <div className="sidebar">
      <ul>
        <li onClick={() => router.push('/profile')}>
          <FontAwesomeIcon icon={faUser} className="icon" />
          <span>Profile</span>
        </li>
        <li onClick={() => router.push('/microprocessors')}>
          <FontAwesomeIcon icon={faMicrochip} className="icon" />
          <span>Microprocessors</span>
        </li>
        <li onClick={() => router.push('/forum')}>
          <FontAwesomeIcon icon={faPeopleGroup} className="icon" />
          <span>Forum</span>
        </li>
        <li onClick={() => router.push('/chat')}>
          <FontAwesomeIcon icon={faComment} className="icon" />
          <span>Chat</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
