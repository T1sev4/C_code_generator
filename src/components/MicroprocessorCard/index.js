// components/Card.js
import React from 'react';
import { useRouter } from 'next/navigation';
const MicroprocessorsCard = ({ imageUrl, title, description1, description2 }) => {
  const router = useRouter();
  return (
    <div className="card">
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <p>{description1}</p>
      <p>{description2}</p>
      <button onClick={() => router.push('/detail')}>View Details</button>
    </div>
  );
};

export default MicroprocessorsCard;
