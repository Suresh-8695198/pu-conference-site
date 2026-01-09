import { MapPin, Plane, Train, Bus, Camera, Home } from "lucide-react";

const Accommodation = () => {
  return (
    <section id="accommodation" className="py-0 bg-cream">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-gold font-display font-semibold text-sm uppercase tracking-wider mb-4">
            Plan Your Visit
          </span>
          <h2 className="section-title">
            Travel & <span className="text-burgundy">Accommodation</span>
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mt-6" />
        </div>

      
        {/* Accommodation */}
        <div className="bg-white border border-slate-200 rounded-lg p-8 mb-12 shadow-sm">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-burgundy rounded-lg flex items-center justify-center">
              <Home className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-display font-bold text-2xl text-navy">Accommodation</h3>
          </div>
          <p className="text-black mb-6 leading-relaxed text-justify">
           Accommodation will be provided on prior request at ₹700 per day. Food charges are extra and payable separately, based on the participant’s requirements.
          </p>          
          {/* Accommodation Form Section */}
          <div className="mt-8 bg-white border-2 border-blue-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
            
            <div className="relative z-10 text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4 shadow-lg">
                <Home className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-display font-bold text-xl md:text-2xl text-blue-900 mb-2">
                Book Your Accommodation
              </h4>
              <p className="text-gray-700 text-sm md:text-base font-medium">
                Fill out the form to request accommodation during the conference
              </p>
            </div>
            
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 relative z-10">
              {/* QR Code */}
              <div className="flex flex-col items-center group">
                <div className="bg-white p-4 rounded-xl shadow-lg border-2 border-blue-200 hover:border-blue-600 hover:scale-105 transition-all duration-300">
                  <img 
                    src="/accommodation_form.png" 
                    alt="Accommodation Form QR Code" 
                    className="w-40 h-40 sm:w-48 sm:h-48 object-contain"
                  />
                </div>
                <p className="text-xs text-gray-600 mt-3 font-semibold flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                  </svg>
                  Scan to fill the form
                </p>
              </div>
              
              {/* OR Divider */}
              <div className="flex lg:flex-col items-center gap-3">
                <div className="hidden lg:block w-px h-32 bg-blue-200"></div>
                <div className="lg:hidden w-32 h-px bg-blue-200"></div>
                <span className="text-blue-700 font-bold text-sm px-3 py-1 bg-blue-50 rounded-full shadow-sm border border-blue-200">OR</span>
                <div className="hidden lg:block w-px h-32 bg-blue-200"></div>
                <div className="lg:hidden w-32 h-px bg-blue-200"></div>
              </div>
              
              {/* Button with Hand Icon */}
              <div className="flex flex-col items-center">
                <div className="relative group">
                  
                  <a
                    href="https://forms.gle/AFnz1MY4GdK3xuff8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative inline-flex items-center justify-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-lg font-display font-bold text-base md:text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 transform group"
                  >
                    {/* Animated Hand Icon */}
                    <svg 
                      className="w-6 h-6 md:w-7 md:h-7 animate-pulse group-hover:scale-110 transition-transform duration-300" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path fillRule="evenodd" d="M9 3a1 1 0 012 0v5.5a.5.5 0 001 0V4a1 1 0 112 0v4.5a.5.5 0 001 0V6a1 1 0 112 0v5a7 7 0 11-14 0V9a1 1 0 012 0v2.5a.5.5 0 001 0V4a1 1 0 012 0v4.5a.5.5 0 001 0V3z" clipRule="evenodd" />
                    </svg>
                    
                    <span className="relative">
                      Click to Fill Form
                      {/* Underline Animation */}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-300"></span>
                    </span>
                    
                    {/* Arrow Icon */}
                    <svg 
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>
                
                <p className="text-xs text-gray-600 mt-4 text-center max-w-xs font-medium flex items-center gap-1.5">
                  
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* How to Reach */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* By Air */}
            <div className="bg-white border border-warm-grey rounded-lg p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center">
              <Plane className="w-5 h-5 text-white" />
              </div>
              <h4 className="font-display font-bold text-xl text-navy">By Air</h4>
            </div>
            <ul className="space-y-2 text-base text-black leading-relaxed text-justify list-disc list-inside">
              <li>Salem Airport (20 km) – Nearest airport; taxis and cabs available.</li>
              <li>Coimbatore Airport (170 km) – Regular flights from major cities; bus/taxi to Salem.</li>
              <li>Bengaluru Airport (210 km) – International hub with direct buses/trains to Salem.</li>
            </ul>
            </div>

          {/* By Train */}
          <div className="bg-white border border-warm-grey rounded-lg p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-burgundy rounded-lg flex items-center justify-center">
                <Train className="w-5 h-5 text-white" />
              </div>
              <h4 className="font-display font-bold text-xl text-navy">By Train</h4>
            </div>
            <ul className="space-y-2 text-base text-black leading-relaxed text-justify list-disc list-inside">
              <li>Salem Junction (SA) – Major railway junction with connections to all metro cities.</li>
              <li>From the station, Periyar University is 15–20 minutes by taxi, auto, or bus.</li>
            </ul>
          </div>

          {/* By Road */}
          <div className="bg-white border border-warm-grey rounded-lg p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center">
                <Bus className="w-5 h-5 text-white" />
              </div>
              <h4 className="font-display font-bold text-xl text-navy">By Road</h4>
            </div>
            <ul className="space-y-2 text-base text-black leading-relaxed text-justify list-disc list-inside">
              <li>Salem is well connected via NH-44 and NH-544 to Chennai, Coimbatore, Bengaluru, Trichy, and Madurai.</li>
              <li>Frequent state and private buses operate from all major cities.</li>
              <li>From Salem bus stand, the University is 15–20 minutes away by bus, auto, or taxi.</li>
            </ul>
          </div>
        </div>

        {/* Places to Visit */}
        <div className="bg-white border border-slate-200 rounded-lg p-8 shadow-sm">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-burgundy rounded-lg flex items-center justify-center">
              <Camera className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-display font-bold text-2xl text-navy">Important Places to Visit</h3>
          </div>

          {/* Places Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Yercaud Hills */}
            <div className="group bg-slate-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/yercaud.jpg"
                  alt="Yercaud Hills"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&crop=center';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="font-display font-bold text-white text-lg mb-1">Yercaud Hills</h4>
                  <p className="text-white/90 text-sm">Scenic hill station with viewpoints, lake, and coffee estates</p>
                </div>
              </div>
            </div>

            {/* 1008 Lingam Temple */}
            <div className="group bg-slate-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/1008-Shiva-Lingam-Temple.jpg"
                  alt="1008 Lingam Temple"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1582515073490-39981397c445?w=400&h=300&fit=crop&crop=center';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="font-display font-bold text-white text-lg mb-1">1008 Lingam Temple</h4>
                  <p className="text-white/90 text-sm">Famous spiritual site with 1008 Shiva lingams</p>
                </div>
              </div>
            </div>

            {/* Kurumbapatti Zoological Park */}
            <div className="group bg-slate-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/kurumbapatti-zoo.jpeg"
                  alt="Kurumbapatti Zoological Park"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&crop=center';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="font-display font-bold text-white text-lg mb-1">Kurumbapatti Zoo</h4>
                  <p className="text-white/90 text-sm">Mini zoo at the foothills of Yercaud</p>
                </div>
              </div>
            </div>

            {/* Kailasanathar Temple */}
            <div className="group bg-slate-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/kailasanathar-temple.jpeg"
                  alt="Kailasanathar Temple"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1582515073490-39981397c445?w=400&h=300&fit=crop&crop=center';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="font-display font-bold text-white text-lg mb-1">Kailasanathar Temple</h4>
                  <p className="text-white/90 text-sm">Renowned for intricate stone carvings</p>
                </div>
              </div>
            </div>

            {/* Mettur Dam */}
            <div className="group bg-slate-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/mettur-dam.webp"
                  alt="Mettur Dam"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop&crop=center';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="font-display font-bold text-white text-lg mb-1">Mettur Dam</h4>
                  <p className="text-white/90 text-sm">One of India's largest dams with beautiful reservoir views</p>
                </div>
              </div>
            </div>

            {/* ISKCON Salem */}
            <div className="group bg-slate-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/iskcon-salem.webp"
                  alt="ISKCON Salem"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1582515073490-39981397c445?w=400&h=300&fit=crop&crop=center';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="font-display font-bold text-white text-lg mb-1">ISKCON Salem</h4>
                  <p className="text-white/90 text-sm">Peaceful spiritual and cultural center</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accommodation;