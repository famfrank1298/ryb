"use client";

import { useRouter } from "next/navigation";
import Script from "next/script";
import { useEffect } from "react";

const CalendlyForm1 = () => {
  const username = process.env.NEXT_PUBLIC_CALENDLY_USERNAME as string;

  return (
    <div className="calendly-container">
      <div
        className="calendly-inline-widget"
        data-url={`https://calendly.com/${username}/30min?background_color=242323&text_color=ffffff&primary_color=ffcb71`}
        style={{
          minWidth: "320px",
          height: "700px",
        }}
      ></div>

      <Script
        type="text/javascript"
        src="https://assets.calendly.com/assets/external/widget.js"
        async
      />
    </div>
  );
};

export default CalendlyForm1;
