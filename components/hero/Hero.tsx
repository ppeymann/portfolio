"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { site } from "../../data/profile";
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
      className="md:min-h-screen pt-10 md:pb-32 w-full flex flex-col items-start md:justify-between space-y-6 md:space-y-0"
      id="hero"
    >
      <div className="flex space-x-4 px-3">
        <Image
          src={Img}
          alt={site.name}
          className="w-12 h-12 rounded-full object-cover grayscale"
        />
        <p className="text-zinc-400 max-w-md leading-relaxed">
          Specializing in backend engineering with Go.
        </p>
      </div>
      <div className="w-full max-w-3xl mt-20 md:mt-120 space-y-3 px-3">
        <p className="text-zinc-400">{site.name}</p>
        <h1 className="text-[1.75rem] sm:text-5xl md:text-6xl font-bold leading-tight">
          Senior Fullstack <span className="text-zinc-500 font-medium">&</span>{" "}
          <br className="hidden sm:block" />
          Mobile Developer
        </h1>
      </div>
      <div className="px-3 sm:hidden w-full mt-20">
        <div className="flex items-center space-x-2 border-b border-zinc-400 pb-3 w-full text-zinc-500">
          {site.location}
        </div>
        <div className="flex items-center space-x-2 border-b border-zinc-400 pb-3 w-full mt-10 text-zinc-500">
          7 years of experience
        </div>
        <div className="flex items-center space-x-2 border-b border-zinc-400 pb-3 w-full mt-10 text-zinc-500">
          {time} (GMT +3:30)
        </div>
      </div>
      <div className="w-full justify-between items-center text-zinc-500 hidden sm:flex px-3">
        <div>{site.location}</div>
        <div className="flex-1 border-t border-zinc-700 mx-10"></div>
        <div>7 years of experience</div>
        <div className="flex-1 border-t border-zinc-700 mx-10"></div>
        <div className="text-zinc-500">{time} (GMT +3:30)</div>
      </div>
    </section>
  );
};

export default Hero;
