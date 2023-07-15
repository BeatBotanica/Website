"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Balancer from "react-wrap-balancer";
import { SAMPLIFY_URL } from "@/lib/constants";

export default function Home() {
  const xPos = useMotionValue(window.innerWidth / 2 - 50);
  const yPos = useMotionValue(window.innerHeight / 2 - 50);

  useEffect(() => {
    const handleResize = () => {
      xPos.set(window.innerWidth / 2 - 50);
      yPos.set(window.innerHeight / 2 - 50);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const xInput = [0, window.innerWidth];
  const yInput = [0, window.innerHeight];
  const output = [0, 360];

  const rotateX = useTransform(yPos, yInput, output);
  const rotateY = useTransform(xPos, xInput, output);

  return (
    <div className="flex h-screen flex-1 items-center justify-center">
      <motion.div
        drag="x, y"
        dragConstraints={{
          top: 0,
          bottom: window.innerHeight - 100,
          left: 0,
          right: window.innerWidth - 100,
        }}
        className="absolute h-24 w-24 rounded-full bg-gradient-to-r from-white to-yellow-500"
        style={{
          rotateX,
          rotateY,
          x: xPos,
          y: yPos,
          zIndex: 100,
        }}
      />

      <div className="z-10 w-full max-w-xl px-5 xl:px-0">
        <h1
          className="animate-fade-up bg-gradient-to-br bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-black opacity-0 drop-shadow-sm md:text-7xl md:leading-[5rem]"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          <Balancer>Welcome to Beat Botanica</Balancer>
        </h1>
        <p
          className="mt-6 animate-fade-up text-center text-black opacity-0 md:text-xl"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          <Balancer>Exploring music, beats, and samples.</Balancer>
        </p>
        <div
          className="mx-auto mt-6 flex animate-fade-up items-center justify-center space-x-5 opacity-0"
          style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
        >
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
