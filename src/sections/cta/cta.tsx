"use client";

import { Button } from "@/components/ui/button";
import "./cta.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function CTA() {
  const router = useRouter();
  return (
    <div className="cta-container">
      <Image
        alt="flowing water"
        src="/waterBanner.jpg"
        fill
        style={{ objectFit: "cover" }}
        priority
      />
      <div className="cta-text">
        <h1>Overcome your obstacles. Get Business Coaching, Today!</h1>
        <Button
          className="cta-button"
          onClick={() => router.push("/consultation")}
        >
          Book Consultation
        </Button>
      </div>
    </div>
  );
}
