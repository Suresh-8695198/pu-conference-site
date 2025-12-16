import { MapPin, Plane, Train, Bus, Camera, Home } from "lucide-react";

const Accommodation = () => {
  return (
    <section id="accommodation" className="py-0 bg-slate">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-teal font-display font-semibold text-sm uppercase tracking-wider mb-4">
            Plan Your Visit
          </span>
          <h2 className="section-title">
            Travel, Venue & <span className="text-coral">Accommodation</span>
          </h2>
          <div className="w-24 h-1 bg-teal mx-auto mt-6" />
        </div>

        {/* Conference Venue */}
        <div className="bg-white border border-slate-200 rounded-lg p-8 mb-12 shadow-sm">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-teal rounded-lg flex items-center justify-center">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-display font-bold text-2xl text-navy">Conference Venue</h3>
          </div>
          <p className="text-slate-700 mb-6 leading-relaxed">
            The International Conference on Artificial Intelligence Techniques and Smart Computing (ICAITSC 2026) will be held at:
          </p>
          <div className="bg-slate-50 p-6 rounded-lg border border-slate-100">
            <h4 className="font-display font-bold text-lg text-navy mb-2">Department of Computer Science, Seminar Hall-II Floor</h4>
            <p className="text-slate-600 font-medium">Periyar University</p>
            <p className="text-slate-600">Salem – 636011, Tamil Nadu, India</p>
          </div>
        </div>

        {/* Accommodation */}
        <div className="bg-white border border-slate-200 rounded-lg p-8 mb-12 shadow-sm">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-coral rounded-lg flex items-center justify-center">
              <Home className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-display font-bold text-2xl text-navy">Accommodation</h3>
          </div>
          <p className="text-slate-700 mb-6 leading-relaxed">
           Accommodation for participants will be arranged at the University Faculty Guest House on a payment basis, subject to availability and prior request.
          </p>
        </div>

        {/* How to Reach */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* By Air */}
          <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-teal rounded-lg flex items-center justify-center">
                <Plane className="w-5 h-5 text-white" />
              </div>
              <h4 className="font-display font-bold text-xl text-navy">By Air</h4>
            </div>
            <ul className="space-y-2 text-base text-slate-700 leading-relaxed text-justify">
              <li>• Salem Airport (20 km) – Nearest airport; taxis and cabs available.</li>
              <li>• Coimbatore Airport (170 km) – Regular flights from major cities; bus/taxi to Salem.</li>
              <li>• Bengaluru Airport (210 km) – International hub with direct buses/trains to Salem.</li>
            </ul>
          </div>

          {/* By Train */}
          <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-teal rounded-lg flex items-center justify-center">
                <Train className="w-5 h-5 text-white" />
              </div>
              <h4 className="font-display font-bold text-xl text-navy">By Train</h4>
            </div>
            <ul className="space-y-2 text-base text-slate-700 leading-relaxed">
              <li>• Salem Junction (SA) – Major railway junction with connections to all metro cities.</li>
              <li>• From the station, Periyar University is 15–20 minutes by taxi, auto, or bus.</li>
            </ul>
          </div>

          {/* By Road */}
          <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-teal rounded-lg flex items-center justify-center">
                <Bus className="w-5 h-5 text-white" />
              </div>
              <h4 className="font-display font-bold text-xl text-navy">By Road</h4>
            </div>
            <ul className="space-y-2 text-base text-slate-700 leading-relaxed">
              <li>• Salem is well connected via NH-44 and NH-544 to Chennai, Coimbatore, Bengaluru, Trichy, and Madurai.</li>
              <li>• Frequent state and private buses operate from all major cities.</li>
              <li>• From Salem bus stands, the University is 15–20 minutes away by bus, auto, or taxi.</li>
            </ul>
          </div>
        </div>

        {/* Places to Visit */}
        <div className="bg-white border border-slate-200 rounded-lg p-8 shadow-sm">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-coral rounded-lg flex items-center justify-center">
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