import React, { useEffect } from 'react';
import { MapPin, DollarSign, Landmark } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const phases = [
  {
    phase: 1,
    title: "A New Beginning – Foundation of New Hindu Temple",
    timeline: "1 to 6 Months (Aug 2025)",
    goal: 600000,
    raised: 10000,
    pledged: 200000,
    targetDate: "Aug 2025",
    details: [
      "Purchase a land of 3 to 6 acres – Update Jun 2025: Identified the land and working with Landlord",
      "Open space Spiritual Temple",
      "Bring Vigraghams (Idols) to Temple",
      "The Temple will open to devotees",
      "Everyday Morning and Evening Prayers",
    ],
    color: "from-yellow-100 to-orange-50",
  },
  {
    phase: 2,
    title: "A New Permanent Land – Traditional Hindu Temple",
    timeline: "7 months to 36 Months (Oct 2028)",
    goal: 1800000,
    raised: 0,
    pledged: 0,
    targetDate: "Oct 2028",
    details: [
      "Sannidhis and Vigraghams to be carved",
      "Design concepts and detailed master plan for the property – which describes how the new temple will be built",
      "Obtain Site Clearance Certificate",
      "Finalize General Contractor",
      "Obtain Building Permit from City",
    ],
    color: "from-orange-100 to-yellow-50",
  },
  {
    phase: 3,
    title: "A New Reality – Divine Blessings for a Divine",
    timeline: "37 months to 60 Months (Oct 2030)",
    goal: 3600000,
    raised: 0,
    pledged: 0,
    targetDate: "Oct 2030",
    details: [
      "Ground Breaking – OM Murugan Temple – Our Focus is on The Main Temple Building",
      "Phase 3.1: Several smaller Temples or Sannidhanams are structured within the Main Temple",
      "Phase 3.2: Begin Construction – Learning Center, Cultural and Dining Halls",
      "Phase 3.3: Buildout of front area of temple, vestibule, office, coat, concrete towers, porches, and floors",
    ],
    color: "from-yellow-50 to-orange-50",
  },
];

const LandProjectDetails = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration
      once: true,    // Trigger animation only once
      offset: 100,   // Offset before animation starts
    });
  }, []);

  return (
    <div className="bg-gradient-to-br from-white-50 to-orange-100 p-10 mx-auto shadow-xl border border-orange-200 font-montserrat">
      {/* Header */}
      <h2 
        className="text-4xl font-extrabold text-center text-orange-700 mb-12 drop-shadow-md"
        data-aos="fade-down"
      >
        🛕 Temple Land Project Phases
      </h2>

      {/* Phases */}
      <div className="space-y-12">
        {phases.map((phaseData, index) => {
          const progressPercent = (phaseData.raised / phaseData.goal) * 100;
          const pledgedPercent = (phaseData.pledged / phaseData.goal) * 100;

          return (
            <div
              key={index}
              className={`p-8 rounded-3xl bg-gradient-to-br ${phaseData.color} shadow-lg border border-orange-200`}
              data-aos="fade-up"
              data-aos-delay={index * 150} // staggered animation
            >
              {/* Phase Header */}
              <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
                <h3 
                  className="text-2xl font-bold text-orange-800 flex items-center gap-3"
                  data-aos="fade-right"
                  data-aos-delay={index * 150 + 100}
                >
                  <Landmark className="w-7 h-7 text-orange-600" />
                  Phase {phaseData.phase}: {phaseData.title}
                </h3>
                <p 
                  className="text-sm text-gray-600 italic mt-2 md:mt-0"
                  data-aos="fade-left"
                  data-aos-delay={index * 150 + 150}
                >
                  ⏳ Timeline: {phaseData.timeline}
                </p>
              </div>

              {/* Details */}
              <ul 
                className="list-disc list-inside text-gray-700 space-y-1 mb-6"
                data-aos="fade-up"
                data-aos-delay={index * 150 + 200}
              >
                {phaseData.details.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>

              {/* Progress Section */}
              <div className="mb-4" data-aos="zoom-in" data-aos-delay={index * 150 + 300}>
                <div className="flex justify-between items-center mb-2 text-sm text-gray-600">
                  <span>
                    <DollarSign className="inline w-4 h-4 text-green-600" /> Raised: ${phaseData.raised.toLocaleString()}
                  </span>
                  <span>Target: ${phaseData.goal.toLocaleString()} by {phaseData.targetDate}</span>
                </div>
                <div className="relative w-full bg-gray-200 rounded-full h-4 overflow-hidden shadow-inner">
                  {/* Pledged portion */}
                  <div
                    className="absolute top-0 left-0 h-4 bg-yellow-400"
                    style={{ width: `${Math.min(pledgedPercent, 100)}%` }}
                  ></div>
                  {/* Raised portion */}
                  <div
                    className="absolute top-0 left-0 h-4 bg-red-500"
                    style={{ width: `${Math.min(progressPercent, 100)}%` }}
                  ></div>
                </div>
                <div className="flex justify-between mt-1 text-xs text-gray-500">
                  <span>Pledged: ${phaseData.pledged.toLocaleString()}</span>
                  <span>{phaseData.targetDate}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LandProjectDetails;
