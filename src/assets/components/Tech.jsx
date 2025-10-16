import React from "react";
import tailwindImage from "../img/tailwind.png";
import htmlImage from "../img/html.png";
import jsImage from "../img/js.png";
import reactImage from "../img/react.png";
import laravelImage from "../img/laravel.png";
import githubImage from "../img/github.png";
import Marquee from "react-fast-marquee";

const techs = [
  { id: 1, src: tailwindImage, text: "Tailwind CSS" },
  { id: 2, src: htmlImage, text: "HTML" },
  { id: 3, src: jsImage, text: "Javascript" },
  { id: 4, src: reactImage, text: "React" },
  { id: 5, src: laravelImage, text: "Laravel" },
  { id: 5, src: githubImage, text: "Github" },
];

const Tech = () => {
  return (
    <div className="w-full bg-gradient-to-b from-black to-gray-900 text-white py-20">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold border-b-4 border-cyan-400 inline-block pb-2">
          Tech I Use
        </h2>
        <p className="text-gray-400 mt-2">
          Tools and technologies I’ve worked with recently.
        </p>
      </div>

      <Marquee speed={50} gradient={false} className="flex items-center h-40">
        <div className="flex gap-6 justify-center items-center">
          {[...techs, ...techs].map(({ id, src, text }, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center h-28 w-44 p-4 
                   text-white bg-gray-800/40 border border-gray-700 
                   rounded-xl shadow-md hover:shadow-cyan-500/50 
                   hover:scale-105 transition duration-100 mx-2"
            >
              <img
                src={src}
                alt={`${text} Logo`}
                className="h-12 w-auto mb-2 drop-shadow-lg"
              />
              <p className="text-cyan-400 font-semibold">{text}</p>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default Tech;
