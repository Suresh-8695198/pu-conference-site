import { Check, Users, GraduationCap, Briefcase, Globe, MapPin, Plane, Train, Bus, Camera } from "lucide-react";

const Registration = () => {
  const categories = [
    {
      title: "Faculty/Scientist & Full-time Research Scholars",
      icon: GraduationCap,
      indian: "₹5,000",
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
      foreign: "$100",
    },
  ];

  const parseIndian = (s?: string) => {
    if (!s) return null;
    const num = Number(s.replace(/[^0-9.-]+/g, ""));
    return isNaN(num) ? null : num;
  };

  const formatINR = (n: number) => `₹${n.toLocaleString("en-IN")}`;

  const parseAmount = (s?: string) => {
    if (!s) return null;
    const num = Number(s.replace(/[^0-9.]+/g, ""));
    return isNaN(num) ? null : num;
  };

  const formatCurrency = (s?: string, n?: number) => {
    if (s && s.trim().startsWith("₹")) return `₹${(n ?? 0).toLocaleString("en-IN")}`;
    if (s && s.trim().startsWith("$")) return `$${(n ?? 0).toFixed(2)}`;
    return (n ?? 0).toString();
  };

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
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {categories.map((category) => (
            <div
              key={category.title}
              className={`rounded-lg overflow-hidden card-hover shadow-sm border bg-[#efeee3] border-slate-200 w-full max-w-sm`}
            >
              <div className="p-6 flex flex-col">
                <div className="mb-4 min-h-[88px]">
                  <category.icon className={`w-10 h-10 mb-3 text-teal`} />
                  <h3 className={`font-display font-bold text-lg text-[#0b3d2e]`}>
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-3 mt-0">
                  {category.indian && (
                    <div className={`p-4 rounded-lg text-left w-full bg-white border border-slate-200`}>
                      <p className={`text-sm mb-1 text-[#0b3d2e]`}>Indian Participants</p>
                      <p className={`font-display font-bold text-2xl text-[#0b3d2e]`}>
                        {category.indian}
                      </p>
                      {(() => {
                        const base = parseIndian(category.indian as string);
                        if (!base) return null;
                        const gst = Math.round(base * 0.18);
                        const total = base + gst;
                        return (
                          <div className="mt-3 text-sm text-[#0b3d2e]">
                            <div className="flex justify-between">
                              <span>GST (18%)</span>
                              <span className="font-semibold">{formatINR(gst)}</span>
                            </div>
                            <div className="flex justify-between mt-1">
                              <span>Total (incl. GST)</span>
                              <span className="font-bold text-lg">{formatINR(total)}</span>
                            </div>
                          </div>
                        );
                      })()}
                    </div>
                  )}
                  {category.foreign && (
                    <div className={`p-4 rounded-lg text-left w-full bg-white border border-slate-200`}>
                      <p className={`text-sm mb-1 text-[#0b3d2e]`}>International Participants (Outside India)</p>
                      <p className={`font-display font-bold text-2xl text-[#0b3d2e]`}>
                        {category.foreign}
                      </p>
                      {(() => {
                        const base = parseAmount(category.foreign as string);
                        if (base === null) return null;
                        const gst = +(base * 0.18).toFixed(2);
                        const total = +(base + gst).toFixed(2);
                        return (
                          <div className="mt-3 text-sm text-[#0b3d2e]">
                            <div className="flex justify-between">
                              <span>Base Amount</span>
                              <span className="font-semibold">{formatCurrency(category.foreign, base)}</span>
                            </div>
                            <div className="flex justify-between mt-1">
                              <span>GST @ 18%</span>
                              <span className="font-semibold">{formatCurrency(category.foreign, gst)}</span>
                            </div>
                            <div className="flex justify-between mt-1">
                              <span>Total (Including GST)</span>
                              <span className="font-bold text-lg">{formatCurrency(category.foreign, total)}</span>
                            </div>
                            <div className="mt-2 text-xs text-slate-600">
                              {`${base} + 18% GST = ${total}`}
                            </div>
                          </div>
                        );
                      })()}
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
                { label: "Bank Name", value: "Canara Bank" },
                { label: "Branch", value: "Periyar University Campus" },
                { label: "IFSC Code", value: "CNRB0008450" },
                { label: "MICR Code", value: "636015024" }
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
          Conference registration will commence on 25 December 2025 and close on 9 February 2026. All conference participants are requested to complete the registration process and pay the applicable registration fee on or before the deadline. For each accepted paper, at least one author must register and attend the conference for the paper to be included in the conference proceedings.
        </p>
      </div>
    </section>
    </>
  );
};

export default Registration;
