import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Local Images
import Murugan from "../Asset/img/murugan.jpg";
import Shiva from "../Asset/img/Shiva Parvati.jpg";
import Vinayagar from "../Asset/img/Lord Maha Ganapathy - Vinayagar.jpg";
import Hanuman from "../Asset/img/Hanuman.jpg";
import Pariwar from "../Asset/img/Sri Ram Pariwar.jpg";
import Mahalakshmi from "../Asset/img/Goddess Mahalakshmi.jpg";
import Balaji from "../Asset/img/Lord Sri Venkateshwara - Balaji.jpg";
import Saraswathi from "../Asset/img/Goddess Saraswathi.jpg";
import Ayyappa from "../Asset/img/Lord Sri Ayyappa Swamy.jpg";
import Navagraga from "../Asset/img/Lord Navagraha.webp";

// Use local images for consistency
const deities = [
  {
    name: "Lord Karthikeya - Murugan",
    img: Murugan,
    description:
      "God of war and victory, known as Murugan, Subramaniam, Shanmugam, Skanda, and Guha. Protector of spiritual growth and destroyer of negative tendencies.",
  },
  {
    name: "Lord Shiva & Goddess Parvathi",
    img: Shiva,
    description:
      "Lord of creation and destruction, Ardhanarishvara signifies the inseparable union of masculine and feminine energies.",
  },
  {
    name: "Lord Maha Ganapathy - Vinayagar",
    img: Vinayagar,
    description:
      "The elephant-faced God, remover of obstacles, Lord of wisdom, intellect, and new beginnings.",
  },
  {
    name: "Sri Anjaneyar - Hanuman",
    img: Hanuman,
    description:
      "Greatest devotee of Lord Rama, symbol of strength, devotion, knowledge, and righteousness.",
  },
  {
    name: "Sri Ram Pariwar",
    img: Pariwar,
    description:
      "Lord Rama with Sita, Lakshmana, and Hanuman — the epitome of dharma, devotion, and virtue.",
  },
  {
    name: "Goddess Mahalakshmi",
    img: Mahalakshmi,
    description:
      "Goddess of wealth and prosperity, blessing devotees with abundance, nobility, and spiritual richness.",
  },
  {
    name: "Lord Sri Venkateshwara - Balaji",
    img: Balaji,
    description:
      "Incarnation of Vishnu, preserver of the Universe, granting salvation and prosperity in Kali Yuga.",
  },
  {
    name: "Goddess Saraswathi",
    img: Saraswathi,
    description:
      "Goddess of learning and wisdom, inspiring literature, music, and all creative arts.",
  },
  {
    name: "Lord Sri Ayyappa Swamy",
    img: Ayyappa,
    description:
      "Celibate warrior deity and protector, bestowing courage, discipline, and spiritual strength.",
  },
  {
    name: "Lord Navagraha",
    img: Navagraga,
    description:
      "Nine planetary deities influencing human life and destiny in Vedic astrology.",
  },
];

const Deities = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-24 bg-gradient-to-b from-orange-50 to-yellow-50 font-montserrat">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-down">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
            Presiding Deities of the Temple
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover the sacred deities worshipped at California OM Murugan
            Temple, each blessing devotees with divine grace, wisdom, and
            prosperity.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto mt-6" />
        </div>

        {/* Grid of Deities */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 h-full w-full object-cover">
          {deities.map((deity, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition transform hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Deity Image */}
             <div className="w-full bg-white flex items-center justify-center rounded-t-2xl">
  <img
    src={deity.img}
    alt={deity.name}
    className="max-h-72 w-auto object-contain transition duration-500 group-hover:scale-105"
  />
</div>


              {/* Deity Info */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-orange-700 mb-2">
                  {deity.name}
                </h3>
                <p className="text-gray-600 text-sm">{deity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Deities;
