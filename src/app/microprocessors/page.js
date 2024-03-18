'use client'

import Sidebar from "@/components/Sidebar"
import MicroprocessorsCard from "@/components/MicroprocessorCard";
const Microprocessors = () => {

  const cards = [
    {
      imageUrl: '/images/mic1.jpeg',
      title: 'Card 1',
      description1: 'Description 1',
      description2: 'Description 2'
    },
    {
      imageUrl: '/images/mic2.jpeg',
      title: 'Card 2',
      description1: 'Description 1',
      description2: 'Description 2'
    },
    {
      imageUrl: '/images/mic3.jpeg',
      title: 'Card 2',
      description1: 'Description 1',
      description2: 'Description 2'
    },
    {
      imageUrl: '/images/mic1.jpeg',
      title: 'Card 1',
      description1: 'Description 1',
      description2: 'Description 2'
    },
    {
      imageUrl: '/images/mic2.jpeg',
      title: 'Card 2',
      description1: 'Description 1',
      description2: 'Description 2'
    },
    {
      imageUrl: '/images/mic3.jpeg',
      title: 'Card 2',
      description1: 'Description 1',
      description2: 'Description 2'
    },
    {
      imageUrl: '/images/mic3.jpeg',
      title: 'Card 2',
      description1: 'Description 1',
      description2: 'Description 2'
    },
    {
      imageUrl: '/images/mic1.jpeg',
      title: 'Card 1',
      description1: 'Description 1',
      description2: 'Description 2'
    },
    {
      imageUrl: '/images/mic2.jpeg',
      title: 'Card 2',
      description1: 'Description 1',
      description2: 'Description 2'
    },
    {
      imageUrl: '/images/mic3.jpeg',
      title: 'Card 2',
      description1: 'Description 1',
      description2: 'Description 2'
    },
    
    // Add more cards as needed
  ];

  return (
    <div className="profile-container">
      <Sidebar />
      <div className="micro-content">
        <div className="search">
          <div className="search-wrapper">
            <input type="text" placeholder="Search..." />
          </div>
        </div>
        <div className="card-grid">
          {cards.map((card, index) => (
            <MicroprocessorsCard key={index} {...card} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Microprocessors;