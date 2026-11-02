import { education, languages } from "../../data/profile";
import Title from "../modules/Title";

const Education = () => {
  return (
    <section className="mt-16 px-3" id="education">
      <Title title="Education" />
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h3 className="m-0 text-2xl font-bold">{education.degree}</h3>
          <p className="mt-1 text-zinc-300">{education.school}</p>
        </div>
        <p className="font-bold text-zinc-500">{education.dates}</p>
      </div>

      <div className="mt-12">
        <Title title="Languages" />
        <ul>
          {languages.map((language) => (
            <li
              key={language.name}
              className="flex items-baseline justify-between gap-4 border-b border-zinc-600 py-3"
            >
              <span className="text-xl font-bold">{language.name}</span>
              <span className="text-right font-bold text-zinc-500">
                {language.level}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Education;
