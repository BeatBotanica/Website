import Balancer from "react-wrap-balancer";
import { SAMPLIFY_URL } from "@/lib/constants";

export default async function Home() {
  return (
    <>
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
    </>
  );
}
