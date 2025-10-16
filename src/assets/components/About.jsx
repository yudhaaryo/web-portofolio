import React from "react";
import aboutImage from "../img/heroImage.jpg";

const About = () => {
  return (
    <div
      name="about"
      className="w-full min-h-screen bg-gradient-to-b from-black via-black to-gray-900 text-white py-20"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center h-full px-4 gap-10">
        <div className="flex flex-col justify-center w-full md:w-1/2">
          <h2 className="text-4xl font-bold border-b-4 border-cyan-500 w-fit">
            About Me
          </h2>
          <p className="text-xl mt-8 leading-relaxed text-gray-300">
            Saya seorang freshgraduate{" "}
            <span className="text-cyan-400 font-semibold">
              Pendidikan Teknik Informatika
            </span>{" "}
            dari Universitas Negeri Yogyakarta. Berpengalaman dalam proyek tim
            di bidang IT dengan fokus pada{" "}
            <span className="text-cyan-400 font-semibold">
              Front-End Development
            </span>
            , Design, dan Manajemen Database.
          </p>
          <p className="text-xl mt-4 text-gray-300">
            Saat ini, saya berambisi untuk mengembangkan diri dan berkarier
            profesional sebagai{" "}
            <span className="text-cyan-400 font-semibold">
              Front-End Developer
            </span>
            .
          </p>

          <div className="mt-6 flex gap-4">
            <div className="px-4 py-2 bg-gray-800 rounded-lg shadow-md hover:scale-105 transition">
              <p className="text-cyan-400 font-semibold">3+ Project</p>
              <p className="text-sm text-gray-400">Team Collaboration</p>
            </div>
            <div className="px-4 py-2 bg-gray-800 rounded-lg shadow-md hover:scale-105 transition">
              <p className="text-cyan-400 font-semibold">Frontend</p>
              <p className="text-sm text-gray-400">React, Tailwind</p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={aboutImage}
            alt="About me"
            className="rounded-2xl w-80 md:w-[400px] shadow-lg hover:scale-105 duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
