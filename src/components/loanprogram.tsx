import { Mail } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const LoanProgram = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Animate once
  }, []);

  return (
    <section
      className="bg-gradient-to-b from-orange-50 via-yellow-50 to-white py-16 px-6 md:px-12 lg:px-20 font-montserrat"
      data-aos="fade-up"
    >
      <div
        className="mx-auto bg-white rounded-2xl shadow-lg border-t-4 border-orange-500 p-8 md:p-12"
        data-aos="zoom-in"
      >
        {/* Title */}
        <h2
          className="text-3xl md:text-4xl font-bold text-red-700 text-center mb-6"
          data-aos="fade-down"
        >
          Loan Program
        </h2>
        <p
          className="text-center text-gray-600 text-lg mb-8"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Personal Loan Program To Support Permanent Temple Land Purchase
        </p>

        {/* Blessings and Intro */}
        <p className="text-gray-700 leading-relaxed mb-6" data-aos="fade-up" data-aos-delay="150">
          Devotees,
        </p>
        <p className="text-gray-700 leading-relaxed mb-6" data-aos="fade-up" data-aos-delay="200">
          May the Blessings of{" "}
          <span className="text-orange-600 font-semibold">Lord Karthikeya</span> and{" "}
          <span className="text-orange-600 font-semibold">Lord Shiva</span> be showered on you and
          your family. As you may know, we are nearing the{" "}
          <strong>Temple Land Escrow Date on September 30th</strong>. Thank you for your incredible
          support so far in making generous pledges and donations towards this divine initiative.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6" data-aos="fade-up" data-aos-delay="250">
          We’ve made a strong start, with <strong>25% of the financial commitments</strong> from
          devotees already received. We are thrilled to report that we are at{" "}
          <span className="text-green-700 font-semibold">$55K USD</span>. Let’s keep the momentum
          going! We are working with a financial institution to raise the remaining necessary funds.
        </p>

        {/* Loan Program Intro */}
        <p className="text-gray-700 leading-relaxed mb-6" data-aos="fade-up" data-aos-delay="300">
          To help us close the remaining gap, we are establishing a new{" "}
          <strong>devotee-supported loan program</strong> for raising funds. This program allows
          devotees to help fund the purchase of the land and help the Temple in reducing the loan
          interest expenses.
        </p>

        {/* How it Works */}
        <h3 className="text-2xl font-bold text-orange-600 mb-4" data-aos="fade-up" data-aos-delay="350">
          How the Program Works
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6" data-aos="fade-up" data-aos-delay="400">
          <li>The Temple will have a loan agreement with the devotees at an agreed interest rate and period.</li>
          <li>The temple repays the principal over time, while interest is considered a <strong>donation</strong>.</li>
          <li><strong>Minimum loan:</strong> $5,000 USD.</li>
          <li>A donation receipt for the interest portion will be issued annually.</li>
        </ul>

        {/* Example */}
        <div
          className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-6"
          data-aos="fade-up"
          data-aos-delay="450"
        >
          <h4 className="text-xl font-semibold text-red-700 mb-2">Illustrative Example</h4>
          <p className="text-gray-700 leading-relaxed">
            A loan of <strong>$10,000 USD</strong> would have savings of approximately{" "}
            <strong>$637 USD</strong> over a 1-year period (at 6% interest).
          </p>
        </div>

        {/* Closing */}
        <p className="text-gray-700 leading-relaxed mb-6" data-aos="fade-up" data-aos-delay="500">
          We hope this additional option will be of interest to you and provides a novel way to
          support the <strong>OM Murugan New Temple Project</strong>.
        </p>
        <p className="text-gray-700 leading-relaxed mb-8" data-aos="fade-up" data-aos-delay="550">
          Please reach us at{" "}
          <a
            href="mailto:ommurugantemple@gmail.com"
            className="text-orange-600 font-semibold hover:underline"
          >
            ommurugantemple@gmail.com
          </a>{" "}
          if you are willing to support this program and help the Temple meet the{" "}
          <strong>September 30th land escrow date</strong>.
        </p>

        {/* Signature */}
        <p className="text-gray-700 font-semibold mb-2" data-aos="fade-up" data-aos-delay="600">
          Sincerely,
        </p>
        <p className="text-gray-700 font-bold" data-aos="fade-up" data-aos-delay="650">
          California OM Murugan Temple Board
        </p>

        {/* CTA Button */}
        <div className="text-center mt-10" data-aos="fade-up" data-aos-delay="700">
          <a
            href="mailto:ommurugantemple@gmail.com"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-orange-500 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Mail className="w-5 h-5" /> Contact Us to Support
          </a>
        </div>
      </div>
    </section>
  );
};

export default LoanProgram;
