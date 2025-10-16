import React from "react";

const PortoPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-6">Latest Proects & Case Studies</h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 p-6">
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">Desain 1</div>
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">Desain 2</div>
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">Desain 3</div>
      </div>
    </div>
  );
};

export default PortoPage;
