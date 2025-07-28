import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import templedesign from '../Asset/img/templedesign.png'; // Update your path if needed

const Home = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleDonateClick = () => {
    <li>
      Zeffy: <a href="https://tinyurl.com/OMT-Land-donation" target="_blank" rel="noreferrer" className="text-blue-600 underline">OMT Land Donation</a>
    </li>
  };

  return (
    <>
      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${templedesign})` }}
        ></div>

        <div className="relative z-10 text-center text-white px-6 md:px-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4 drop-shadow-md" data-aos="zoom-in">
            Welcome to
            <span className="block text-amber-300">Om Murugan Temple</span>
          </h1>
          <p className="text-xl md:text-2xl text-orange-100 font-light mb-4" data-aos="fade-up">
            A Sacred Sanctuary of Lord Murugan in California
          </p>
          <p className="text-lg md:text-xl text-orange-50 mb-10 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            Experience divine blessings, spiritual peace, and the rich traditions of Tamil Hindu culture in the heart of California.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="400">
            <button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Visit Temple
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm">
              View Events
            </button>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-orange-50 to-transparent px-6 py-6 md:py-8" />
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-gradient-to-b from-orange-50 to-yellow-50">
        <div className="container mx-auto px-6 md:px-10">
          <div className="text-center mb-16" data-aos="fade-down">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Mission</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto mb-6" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The California OM Murugan Temple: A landmark offering a unique spiritual, cultural, and linguistic experience for Hindus worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-6" data-aos="fade-right">
              <h3 className="text-3xl font-bold text-gray-800">🌱 Our Beginning: A Community Vision</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Every great journey begins with a single step. In 2019, a committed group came together to form the OMT board, drafting a formal constitution and planting the seeds for a spiritual sanctuary.
              </p>
            </div>
            <div className="space-y-6" data-aos="fade-left">
              <h3 className="text-3xl font-bold text-gray-800">✨ A Dream Takes Shape</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                As the Hindu community grew across Placer County, so did the dream of a temple to preserve and pass on the rich traditions of Tamil Hindu culture to future generations.
              </p>
            </div>
            <div className="space-y-6" data-aos="fade-right">
              <h3 className="text-3xl font-bold text-gray-800">📜 Official Recognition</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                With dedication and persistence, OMT was officially recognized as a <strong>non-profit organization</strong> by the <strong>State of California</strong> and the <strong>IRS</strong>, moving one step closer to its mission.
              </p>
            </div>
            <div className="space-y-6" data-aos="fade-left">
              <h3 className="text-3xl font-bold text-gray-800">🛕 Vision for the Temple</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                We envision a <strong>Traditional Hindu Temple and Cultural Center</strong> in the Roseville/Rocklin/Lincoln area, starting with acquiring <strong>6 acres</strong> of land and building <strong>Phase-1</strong> of a spiritual center for generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Donate Call to Action */}
      <section className="w-full bg-gradient-to-b from-orange-50 to-yellow-50 shadow-xl py-16 text-center" data-aos="fade-up">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-extrabold text-orange-800 flex items-center justify-center gap-3 mb-4">
            Support Our Cultural Heritage
          </h3>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto mb-8">
            Join us in preserving sacred traditions and expanding spiritual services. Every donation brings us one step closer to our divine mission.
          </p>
          <button
            onClick={() => window.open("https://tinyurl.com/OMT-Land-donation", "_blank")}
            className="bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white font-semibold px-10 py-4 rounded-full text-lg shadow-md transition duration-300"
          >
            Donate via Zeffy
          </button>

        </div>
      </section>
    </>
  );
};

export default Home;
