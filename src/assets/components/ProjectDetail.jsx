import React from "react";
import { useParams, Link } from "react-router-dom";
import kepegawaianImage from "../img/Kepegawaian.png";
import adolImage from "../img/adol.png";
import agunaImage from "../img/aguna.png";
import beraninImage from "../img/bernaIn.png";
import stafnewImage from "../img/stafnew.png";
import simpaImage from "../img/simpa.png";

const projects = [
  {
    id: 1,
    src: kepegawaianImage,
    title:
      "Front-end, Mentoring tenaga kependidikan di Universitas Negeri Yogyakarta",
    desc: "Website untuk mendukung kegiatan mentoring tenaga kependidikan dengan fokus pada tampilan responsif dan interaktif.",
    github: "https://github.com/fajarikas/spk-rotasi.git",
  },
  {
    id: 2,
    src: adolImage,
    title:
      "Graphic Design, Research, E-commerce untuk UMKM di Universitas Negeri Yogyakarta",
    desc: "Desain dan riset untuk platform e-commerce yang mendukung UMKM lokal.",
    github: "https://github.com/yudhaaryo/adol",
  },
  {
    id: 3,
    src: beraninImage,
    title: "Front-end, Project Micro Infinite Learning Web pelaporan Bullying",
    desc: "Aplikasi web front-end untuk pelaporan bullying menggunakan React dan Tailwind CSS.",
    github: "https://github.com/ulumfr/beranin.git",
  },
  {
    id: 4,
    src: stafnewImage,
    title:
      "3D Icon, Research, Remake web staffsite Universitas Negeri Yogyakarta",
    desc: "Remake website staffsite dengan penambahan ikon 3D untuk pengalaman pengguna yang lebih baik.",
    github: "https://github.com/fajarikas/staff-site-uny.git",
  },
  {
    id: 5,
    src: agunaImage,
    title: "Front-end, Massive Project Web AgunaEdu",
    desc: "Pengembangan front-end untuk platform edukasi AgunaEdu dengan fokus pada user experience.",
    github: "https://github.com/nallruf/agunaedu.git",
  },
  {
    id: 6,
    src: simpaImage,
    title: "Fullstack, Website inventarisasi & peminjaman alat laboratorium",
    desc: "Aplikasi fullstack untuk mengelola inventarisasi dan peminjaman alat lab berbasis web menggunakan React dan Laravel.",
    github: "https://github.com/yudhaaryo/skripsi.git",
  },
];

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project)
    return (
      <div className="text-center py-20 text-white">Project not found 😢</div>
    );

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-black to-gray-900 text-white py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <img
          src={project.src}
          alt={project.title}
          className="w-full rounded-xl shadow-lg mb-8"
        />
        <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
        <p className="text-gray-300 mb-6">{project.desc}</p>

        <div className="flex justify-center gap-6">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-cyan-500 rounded-lg hover:bg-cyan-600 transition"
          >
            🔗 View on GitHub
          </a>
          <Link
            to="/"
            className="px-6 py-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition"
          >
            ⬅ Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
