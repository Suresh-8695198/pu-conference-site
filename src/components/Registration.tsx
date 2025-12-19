import { Check, Users, GraduationCap, Briefcase, Globe, MapPin, Plane, Train, Bus, Camera } from "lucide-react";

const Registration = () => {
  const categories = [
    {
      title: "Faculty / Scientist / Full-Time Research Scholars (Indian)",
      icon: GraduationCap,
      indian: "₹4,000",
      foreign: "",
    },
    {
      title: "Participants (Indian)",
      icon: Globe,
      indian: "₹1,500",
      foreign: "",
    },
    {
      title: "Co-Author Registration (Indian)",
      icon: Users,
      indian: "₹1,500",
      foreign: "",
    },
    {
      title: "Foreign Participants",
      icon: Briefcase,
      indian: "",
      foreign: "USD 85",
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
    if (s && (s.trim().startsWith("$") || s.trim().toUpperCase().startsWith("USD"))) return `USD ${(n ?? 0).toLocaleString("en-US", { maximumFractionDigits: 0 })}`;
    return (n ?? 0).toString();
  };

  const includes = [
    "Conference Kit",
    "Certificate of Participation",
    "Lunch & Refreshments",
    "Access to All Sessions",
    "Publication Support",
  ];

  return (
    <>
      {/* Registration Section */}
      <section id="registration" className="py-24 bg-slate">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-gold font-display font-semibold text-sm uppercase tracking-wider mb-4">
            Join the Conference
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-navy">
            Registration <span className="text-burgundy">Details</span>
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mt-6" />
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
                  <category.icon className={`w-10 h-10 mb-3 text-gold`} />
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
                            <div className="flex justify-between mt-1 items-center">
                              <span className="text-sm">Total (incl. GST)</span>
                              <span className="font-bold text-2xl text-white bg-burgundy px-3 py-1 rounded-lg">{formatINR(total)}</span>
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
                        {(() => {
                          const base = parseAmount(category.foreign as string);
                          return formatCurrency(category.foreign, base ?? undefined);
                        })()}
                      </p>
                      {(() => {
                        const base = parseAmount(category.foreign as string);
                        if (base === null) return null;
                        const gst = Math.round(base * 0.18);
                        const total = base + gst;
                        return (
                          <div className="mt-3 text-sm text-[#0b3d2e]">
                            <div className="flex justify-between mt-1">
                              <span>GST @ 18%</span>
                              <span className="font-semibold">{formatCurrency(category.foreign, gst)}</span>
                            </div>
                            <div className="flex justify-between mt-1 items-center">
                              <span className="text-sm">Total (Including GST)</span>
                              <span className="font-bold text-2xl text-white bg-burgundy px-3 py-1 rounded-lg">{formatCurrency(category.foreign, total)}</span>
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
                <div className="w-8 h-8 bg-burgundy rounded-lg flex items-center justify-center shrink-0">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <span className="font-medium text-black">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bank Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white border border-slate-200 rounded-lg p-4 sm:p-8 shadow-sm md:col-span-2">
            <h3 className="font-display font-bold text-2xl mb-6 text-navy">
              Bank Transfer Details
            </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                {/* Details column (spans two columns on md+) */}
                <div className="md:col-span-2 bg-transparent">
                  <div className="divide-y divide-slate-100 rounded-lg overflow-hidden border border-slate-100">
                    {[
                      { label: "Account Name", value: "Periyar University Conference Account" },
                      { label: "Account Number", value: "8450101001449" },
                      { label: "Bank Name", value: "Canara Bank" },
                      { label: "Branch Name", value: "Periyar University Campus" },
                      { label: "Branch Code", value: "08450" },
                      { label: "IFSC Code", value: "CNRB0008450" },
                      { label: "MICR Code", value: "636015024" },
                      { label: "Address", value: "Canara Bank, Periyar University Campus Branch, Salem – 636011, Tamil Nadu, India" },
                    ].map((item, idx) => (
                      <div key={item.label} className={`py-4 px-4 flex justify-between items-start bg-white hover:bg-slate-50 transition-colors ${idx === 0 ? 'rounded-t-lg' : ''} ${idx === 8 ? 'rounded-b-lg' : ''}`}>
                        <dt className="text-slate-600 text-sm font-medium mr-4 uppercase tracking-wide">{item.label}</dt>
                        <dd className="text-slate-900 text-sm font-display font-semibold text-navy text-right break-words flex-1">{item.value}</dd>
                      </div>
                    ))}
                  </div>
                </div>

                {/* QR Column */}
                <div className="flex flex-col items-center justify-start">
                  <div className="w-full bg-gradient-to-br from-gold/5 to-burgundy/5 p-6 rounded-lg border border-slate-200 shadow-lg flex flex-col items-center">
                    <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mb-3">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-sm text-black mb-4 font-medium">Scan to Pay</p>
                    <img src="/qr.jpeg" alt="Conference QR Code for Payment" className="w-40 h-40 object-contain rounded-lg border-2 border-slate-300 shadow-md" />
                    <p className="text-xs text-black mt-4 text-center leading-relaxed">Use your UPI or banking app to scan and make payment securely.</p>
                  </div>
                </div>
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
              className="inline-flex items-center gap-2 bg-burgundy text-white px-8 py-4 rounded-lg font-display font-bold text-lg hover:bg-burgundy/90 transition-colors"
            >
              Register Now
            </a>
          </div>
        </div>

        {/* Note */}
        <p className="text-black text-sm mt-8 text-justify leading-relaxed max-w-5xl mx-auto">
          Conference registration will commence on 25 December 2025 and close on 9 February 2026. All conference participants are requested to complete the registration process and pay the applicable registration fee on or before the deadline. For each accepted paper, at least one author must register and attend the conference for the paper to be included in the conference proceedings.
        </p>
      </div>
    </section>
    </>
  );
};

export default Registration;
