"use client";

import Balancer from "react-wrap-balancer";
import { useEffect, useRef, useState } from "react";
import { SAMPLIFY_URL } from "@/lib/constants";
import "./globals.css";

export default function Home() {
  const birdRef = useRef<HTMLDivElement | null>(null);
  const [showRestingBird, setShowRestingBird] = useState(false);

  useEffect(() => {
    const bird = birdRef.current;
    if (bird) {
      bird.style.animation =
        "fly-cycle 1s steps(10) infinite, fly-right-one 15s linear";
      bird.style.backgroundPosition = "right";
      bird.style.animationFillMode = "forwards";
      // The bird will stop animating after 15 seconds
      setTimeout(() => {
        if (bird) {
          setShowRestingBird(true);
        }
      }, 100000);
    }
  }, []);

  return (
    <div className="flex h-screen flex-1 items-center justify-center">
      <div className="z-10 w-full max-w-xl px-5 xl:px-0">
        <h1 className="animate-fade-up bg-gradient-to-br bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm md:text-7xl md:leading-[5rem]">
          <Balancer>Welcome to Beat Botanica</Balancer>
        </h1>
        <p className="mt-6 animate-fade-up text-center text-black md:text-xl">
          <Balancer>Exploring music, beats, and samples.</Balancer>
        </p>
        <div className="mx-auto mt-6 flex animate-fade-up items-center justify-center space-x-5">
          <div className="absolute left-0 top-1/4 -translate-x-10 transform">
            <div
              className={`h-32 w-24 ${showRestingBird ? "hidden" : ""}`}
              ref={birdRef}
              style={{
                backgroundImage:
                  "url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/174479/bird-cells-new.svg')",
                backgroundSize: "880px auto",
                animation: "fly-cycle 1s steps(10)",
                animationDelay: "-0.5s",
              }}
            />
            <div
              className={`h-32 w-24 ${showRestingBird ? "" : "hidden"}`}
              style={{
                backgroundImage:
                  "url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/174479/bird-cells-new.svg')",
                backgroundSize: "880px auto",
                backgroundPosition: "528px 0px", // Position for resting frame
                transform: "translateY(0vh) translateX(0vw) scale(1.5)",
                animation: "none",
              }}
            />
          </div>
          <a
            className="group flex max-w-fit items-center justify-center space-x-2 rounded-full border border-black bg-black px-5 py-2 text-sm text-white transition-colors hover:bg-white hover:text-black"
            href={SAMPLIFY_URL}
          >
            <p>Visit Samplify</p>
          </a>
        </div>
      </div>
    </div>
  );
}
