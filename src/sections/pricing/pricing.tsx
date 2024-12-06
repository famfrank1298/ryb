import PriceCard from "@/components/price-card/priceCard";
import React from "react";
import "./pricing.css";

export default function Pricing() {
  const plans = [
    {
      title: "Quick Start",
      price: "$50",
      duration: "15 Minutes",
      description:
        "For clients needing brief guidance or answers to specific questions.",
    },
    {
      title: "Focused Session",
      price: "$100",
      duration: "30 Minutes",
      description:
        "A balanced option for in-depth discussions and actionable advice.",
    },
    {
      title: "Comprehensive Plan",
      price: "$200",
      duration: "1 Hour",
      description:
        "For clients seeking a detailed analysis and a full roadmap to their goals.",
    },
  ];

  return (
    <div className="pricing-container">
      <PriceCard
        title={plans[0].title}
        price={plans[0].price}
        duration={plans[0].duration}
        description={plans[0].description}
      />
      <PriceCard
        title={plans[1].title}
        price={plans[1].price}
        duration={plans[0].duration}
        description={plans[1].description}
      />
      <PriceCard
        title={plans[2].title}
        price={plans[2].price}
        duration={plans[0].duration}
        description={plans[2].description}
      />
    </div>
  );
}
