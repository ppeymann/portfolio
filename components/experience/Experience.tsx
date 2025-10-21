import React from "react";
import Title from "../modules/Title";
import { TbBrandGithub } from "react-icons/tb";

const Experience = () => {
  return (
    <div className="mt-10 px-3" id="exp">
      <Title title="Experience" />
      <div className="">
        <div className="text-zinc-600 font-extrabold text-3xl px-2 md:w-1/2">
          I have{" "}
          <span className="text-white">4 years of professional experience</span>{" "}
          working with various companies, contributing to a wide range of
          successful projects.
        </div>
        <div className="flex flex-col md:flex-row w-full md:justify-between md:items-end">
          <div className="md:w-1/2 mt-10 px-2 space-y-5">
            <a download className="flex items-center gap-1" href="/resume.pdf">
              <span>Download CV </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                />
              </svg>
            </a>

            <a
              className="flex items-center gap-1"
              href="https://github.com/ppeymann"
              target="_blank">
              <span>See My GitHub</span>
              <TbBrandGithub />
            </a>
          </div>
          <div className="md:w-1/2">
            <div className="border-t border-b pb-3 mx-2 mt-20 border-zinc-600 pt-3 space-y-3 md:flex items-center justify-between ">
              <a
                href="https://metamedland.ir"
                target="_blank"
                className="text-2xl font-bold">
                Meta Med Land
              </a>
              <div className="text-zinc-300 font-bold">FullStack</div>
              <div className="text-zinc-600 font-bold"> 2022 &#8594; 2024 </div>
            </div>
            <div className=" border-b pb-3 mx-5 mt-5 border-zinc-600 pt-3 space-y-3 md:flex items-center justify-between">
              <div className="text-2xl font-bold">Meta Hospital</div>
              <div className="text-zinc-300 font-bold">
                IOS & BackEnd <span className="text-xs">(Go)</span>
              </div>
              <div className="text-zinc-600 font-bold"> 2023 &#8594; 2025 </div>
            </div>
            <div className=" border-b pb-3 mx-5 mt-5 border-zinc-600 pt-3 space-y-3 md:flex items-center justify-between">
              <a
                href="https://github.com/ppeymann/accounting"
                target="_blank"
                className="text-2xl font-bold">
                Hesabeto
              </a>
              <div className="text-zinc-300 font-bold">
                BackEnd <span className="text-xs">(Go)</span>
              </div>
              <div className="text-zinc-600 font-bold"> 2023 &#8594; 2024 </div>
            </div>
            <div className=" border-b pb-3 mx-5 mt-5 border-zinc-600 pt-3 space-y-3 md:flex items-center justify-between">
              <a
                href="https://github.com/ppeymann/Planora"
                target="_blank"
                className="text-2xl font-bold">
                Planora
              </a>
              <div className="text-zinc-300 font-bold">
                BackEnd <span className="text-xs">(Go - microservice)</span>
              </div>
              <div className="text-zinc-600 font-bold"> 2024 &#8594; 2025 </div>
            </div>
            <div className=" border-b pb-3 mx-5 mt-5 border-zinc-600 pt-3 space-y-3 md:flex items-center justify-between">
              <a
                href="https://github.com/ppeymann/theory-blog"
                target="_blank"
                className="text-2xl font-bold">
                Theory Blog
              </a>
              <div className="text-zinc-300 font-bold">
                BackEnd <span className="text-xs">(Python - Django)</span>
              </div>
              <div className="text-zinc-600 font-bold"> 2024 &#8594; 2025 </div>
            </div>
            <div className=" border-b pb-3 mx-5 mt-5 border-zinc-600 pt-3 space-y-3 md:flex items-center justify-between">
              <a
                href="https://github.com/ppeymann/Kafka-caffee"
                target="_blank"
                className="text-2xl font-bold">
                Kafka Coffee
              </a>
              <div className="text-zinc-300 font-bold">
                BackEnd <span className="text-xs">(Python - FastAPI)</span>
              </div>
              <div className="text-zinc-600 font-bold"> 2025 &#8594; Now </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
