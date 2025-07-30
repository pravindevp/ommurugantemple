import React, { useState, useEffect } from 'react';
import { Sparkles, Star } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const trustees = [
  { name: "Sridevi, Sankar Dandabany & Family", pledged: 50001, donated: 5001 },
  { name: "Kavita, Mohan Arunachalam & Family", pledged: 123000, donated: 12514 },
  { name: "Nalini, Vasanthakumar & Family", pledged: 50001, donated: 303 },
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
];

const formatCurrency = (amount) => amount ? `$${amount.toLocaleString()}` : '—';

const getDonorRank = (donor) => {
  const amount = donor.donated ?? donor.pledged ?? 0;

  if (amount >= 50000) return "Founder Patron";
  if (amount >= 25000) return "Platinum Patron";
  if (amount >= 10000) return "Gold Patron";
  if (amount >= 2501) return "Silver Patron";
  if (amount >= 1001) return "Brick Donor";
  if (amount >= 600) return "Member";
  if (amount >= 50) return "Member";
  return "Supporter";
};

const Donors = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;
  const totalPages = Math.ceil(donors.length / rowsPerPage);

  // ✅ Initialize AOS here
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  const currentDonors = donors.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <section id="donors" className="py-20 bg-gradient-to-b from-white to-orange-50 font-montserrat">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-16" data-aos="fade-down">
          🙏 Our Generous Donors
        </h2>

        {/* Trustees */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-yellow-600 mb-8 text-center">🌟 Trustees</h3>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {trustees.map((donor, index) => (
              <div
                key={`trustee-${index}`}
                className="p-6 rounded-2xl bg-gradient-to-br from-yellow-50 to-white shadow-lg border border-yellow-300 hover:shadow-xl transition transform hover:-translate-y-1 flex flex-col justify-between h-full"
                data-aos="fade-up"
                data-aos-delay={index * 100} // stagger animation
              >
                {/* Name and Star */}
                <div className="flex justify-between items-start mb-3 min-h-[48px]">
                  <h3 className="text-lg font-bold text-gray-800 leading-snug">{donor.name}</h3>
                  <Star className="text-yellow-500 w-5 h-5 flex-shrink-0 ml-2" />
                </div>

                {/* Rank */}
                <span className="inline-block mt-2 px-3 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-700">
                  🎖️ {getDonorRank(donor)}
                </span>

                {/* Pledged & Donated */}
                <div className="mt-4 text-sm text-gray-700 flex flex-col gap-1">
                  <p><strong>Pledged:</strong> {formatCurrency(donor.pledged)}</p>
                  <p><strong>Donated:</strong> {formatCurrency(donor.donated)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>


        {/* Donors as Table */}
        <div>
          <h3 className="text-2xl font-bold text-orange-600 mb-8 text-center">🎗️ Donors</h3>
          <div className="overflow-x-auto" data-aos="fade-up">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
              <thead className="bg-orange-100">
                <tr>
                  <th className="px-4 py-2 border">Name</th>
                  <th className="px-4 py-2 border">Rank</th>
                  <th className="px-4 py-2 border">Pledged</th>
                  <th className="px-4 py-2 border">Donated</th>
                </tr>
              </thead>
              <tbody>
                {currentDonors.map((donor, index) => (
                  <tr
                    key={index}
                    className="hover:bg-orange-50"
                    data-aos="fade-up"

                  >
                    <td className="px-4 py-2 border">{donor.name}</td>
                    <td className="px-4 py-2 border text-center">{getDonorRank(donor)}</td>
                    <td className="px-4 py-2 border text-center">{formatCurrency(donor.pledged)}</td>
                    <td className="px-4 py-2 border text-center">{formatCurrency(donor.donated)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center mt-4 space-x-2">
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
                className={`px-4 py-2 rounded ${currentPage === index + 1
                    ? "bg-orange-500 text-white"
                    : "bg-orange-100 text-orange-600"
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
        </div>
      </div>

      {/* Thank You Section */}
      <div className="mt-16 text-center max-w-3xl mx-auto bg-orange-50 p-8 rounded-2xl shadow-md border border-orange-200" data-aos="fade-up">
        <h3 className="text-2xl font-bold text-orange-700 mb-4">
          🙏 Donate and Have Your Name Forever Honored
        </h3>
        <p className="text-gray-700 mb-4">
          We invite you to support the purchase of land for our temple. As a token of our appreciation,
          all donors will have their names permanently inscribed on the Temple's Donor Wall.
        </p>
        <p className="text-gray-700 font-medium mb-4">
          Thank you for your support! We’ll be honoring our generous donors here soon.
          Please check back in <span className="text-orange-600 font-semibold">24–48 hours</span>
          as new names are added.
        </p>
      </div>
    </section>
  );
};

export default Donors;
