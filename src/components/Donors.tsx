import React from 'react';
import { Sparkles, Star } from 'lucide-react';

const trustees = [
  { name: "Sridevi, Sankar Dandabany & Family", location: "Rocklin, CA", pledged: 50001, donated: 5000 },
  { name: "Kavita, Mohan Arunachalam & Family", location: "Rocklin, CA", pledged: 123000, donated: 12514 },
  { name: "Nalini, Vasanthakumar & Family", location: "Elk Grove, CA", pledged: 50001, donated: 202 },
];

const donors = [
  { name: "Ravindran & Family", location: "El Dorado Hills, CA", pledged: 25000, donated: 10000 },
  { name: "Pragasam & Family", location: "Granite Bay, CA", pledged: 5001, donated: 5001 },
  { name: "Viji Krishnakumar & Family", location: "Lincoln, CA", pledged: 5001, donated: 1001 },
  { name: "Jignesh Naik & Family", location: "Roseville, CA", pledged: 2501, donated: 2501 },
  { name: "Sivadoss & Family", location: "El Dorado Hills, CA", pledged: 3003, donated: 1500 },
  { name: "Radhakrishnan Ayyanar & Family", location: "Rancho Cordova, CA", pledged: 2002, donated: 1001 },
  { name: "Balamurugan & Family", location: "Natomas Sacramento, CA", pledged: 2001, donated: 2001 },
  { name: "Divya Krishnakumar & Family", location: "Bay Area, CA", pledged: 1001, donated: 1001 },
  { name: "Lalith Kumar & Family", location: "Roseville, CA", pledged: 1000, donated: 1000 },
  { name: "Sekar & Family", location: "Rocklin, CA", pledged: 1001, donated: 1001 },
  { name: "Ramesh & Family", location: "Folsom, CA", pledged: null, donated: 1001 },
  { name: "Vivek & Family", location: "Roseville, CA", pledged: 1001, donated: null },
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

const DonorCard = ({ donor, isTrustee }) => (
  <div className={`p-6 rounded-2xl shadow-xl bg-white hover:scale-[1.02] transition duration-300 ${isTrustee ? 'border-2 border-yellow-400 bg-yellow-50' : ''}`}>
    <div className="flex items-center justify-between mb-2">
      <h3 className="text-lg font-bold text-gray-800">{donor.name}</h3>
      {isTrustee ? <Star className="text-yellow-500 w-5 h-5" /> : <Sparkles className="text-orange-400 w-4 h-4" />}
    </div>
    <p className="text-sm text-gray-500">{donor.location}</p>
    <p className="text-sm text-indigo-600 font-semibold mt-1">🎖️ {getDonorRank(donor)}</p>
    <div className="mt-4 text-sm text-gray-700">
      <p><strong>Pledged:</strong> {formatCurrency(donor.pledged)}</p>
      <p><strong>Donated:</strong> {formatCurrency(donor.donated)}</p>
    </div>
  </div>
);

const Donors = () => {
  return (
    <section id="donors" className="py-20 bg-gradient-to-b from-white to-orange-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">🙏 Our Generous Donors</h2>

        {/* Trustees */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-yellow-600 mb-6">🌟 Trustees</h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {trustees.map((donor, index) => (
              <DonorCard key={`trustee-${index}`} donor={donor} isTrustee />
            ))}
          </div>
        </div>

        {/* Donors */}
        <div>
          <h3 className="text-2xl font-semibold text-orange-600 mb-6">🎗️ Donors</h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {donors.map((donor, index) => (
              <DonorCard key={`donor-${index}`} donor={donor} isTrustee={false} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donors;
