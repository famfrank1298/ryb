import { Button } from "@/components/ui/button";
import "./cta.css";
import Image from "next/image";

export default function CTA() {
  return (
    <div className="cta-container">
      <Image
        alt="flowing water"
        src="/waterBanner.jpg"
        layout="fill"
        objectFit="cover"
        priority
      />
      <div className="cta-text">
        <h1>Overcome your obstacles. Get Business Coaching, Today!</h1>
        <Button className="cta-button">Book Consultation</Button>
      </div>
    </div>
  );
}
