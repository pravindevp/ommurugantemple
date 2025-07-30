import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Sample News Data
const newsData = [
  {
    id: 1,
    title: "Temple Land Acquisition Completed",
    date: "15 July 2025",
    description:
      "We are delighted to announce the successful acquisition of 6 acres of land for our upcoming temple and cultural center.",
    image: "https://source.unsplash.com/600x400/?temple,land",
    link: "#",
  },
  {
    id: 2,
    title: "Annual Cultural Festival Announced",
    date: "02 August 2025",
    description:
      "Join us for our grand cultural festival featuring music, dance, and devotional performances celebrating our heritage.",
    image: "https://source.unsplash.com/600x400/?festival,india",
    link: "#",
  },
  {
    id: 3,
    title: "Community Fundraiser Success",
    date: "20 June 2025",
    description:
      "Thanks to our community, we raised over $150,000 in our recent fundraiser for temple construction.",
    image: "https://source.unsplash.com/600x400/?hindu,donation",
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
              data-aos-delay={index * 100}
            >
              <img
                src={news.image}
                alt={news.title}
                className="w-full h-56 object-cover"
              />
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
