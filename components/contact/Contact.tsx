import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="mt-20 px-3" id="contact">
      <div className="text-6xl font-bold">
        <span className="text-zinc-500">Let's </span>
        <span>Connect</span>
      </div>
      <div className="">
        <p className="text-2xl w-2/3 mt-5">
          Feel free to contact me if having any questions. I'm available for new
          projects or just for chatting.
        </p>
      </div>
      <div className="flex flex-col mt-40 md:flex-row w-full">
        <a
          href="tel:+989381539128"
          className="bg-zinc-500 flex-1 text-center py-5 md:py-10">
          Call Me
        </a>
        <a
          href="mailto:p.malek32@gmail.com"
          className="bg-zinc-600 text-center py-5 flex-1 md:py-10">
          Send an Email
        </a>
        <a
          href="https://t.me/p_peyman_n"
          className="bg-zinc-700 text-center py-5 flex-1 md:py-10">
          Send Text in Telegram
        </a>
      </div>
      <div className="mt-8 text-zinc-500 flex justify-between items-center">
        <div className="">
          <span>Malek, </span>
          <span>
            {Intl.DateTimeFormat("en", {
              year: "numeric",
            }).format()}
          </span>
        </div>
        <div className="flex space-x-5">
          <FaXTwitter />
          <a href="https://www.linkedin.com/in/peyman-malek" target="_blank">
            <FaLinkedin />
          </a>
          <a href="https://instagram.com/p.peyman.n" target="_blank">
            <FaInstagram />
          </a>
          <a href="https://github.com/ppeymann" target="_blank">
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
