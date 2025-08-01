import React, { useState, useEffect } from "react";
import { Star } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const trustees = [
  { name: "Kavita, Mohan Arunachalam & Family", pledged: 123000, donated: 12514 },
  { name: "Sridevi, Sankar Dandabany & Family", pledged: 50001, donated: 5001 },
  { name: "Nalini, Vasanthakumar Padmanaban & Family", pledged: 50001, donated: 303 },
];

const donors = [
  { name: "Ravindran & Family", pledged: 25000, donated: 10000 },
  { name: "Dr.Pragasam & Family", pledged: 5001, donated: 5001 },
  { name: "Viji Krishnakumar & Family", pledged: 5001, donated: 1001 },
  { name: "Daxaben Jayantibhai Naik & Family", pledged: 2501, donated: 2501 },
  { name: "Sivadoss & Family", pledged: 3003, donated: 1501 },
  { name: "Radhakrishnan Ayyanar & Family", pledged: 2002, donated: 1001 },
  { name: "Balamurugan & Family", pledged: 2001, donated: 2001 },
  { name: "Divya Krishnakumar & Family", pledged: 1001, donated: 1001 },
  { name: "Lalith Kumar & Family", pledged: 1000, donated: 1000 },
  { name: "Sekar & Family", pledged: 1001, donated: 1001 },
  { name: "Sarath & Family", pledged: 1001, donated: 1001 },
  { name: "Ramesh Janani & Family", pledged: 1001, donated: 1001 },
  { name: "Vivek & Family", pledged: 1001, donated: 1001 },
  { name: "Ramishwar Radhakrishnan & Family", pledged: 1001, donated: 1001 },
  { name: "Chakarvarty & Family", pledged: 2501, donated: 2501 },
  { name: "Hari Haran & Family", pledged: 501, donated: 501 },
  { name: "Swati Patel Ursu", pledged: null, donated: 55 },
  { name: "Rama Yalakanti & Family", pledged: null, donated: 1001 },

];

const formatCurrency = (amount) => (amount ? `$${amount.toLocaleString()}` : "—");

const Donors = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;
  const totalPages = Math.ceil(donors.length / rowsPerPage);

  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 100 });
  }, []);

  const currentDonors = donors.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  return (
    <section id="donors" className="py-20 bg-gradient-to-b from-white to-orange-50 font-montserrat relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Page Title */}
        <h2
          className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-16 tracking-tight"
          data-aos="fade-down"
        >
          Our Generous Donors
        </h2>

        {/* Trustees Section */}
        <h3 className="relative flex justify-center items-center mb-8" data-aos="fade-up">
          <div className="w-72 md:w-96 h-12 bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-100 rounded-full shadow-md"></div>
          <span className="absolute text-xl md:text-2xl font-bold text-yellow-700">Trustees</span>
        </h3>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {trustees.map((donor, index) => (
            <div
              key={`trustee-${index}`}
              className="p-6 rounded-2xl bg-white shadow-md border border-yellow-200 hover:shadow-lg transition-transform transform hover:-translate-y-1 flex flex-col justify-between"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex justify-between items-start mb-3 min-h-[48px]">
                <h3 className="text-lg font-semibold text-gray-800">{donor.name}</h3>
                <Star className="text-yellow-500 w-5 h-5 flex-shrink-0 ml-2" />
              </div>
              <div className="mt-4 text-sm text-gray-700 flex flex-col gap-1">
                <p><strong>Pledged:</strong> {formatCurrency(donor.pledged)}</p>
                <p><strong>Donated:</strong> {formatCurrency(donor.donated)}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Donors Table */}
        <h3 className="relative flex justify-center items-center mb-8" data-aos="fade-up">
          <div className="w-40 md:w-64 h-12 bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-100 rounded-full shadow-md"></div>
          <span className="absolute text-xl md:text-2xl font-bold text-yellow-700">Donors</span>
        </h3>
        <div className="overflow-x-auto" data-aos="fade-up">
          <table className="w-full max-w-3xl mx-auto bg-white border border-gray-200 rounded-lg shadow-md text-base">
            <thead className="bg-orange-100 text-orange-800">
              <tr>
                <th className="px-3 py-2 border text-left w-1/2">Name</th>
                <th className="px-3 py-2 border text-center w-1/4">Pledged</th>
                <th className="px-3 py-2 border text-center w-1/4">Donated</th>
              </tr>
            </thead>
            <tbody>
              {currentDonors.map((donor, index) => (
                <tr
                  key={index}
                  className={`transition duration-200 hover:bg-orange-50 ${index % 2 === 0 ? "bg-white" : "bg-orange-50/30"}`}
                  data-aos="fade-up"
                  data-aos-delay={index * 50}
                >
                  <td className="px-3 py-2 border">{donor.name}</td>
                  <td className="px-3 py-2 border text-center">{formatCurrency(donor.pledged)}</td>
                  <td className="px-3 py-2 border text-center">{formatCurrency(donor.donated)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-6 space-x-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-orange-200 text-orange-700 rounded disabled:opacity-50"
          >
            Prev
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`px-4 py-2 rounded transition duration-200 ${currentPage === index + 1
                ? "bg-orange-500 text-white shadow-md scale-105"
                : "bg-orange-100 text-orange-600 hover:bg-orange-200"
                }`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-orange-200 text-orange-700 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>

        {/* Thank You Section */}
        <div
          className="relative mt-20 text-center max-w-7xl mx-auto bg-white p-10 rounded-2xl shadow-lg border border-orange-100"
          data-aos="fade-up"
        >
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-200/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-yellow-200/20 rounded-full blur-3xl"></div>

          <h3 className="text-3xl font-extrabold text-orange-700 mb-6">
            🙏 Donate & Have Your Name Forever Honored
          </h3>
          <p className="text-gray-700 mb-4 leading-relaxed text-lg">
            Support our temple land purchase. Your name will be permanently
            inscribed on the Donor Wall as our token of gratitude.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed text-lg">
            New donor names are added within{" "}
            <span className="text-orange-600 font-semibold">24–48 hours</span>.
          </p>

          <div className="text-center mt-6">
            <h4 className="text-xl font-semibold text-orange-700 mb-4">Ways to Donate</h4>
            <ul className="text-gray-700 list-disc text-center max-w-sm mx-auto space-y-2 mb-8 text-base">
              <h3>Online via Credit Card</h3>
              <h3>Bank Transfer</h3>
              <h3>Check by Mail</h3>
              <h3>Planned Giving</h3>
            </ul>
          </div>

          <button
            className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full shadow-lg transition-transform transform hover:scale-105"
            onClick={() => window.open("https://tinyurl.com/OMT-Land-donation", "_blank")}
          >
            Donate Now
          </button>

        </div>
      </div>
    </section>
  );
};

export default Donors;