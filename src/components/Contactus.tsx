import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contactus = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Temple Address',
      details: ['Roseville CA 95678', 'USA'],
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: [' +9 123456789'],
      color: 'from-orange-500 to-yellow-500'
    },
    {
      icon: Mail,
      title: 'Email Addresses',
      details: ['info@ommurugantempleca.org'],
      color: 'from-red-600 to-pink-500'
    }
  ];

  const departments = [
    { name: 'General Inquiries', email: 'info@ommurugantempleca.org' },
    { name: 'Pooja Bookings', email: 'info@ommurugantempleca.org' },
    { name: 'Event Coordination', email: 'info@ommurugantempleca.org' },
    { name: 'Donations & Accounts', email: 'info@ommurugantempleca.org' },
    { name: 'Cultural Programs', email: 'info@ommurugantempleca.org' }
  ];

  return (
    <div className="py-12 bg-gray-50 font-montserrat">
      {/* Hero Section */}
      <section
        className="relative h-72 flex items-center justify-center mb-16"
        data-aos="fade-down"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/6341974/o-6341974.jpeg?auto=compress&cs=tinysrgb&w=1600")'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/80 to-orange-800/80" />
        </div>

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">
            Contact Us
          </h1>
          <p className="text-xl text-orange-200">
            We&apos;re Here to Serve & Connect with You
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4">
        {/* Contact Information Cards */}
        <section className="mb-16">
          <div className="text-center mb-10" data-aos="fade-up">
            <h2 className="text-3xl font-extrabold text-red-800 mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600">
              Multiple ways to reach out to our temple community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl p-8 text-center transition-transform duration-300 hover:-translate-y-1"
                  data-aos="zoom-in"
                  data-aos-delay={index * 150}
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-full mx-auto mb-4 flex items-center justify-center shadow-md`}
                  >
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-lg font-bold text-red-800 mb-3">
                    {info.title}
                  </h3>
                  <div className="space-y-1">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600 text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Contact Form and Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div
            className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
            data-aos="fade-right"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center">
                <MessageCircle className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-red-800">
                Send us a Message
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Full Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                >
                  <option value="">Select Subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="pooja">Pooja Booking</option>
                  <option value="loan">Loan Program</option>
                  <option value="event">Event Information</option>
                  <option value="donation">Donation Query</option>
                  <option value="volunteer">Volunteer Opportunity</option>
                  <option value="feedback">Feedback</option>
                </select>
              </div>

              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows="6"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white py-3 rounded-lg font-semibold hover:from-red-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>
          </div>

          {/* Map and Departments */}
          <div className="space-y-8" data-aos="fade-left">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
              <div className="h-64 bg-gradient-to-br from-red-100 to-orange-100 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-red-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-red-800 mb-2">
                    Temple Location
                  </h3>
                  <p className="text-gray-700">Interactive Map</p>
                  <p className="text-sm text-gray-600 mt-2">
                    Click to open in Google Maps
                  </p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-red-800 mb-2">
                  Visit Our Temple
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Located in the heart of the city, our temple is easily
                  accessible by public transport. Parking facilities are
                  available for devotees visiting by car.
                </p>
              </div>
            </div>

            {/* Departments */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-red-800 mb-4">
                Department Contacts
              </h3>
              <div className="space-y-3">
                {departments.map((dept, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <span className="text-gray-800 font-medium text-sm">
                      {dept.name}
                    </span>
                    <a
                      href={`mailto:${dept.email}`}
                      className="text-orange-600 hover:text-red-600 transition-colors text-sm"
                    >
                      {dept.email}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Office Hours */}
        <section
          className="mt-16 bg-white rounded-xl shadow-lg p-8 border border-gray-100"
          data-aos="fade-up"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-red-800 mb-4">
              Office Hours & Services
            </h2>
            <p className="text-lg text-gray-600">
              When our administrative team is available to assist you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Weekdays',
                time1: 'Monday - Friday',
                time2: '9:00 AM - 6:00 PM',
                color: 'from-red-500 to-orange-500'
              },
              {
                title: 'Weekends',
                time1: 'Saturday - Sunday',
                time2: '8:00 AM - 8:00 PM',
                color: 'from-orange-500 to-yellow-500'
              },
              {
                title: 'Festivals',
                time1: 'Special Days',
                time2: 'Extended Hours',
                color: 'from-red-600 to-pink-500'
              }
            ].map((item, idx) => (
              <div key={idx} className="text-center" data-aos="zoom-in" data-aos-delay={idx * 150}>
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-full mx-auto mb-4 flex items-center justify-center`}
                >
                  <Clock className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-red-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.time1}</p>
                <p className="text-gray-700">{item.time2}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contactus;
