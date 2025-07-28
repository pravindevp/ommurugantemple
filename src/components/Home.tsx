import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate();

  const handleDonateClick = () => {
    navigate('/donate');
  };

  return (
    <>
      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-[80vh] flex items-center justify-center overflow-hidden"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(139, 0, 0, 0.4), rgba(255, 153, 51, 0.3)), url('https://images.pexels.com/photos/17637992/pexels-photo-17637992/free-photo-of-lord-ganesha-statue.jpeg?auto=compress&cs=tinysrgb&w=1600')`,
          }}
        />

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
          <div className="mb-8">
            <div className="text-6xl md:text-8xl font-bold mb-4 text-amber-300 drop-shadow-lg">ॐ</div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Welcome to
              <span className="block text-amber-300">abc</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-orange-100 font-light">
              A Sacred Sanctuary of Lord Murugan in California
            </p>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-orange-50">
              Experience divine blessings, spiritual peace, and the rich traditions of Tamil Hindu culture
              in the heart of California. Join us in worship, celebration, and community.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
            <button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Visit Temple
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm">
              View Events
            </button>
          </div>
        </div>

        {/* Optional Footer Gradient */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-orange-50 to-transparent px-6 py-6 md:py-8" />
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-b from-orange-50">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Our Mission</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The California OM Murugan Temple: A landmark offering a unique spiritual, cultural, and linguistic experience for Hindus worldwide.
            </p>
          </div>

          {/* Section Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-800">🌱 Our Beginning: A Community Vision</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Every great journey begins with a single step. For us, that first step was taken with the formation of OMT (Om Mandir Temple). In 2019, a committed group came together to form the OMT board, laying the foundation by drafting a formal constitution. This marked the birth of a dream—to create a spiritual and cultural sanctuary.
              </p>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-800">✨ A Dream Takes Shape</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                As the Hindu community grew across Placer County—especially in the Roseville, Rocklin, and Lincoln areas—the need for a dedicated Hindu temple became evident. The idea was not just to build a place of worship, but also to preserve and share our rich cultural heritage with the present and future generations.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-16 ">
            {/* Left Column */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-800">📜 Official Recognition</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                With dedication and persistence, OMT was officially recognized as a **non-profit organization** by both the **State of California** and the **Internal Revenue Service (IRS)**. This milestone was a major leap forward in our mission to establish a traditional Hindu temple.
              </p>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-800"> 🛕 Vision for the Temple</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our vision is to build a **Traditional Hindu Temple and Cultural Center** in the Roseville/Rocklin/Lincoln area. The plan is to acquire **6 acres of land** and begin construction of **Phase-1** of this spiritual center. This temple will be a hub for religious, cultural, and community activities for generations to come.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="w-full bg-gradient-to-br from-orange-100 to-yellow-50 shadow-xl py-10 text-center">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-4xl font-extrabold text-orange-800 flex items-center justify-center gap-3">
            <span></span> Support Our Cultural Heritage
          </h3>
          <p className="text-gray-700 mt-4 text-lg max-w-2xl mx-auto">
            Join us in preserving sacred traditions and expanding spiritual services. Every donation brings us one step closer to our divine mission.
          </p>
        </div>

        <button
          onClick={handleDonateClick}
          className="bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white font-semibold px-8 py-3 rounded-full text-lg shadow-md transition duration-300"
        >
          Donate Now
        </button>
      </div>

    </>
  );
};

export default Home;
