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
      {/* <!-- Calendly inline widget begin --> */}
      {/* <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/rowboakye-rybpremier/30min?background_color=242323&text_color=ededed&primary_color=ffcb71"
        style={{ minWidth: "320px", height: "700px" }}
      ></div>
      <script
        type="text/javascript"
        src="https://assets.calendly.com/assets/external/widget.js"
        async
      ></script>
      <!-- Calendly inline widget end --> */}
    </div>
  );
}
