"use client";

import React from "react";
import "./priceCard.css";

const PriceCard = ({
  title,
  price,
  description,
  duration,
  num,
}: {
  title: string;
  price: string;
  description: string;
  duration: string;
  num: number;
}) => {
  return (
    <div className="pc-container">
      <h3 className="pc-title">{title}</h3>
      <p className="pc-duration">- {duration} -</p>
      <h2 className="pc-price">{price}</h2>
      <p className="pc-description">{description}</p>
    </div>
  );
};

export default PriceCard;
