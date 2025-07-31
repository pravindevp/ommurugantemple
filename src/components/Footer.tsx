import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, Heart } from 'lucide-react';
import BgImage from '../Asset/img/templelogo.png'; // Update your path if needed

const Footer = () => {
  const quickLinks = [
    { name: 'About Temple', href: '#about' },
    { name: 'Deities & Worship', href: '#deities' },
    { name: 'Services', href: '#services' },
    { name: 'Events', href: '#events' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    { name: 'Daily Archana', href: '#services' },
    { name: 'Special Abhishekam', href: '#services' },
    { name: 'Wedding Ceremonies', href: '#services' },
    { name: 'Festival Celebrations', href: '#services' },
    { name: 'Spiritual Counseling', href: '#services' },
    { name: 'Community Programs', href: '#services' }
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Temple Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center">
                <img src={BgImage} alt="Temple Logo" className="w-16 h-16 object-contain" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Om Murugan Temple</h3>
                <p className="text-orange-400">California</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              A sacred sanctuary dedicated to Lord Murugan, fostering spiritual growth,
              cultural preservation, and community unity in California.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="text-orange-500" size={18} />
                <span className="text-gray-300">Roseville CA 95678</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-orange-500" size={18} />
                <span className="text-gray-300">(XXX) XXX-XXXX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-orange-500" size={18} />
                <span className="text-gray-300">info@ommurugantempleca.org</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-orange-400">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-orange-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          {/* <div>
            <h4 className="text-lg font-bold mb-6 text-orange-400">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.href}
                    className="text-gray-300 hover:text-orange-400 transition-colors duration-200"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Temple Hours & Social */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-orange-400">Temple Hours</h4>
            <div className="space-y-3 mb-8">
             
              <div className="flex justify-between">
                <span className="text-gray-300">Office Hours:</span>
                <span className="text-white">9:00 AM - 5:00 PM</span>
              </div>
              
            </div>

            <h4 className="text-lg font-bold mb-4 text-orange-400">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center text-white hover:bg-pink-700 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white hover:bg-red-700 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 Om Murugan Temple California. All rights reserved.
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                Privacy Policy
              </a>
              <span className="text-gray-600">|</span>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                Terms of Service
              </a>
              {/* <span className="text-gray-600">|</span> */}
              {/* <div className="flex items-center text-gray-400">
                <span>Made with</span>
                <Heart className="text-red-500 mx-1" size={16} />
                <span>for our community</span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;