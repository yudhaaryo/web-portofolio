import React from "react";
import HeroImage from "../img/heroImage.jpg";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full  bg-gradient-to-b from-black via-black to-gray-900 text-white"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl font-bold text-white sm:text-7xl ">
            Halo saya <br /> Yudha Aryo Wicaksono
          </h2>
          <p className=" text-gray-500 py-4 max-w-md">
            Halo, selamat datang di website saya. Saya adalah software engineer
            yang tertarik pada bidang Web Development
          </p>

          <div>
            <button className="group rounded-lg w-fit py-3 my-2 flex items-center cursor-pointer bg-gray-900 bg-gradient-to-r from-gray-900    to-gray-700 px-4  ">
              Portofolio
              <span className="group-hover:rotate-90 duration-300">
                <HiOutlineArrowNarrowRight size={25} className="ml-1" />
              </span>
            </button>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-full md:max-w-2/3 max-w-sm h-auto "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
