

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Card.css';

const cardData = [
  {
    image: "https://www.shaadidukaan.com/vogue/wp-content/uploads/2019/04/make-wedding-colorful-1.jpg",
    title: "Wedding Decor",
    path: "/weddingdecor"
  },
  {
    image: "https://th.bing.com/th/id/R.c3f03a512c48e509e8bea8634cf6378e?rik=5SyLGh%2bYkbfKHw&riu=http%3a%2f%2fwww.grandweddings.co.in%2fwp-content%2fuploads%2f2020%2f01%2fWedding-Event-1170x780.jpg&ehk=Q%2bODPGjrb3Y9kY17BmoH9EzCBXg1xBwXBsmAgIrtfmY%3d&risl=&pid=ImgRaw&r=0",
    title: "Wedding Management",
    path: "/weddingmanagement"
  },
  {
    image: "https://img.freepik.com/free-photo/millennial-asia-businessmen-businesswomen-meeting-brainstorming-ideas-about-new-paperwork-project-colleagues-working-together-planning-success-strategy-enjoy-teamwork-small-modern-night-office_7861-2386.jpg",
    title: "Conference Management",
    path: '/conferancemanagement'
  },
  {
    image: "https://spmodels.net/elite/wp-content/uploads/2023/05/Car-Launching-Event-Management-SP-Models-Elite.jpg",
    title: "Product Launch",
    path:'/productlaunch'
  },
  {
    image: "https://facts.net/wp-content/uploads/2023/07/8-facts-about-film-awards-ceremony-1689912779.jpg",
    title: "Award Ceremonies",
    path:'/awardcerimonies'
  },
  
];

const Card = () => {
  const navigate = useNavigate();

  const handleCardClick = (path) => {
    navigate(path);
  };

  return (
    <div className="card-container">
      {cardData.map((card, index) => (
        <div 
          key={index} 
          className="card" 
          onClick={() => handleCardClick(card.path)}
          style={{ cursor: 'pointer' }}
        >
          <img src={card.image} alt={card.title} className="card-image" />
          <div className="card-content">
            <h3 className="card-title">{card.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;



