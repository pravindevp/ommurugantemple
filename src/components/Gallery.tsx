import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      src: 'https://images.pexels.com/photos/8078474/pexels-photo-8078474.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Temple Interior with beautiful decorations',
      category: 'Temple'
    },
    {
      src: 'https://images.pexels.com/photos/17637992/pexels-photo-17637992/free-photo-of-lord-ganesha-statue.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Lord Ganesha deity',
      category: 'Deities'
    },
    {
      src: 'https://images.pexels.com/photos/6328159/pexels-photo-6328159.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Festival celebration with devotees',
      category: 'Festivals'
    },
    {
      src: 'https://images.pexels.com/photos/5741278/pexels-photo-5741278.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Evening aarti ceremony',
      category: 'Ceremonies'
    },
    {
      src: 'https://images.pexels.com/photos/5638258/pexels-photo-5638258.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Beautiful temple architecture',
      category: 'Temple'
    },
    {
      src: 'https://images.pexels.com/photos/5638275/pexels-photo-5638275.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Community gathering during festival',
      category: 'Community'
    },
    {
      src: 'https://images.pexels.com/photos/8078470/pexels-photo-8078470.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Special abhishekam ceremony',
      category: 'Ceremonies'
    },
    {
      src: 'https://images.pexels.com/photos/6328159/pexels-photo-6328159.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Thai Pusam celebration',
      category: 'Festivals'
    },
    {
      src: 'https://images.pexels.com/photos/8078474/pexels-photo-8078474.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Temple entrance and surroundings',
      category: 'Temple'
    }
  ];

  const categories = ['All', 'Temple', 'Deities', 'Festivals', 'Ceremonies', 'Community'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = activeCategory === 'All' 
    ? images 
    : images.filter(img => img.category === activeCategory);

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const maxIndex = filteredImages.length - 1;
    if (direction === 'prev') {
      setSelectedImage(selectedImage > 0 ? selectedImage - 1 : maxIndex);
    } else {
      setSelectedImage(selectedImage < maxIndex ? selectedImage + 1 : 0);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-orange-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Temple Gallery
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore the beauty and spirituality of our temple through these cherished moments 
            captured during ceremonies, festivals, and daily worship.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-orange-50 hover:text-orange-600 shadow-md'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              onClick={() => openModal(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-semibold text-sm">{image.alt}</p>
                  <span className="inline-block mt-2 px-3 py-1 bg-orange-600 text-white text-xs rounded-full">
                    {image.category}
                  </span>
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Camera className="text-white" size={32} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Share Your Temple Moments
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We'd love to see your photos from temple visits and events. Share your spiritual moments 
            with our community and help preserve our beautiful memories.
          </p>
          <button className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-3 rounded-full font-semibold hover:from-orange-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105">
            Submit Your Photos
          </button>
        </div>

        {/* Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white hover:text-orange-400 transition-colors z-10"
              >
                <X size={32} />
              </button>
              
              <button
                onClick={() => navigateImage('prev')}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-orange-400 transition-colors z-10"
              >
                <ChevronLeft size={48} />
              </button>
              
              <button
                onClick={() => navigateImage('next')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-orange-400 transition-colors z-10"
              >
                <ChevronRight size={48} />
              </button>

              <img
                src={filteredImages[selectedImage].src}
                alt={filteredImages[selectedImage].alt}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              
              <div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-70 text-white p-4 rounded-lg">
                <p className="font-semibold">{filteredImages[selectedImage].alt}</p>
                <span className="inline-block mt-2 px-3 py-1 bg-orange-600 text-white text-sm rounded-full">
                  {filteredImages[selectedImage].category}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;