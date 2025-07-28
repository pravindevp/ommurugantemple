import React from 'react';
import { Bot as Lotus, Mountain, Users, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-orange-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            About Om Murugan Temple
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A sacred space dedicated to Lord Murugan, fostering spiritual growth, 
            cultural preservation, and community unity in California.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src="https://images.pexels.com/photos/8078474/pexels-photo-8078474.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Temple Interior" 
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Our Sacred Mission</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Om Murugan Temple serves as a beacon of Tamil Hindu culture and spirituality 
              in California. Established with the divine blessings of Lord Murugan, our temple 
              is dedicated to preserving ancient traditions while embracing the diverse 
              community that calls California home.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              We believe in the power of devotion, community service, and spiritual education. 
              Our temple doors are open to all seekers, regardless of background, who wish 
              to experience the divine presence of Lord Murugan and participate in our 
              vibrant spiritual community.
            </p>
            <div className="pt-4">
              <button className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-3 rounded-full font-semibold hover:from-orange-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105">
                Learn More About Our History
              </button>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lotus className="text-white" size={28} />
            </div>
            <h4 className="text-xl font-semibold text-gray-800 mb-3">Devotion</h4>
            <p className="text-gray-600">
              Fostering deep spiritual connection through traditional worship and modern practices.
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mountain className="text-white" size={28} />
            </div>
            <h4 className="text-xl font-semibold text-gray-800 mb-3">Tradition</h4>
            <p className="text-gray-600">
              Preserving and sharing the rich heritage of Tamil Hindu culture and customs.
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="text-white" size={28} />
            </div>
            <h4 className="text-xl font-semibold text-gray-800 mb-3">Community</h4>
            <p className="text-gray-600">
              Building bridges and fostering unity among all members of our diverse community.
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="text-white" size={28} />
            </div>
            <h4 className="text-xl font-semibold text-gray-800 mb-3">Service</h4>
            <p className="text-gray-600">
              Dedicated to serving humanity through charitable activities and spiritual guidance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;