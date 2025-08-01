import { useState } from "react";
import { Menu, X, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import BgImage from "../Asset/img/templelogo.png"; // Update if needed

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    {
      name: "About",

      submenu: [
        { name: "Deities", path: "/Deities" },
        { name: "Our Team", path: "/Board" },
        { name: "By Laws", path: "/Bylaws" },
      ],
    },
    { name: "Donors", path: "/donors" },
    {
      name: "Project Details", path: "/landprojectdetails",
      submenu: [
        { name: "Land Purchase", path: "/landprojectdetails#land" },
        { name: "Loan Program", path: "/loanprogram" },
        { name: "Future Projects", path: "/landprojectdetails#future" },
      ],
    },
    { name: "News", path: "/News" },
    { name: "Contact Us", path: "/contactus" },
    { name: "Donate Now", path: "/" },
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
          
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-gradient-to-b from-orange-100 via-yellow-50 to-white shadow-lg sticky top-0 z-50 border-b-4 border-orange-400">
        <div className="container mx-auto px-6 py-3 flex items-center justify-between">

          {/* Logo and Title */}
          <Link to="/" className="flex items-center gap-4 group">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-orange-200 blur-2xl opacity-40 group-hover:opacity-60 transition" />
              <img
                src={BgImage}
                alt="Temple Logo"
                className="w-16 h-16 object-contain relative z-10 
                transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <div>
              <h1 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-red-700 via-orange-600 to-yellow-500 bg-clip-text text-transparent leading-tight drop-shadow-md">
                Om Murugan Temple
              </h1>
              <p className="text-sm md:text-base text-orange-600 font-medium tracking-wide drop-shadow-sm">
                California
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 lg:gap-12">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.path}
                  onClick={(e) => {
                    if (item.name === "Donate Now") {
                      e.preventDefault(); // Stop normal navigation
                      window.open("https://tinyurl.com/OMT-Land-donation", "_blank");
                    }
                    if (!item.submenu) setIsMenuOpen(false);
                  }}
                  className={`block text-base font-medium transition duration-300 ${item.name === "Donate Now"
                      ? "bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 shadow-md text-center animate-bounce"
                      : "text-gray-700 hover:text-orange-600"
                    }`}
                >
                  {item.name}
                </Link>


                {/* Desktop Dropdown */}
                {item.submenu && (
                  <div className="absolute left-0 top-full mt-2 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 min-w-[200px]">
                    {item.submenu.map((sub, idx) => (
                      <Link
                        key={idx}
                        to={sub.path}
                        className="block px-5 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-orange-600 transition duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-white shadow-md animate-fadeIn">
            <nav className="flex flex-col px-6 py-4 space-y-3">
              {navItems.map((item) => (
                <div key={item.name}>
                  <Link
                  to={item.path}
                  onClick={(e) => {
                    if (item.name === "Donate Now") {
                      e.preventDefault(); // Stop normal navigation
                      window.open("https://tinyurl.com/OMT-Land-donation", "_blank");
                    }
                    if (!item.submenu) setIsMenuOpen(false);
                  }}
                  className={`block text-base font-medium transition duration-300 ${item.name === "Donate Now"
                      ? "bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 shadow-md text-center animate-bounce"
                      : "text-gray-700 hover:text-orange-600"
                    }`}
                >
                  {item.name}
                </Link>

                  {/* Mobile Submenu */}
                  {item.submenu && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.submenu.map((sub, idx) => (
                        <Link
                          key={idx}
                          to={sub.path}
                          onClick={() => setIsMenuOpen(false)}
                          className="block text-gray-600 hover:text-orange-600 text-sm"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
