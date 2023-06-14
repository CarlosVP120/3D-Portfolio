import React from "react";
import "./Card.css"; // Import the CSS file for styling

const Card = ({ title, description, image, link }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <div className="card">
        {/* Image that covers the complete card */}

        <img src={image} alt="card" className="card_img" />

        {/* Div that gets darker when hovered */}

        <div className="card_overlay">
          <div className="card_text">
            <h1 className="titleCard">{title}</h1>
          </div>
        </div>
      </div>
    </a>
  );
};

export default Card;
