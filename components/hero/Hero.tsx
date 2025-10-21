"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Img from "../../public/IMG_20230901_225246.jpg";

const Hero = () => {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = (): void => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
        timeZone: "Asia/Tehran",
      };
      const tehranTime = now.toLocaleTimeString("en-GB", options);
      setTime(tehranTime);
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="md:min-h-screen pt-10 md:pb-32 w-full flex flex-col items-start  md:justify-between space-y-6 md:space-y-0"
      id="hero">
      <div className="flex space-x-4 px-3">
        <Image
          src={Img}
          alt={"pic"}
          className="w-12 h-12 rounded-full object-cover grayscale"
        />
        <p className="text-zinc-400 max-w-md leading-relaxed">
          I craft reliable and high-performance apps that make a real impact.
        </p>
      </div>
      <div className="w-full max-w-3xl mt-20 md:mt-120 space-y-3 px-3">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          FullStack Web <span className="text-zinc-500 font-medium">and</span>{" "}
          <br />
          IOS Developer
        </h1>
      </div>
      <div className="px-3 sm:hidden w-full mt-20">
        <div className="flex items-center space-x-2 border-b border-zinc-400 pb-3 w-full">
          <span className="relative flex size-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex size-3 rounded-full bg-green-500"></span>
          </span>
          <span className="text-green-500">Open To Work</span>
        </div>
        <div className="flex items-center space-x-2 border-b border-zinc-400 pb-3 w-full mt-10 text-zinc-500">
          Kermanshah, Iran
        </div>
        <div className="flex items-center space-x-2 border-b border-zinc-400 pb-3 w-full mt-10 text-zinc-500">
          {time} (GMT +3:30)
        </div>
      </div>
      <div className="w-full justify-between items-center text-zinc-500 hidden sm:flex px-3">
        <div>Kermanshah, Iran</div>
        <div className="flex-1 border-t border-zinc-700 mx-10"></div>

        <div className="flex items-center space-x-2 pb-3">
          <span className="relative flex size-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex size-3 rounded-full bg-green-500"></span>
          </span>
          <span className="text-green-500">Open To Work</span>
        </div>
        <div className="flex-1 border-t border-zinc-700 mx-10"></div>
        <div className="text-zinc-500">{time} (GMT +3:30)</div>
      </div>
    </section>
  );
};

export default Hero;
