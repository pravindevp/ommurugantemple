import React from 'react';
import { Progress } from '@material-tailwind/react';
import { MapPin, DollarSign, Landmark } from 'lucide-react';

const LandProjectDetails = () => {
  const totalPledged = 318010;
  const target = 600000;
  const percentage = Math.round((totalPledged / target) * 100);

  const trustees = ['Shiva Sundaram', 'Karthik Sekar', 'Lakshmi Ramesh'];
  const donors = [
    ...trustees,
    'Priya Patel',
    'Ravi Chandran',
    'Meena Iyer',
    'Arun Subramanian'
  ];

  return (
    <div className="bg-gradient-to-br from-yellow-50 to-orange-100 p-10 rounded-3xl max-w-6xl mx-auto shadow-xl border border-orange-200">
      
      {/* Title */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-orange-800 mb-4">
          🏛️ Permanent Temple Land Project
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          With Lord OM Murugan’s blessings, we have identified land in Lincoln, CA for a traditional temple. Let's unite and bring this vision to life.
        </p>
      </div>

      {/* Progress Section */}
      <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold text-green-800 mb-3 flex items-center gap-2">
          <DollarSign className="text-green-600 w-6 h-6" /> Project Progress
        </h2>
        <p className="text-lg font-medium text-gray-800 mb-1">
          ${totalPledged.toLocaleString()} pledged of ${target.toLocaleString()}
        </p>
        <Progress
          value={percentage}
          className="h-3"
          color="orange"
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
          placeholder=""
        />
        <p className="text-sm text-gray-600 mt-2">{percentage}% funded</p>
      </div>

      {/* Details Section */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-xl font-semibold text-orange-700 mb-3 flex items-center gap-2">
            <MapPin className="text-red-500" /> Land Details
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li><strong>Location:</strong> Lincoln, CA</li>
            <li><strong>Land Size:</strong> 6 Acres</li>
            <li><strong>Total Project Cost:</strong> $6M USD</li>
            <li><strong>Land Cost:</strong> $600K USD</li>
            <li><strong>Construction Cost:</strong> $5.4M USD</li>
            <li><strong>Escrow Date:</strong> Sep 30, 2025</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-xl font-semibold text-orange-700 mb-3">💸 Donation Methods</h3>
          <ul className="list-disc ml-5 space-y-2 text-gray-700">
            <li>
              Zeffy: <a href="https://tinyurl.com/OMT-Land-donation" target="_blank" rel="noreferrer" className="text-blue-600 underline">OMT Land Donation</a>
            </li>
            <li>Zelle: <span className="text-sm">californiaomurugantemple@gmail.com</span></li>
            <li>Check: <strong>Payable to "California OM Murugan Temple"</strong></li>
            <li>Employer Matching via Benevity/Cybergrants</li>
            <li>Wire Transfer available</li>
          </ul>
        </div>
      </div>

      {/* SQFT Donation */}
      <div className="bg-white rounded-xl shadow p-6 mt-8">
        <h3 className="text-xl font-semibold text-orange-700 mb-3">📏 Land Donation (Square Feet)</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-gray-700 font-medium">
          <div>10 SQFT – <span className="text-green-700">$1,001</span></div>
          <div>25 SQFT – <span className="text-green-700">$2,500</span></div>
          <div>50 SQFT – <span className="text-green-700">$5,001</span></div>
          <div>100 SQFT – <span className="text-green-700">$10,001</span></div>
        </div>
        <p className="mt-4 text-orange-700 italic">
          Donate and have your name honored on our Temple’s Donor Wall.
        </p>
      </div>

      {/* Donors Section */}
      <div className="bg-white rounded-xl shadow p-6 mt-8">
        <h3 className="text-xl font-semibold text-orange-700 mb-4">🙌 Our Donors</h3>
        <div className="grid md:grid-cols-2 gap-6 text-gray-700">
          <div>
            <h4 className="text-orange-600 font-bold text-lg mb-2">🌟 Trustees</h4>
            <ul className="list-disc ml-5 space-y-1">
              {trustees.map((name, idx) => (
                <li key={idx}>{name}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-green-700 font-bold text-lg mb-2">🙏 Donors</h4>
            <ul className="list-disc ml-5 space-y-1">
              {donors.slice(trustees.length).map((name, idx) => (
                <li key={idx}>{name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandProjectDetails;
