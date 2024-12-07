declare module "react-jotform-embed" {
  import React from "react";

  interface JotformEmbedProps {
    src: string;
    className?: string;
    scrolling?: "yes" | "no" | "auto";
    style?: React.CSSProperties;
  }

  const JotformEmbed: React.FC<JotformEmbedProps>;
  export default JotformEmbed;
}
