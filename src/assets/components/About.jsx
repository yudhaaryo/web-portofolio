import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-900 text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4">About</p>
        </div>
        <p className="text-xl mt-14">
          Seorang mahasiswa Pendidikan Teknik Informatika dari Universitas
          Negeri Yogyakarta, yang telah memiliki pengalaman dalam proyek tim di
          bidang IT. Kemampuan utamanya meliputi Front-End Development, Design,
          dan Manajemen Database. Saat ini, memiliki keinginan kuat untuk
          mengembangkan kemampuan sebagai Full-Stack Web Developer, khususnya
          dalam lingkup profesional sebagai Front-End Developer.
        </p>
        <br />
      </div>
    </div>
  );
};

export default About;
