import Line from "@/components/line/line";
import Card from "@/components/card/card";
import React from "react";
import "./about.css";

export default function About() {
  // const cards = [
  //   {
  //     content:
  //       "Call me and do something roland, I do not know what to put here so you have this for now",
  //     title: "Consultation",
  //   },
  //   {
  //     content:
  //       "Call me and do something roland, I do not know what to put here so you have this for now",
  //     title: "Tradeline",
  //   },
  //   {
  //     content:
  //       "Call me and do something roland, I do not know what to put here so you have this for now",
  //     title: "Card ",
  //   },
  //   {
  //     content:
  //       "Call me and do something roland, I do not know what to put here so you have this for now",
  //     title: "More",
  //   },
  // ];

  return (
    <div className="about-container">
      <Line />
      <h1 className="section-title">Who We Are</h1>
      <p className="about-text">
        Welcome to <span>RYB Premier</span>, your trusted partner on the journey
        to financial freedom. We specialize in empowering individuals to build
        credit, unlock opportunities, and embrace entrepreneurship. At RYB
        Premier, we believe in turning aspirations into achievements, one step
        at a time
      </p>
      {/* <div className="service-list">
        <Card card={cards[0]} />
        <Card card={cards[1]} />
        <Card card={cards[2]} />
        <Card card={cards[3]} />
      </div> */}
      {/* <Button className="about-button">Book Consultation</Button> */}
    </div>
  );
}
