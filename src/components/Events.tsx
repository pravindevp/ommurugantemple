import { Calendar, MapPin, Clock, Users, Star } from 'lucide-react';

const Events = () => {
  const upcomingEvents = [
    {
      name: 'Skanda Sashti',
      date: 'November 2024',
      time: '6:00 AM - 8:00 PM',
      description: 'Six-day festival celebrating Lord Murugan\'s victory over evil forces. Special abhishekams, cultural programs, and community feast.',
      location: 'Main Temple Hall',
      category: 'Major Festival',
      image: 'https://images.pexels.com/photos/6328159/pexels-photo-6328159.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name: 'Thai Pusam',
      date: 'January 2025',
      time: '5:00 AM onwards',
      description: 'Grand celebration with special prayers, kavadi ceremonies, and traditional procession.',
      location: 'Temple Premises',
      category: 'Major Festival',
      image: 'https://images.pexels.com/photos/8078474/pexels-photo-8078474.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name: 'Monthly Abhishekam',
      date: 'Every First Friday',
      time: '7:00 PM - 8:30 PM',
      description: 'Special monthly abhishekam for Lord Murugan with milk, honey, and sacred herbs.',
      location: 'Sanctum Sanctorum',
      category: 'Regular Service',
      image: 'https://images.pexels.com/photos/5638258/pexels-photo-5638258.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name: 'Bhajan Evening',
      date: 'Every Saturday',
      time: '7:00 PM - 9:00 PM',
      description: 'Community devotional singing with traditional instruments and spiritual discourse.',
      location: 'Community Hall',
      category: 'Weekly Event',
      image: 'https://images.pexels.com/photos/5638275/pexels-photo-5638275.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const annualFestivals = [
    { name: 'Thai Pusam', month: 'January', significance: 'Lord Murugan\'s divine power' },
    { name: 'Panguni Uthiram', month: 'March', significance: 'Divine marriage celebration' },
    { name: 'Vaikasi Visakam', month: 'May', significance: 'Lord Murugan\'s birth' },
    { name: 'Adi Krittikai', month: 'July', significance: 'Monthly Murugan celebration' },
    { name: 'Ganesh Chaturthi', month: 'August', significance: 'Lord Ganesha\'s birthday' },
    { name: 'Navaratri', month: 'October', significance: 'Nine nights of Goddess worship' },
    { name: 'Skanda Sashti', month: 'November', significance: 'Victory over evil forces' },
    { name: 'Karthikai Deepam', month: 'December', significance: 'Festival of lights' }
  ];

  return (
    <section id="events" className="py-20 bg-gradient-to-b from-white to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Events & Festivals
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join us in celebrating the rich traditions and festivals that bring our community together in devotion and joy.
          </p>
        </div>

        {/* Upcoming Events */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Upcoming Events
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <img 
                    src={event.image} 
                    alt={event.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {event.category}
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-2xl font-bold text-gray-800 mb-3">
                    {event.name}
                  </h4>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {event.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-gray-700">
                      <Calendar className="text-orange-600 mr-3" size={18} />
                      <span className="font-semibold">{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Clock className="text-orange-600 mr-3" size={18} />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <MapPin className="text-orange-600 mr-3" size={18} />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105">
                    Get Event Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Annual Festival Calendar */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Annual Festival Calendar
            </h3>
            <p className="text-lg text-gray-600">
              Mark your calendars for these sacred celebrations throughout the year
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {annualFestivals.map((festival, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl border border-orange-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-orange-600 mb-3">
                  <Star size={24} className="mx-auto" />
                </div>
                <h4 className="text-lg font-bold text-gray-800 mb-2">
                  {festival.name}
                </h4>
                <div className="text-sm font-semibold text-orange-600 mb-3">
                  {festival.month}
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {festival.significance}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Stay updated with our events and receive notifications for upcoming celebrations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-3 rounded-full font-semibold hover:from-orange-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105">
                <Users className="inline mr-2" size={20} />
                Subscribe to Updates
              </button>
              <button className="border-2 border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300">
                Download Calendar
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;