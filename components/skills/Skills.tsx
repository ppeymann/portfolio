import { skillGroups } from "../../data/profile";
import Title from "../modules/Title";

const Skills = () => {
  return (
    <section className="md:px-10 px-3 mt-10" id="skill">
      <Title title="Skills" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {skillGroups.map((group) => (
          <div key={group.name}>
            <div className="border-b border-zinc-500 text-xl font-extrabold">
              {group.name}
            </div>
            <ul className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="max-w-full rounded-lg border border-zinc-800/5 bg-zinc-700/50 px-3 py-1 text-center text-sm leading-snug md:text-base"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
