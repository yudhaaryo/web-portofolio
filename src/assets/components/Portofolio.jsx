import React from "react";
import kepegawaianImage from "../img/Kepegawaian.png";
import adolImage from "../img/adol.png";
import dwImage from "../img/DW.png";
import beraninImage from "../img/bernaIn.png";
import stafnewImage from "../img/stafnew.png";
import labaImage from "../img/laba.png";

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
        "Banner Design, Research, E-commerce untuk UMKM di Universitas Negeri Yogyakarta",
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
      src: dwImage,
      title: "Front-end, Web LMS sebagai tugas akhir matkul design web",
    },
    {
      id: 6,
      src: labaImage,
      title: "Fullstack, Aplikasi android untuk mencari teman berolahraga",
    },
  ];

  return (
    <div
      name="portofolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl border-gray-500 inline border-b-4">
            Portofolio
          </p>
          <p className="py-6">Cek Lainnya Disini</p>
        </div>

        <div
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-8
px-12 sm:px-0"
        >
          {portofolios.map(({ id, src, title }) => (
            <div key={id} className="shadow-md shadow-gray-600">
              <img
                src={src}
                alt=""
                className="rounded-tl-lg rounded-tr-lg rounded-t-none duration-200 hover:scale-105"
              />
              <p className="text-center py-2">{title} </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portofolio;
