import React, { useState } from 'react';
import { Heart, Users, Building, Gift, CreditCard, HandHeart } from 'lucide-react';

const Donate = () => {
  const [donationAmount, setDonationAmount] = useState('');
  const [donationType, setDonationType] = useState('general');

  const donationCategories = [
    {
      id: 'general',
      name: 'General Donation',
      description: 'Support temple operations, maintenance, and daily services',
      icon: <Heart size={24} />,
      suggested: [51, 101, 201, 501]
    },
    {
      id: 'festivals',
      name: 'Festival Sponsorship',
      description: 'Sponsor festival celebrations and community events',
      icon: <Gift size={24} />,
      suggested: [108, 251, 501, 1001]
    },
    {
      id: 'building',
      name: 'Building Fund',
      description: 'Contribute to temple expansion and improvement projects',
      icon: <Building size={24} />,
      suggested: [201, 501, 1001, 2501]
    },
    {
      id: 'community',
      name: 'Community Service',
      description: 'Support food programs and community outreach activities',
      icon: <Users size={24} />,
      suggested: [25, 51, 101, 251]
    }
  ];

  const volunteerOpportunities = [
    {
      title: 'Festival Organization',
      description: 'Help organize and coordinate festival celebrations',
      commitment: 'Seasonal',
      skills: 'Event planning, coordination'
    },
    {
      title: 'Temple Maintenance',
      description: 'Assist with cleaning, gardening, and upkeep',
      commitment: 'Weekly',
      skills: 'Physical work, attention to detail'
    },
    {
      title: 'Cultural Programs',
      description: 'Support music, dance, and educational programs',
      commitment: 'Monthly',
      skills: 'Arts, teaching, music'
    },
    {
      title: 'Community Outreach',
      description: 'Help with food drives and community services',
      commitment: 'Flexible',
      skills: 'Communication, empathy'
    }
  ];

  const selectedCategory = donationCategories.find(cat => cat.id === donationType);

  return (
    <section id="donate" className="py-20 bg-gradient-to-b from-white to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Support Our Temple
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Your generous contributions help us maintain our sacred space, support community programs, 
            and preserve our spiritual traditions for future generations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Donation Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Make a Donation</h3>
              <p className="text-gray-600">
                Every contribution, no matter the size, makes a meaningful difference
              </p>
            </div>

            {/* Donation Categories */}
            <div className="space-y-4 mb-8">
              {donationCategories.map((category) => (
                <div
                  key={category.id}
                  className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                    donationType === category.id
                      ? 'border-orange-500 bg-orange-50'
                      : 'border-gray-200 hover:border-orange-300'
                  }`}
                  onClick={() => setDonationType(category.id)}
                >
                  <div className="flex items-start space-x-3">
                    <div className={`p-2 rounded-lg ${
                      donationType === category.id
                        ? 'bg-orange-500 text-white'
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {category.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800 mb-1">
                        {category.name}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Suggested Amounts */}
            {selectedCategory && (
              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-4">Suggested Amounts:</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {selectedCategory.suggested.map((amount) => (
                    <button
                      key={amount}
                      onClick={() => setDonationAmount(amount.toString())}
                      className={`py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                        donationAmount === amount.toString()
                          ? 'bg-orange-500 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-orange-100'
                      }`}
                    >
                      ${amount}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Custom Amount */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Or enter custom amount:
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 font-semibold">
                  $
                </span>
                <input
                  type="number"
                  value={donationAmount}
                  onChange={(e) => setDonationAmount(e.target.value)}
                  className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="0.00"
                  min="1"
                />
              </div>
            </div>

            {/* Donate Button */}
            <button className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white py-4 rounded-lg font-bold text-lg hover:from-orange-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
              <CreditCard className="inline mr-2" size={20} />
              Donate Securely
            </button>

            <p className="text-xs text-gray-500 text-center mt-4">
              Secure payment processing. Your donation is tax-deductible.
            </p>
          </div>

          {/* Volunteer Section */}
          <div className="bg-white rounded-3xl shadow-2xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Volunteer With Us</h3>
              <p className="text-gray-600">
                Share your time and talents to serve our community
              </p>
            </div>

            {/* Volunteer Opportunities */}
            <div className="space-y-6 mb-8">
              {volunteerOpportunities.map((opportunity, index) => (
                <div key={index} className="p-4 bg-orange-50 rounded-xl border border-orange-100">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    {opportunity.title}
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">
                    {opportunity.description}
                  </p>
                  <div className="flex flex-wrap gap-4 text-xs">
                    <span className="bg-orange-200 text-orange-800 px-3 py-1 rounded-full">
                      {opportunity.commitment}
                    </span>
                    <span className="bg-orange-200 text-orange-800 px-3 py-1 rounded-full">
                      {opportunity.skills}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white py-4 rounded-lg font-bold text-lg hover:from-orange-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
              <HandHeart className="inline mr-2" size={20} />
              Volunteer Application
            </button>
          </div>
        </div>

        {/* Impact Section */}
        <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">
            Your Impact Matters
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">2,500+</div>
              <p className="text-gray-700">Devotees Served Monthly</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">25+</div>
              <p className="text-gray-700">Annual Festivals Celebrated</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">$50,000</div>
              <p className="text-gray-700">Community Programs Funded</p>
            </div>
          </div>
          <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Thanks to the generous support of our community, we continue to provide spiritual guidance, 
            cultural education, and community services that strengthen our bonds and preserve our traditions. 
            Your contribution directly supports these vital programs and helps us reach even more people.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Donate;