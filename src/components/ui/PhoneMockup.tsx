import { useState } from "react";
import appScreenshot from "@/imports/image.png";
import { FLOATING_EMOJIS } from "@/data/landingData";

export default function PhoneMockup() {
  useState<string | null>(null);

  return (
    <div className="relative flex items-center justify-center" style={{ width: "380px", height: "520px" }}>
      {/* Background glows */}
      <div
        className="absolute rounded-full opacity-25 blur-3xl pointer-events-none"
        style={{ background: "#06b6d4", width: "260px", height: "260px", top: "0px", left: "40px" }}
      />
      <div
        className="absolute rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{ background: "#8b5cf6", width: "200px", height: "200px", bottom: "30px", right: "10px" }}
      />
      <div
        className="absolute rounded-full opacity-15 blur-2xl pointer-events-none"
        style={{ background: "#ec4899", width: "160px", height: "160px", bottom: "80px", left: "30px" }}
      />

      {/* Floating emojis */}
      {FLOATING_EMOJIS.map(({ emoji, size, delay, duration, ...pos }, i) => (
        <div
          key={i}
          className="absolute pointer-events-none select-none"
          style={{
            ...pos,
            fontSize: size,
            animation: `float ${duration} ease-in-out ${delay} infinite`,
            filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.4))",
            zIndex: 10,
          }}
        >
          {emoji}
        </div>
      ))}

      {/* Phone shell */}
      <div
        className="phone-float relative z-0"
        style={{
          transform: "rotateY(-10deg) rotateX(5deg)",
          transformStyle: "preserve-3d",
          filter: "drop-shadow(0 32px 64px rgba(0,0,0,0.7)) drop-shadow(0 0 40px rgba(6,182,212,0.12))",
        }}
      >
        <div
          className="relative overflow-hidden"
          style={{
            width: "290px",
            height: "460px",
            borderRadius: "28px",
            background: "#0d0d0f",
            border: "7px solid #2a2a2e",
            boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.05)",
          }}
        >
          {/* Notch */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-4 bg-black z-10"
            style={{ borderRadius: "0 0 14px 14px" }}
          />

          {/* Screenshot fills screen */}
          <img
            src={appScreenshot}
            alt="Errômetro app — grade de emojis para votar em Ana Gabriela"
            className="absolute inset-0 w-full h-full object-cover object-top"
            style={{ borderRadius: "21px" }}
          />
        </div>
      </div>
    </div>
  );
}
