"use client";

import Script from "next/script";

const CalendlyForm = ({ type }: { type?: number }) => {
  // const username = process.env.NEXT_PUBLIC_CALENDLY_USERNAME;
  // const showDetails: number =
  //   process.env.NEXT_PUBLIC_CALENDLY_SHOW_DETAILS == "false" ? 1 : 0;
  // const showCookies: number =
  //   process.env.NEXT_PUBLIC_CALENDLY_SHOW_COOKIES == "false" ? 1 : 0;

  return (
    <>
      <div
        className="calendly-inline-widget"
        // data-url={`https://calendly.com/${username}${
        //   type ? `/${type}` : ""
        // }?hide_landing_page_details=${showDetails}&hide_gdpr_banner=${showCookies}?background_color=242323&text_color=ffffff&primary_color=ffcb71`}
        // data-url={`https://calendly.com/rowboakye-rybpremier/ryb-premier-consultation/30min?background_color=242323&text_color=ffffff&primary_color=ffcb71`}
        data-url="https://calendly.com/rowboakye-rybpremier/30min?background_color=242323&text_color=ffffff&primary_color=ffcb71"
        // data-url="https://calendly.com/rowboakye-rybpremier/ryb-premier-consultation-1?background_color=242323&text_color=ffffff&primary_color=ffcb71"
        // data_url={`https://calendly.com${
        //   consType || "defaultType"
        // }?background_color=242323&text_color=ffffff&primary_color=ffcb71`}
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

/*
<!-- Calendly badge widget begin -->
<link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet">
<script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
<script type="text/javascript">window.onload = function() { Calendly.initBadgeWidget({ url: 'https://calendly.com/rowboakye-rybpremier/30min?background_color=242323&text_color=ffffff&primary_color=ffcb71', text: 'Book Consultation', color: '#ffcb71', textColor: '#242323' }); }</script>
<!-- Calendly badge widget end -->
*/
