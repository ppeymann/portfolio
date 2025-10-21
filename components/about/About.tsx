import React from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import Image from "next/image";
import Go from "../../public/golang.jpeg";
import Python from "../../public/python.jpeg";
import Ts from "../../public/TS.jpeg";
import Swift from "../../public/swift.jpeg";

const About = () => {
  return (
    <section
      className="flex flex-col-reverse md:flex-row justify-between md:gap-10 mb-3 px-3"
      id="about">
      <div className="md:text-2xl md:w-1/2 font-bold">
        I’m a Full Stack Web and iOS Developer with 4 years of professional
        experience. My expertise spans backend development using Golang, Python,
        and frameworks such as Gin, Django, and FastAPI, as well as frontend
        development with TypeScript, React, and Next.js. I also develop iOS
        applications using Swift and SwiftUI. I have strong skills in building
        scalable systems and microservice architectures and enjoy collaborating
        with innovative and cross-functional teams. Passionate about continuous
        learning and technical excellence, I’m always eager to explore new
        technologies and contribute to impactful
      </div>
      <div className="w-full md:w-1/2 mb-10">
        <TabGroup>
          <TabList className="flex justify-center gap-4 bg-zinc-900/50 py-3 rounded-3xl">
            <Tab
              key="Go"
              className="cursor-pointer rounded-full px-2 md:px-5 py-1 text-sm/6 font-semibold text-white focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-white/20 data-selected:bg-white/20 data-selected:data-hover:bg-white/20">
              Go
            </Tab>
            <Tab
              key="Python"
              className="cursor-pointer rounded-full px-2 md:px-5 py-1 text-sm/6 font-semibold text-white focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-white/20 data-selected:bg-white/20 data-selected:data-hover:bg-white/20">
              Python
            </Tab>
            <Tab
              key="Typescript"
              className="cursor-pointer rounded-full px-2 md:px-5 py-1 text-sm/6 font-semibold text-white focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-white/20 data-selected:bg-white/20 data-selected:data-hover:bg-white/20">
              Typescript
            </Tab>
            <Tab
              key="Swift"
              className="cursor-pointer rounded-full px-2 md:px-5 py-1 text-sm/6 font-semibold text-white focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-white/20 data-selected:bg-white/20 data-selected:data-hover:bg-white/20">
              Swift
            </Tab>
          </TabList>
          <TabPanels className="mt-3 rounded-xl">
            <TabPanel>
              <Image
                src={Go}
                alt={"go"}
                className="object-cover rounded-xl scale-z-200"
              />
            </TabPanel>
            <TabPanel>
              <Image
                src={Python}
                alt={"python"}
                className="object-cover rounded-xl"
              />
            </TabPanel>
            <TabPanel>
              <Image
                src={Ts}
                alt={"Typescript"}
                className="object-cover rounded-xl"
              />
            </TabPanel>
            <TabPanel>
              <Image
                src={Swift}
                alt={"swift"}
                className="object-cover rounded-xl"
              />
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </section>
  );
};

export default About;
