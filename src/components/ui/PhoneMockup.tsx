import appScreenshot from "@/imports/image.png";

export default function PhoneMockup() {
  return (
    <div className="relative flex items-center justify-center w-full max-w-[500px]">
      {/* Background ambient glows */}
      <div
        className="absolute rounded-full opacity-30 blur-3xl pointer-events-none"
        style={{ background: "#06b6d4", width: "280px", height: "280px", top: "-20px", left: "20px" }}
      />
      <div
        className="absolute rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: "#8b5cf6", width: "240px", height: "240px", bottom: "-10px", right: "0px" }}
      />

      {/* Mockup Asset without artificial phone borders, notch or overlapping emojis */}
      <div
        className="phone-float relative z-10 w-full"
        style={{
          filter: "drop-shadow(0 28px 56px rgba(0,0,0,0.65)) drop-shadow(0 0 35px rgba(6,182,212,0.15))",
        }}
      >
        <img
          src={appScreenshot}
          alt="Errômetro app — grade de emojis para votar em Ana Gabriela"
          className="w-full h-auto object-contain select-none pointer-events-none"
        />
      </div>
    </div>
  );
}
