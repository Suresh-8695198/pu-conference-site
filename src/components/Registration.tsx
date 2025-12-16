import { Check, Users, GraduationCap, Briefcase, Globe, MapPin, Plane, Train, Bus, Camera } from "lucide-react";

const Registration = () => {
  const categories = [
    {
      title: "Faculty/Scientist from Academic/Research institutions",
      icon: GraduationCap,
      indian: "₹5,000",
      foreign: "",
    },
    {
      title: "Full-time Research Scholars (Post-Doctoral/Ph.D) / PG Students",
      icon: Users,
      indian: "₹4,500",
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
      foreign: "$75",
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
      <section id="registration" className="py-24 bg-slate">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-teal font-display font-semibold text-sm uppercase tracking-wider mb-4">
            Join the Conference
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-navy">
            Registration <span className="text-teal">Details</span>
          </h2>
          <div className="w-24 h-1 bg-coral mx-auto mt-6" />
        </div>

        {/* Registration Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {categories.map((category, index) => (
            <div
              key={category.title}
              className={`rounded-lg overflow-hidden card-hover shadow-sm border ${
                index === 0 ? "bg-teal border-teal" : "bg-white border-slate-200"
              }`}
            >
              <div className="p-6 flex flex-col">
                <div className="mb-4 min-h-[88px]">
                  <category.icon className={`w-10 h-10 mb-3 ${
                    index === 0 ? "text-white" : "text-teal"
                  }`} />
                  <h3 className={`font-display font-bold text-lg ${
                    index === 0 ? "text-white" : "text-navy"
                  }`}>
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-3 mt-0">
                  {category.indian && (
                    <div className={`p-4 rounded-lg text-left w-full ${
                      index === 0 ? "bg-white/20" : "bg-slate-50"
                    }`}>
                      <p className={`text-sm mb-1 ${
                        index === 0 ? "text-white" : "text-slate-600"
                      }`}>Indian Participants</p>
                      <p className={`font-display font-bold text-2xl ${
                        index === 0 ? "text-white" : "text-navy"
                      }`}>
                        {category.indian}
                      </p>
                    </div>
                  )}
                  {category.foreign && (
                    <div className={`p-4 rounded-lg text-left w-full ${
                      index === 0 ? "bg-white/20" : "bg-slate-50"
                    }`}>
                      <p className={`text-sm mb-1 ${
                        index === 0 ? "text-white/80" : "text-slate-600"
                      }`}>International Participants (Outside India)</p>
                      <p className={`font-display font-bold text-2xl ${
                        index === 0 ? "text-white" : "text-navy"
                      }`}>
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
        <div className="bg-white border border-slate-200 rounded-lg p-8 mb-12 shadow-sm">
          <h3 className="font-display font-bold text-2xl text-center mb-8 text-navy">
            Registration Includes
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {includes.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 bg-slate-50 p-4 rounded-lg"
              >
                <div className="w-8 h-8 bg-teal rounded-lg flex items-center justify-center shrink-0">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <span className="font-medium text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bank Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white border border-slate-200 rounded-lg p-4 sm:p-8 shadow-sm">
            <h3 className="font-display font-bold text-2xl mb-6 text-navy">
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
                <div key={item.label} className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-slate-200 pb-3 gap-1">
                  <span className="text-slate-600 break-words">{item.label}</span>
                  <span className="font-display font-semibold text-navy break-words">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-navy border border-navy rounded-lg p-4 sm:p-8 flex flex-col justify-center items-center text-center shadow-sm">
            <h3 className="font-display font-bold text-2xl mb-4 text-white">
              Ready to Register?
            </h3>
            <p className="text-white/90 mb-6 text-justify">
              Complete your registration by filling out the form and making the payment.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-coral text-white px-8 py-4 rounded-lg font-display font-bold text-lg hover:bg-coral/90 transition-colors"
            >
              Register Now
            </a>
          </div>
        </div>

        {/* Note */}
        <p className="text-slate-600 text-sm mt-8 text-justify leading-relaxed max-w-5xl mx-auto">
          Conference registration will commence on 25 December 2025 and close on 5 February 2026. All conference participants are requested to complete the registration process and pay the applicable registration fee on or before the deadline. For each accepted paper, at least one author must register and attend the conference for the paper to be included in the conference proceedings.
        </p>
      </div>
    </section>
    </>
  );
};

export default Registration;
