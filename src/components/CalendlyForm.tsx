"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const CalendlyForm = ({ type }: { type: number }) => {
  const username = process.env.NEXT_PUBLIC_CALENDLY_USERNAME;
  const [event, setEventType] = useState<string | undefined>(
    process.env.NEXT_PUBLIC_CALENDLY_FIFTEEN
  );

  useEffect(() => {
    switch (type) {
      case 1:
        setEventType(process.env.NEXT_PUBLIC_CALENDLY_FIFTEEN);
        break;
      case 2:
        setEventType(process.env.NEXT_PUBLIC_CALENDLY_THIRTY);
        break;
      case 3:
        setEventType(process.env.NEXT_PUBLIC_CALENDLY_HOUR);
        break;
      default:
        setEventType(process.env.NEXT_PUBLIC_CALENDLY_FIFTEEN);
        break;
    }
  }, [type]);

  return (
    <>
      <div
        className="calendly-inline-widget"
        data-url={`https://calendly.com/${username}/${event}?background_color=242323&text_color=ffffff&primary_color=ffcb71`}
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
    </>
  );
};

export default CalendlyForm;
