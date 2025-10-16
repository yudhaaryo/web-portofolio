const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inlline border-b-4 text-white border-gray-500">
            Contact
          </p>
          <p className="py-6">Contact</p>
        </div>

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/pagxnxvb"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Masukkan nama anda"
              className="p-2 bg-transparent rounded-md text-white fo border-2"
            />
            <input
              type="text"
              name="name"
              placeholder="Masukkan email anda"
              className=" my-4 p-2 bg-transparent rounded-md text-white fo border-2"
            />
            <textarea
              name="message"
              rows="10"
              placeholder="Masukkan pesan anda"
              className="p-2 bg-transparent rounded-md text-white focus:outline-none border-2"
            ></textarea>
            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Hubungi Saya
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
