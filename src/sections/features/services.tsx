"use client";

import Line from "@/components/line/line";
import "./services.css";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import ScrollAnimation from "@/components/ScrollAnimation/scrollAnimation";

export default function Services() {
  const router = useRouter();
  return (
    <div className="service-container animate">
      <ScrollAnimation />
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
        <Button
          className="book-button"
          onClick={() => {
            router.push("/consultation");
          }}
        >
          Book Consultation
        </Button>
      </div>
    </div>
  );
}
