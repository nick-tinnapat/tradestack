"use client";
import React from "react";

export default function CalloutBox({ icon = "ⓘ", children }: { icon?: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="callout-box">
      <span className="callout-icon">{icon}</span>
      <span>{children}</span>
    </div>
  );
}
