import { Check, Users, GraduationCap, Briefcase, Globe, MapPin, Plane, Train, Bus, Camera } from "lucide-react";

const Registration = () => {
  const categories = [
    {
      title: "Faculty/Scientist from Academic/Research institutions",
      icon: GraduationCap,
      indian: "₹7,500",
      foreign: "",
    },
    {
      title: "Full-time Research Scholars (Post-Doctoral/Ph.D) / PG Students",
      icon: Users,
      indian: "₹6,000",
      foreign: "",
    },
    {
      title: "Participants (non-authors)",
      icon: Globe,
      indian: "₹1,500",
      foreign: "",
    },
    {
      title: "Onsite Faculty/Scientist from Academic/Research institutions",
      icon: Briefcase,
      indian: "",
      foreign: "$150",
    },
  ];

  const includes = [
    "Conference Kit",
    "Certificate of Participation",
    "Lunch & Refreshments",
    "Access to All Sessions",
    "Conference Proceedings",
    "Publication Support",
  ];

  return (
    <>
      {/* Registration Section */}
      <section id="registration" className="py-24 bg-navy text-primary-foreground">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-coral font-display font-semibold text-sm uppercase tracking-wider mb-4">
            Join the Conference
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Registration <span className="text-teal-light">Details</span>
          </h2>
          <div className="w-24 h-1 bg-coral mx-auto mt-6" />
        </div>

        {/* Registration Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {categories.map((category, index) => (
            <div
              key={category.title}
              className={`rounded-2xl overflow-hidden card-hover ${
                index === 0 ? "bg-teal" : "bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20"
              }`}
            >
              <div className="p-6">
                <category.icon className={`w-10 h-10 mb-4 ${
                  index === 0 ? "text-primary-foreground" : "text-teal"
                }`} />
                <h3 className={`font-display font-bold text-lg mb-4 ${
                  index === 0 ? "text-primary-foreground" : "text-primary-foreground"
                }`}>
                  {category.title}
                </h3>
                
                <div className="space-y-3">
                  {category.indian && (
                    <div className={`p-3 rounded-lg ${
                      index === 0 ? "bg-primary-foreground/20" : "bg-primary-foreground/10"
                    }`}>
                      <p className="text-sm text-primary-foreground/70">Indian Participants</p>
                      <p className="font-display font-bold text-2xl text-primary-foreground">
                        {category.indian}
                      </p>
                    </div>
                  )}
                  {category.foreign && (
                    <div className={`p-3 rounded-lg ${
                      index === 0 ? "bg-primary-foreground/20" : "bg-primary-foreground/10"
                    }`}>
                      <p className="text-sm text-primary-foreground/70">International Participants (Outside India)</p>
                      <p className="font-display font-bold text-2xl text-primary-foreground">
                        {category.foreign}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* What's Included */}
        <div className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-8 mb-12">
          <h3 className="font-display font-bold text-2xl text-center mb-8">
            Registration Includes
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {includes.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 bg-primary-foreground/10 p-4 rounded-xl"
              >
                <div className="w-8 h-8 bg-teal rounded-lg flex items-center justify-center shrink-0">
                  <Check className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="font-medium text-primary-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bank Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-teal rounded-2xl p-4 sm:p-8">
            <h3 className="font-display font-bold text-2xl mb-6 text-primary-foreground">
              Bank Transfer Details
            </h3>
            <div className="space-y-4">
              {[
                { label: "Account Name", value: "Periyar University Conference Account" },
                { label: "Account Number", value: "1234567890" },
                { label: "Bank Name", value: "State Bank of India" },
                { label: "Branch", value: "Periyar University Campus" },
                { label: "IFSC Code", value: "SBIN0001234" },
              ].map((item) => (
                <div key={item.label} className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-primary-foreground/20 pb-3 gap-1">
                  <span className="text-primary-foreground/70 break-words">{item.label}</span>
                  <span className="font-display font-semibold text-primary-foreground break-words">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-coral rounded-2xl p-4 sm:p-8 flex flex-col justify-center items-center text-center">
            <h3 className="font-display font-bold text-2xl mb-4 text-primary-foreground">
              Ready to Register?
            </h3>
            <p className="text-primary-foreground/80 mb-6">
              Complete your registration by filling out the form and making the payment.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-primary-foreground text-coral px-8 py-4 rounded-lg font-display font-bold text-lg hover:bg-primary-foreground/90 transition-colors"
            >
              Register Now
            </a>
          </div>
        </div>

        {/* Note */}
        <p className="text-center text-primary-foreground/60 text-sm mt-8">
          Conference registration will commence on 20 January 2026 and close on 20 February 2026. All conference participants are requested to complete the registration process and pay the applicable registration fee on or before the deadline. For each accepted paper, at least one author must register and attend the conference for the paper to be included in the conference proceedings.
        </p>
      </div>
    </section>

      {/* Travel Section */}
      <section id="travel" className="py-24 bg-slate">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block text-teal font-display font-semibold text-sm uppercase tracking-wider mb-4">
              Plan Your Visit
            </span>
            <h2 className="section-title">
              Travel & <span className="text-coral">Venue</span>
            </h2>
            <div className="w-24 h-1 bg-teal mx-auto mt-6" />
          </div>

          {/* Conference Venue */}
          <div className="bg-background rounded-2xl p-8 mb-12 shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-teal rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display font-bold text-2xl text-navy">Conference Venue</h3>
            </div>
            <p className="text-muted-foreground mb-6">
              The International Conference on Health, Optimization, Research, Intelligence, and Next-Gen AI for Humanity (HORIZON-AI 2026) will be held at:
            </p>
            <div className="bg-slate p-6 rounded-xl">
              <h4 className="font-display font-bold text-lg text-navy mb-2">Department of Computer Science, Seminar Hall-II Floor</h4>
              <p className="text-muted-foreground font-medium">Periyar University</p>
              <p className="text-muted-foreground">Salem – 636011, Tamil Nadu, India</p>
            </div>
          </div>

          {/* How to Reach */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* By Air */}
            <div className="bg-background rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-teal rounded-lg flex items-center justify-center">
                  <Plane className="w-5 h-5 text-primary-foreground" />
                </div>
                <h4 className="font-display font-bold text-lg text-navy">By Air</h4>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Salem Airport (20 km) – Nearest airport; taxis and cabs available.</li>
                <li>• Coimbatore Airport (170 km) – Regular flights from major cities; bus/taxi to Salem.</li>
                <li>• Bengaluru Airport (210 km) – International hub with direct buses/trains to Salem.</li>
              </ul>
            </div>

            {/* By Train */}
            <div className="bg-background rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-teal rounded-lg flex items-center justify-center">
                  <Train className="w-5 h-5 text-primary-foreground" />
                </div>
                <h4 className="font-display font-bold text-lg text-navy">By Train</h4>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Salem Junction (SA) – Major railway junction with connections to all metro cities.</li>
                <li>• From the station, Periyar University is 15–20 minutes by taxi, auto, or bus.</li>
              </ul>
            </div>

            {/* By Road */}
            <div className="bg-background rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-teal rounded-lg flex items-center justify-center">
                  <Bus className="w-5 h-5 text-primary-foreground" />
                </div>
                <h4 className="font-display font-bold text-lg text-navy">By Road</h4>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Salem is well connected via NH-44 and NH-544 to Chennai, Coimbatore, Bengaluru, Trichy, and Madurai.</li>
                <li>• Frequent state and private buses operate from all major cities.</li>
                <li>• From Salem bus stands, the University is 15–20 minutes away by bus, auto, or taxi.</li>
              </ul>
            </div>
          </div>

          {/* Places to Visit */}
          <div className="bg-background rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-coral rounded-lg flex items-center justify-center">
                <Camera className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display font-bold text-2xl text-navy">Important Places to Visit</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-teal rounded-full mt-2 shrink-0"></div>
                  <p className="text-muted-foreground"><strong>Yercaud Hills</strong> – Scenic hill station with viewpoints, lake, and coffee estates.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-teal rounded-full mt-2 shrink-0"></div>
                  <p className="text-muted-foreground"><strong>1008 Lingam Temple</strong> – Famous spiritual site with 1008 Shiva lingams.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-teal rounded-full mt-2 shrink-0"></div>
                  <p className="text-muted-foreground"><strong>Kurumbapatti Zoological Park</strong> – Mini zoo at the foothills of Yercaud.</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-teal rounded-full mt-2 shrink-0"></div>
                  <p className="text-muted-foreground"><strong>Kailasanathar Temple, Tharamangalam</strong> – Renowned for its intricate stone carvings.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-teal rounded-full mt-2 shrink-0"></div>
                  <p className="text-muted-foreground"><strong>Mettur Dam</strong> – One of India's largest dams with beautiful reservoir views.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-teal rounded-full mt-2 shrink-0"></div>
                  <p className="text-muted-foreground"><strong>ISKCON Salem</strong> – Peaceful spiritual and cultural center.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Registration;
