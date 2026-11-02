import { experience } from "../../data/profile";
import Title from "../modules/Title";

const Experience = () => {
  return (
    <section className="mt-10 px-3" id="exp">
      <Title title="Experience" />
      <p className="max-w-3xl text-2xl font-extrabold leading-tight text-zinc-500 md:text-3xl">
        I have <span className="text-white">7 years of experience</span>, with
        Go backend engineering as the specialty.
      </p>
      <ol className="mt-10 space-y-10 border-l border-zinc-700">
        {experience.map((job) => (
          <li key={`${job.company}-${job.role}`} className="relative pl-6">
            <span
              aria-hidden
              className="absolute top-2.5 -left-px size-2.5 -translate-x-1/2 rounded-full bg-zinc-300"
            />
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="m-0 text-2xl font-bold">{job.company}</h3>
              <p className="font-bold text-zinc-500 sm:shrink-0">{job.dates}</p>
            </div>
            <p className="mt-1 font-bold text-zinc-300">{job.role}</p>
            <p className="text-sm text-zinc-500">{job.meta}</p>
            <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed text-zinc-300">
              {job.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Experience;
