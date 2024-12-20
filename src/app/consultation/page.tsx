"use client";

import CalendlyForm1 from "@/components/calendly/calendlyForm1";
import CalendlyForm2 from "@/components/calendly/calendlyForm2";
import CalendlyForm3 from "@/components/calendly/calendlyForm3";
import Pricing from "@/sections/pricing/pricing";
import React, { useState } from "react";

export default function Consultations() {
  const [activeForm, setActiveForm] = useState<number>(1);

  const handleButtonClick = (formNumber: number) => {
    setActiveForm(formNumber);
  };

  return (
    <div className="cons-container">
      <Pricing />
      <h2 className="calendly-title">Schedule Your Meeting</h2>

      <div className="price-selector">
        <span onClick={() => handleButtonClick(1)}>15 Min Meeting</span>
        <span onClick={() => handleButtonClick(2)}>30 Min Meeting</span>
        <span onClick={() => handleButtonClick(3)}>1 Hour Meeting</span>
      </div>

      <div className="c-calenders">
        <div className={`calendly-form ${activeForm === 1 ? "active" : ""}`}>
          <CalendlyForm1 />
        </div>
        <div className={`calendly-form ${activeForm === 2 ? "active" : ""}`}>
          <CalendlyForm2 />
        </div>
        <div className={`calendly-form ${activeForm === 3 ? "active" : ""}`}>
          <CalendlyForm3 />
        </div>
      </div>
    </div>
  );
}
