import Line from "@/components/line/line";
import "./services.css";
import { Button } from "@/components/ui/button";

export default function Services() {
  return (
    <div className="service-container">
      <Line />
      <h1 className="section-title">What Can We Do For You</h1>
      <p className="service-text">
        At <span>RYB Premier</span>, we enhance your financial journey by
        providing authorized user tradelines to strengthen your credit, tailored
        strategies to build and maintain a solid credit profile, and insights
        into smart investment opportunities. We&apos;re here to equip you with
        the tools you need to achieve financial freedom and pursue your
        entrepreneurial goals.
      </p>
      <div className="book-container">
        <Button className="book-button">Book Consultation</Button>
      </div>
    </div>
  );
}