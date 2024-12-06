import React from "react";
import { Button } from "../ui/button";
import "./priceCard.css";

const PriceCard = ({
  title,
  price,
  description,
  duration,
}: {
  title: string;
  price: string;
  description: string;
  duration: string;
}) => {
  return (
    <div className="pc-container">
      <h3 className="pc-title">{title}</h3>
      <p className="pc-duration">-{duration}-</p>
      <h2 className="pc-price">{price}</h2>
      <p className="pc-description">{description}</p>
      <Button className="pc-button">Book Now</Button>
    </div>
  );
};

export default PriceCard;
