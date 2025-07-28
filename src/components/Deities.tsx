import React from 'react';
import { Clock, Star, Sparkles } from 'lucide-react';

const Deities = () => {
  const deities = [
    {
      name: 'Lord Murugan',
      title: 'The Supreme Deity',
      description: 'The primary deity of our temple, Lord Murugan (Kartikeya) is the Hindu god of war, victory, and wisdom. Known as the son of Lord Shiva, he is revered for his divine power to remove obstacles and grant success.',
      image: 'https://images.pexels.com/photos/8078470/pexels-photo-8078470.jpeg?auto=compress&cs=tinysrgb&w=600',
      specialDays: 'Tuesday, Friday',
    },
    {
      name: 'Lord Ganesha',
      title: 'The Remover of Obstacles',
      description: 'Lord Ganesha, the elephant-headed deity, is worshipped at the beginning of all ceremonies and ventures. He is the patron of arts and sciences and the lord of beginnings.',
      image: 'https://images.pexels.com/photos/5741278/pexels-photo-5741278.jpeg?auto=compress&cs=tinysrgb&w=600',
      specialDays: 'Wednesday',
    },
    {
      name: 'Goddess Valli',
      title: 'Divine Consort',
      description: 'Goddess Valli is one of the two consorts of Lord Murugan. She represents devotion and surrender, and is believed to intercede on behalf of devotees.',
      image: 'https://images.pexels.com/photos/5638258/pexels-photo-5638258.jpeg?auto=compress&cs=tinysrgb&w=600',
      specialDays: 'Friday',
    },
    {
      name: 'Goddess Deivanai',
      title: 'Divine Consort',
      description: 'Goddess Deivanai, the other consort of Lord Murugan, represents divine grace and protection. She is worshipped for her compassionate nature and maternal qualities.',
      image: 'https://images.pexels.com/photos/5638275/pexels-photo-5638275.jpeg?auto=compress&cs=tinysrgb&w=600',
      specialDays: 'Friday',
    },
  ];

  const poojaTimings = [
    { time: '6:00 AM', service: 'Morning Abhishekam', icon: <Star size={20} /> },
    { time: '9:00 AM', service: 'Daily Archana', icon: <Sparkles size={20} /> },
    { time: '12:00 PM', service: 'Midday Pooja', icon: <Star size={20} /> },
    { time: '6:00 PM', service: 'Evening Aarti', icon: <Sparkles size={20} /> },
    { time: '8:00 PM', service: 'Night Prayers', icon: <Star size={20} /> },
  ];

  return (
    <section id="deities" className="py-20 bg-gradient-to-b from-white to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Sacred Deities
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Meet the divine deities who grace our temple with their eternal presence and blessings.
          </p>
        </div>

        {/* Deities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {deities.map((deity, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative">
                <img 
                  src={deity.image} 
                  alt={deity.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">{deity.name}</h3>
                  <p className="text-sm text-orange-200">{deity.title}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {deity.description}
                </p>
                <div className="flex items-center text-orange-600 text-sm font-semibold">
                  <Star size={16} className="mr-2" />
                  Special Days: {deity.specialDays}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pooja Timings */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Daily Pooja Timings
            </h3>
            <p className="text-lg text-gray-600">
              Join us in daily worship and experience divine blessings
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {poojaTimings.map((pooja, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl border border-orange-100 hover:shadow-lg transition-all duration-300">
                <div className="text-orange-600 mb-3 flex justify-center">
                  {pooja.icon}
                </div>
                <div className="text-2xl font-bold text-gray-800 mb-2">
                  {pooja.time}
                </div>
                <div className="text-sm font-semibold text-orange-600">
                  {pooja.service}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              Special ceremonies and festivals may have different timings. Please check our events calendar.
            </p>
            <button className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-3 rounded-full font-semibold hover:from-orange-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105">
              <Clock className="inline mr-2" size={20} />
              View Full Schedule
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Deities;