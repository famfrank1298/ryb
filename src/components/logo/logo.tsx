"use client";

import React from "react";
import { useRouter } from "next/navigation";
import "./logo.css";

export default function Logo() {
  const router = useRouter();
  const goHome = () => {
    router.push("/");
  };
  return (
    <div className="logo" onClick={goHome}>
      <h1>RYB</h1>
      <h1>PREMIER</h1>
      <h1>LLC</h1>
    </div>
  );
}
