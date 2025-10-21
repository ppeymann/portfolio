import React from "react";

type Props = {
  title: string;
};

const Title = (Props: Props) => {
  return (
    <div className="flex justify-between items-center gap-2 mb-3">
      <div className="font-extrabold text-zinc-500 text-lg">{Props.title}</div>
      <div className="border-b border-zinc-500 flex-1"></div>
    </div>
  );
};

export default Title;
