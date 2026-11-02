import { FaGithub, FaLinkedin } from "react-icons/fa";
import { site } from "../../data/profile";

const Contact = () => {
  return (
    <section className="mt-20 px-3" id="contact">
      <div className="text-4xl font-bold sm:text-6xl">
        <span className="text-zinc-500">Let's </span>
        <span>Connect</span>
      </div>
      <p className="mt-5 max-w-xl text-xl sm:text-2xl">
        The best way to reach me is email. I'm also on LinkedIn and GitHub.
      </p>
      <div className="mt-16 flex w-full flex-col md:mt-40 md:flex-row">
        <a
          href={`mailto:${site.email}`}
          className="flex-1 bg-zinc-500 py-5 text-center md:py-10"
        >
          Send an Email
        </a>
        <a
          href={site.linkedin}
          target="_blank"
          rel="noreferrer"
          className="flex-1 bg-zinc-600 py-5 text-center md:py-10"
        >
          LinkedIn
        </a>
        <a
          href={site.github}
          target="_blank"
          rel="noreferrer"
          className="flex-1 bg-zinc-700 py-5 text-center md:py-10"
        >
          GitHub
        </a>
      </div>
      <div className="mt-4 flex flex-col gap-1 text-sm text-zinc-400 sm:flex-row sm:flex-wrap sm:gap-x-4">
        <a href={`mailto:${site.email}`}>{site.email}</a>
        <a href={site.linkedin} target="_blank" rel="noreferrer">
          {site.linkedinLabel}
        </a>
        <a href={site.github} target="_blank" rel="noreferrer">
          {site.githubLabel}
        </a>
      </div>
      <div className="mt-8 flex items-center justify-between text-zinc-500">
        <div>
          <span>{site.name}, </span>
          <span>
            {Intl.DateTimeFormat("en", {
              year: "numeric",
            }).format()}
          </span>
        </div>
        <div className="flex space-x-5 text-lg">
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
