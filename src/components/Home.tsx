import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Heart, ShieldCheck, Users } from "lucide-react";
import templedesign1 from "../Asset/img/backgound.png";
import templedesign2 from "../Asset/img/temple_ai_2.png";
import templedesign3 from "../Asset/img/murugan-malaysia-statue.jpg";
import ChatBox from "./chatbox";

const Home = () => {
  const images = [templedesign1, templedesign2, templedesign3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);



  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="font-montserrat">
      {/* Hero Section */}
      <section
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-black mt-20 bg-cover bg-center transition-all duration-1000"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      >        <img
          src={images[currentIndex]}
          alt="Temple"
          className="absolute inset-0 object-center w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />

        {currentIndex === 0 && (
          <div className="relative z-10 text-center text-white max-w-3xl px-6">
            <h1
              className="font-montserrat text-left text-5xl md:text-5xl font-extrabold mb-4 leading-snug bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent"
              data-aos="fade-up"
            >
              Welcome to
            </h1>
            <h1
              className="font-montserrat text-left text-5xl md:text-5xl font-extrabold mb-4 leading-snug bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent"
              data-aos="fade-up"
            >
              Om Murugan Temple
            </h1>
            <p
              className="text-lg md:text-xl text-left text-gray-200 mb-8"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              A sacred space preserving traditions and creating a modern
              spiritual experience for generations.
            </p>

            <button
              onClick={() =>
                window.open("https://tinyurl.com/OMT-Land-donation", "_blank")
              }
              className="bg-gradient-to-r from-red-600 to-orange-500 hover:scale-105 text-white font-semibold px-8 py-4 rounded-full text-lg shadow-lg transition-all duration-300 flex items-center gap-2 mx-auto"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <Heart className="w-5 h-5" /> Donate via Zeffy
            </button>
          </div>
        )}

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-6 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition duration-300"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-6 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition duration-300"
        >
          ❯
        </button>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-1 w-8 cursor-pointer transition-all duration-500 rounded-full ${currentIndex === index ? "bg-white" : "bg-gray-400/30"
                }`}
            />
          ))}
        </div>


      </section>

      {/* Mission Section */}
      <section className="py-24 bg-gradient-to-b from-white to-orange-50">
        <div className="container mx-auto px-6 md:px-10 text-center" data-aos="fade-down">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
            Our Mission
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
            California OM Murugan Temple aims to provide a{" "}
            <span className="text-orange-600 font-semibold">modern spiritual, cultural, and linguistic experience</span>{" "}
            representing Hindus worldwide.
          </p>

          {/* Mission Card */}
          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-10 md:p-14 text-left max-w-4xl mx-auto shadow-lg hover:shadow-2xl transition">
            <p className="text-gray-700 leading-relaxed mb-5">
              OMT was established in 2019 to serve the growing Hindu community in
              Roseville, Rocklin, and Lincoln. Recognized as a{" "}
              <strong>non-profit organization</strong> by both the State of
              California and IRS, our vision is to build a{" "}
              <span className="text-orange-600 font-semibold">
                Traditional Hindu Temple and Cultural Center
              </span>
              .
            </p>
            <p className="text-gray-700 leading-relaxed mb-5">
              With the blessings of the Almighty and the support of generous
              donors, we have already achieved{" "}
              <strong>30% of Phase-1 funding</strong>. Join us in{" "}
              <span className="text-red-600 font-semibold">
                building a landmark temple one brick at a time.
              </span>
            </p>
            <p className="text-gray-800 font-medium mt-6 text-center">
              “GIVING IS THE GREATEST ACT OF GRACE.”
            </p>
          </div>

          {/* Trust Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
            {[
              {
                Icon: ShieldCheck,
                title: "Trusted Non-Profit",
                desc: "Recognized by State of California & IRS",
                color: "text-orange-500",
              },
              {
                Icon: Heart,
                title: "Transparent Donations",
                desc: "Every dollar goes to land & construction",
                color: "text-red-500",
              },
              {
                Icon: Users,
                title: "Community Driven",
                desc: "Built for and by the Hindu community",
                color: "text-yellow-500",
              },
            ].map(({ Icon, title, desc, color }, i) => (
              <div
                key={i}
                className="p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
                data-aos="fade-up"
                data-aos-delay={i * 150}
              >
                <Icon className={`w-12 h-12 mx-auto mb-4 ${color}`} />
                <h4 className="text-lg font-bold text-gray-800 mb-2">{title}</h4>
                <p className="text-gray-600 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-orange-100 via-yellow-50 to-white text-center" data-aos="fade-up">
        <h3 className="text-3xl md:text-4xl font-extrabold text-orange-800 mb-4">
          Support Our Cultural Heritage
        </h3>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto mb-8">
          Every donation brings us closer to our dream temple. Be part of history.
        </p>
        <button
          onClick={() => window.open("https://tinyurl.com/OMT-Land-donation", "_blank")}
          className="bg-gradient-to-r from-red-600 to-orange-500 hover:scale-105 text-white font-semibold px-12 py-4 rounded-full text-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 mx-auto"
        >
          <Heart className="w-6 h-6" /> Donate Now
        </button>
      </section>
    </div>
  );
};

export default Home;
