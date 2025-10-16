const experiences = [
  {
    year: "2024",
    role: "Frontend Developer",
    place: "Universitas Negeri Yogyakarta",
    desc: "Membangun sistem pendukung keputusan rotasi pekerjaan dengan React + PHP.",
  },
  {
    year: "2024",
    role: "Frontend Developer",
    place: "Infinite Learning",
    desc: "Membuat website micro project pelaporan bullying dengan React + Tailwind.",
  },
  {
    year: "2025",
    role: "Fullstack Developer",
    place: "SMKN 3 Yogyakarta",
    desc: "Mengembangkan website inventarisasi & peminjaman alat laboratorium (Laravel + Filament).",
  },
];

const Experience = () => {
  return (
    <div
      name="experience"
      className="w-full bg-gradient-to-b from-black to-gray-900 text-white py-16"
    >
      <div className="max-w-screen-lg mx-auto p-4">
        <h2 className="text-4xl font-bold border-b-4 border-cyan-400 inline-block mb-12">
          Experience
        </h2>

        <div className="relative border-l border-gray-600">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-10 ml-6">
              {/* Bullet */}
              <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-cyan-400 rounded-full ring-8 ring-black"></span>

              {/* Content */}
              <div className="bg-gray-800 p-5 rounded-lg shadow-lg hover:shadow-cyan-500/30 transition">
                <h3 className="text-xl font-bold">{exp.role}</h3>
                <p className="text-gray-400 italic">
                  {exp.place} — {exp.year}
                </p>
                <p className="mt-2 text-gray-200">{exp.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
