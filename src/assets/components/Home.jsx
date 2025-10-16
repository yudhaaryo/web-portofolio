import React from "react";
import HeroImage from "../img/heroImage.jpg";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div
      name="home"
      className="min-h-screen w-full bg-gradient-to-b from-black via-black to-gray-900 text-white pt-20 md:pt-24"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col-reverse md:flex-row items-center justify-center h-full px-6 md:px-10 py-10">
        <div className="flex flex-col justify-center h-full text-center md:text-left">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
            Halo, saya <br /> Yudha Aryo Wicaksono
          </h2>

          <p className="text-gray-400 py-4 max-w-md mx-auto md:mx-0 text-base sm:text-lg">
            Halo, selamat datang di website saya. Saya adalah seorang software
            engineer yang tertarik pada bidang{" "}
            <span className="text-cyan-400 font-semibold">Web Development</span>
            .
          </p>

          <div name="portofolio" className="pt-4">
            <button className="group rounded-lg w-fit py-3 px-6 my-2 flex items-center mx-auto md:mx-0 cursor-pointer bg-gradient-to-r from-gray-800 to-gray-700 hover:from-cyan-600 hover:to-blue-600 transition duration-300">
              Portofolio
              <span className="group-hover:rotate-90 duration-300">
                <HiOutlineArrowNarrowRight size={25} className="ml-2" />
              </span>
            </button>
          </div>
        </div>

        <div className="relative flex justify-center mb-10 md:mb-0">
          <div className="absolute -top-5 -left-6 w-56 sm:w-72 md:w-80 h-56 sm:h-72 md:h-80 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 rounded-full blur-2xl opacity-70 animate-pulse"></div>
          <div className="absolute bottom-0 -right-6 w-56 sm:w-72 md:w-80 h-56 sm:h-72 md:h-80 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 rounded-full blur-2xl opacity-60 animate-pulse"></div>

          <img
            src={HeroImage}
            alt="my profile"
            className="relative rounded-2xl w-48 sm:w-64 md:w-80 lg:w-96 h-auto z-10 shadow-lg shadow-cyan-800/40"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
