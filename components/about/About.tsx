import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import Image from "next/image";
import { about } from "../../data/profile";
import Go from "../../public/golang.jpeg";
import Python from "../../public/python.jpeg";
import Swift from "../../public/swift.jpeg";
import Ts from "../../public/TS.jpeg";

const tabClass =
  "cursor-pointer rounded-full px-2 md:px-5 py-1 text-sm/6 font-semibold text-white focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-white/20 data-selected:bg-white/20 data-selected:data-hover:bg-white/20";

const About = () => {
  return (
    <section
      className="flex flex-col-reverse md:flex-row justify-between md:gap-10 mb-3 px-3"
      id="about"
    >
      <div className="md:w-1/2">
        <p className="text-2xl md:text-3xl font-bold leading-tight">
          {about.lead}
        </p>
        <p className="mt-4 text-zinc-300 leading-relaxed">{about.body}</p>
      </div>
      <div className="w-full md:w-1/2 mb-10">
        <TabGroup>
          <TabList className="flex justify-center gap-4 bg-zinc-900/50 py-3 rounded-3xl">
            <Tab key="Go" className={tabClass}>
              Go
            </Tab>
            <Tab key="Python" className={tabClass}>
              Python
            </Tab>
            <Tab key="Typescript" className={tabClass}>
              Typescript
            </Tab>
            <Tab key="Swift" className={tabClass}>
              Swift
            </Tab>
          </TabList>
          <TabPanels className="mt-3 rounded-xl">
            <TabPanel>
              <Image
                src={Go}
                alt="Go"
                className="object-cover rounded-xl scale-z-200"
              />
            </TabPanel>
            <TabPanel>
              <Image
                src={Python}
                alt="Python"
                className="object-cover rounded-xl"
              />
            </TabPanel>
            <TabPanel>
              <Image
                src={Ts}
                alt="TypeScript"
                className="object-cover rounded-xl"
              />
            </TabPanel>
            <TabPanel>
              <Image
                src={Swift}
                alt="Swift"
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
