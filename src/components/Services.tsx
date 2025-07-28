import React from 'react';
import { Flame, Droplets, Gift, Calendar, Users, BookOpen } from 'lucide-react';

const Services = () => {
  const services = [
    {
      name: 'Archana',
      description: 'Personal prayers with recitation of divine names and offerings of flowers, fruits, and other sacred items.',
      icon: <BookOpen size={32} />,
      price: 'Starting from $11',
      duration: '15-20 minutes',
      features: ['Personal prayers', 'Prasadam included', 'Certificate provided']
    },
    {
      name: 'Abhishekam',
      description: 'Sacred bathing ritual of the deity with various liquids like milk, honey, and holy water.',
      icon: <Droplets size={32} />,
      price: 'Starting from $51',
      duration: '30-45 minutes',
      features: ['Complete ritual', 'Prasadam included', 'Photo/Video allowed']
    },
    {
      name: 'Special Puja',
      description: 'Elaborate worship ceremonies for specific purposes like birthdays, anniversaries, or special occasions.',
      icon: <Flame size={32} />,
      price: 'Starting from $101',
      duration: '1-2 hours',
      features: ['Customized ceremony', 'Multiple offerings', 'Family participation']
    },
    {
      name: 'Festival Celebrations',
      description: 'Grand celebrations of Hindu festivals with community participation, cultural programs, and feast.',
      icon: <Calendar size={32} />,
      price: 'Community supported',
      duration: 'Full day',
      features: ['Cultural programs', 'Community feast', 'Special decorations']
    },
    {
      name: 'Wedding Ceremonies',
      description: 'Traditional Hindu wedding ceremonies conducted according to Vedic traditions and customs.',
      icon: <Users size={32} />,
      price: 'Custom pricing',
      duration: '3-4 hours',
      features: ['Vedic traditions', 'Complete ceremony', 'Documentation']
    },
    {
      name: 'Gift Shop',
      description: 'Spiritual books, devotional items, prayer accessories, and blessed articles for your home temple.',
      icon: <Gift size={32} />,
      price: 'Various prices',
      duration: 'Browse anytime',
      features: ['Spiritual books', 'Prayer items', 'Blessed articles']
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-orange-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Temple Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience divine blessings through our traditional services and ceremonies, 
            conducted with devotion and authenticity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="p-8">
                <div className="text-orange-600 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {service.name}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold text-gray-500">Price:</span>
                    <span className="text-orange-600 font-bold">{service.price}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold text-gray-500">Duration:</span>
                    <span className="text-gray-700">{service.duration}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">Includes:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105">
                  Book Service
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Special Notice */}
        <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Special Arrangements
          </h3>
          <p className="text-gray-700 mb-6 max-w-3xl mx-auto">
            We also provide special arrangements for housewarmings, naming ceremonies, 
            thread ceremonies, and other auspicious occasions. Contact us to discuss 
            your specific requirements and receive personalized service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-3 rounded-full font-semibold hover:from-orange-600 hover:to-red-700 transition-all duration-300">
              Contact for Custom Services
            </button>
            <button className="border-2 border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300">
              Download Service Guide
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;