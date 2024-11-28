import React from "react";
import "./card.css";

interface CardContent {
  card: {
    title: string;
    content: string;
  };
}

const Card: React.FC<CardContent> = ({ card }) => {
  return (
    <div className="card-container">
      <h3 className="card-title">{card.title}</h3>
      <p className="card-body">{card.content}</p>
    </div>
  );
};

export default Card;
