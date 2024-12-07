"use client";

import Script from "next/script";

const CalendlyForm3 = () => {
  const username = process.env.NEXT_PUBLIC_CALENDLY_USERNAME;
  const event = process.env.NEXT_PUBLIC_CALENDLY_HOUR;

  return (
    <>
      <div
        className="calendly-inline-widget"
        data-url={`https://calendly.com/${username}/ryb-premier-consultation-clone-1?background_color=242323&text_color=ffffff&primary_color=ffcb71`}
        style={{
          minWidth: "320px",
          height: "700px",
        }}
      ></div>
    </>
  );
};

export default CalendlyForm3;
