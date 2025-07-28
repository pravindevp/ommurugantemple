import { useState } from 'react';
import { Menu, X, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import BgImage from '../Asset/img/templelogo.png'; // Update your path if needed

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Deities', path: '/deities' },
    { name: 'Services', path: '/services' },
    { name: 'Events', path: '/events' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Donate', path: '/donate' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-2 px-4 text-sm">
        <div className="container mx-auto flex justify-between items-center flex-wrap">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1">
              <MapPin size={16} />
              <span>California, USA</span>
            </div>
            <div className="flex items-center gap-1">
              <Phone size={16} />
              <span>(XXX) XXX-XXXX</span>
            </div>
          </div>
          <div className="text-amber-200 mt-2 md:mt-0">
            Daily Darshan: 6:00 AM - 8:00 PM
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo and Title */}
          <div className="flex items-center gap-4">
            <img src={BgImage} alt="Temple Logo" className="w-20 h-20 object-contain" />
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-red-700">Om Murugan Temple</h1>
              <p className="text-sm text-orange-500">California</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-gray-700 font-medium hover:text-orange-600 transition duration-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden border-t">
            <nav className="flex flex-col px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-gray-700 hover:text-orange-600 font-medium transition duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
