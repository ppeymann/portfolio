import { projects } from "../../data/profile";
import Title from "../modules/Title";

const Projects = () => {
  return (
    <section className="mt-16 px-3" id="projects">
      <Title title="Selected projects" />
      <div className="space-y-8">
        {projects.map((project) => (
          <article key={project.name} className="border-b border-zinc-600 pb-8">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="m-0 text-2xl font-bold">{project.name}</h3>
              {project.href ? (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-zinc-400 underline decoration-zinc-600 underline-offset-4 sm:shrink-0"
                >
                  GitHub
                </a>
              ) : null}
            </div>
            {project.kicker ? (
              <p className="mt-1 text-sm text-zinc-500">{project.kicker}</p>
            ) : null}
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">
              {project.stack}
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed text-zinc-300">
              {project.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
