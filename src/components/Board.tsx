import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Board = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const trustees = [
    { name: "Mohan Arunachalam", location: "Rocklin, CA" },
    { name: "Sankar Dandabany", location: "Rocklin, CA" },
    { name: "Vasanthakumar Padmanaban", location: "Elk Grove, CA" },
    { name: "Sujaykumar Chandu", location: "Rocklin, CA" },
  ];

  const directors = [
    { name: "Mohan Arunachalam", location: "Rocklin, CA" },
    { name: "Sankar Dandabany", location: "Rocklin, CA" },
    { name: "Vasanthakumar Padmanaban", location: "Elk Grove, CA" },
    { name: "Sujaykumar Chandu", location: "Rocklin, CA" },
    { name: "Chandra Shekhar Tiwari", location: "Rocklin, CA" },
    { name: "Sivadoss Ramadoss", location: "El Dorado Hills, CA" },
    { name: "Balamurugan Karuppaiah", location: "Sacramento Natomas, CA" },
    { name: "Sagar Sant", location: "Roseville, CA" },
    { name: "Viji Krishnakumar", location: "Lincoln, CA" },
    { name: "Ravindran Maheswaran", location: "El Dorado Hills, CA" },
    { name: "Vasu Shanmugam", location: "Roseville, CA" },
    { name: "Sridevi Sankar", location: "Rocklin, CA" },
    { name: "Vivek Gunasekaran", location: "Roseville, CA" },
  ];

  const renderCard = (person, i) => (
    <div
      key={i}
      className="bg-white/80 backdrop-blur-md shadow-md hover:shadow-xl rounded-xl p-6 border border-gray-100 transition transform hover:-translate-y-1"
      data-aos="fade-up"
      data-aos-delay={i * 50}
    >
      <p className="text-lg font-bold text-gray-800">{person.name}</p>
      <p className="text-gray-500 text-sm mt-1">{person.location}</p>
    </div>
  );

  return (
    <section
      className="py-24 bg-gradient-to-b from-orange-50 via-white to-orange-50 font-montserrat"
      id="about"
    >
      <div className="container mx-auto px-6 md:px-12 text-center">
        {/* Title */}
        {/* <h2
          className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4"
          data-aos="fade-down"
        >
          About Us
        </h2> */}
        {/* <div className="w-28 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mb-12 rounded-full"></div> */}

        {/* Trustees Section */}
        <div className="mb-20">
          <h3
            className="text-2xl md:text-3xl font-bold text-orange-700 mb-8"
            data-aos="fade-down"
          >
            Trustees
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {trustees.map(renderCard)}
          </div>
        </div>

        {/* Directors Section */}
        <div>
          <h3
            className="text-2xl md:text-3xl font-bold text-orange-700 mb-8"
            data-aos="fade-down"
          >
            Directors of Operations
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {directors.map(renderCard)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Board;
