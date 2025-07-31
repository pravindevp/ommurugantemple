import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import BgImage from "../Asset/img/landdetails.jpg"; // Update if needed
import temple from "../Asset/img/templedesign.png"; // Update if needed
import CommunityFundraising from "../Asset/img/CommunityFundraising.png"; // Update if needed

// Sample News Data
const newsData = [
  {
    id: 1,
    title: "Temple Land Acquisition",
    date: "15 July 2025",
    description:
      "We are delighted to announce the successful acquisition of 6 acres of land for our upcoming temple and cultural center.",
    image: BgImage,
    link: "#",
  },
  {
    id: 2,
    title: "Temple Design Revealed",
    date: "20 July 2025",
    description:
      "We are excited to unveil the blueprint of our upcoming temple, showcasing its traditional architecture and cultural significance.",
    image: temple,
    link: "#",
  },
  {
    id: 3,
    title: "Community Fundraising Reaches $52,389",
    date: "20 June 2025",
    description:
      "Thanks to the generous support of our community, we have successfully raised $52,389 towards the construction of our temple and cultural center.",
    image: CommunityFundraising, // Only the image variable, no <img> here
    link: "#",
  },

];

const News = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-24 bg-gradient-to-b from-orange-50 to-yellow-50 font-montserrat">
      <div className="container mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-down">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Latest News & Updates
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest happenings, events, and milestones of
            our temple and cultural initiatives.
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {newsData.map((news, index) => (
            <div
              key={news.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              {/* News Image */}
              <img
                src={news.image}
                alt={news.title}
                loading="lazy"
  className="w-full h-48 sm:h-56 lg:h-64 object-cover"
              />

              {/* News Content */}
              <div className="p-6">
                <p className="text-sm text-orange-600 font-medium mb-2">
                  {news.date}
                </p>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {news.title}
                </h3>
                <p className="text-gray-600 mb-4">{news.description}</p>
                <a
                  href={news.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 font-semibold hover:underline"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
