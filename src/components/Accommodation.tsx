import { MapPin, Plane, Train, Bus, Camera, Home } from "lucide-react";

const Accommodation = () => {
  return (
    <section id="accommodation" className="py-24 bg-slate">
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
            The International Conference on Health, Optimization, Research, Intelligence, and Next-Gen AI for Humanity (HORIZON-AI 2026) will be held at:
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
            Accommodation options will be available near the conference venue. Details will be provided closer to the event date. For inquiries, please contact the organizing committee.
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
            <ul className="space-y-2 text-base text-slate-700 leading-relaxed">
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
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-coral rounded-lg flex items-center justify-center">
              <Camera className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-display font-bold text-2xl text-navy">Important Places to Visit</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-teal rounded-full mt-2 shrink-0"></div>
                <p className="text-slate-700 text-base leading-relaxed"><strong>Yercaud Hills</strong> – Scenic hill station with viewpoints, lake, and coffee estates.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-teal rounded-full mt-2 shrink-0"></div>
                <p className="text-slate-700 text-base leading-relaxed"><strong>1008 Lingam Temple</strong> – Famous spiritual site with 1008 Shiva lingams.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-teal rounded-full mt-2 shrink-0"></div>
                <p className="text-slate-700 text-base leading-relaxed"><strong>Kurumbapatti Zoological Park</strong> – Mini zoo at the foothills of Yercaud.</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-teal rounded-full mt-2 shrink-0"></div>
                <p className="text-slate-700 text-base leading-relaxed"><strong>Kailasanathar Temple, Tharamangalam</strong> – Renowned for its intricate stone carvings.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-teal rounded-full mt-2 shrink-0"></div>
                <p className="text-slate-700 text-base leading-relaxed"><strong>Mettur Dam</strong> – One of India's largest dams with beautiful reservoir views.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-teal rounded-full mt-2 shrink-0"></div>
                <p className="text-slate-700 text-base leading-relaxed"><strong>ISKCON Salem</strong> – Peaceful spiritual and cultural center.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accommodation;