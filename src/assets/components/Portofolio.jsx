import React from "react";
import kepegawaianImage from "../img/Kepegawaian.png";
import adolImage from "../img/adol.png";
import agunaImage from "../img/aguna.png";
import beraninImage from "../img/bernaIn.png";
import stafnewImage from "../img/stafnew.png";
import simpaImage from "../img/simpa.png";
import { Link } from "react-router-dom";

const Portofolio = () => {
  const portofolios = [
    {
      id: 1,
      src: kepegawaianImage,
      title:
        "Front-end, Mentoring tenaga kependidikan di Universitas Negeri Yogyakarta ",
    },
    {
      id: 2,
      src: adolImage,
      title:
        "Graphic Design, Research, E-commerce untuk UMKM di Universitas Negeri Yogyakarta",
    },
    {
      id: 3,
      src: beraninImage,
      title:
        "Front-end, Project Micro Infinite Learning Web pelaporan Bullying",
    },
    {
      id: 4,
      src: stafnewImage,
      title:
        "3d Icon, Research, Remake web staffsite Universitas Negeri Yogyakarta",
    },
    {
      id: 5,
      src: agunaImage,
      title: "Front-end, Massive Project Web AgunaEdu",
    },
    {
      id: 6,
      src: simpaImage,
      title: "Fullstack, Website inventarisasi & peminjaman alat laboratorium",
    },
  ];

  return (
    <div
      name="portofolio"
      className="bg-gradient-to-b from-black to-gray-900 w-full text-white py-16"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        <div className="pb-12 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-cyan-400">
            Portofolio
          </p>
          {/* <p className="py-4 text-gray-300">
            <Link to="/porto">✨ Cek Karya Lainnya Disini</Link>
          </p> */}
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 px-4 sm:px-0">
          {portofolios.map(({ id, src, title }) => (
            <div
              key={id}
              className="relative group shadow-lg shadow-gray-700 rounded-xl overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:shadow-cyan-500/40"
            >
              <img
                src={src}
                alt=""
                className="rounded-xl w-full object-cover group-hover:scale-110 transition duration-300"
              />

              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300">
                <p className="text-center px-3 text-sm font-semibold text-white">
                  {title}
                </p>
              </div>

              <p className="text-center py-3 text-gray-200 text-sm bg-gray-800 group-hover:hidden">
                {title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portofolio;
