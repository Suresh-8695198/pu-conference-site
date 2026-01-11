import { Check, Users, GraduationCap, Briefcase, Globe, MapPin, Plane, Train, Bus, Camera, AlertTriangle } from "lucide-react";

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
                        const total = base + gst+1;
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

        {/* International Participants Notice */}
        <div className="bg-blue-800 border-2 border-blue-300 rounded-lg p-6 mb-8 shadow-lg">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center shrink-0">
              <AlertTriangle className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-display font-bold text-2xl text-white mb-3">
                For International Participants: 
              </h3>
              <p className="text-white text-xl text-justify leading-relaxed font-semibold">
             Please note that any bank charges, currency conversion fees, or international transfer charges, if applicable, must be borne by the payer. International participants are kindly requested to ensure that the full registration amount is credited to the conference account.     </p>
            </div>
          </div>
        </div>

        {/* Best Paper Award Announcement */}
        <div className="mb-8">
          <style>{`
            @keyframes float {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-8px); }
            }
            @keyframes rotateSlightly {
              0%, 100% { transform: rotate(0deg); }
              25% { transform: rotate(-2deg); }
              75% { transform: rotate(2deg); }
            }
            @keyframes fadeInScale {
              from { opacity: 0; transform: scale(0.95); }
              to { opacity: 1; transform: scale(1); }
            }
            @keyframes sparkle {
              0%, 100% { transform: scale(0) rotate(0deg); opacity: 0; }
              50% { transform: scale(1) rotate(180deg); opacity: 1; }
            }
            @keyframes floatRandom1 {
              0%, 100% { transform: translate(0, 0) rotate(0deg); }
              33% { transform: translate(5px, -10px) rotate(120deg); }
              66% { transform: translate(-5px, -5px) rotate(240deg); }
            }
            @keyframes floatRandom2 {
              0%, 100% { transform: translate(0, 0) rotate(0deg); }
              33% { transform: translate(-8px, -8px) rotate(-120deg); }
              66% { transform: translate(8px, -12px) rotate(-240deg); }
            }
            @keyframes floatRandom3 {
              0%, 100% { transform: translate(0, 0) scale(1); }
              50% { transform: translate(-3px, -8px) scale(1.2); }
            }
            @keyframes glareEffect {
              0% { left: -150%; }
              100% { left: 150%; }
            }
            @keyframes typewriter {
              from { width: 0; }
              to { width: 100%; }
            }
            @keyframes blink {
              0%, 100% { border-color: transparent; }
              50% { border-color: #d97706; }
            }
            .float-badge {
              animation: float 4s ease-in-out infinite;
            }
            .rotate-badge:hover {
              animation: rotateSlightly 2s ease-in-out infinite;
            }
            .fade-in-card {
              animation: fadeInScale 0.6s ease-out;
            }
            .sparkle-1 { animation: floatRandom1 4s ease-in-out infinite; }
            .sparkle-2 { animation: floatRandom2 5s ease-in-out infinite; }
            .sparkle-3 { animation: floatRandom3 3.5s ease-in-out infinite; }
            .sparkle-4 { animation: sparkle 3s ease-in-out infinite; }
            .glare-container {
              position: relative;
              overflow: hidden;
            }
            .glare-container::before {
              content: '';
              position: absolute;
              top: 0;
              left: -150%;
              width: 100%;
              height: 100%;
              background: linear-gradient(
                90deg,
                transparent 0%,
                rgba(255, 255, 255, 0.1) 25%,
                rgba(255, 255, 255, 0.4) 50%,
                rgba(255, 255, 255, 0.1) 75%,
                transparent 100%
              );
              transform: skewX(-25deg);
              animation: glareEffect 5s ease-in-out infinite;
              pointer-events: none;
              z-index: 10;
            }
            .typewriter-text {
              display: inline-block;
              overflow: hidden;
              white-space: nowrap;
              animation: typewriter 4s steps(80) 0.5s forwards, blink 0.75s step-end infinite;
              border-right: 3px solid #d97706;
              width: 0;
            }
            .typewriter-text.typed {
              animation: blink 0.75s step-end infinite;
              width: 100%;
              border-right: none;
            }
          `}</style>
          <div className="relative overflow-hidden group fade-in-card">
            <div className="relative glare-container bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-100 border-4 border-amber-600 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-8 md:p-12">
              {/* Elegant Corner Decorations */}
              <div className="absolute top-0 left-0 w-32 h-32 border-t-4 border-l-4 border-amber-500 rounded-tl-2xl opacity-30"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 border-b-4 border-r-4 border-amber-500 rounded-br-2xl opacity-30"></div>
              
              {/* Top Accent Line */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-amber-600 to-transparent"></div>
              
              {/* Decorative Floating Elements */}
              {/* Top Left Sparkles */}
              <div className="absolute top-8 left-8 sparkle-1">
                <div className="text-red-500 text-2xl">✦</div>
              </div>
              <div className="absolute top-16 left-20 sparkle-2">
                <div className="text-orange-400 text-xl">★</div>
              </div>
              <div className="absolute top-12 left-32 sparkle-3">
                <div className="text-purple-500 text-lg">◆</div>
              </div>
              <div className="absolute top-20 left-12 sparkle-4">
                <div className="text-pink-400 text-sm">✕</div>
              </div>
              <div className="absolute top-6 left-40 sparkle-1">
                <div className="text-yellow-500 text-base">○</div>
              </div>
              
              {/* Top Right Sparkles */}
              <div className="absolute top-10 right-12 sparkle-2">
                <div className="text-amber-500 text-2xl">✦</div>
              </div>
              <div className="absolute top-20 right-24 sparkle-1">
                <div className="text-yellow-400 text-xl">✕</div>
              </div>
              <div className="absolute top-6 right-32 sparkle-3">
                <div className="text-orange-400 text-sm">○</div>
              </div>
              <div className="absolute top-14 right-8 sparkle-4">
                <div className="text-red-400 text-lg">★</div>
              </div>
              <div className="absolute top-24 right-40 sparkle-2">
                <div className="text-purple-500 text-base">◆</div>
              </div>
              
              {/* Bottom Left Sparkles */}
              <div className="absolute bottom-12 left-16 sparkle-3">
                <div className="text-red-400 text-lg">○</div>
              </div>
              <div className="absolute bottom-20 left-24 sparkle-1">
                <div className="text-orange-500 text-2xl">✦</div>
              </div>
              <div className="absolute bottom-8 left-8 sparkle-2">
                <div className="text-amber-400 text-xl">★</div>
              </div>
              <div className="absolute bottom-16 left-36 sparkle-4">
                <div className="text-yellow-400 text-sm">✕</div>
              </div>
              <div className="absolute bottom-24 left-12 sparkle-3">
                <div className="text-pink-500 text-base">◆</div>
              </div>
              
              {/* Bottom Right Sparkles */}
              <div className="absolute bottom-16 right-20 sparkle-2">
                <div className="text-purple-400 text-xl">◆</div>
              </div>
              <div className="absolute bottom-8 right-12 sparkle-3">
                <div className="text-yellow-500 text-2xl">★</div>
              </div>
              <div className="absolute bottom-24 right-32 sparkle-1">
                <div className="text-amber-400 text-sm">✕</div>
              </div>
              <div className="absolute bottom-12 right-8 sparkle-4">
                <div className="text-orange-500 text-lg">✦</div>
              </div>
              <div className="absolute bottom-20 right-36 sparkle-2">
                <div className="text-red-500 text-base">○</div>
              </div>
              
              {/* Middle Floating Elements */}
              <div className="absolute top-1/3 left-12 sparkle-4">
                <div className="text-yellow-400 text-lg">✦</div>
              </div>
              <div className="absolute top-2/3 right-16 sparkle-4">
                <div className="text-orange-500 text-lg">✦</div>
              </div>
              <div className="absolute top-1/2 left-8 sparkle-1">
                <div className="text-pink-400 text-xl">★</div>
              </div>
              <div className="absolute top-1/2 right-8 sparkle-2">
                <div className="text-purple-500 text-xl">◆</div>
              </div>
              <div className="absolute top-1/4 right-20 sparkle-3">
                <div className="text-red-400 text-sm">✕</div>
              </div>
              <div className="absolute top-3/4 left-20 sparkle-3">
                <div className="text-amber-500 text-sm">○</div>
              </div>
              
              {/* Additional Center Area Elements */}
              <div className="absolute top-1/3 right-10 sparkle-1">
                <div className="text-yellow-500 text-base">★</div>
              </div>
              <div className="absolute top-2/3 left-10 sparkle-2">
                <div className="text-orange-400 text-base">✦</div>
              </div>
              
              {/* Content */}
              <div className="relative px-4 sm:px-6">
                {/* Award Badge Image */}
                <div className="flex justify-center mb-6">
                  <div className="float-badge rotate-badge">
                    <img 
                      src="/badge.png" 
                      alt="Best Paper Award Badge" 
                      className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-contain drop-shadow-2xl transition-all duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-center font-display font-bold text-2xl sm:text-3xl md:text-4xl text-amber-900 mb-2 tracking-wide">
                  Best Paper Award
                </h3>
                
                {/* Subtitle */}
                <div className="flex justify-center mb-6">
                  <div className="h-1 w-24 bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-600 rounded-full"></div>
                </div>
                
                {/* Main Message */}
                <div className="bg-white rounded-xl p-6 md:p-8 border-2 border-amber-200 shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <p className="text-center text-base sm:text-lg md:text-xl font-medium text-gray-700 leading-relaxed">
                    <span className="typewriter-text">
                      The best papers presented in <span className="font-bold text-amber-800 bg-amber-50 px-2 py-1 rounded">offline mode</span> will be recognized with <span className="font-bold text-amber-800 bg-amber-50 px-2 py-1 rounded">awards</span> during the conference
                    </span>
                  </p>
                </div>
                
                {/* Decorative Elements */}
                <div className="flex justify-center gap-2 mt-6">
                  <div className="w-2 h-2 rounded-full bg-amber-600"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-600"></div>
                  <div className="w-2 h-2 rounded-full bg-amber-600"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What's Included */}
        <div className="bg-white border border-slate-200 rounded-lg p-8 mb-12 shadow-sm">
          <h3 className="font-display font-bold text-2xl text-center mb-2 text-navy">
            Registration Includes
          </h3>
          <p className="text-center mb-6 font-bold text-red-800">(The conference kit will be issued exclusively to participants attending the conference in offline mode.)</p>
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
                      { label: "Account Name", value: "PROFESSOR HOD COMPUTER SCIENCE" },
                      { label: "Account Number", value: "8450101001449" },
                      { label: "Bank Name", value: "Canara Bank" },
                      { label: "Branch Name", value: "Periyar University Campus" },
                      { label: "Branch Code", value: "08450" },
                      { label: "IFSC Code", value: "CNRB0008450" },
                      { label: "MICR Code", value: "636015024" },
                      { label: "BIC Code (Swift)", value: "CNRBINBBBFD" },
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

          <div className="bg-green-900 border border-navy rounded-lg p-4 sm:p-8 flex flex-col justify-center items-center text-center shadow-sm">
            <h3 className="font-display font-bold text-2xl mb-4 text-white">
              Ready to Register?
            </h3>
            <p className="text-white/90 mb-6 text-justify">
              Complete your registration by filling out the form and making the payment.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-yellow-600 text-white px-8 py-4 rounded-lg font-display font-bold text-lg hover:bg-burgundy/90 transition-colors"
            >
              Register Now
            </a>
          </div>
        </div>

        {/* Note */}
        <p className="text-black text-sm mt-8 text-justify leading-relaxed max-w-5xl mx-auto">
Conference registration will commence on 25 December 2025 and close on 19 February 2026. All conference participants are requested to complete the registration process and pay the applicable registration fee on or before the deadline.      </p>
      </div>
    </section>
    </>
  );
};

export default Registration;
