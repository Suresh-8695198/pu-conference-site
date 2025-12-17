import { MapPin, Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-8 md:py-12 lg:py-24 bg-slate-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-teal rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-coral rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-navy rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-md mb-4">
            <div className="w-2 h-2 bg-teal rounded-full"></div>
            <span className="text-teal font-display font-medium text-xs uppercase tracking-wide">
              Get in Touch
            </span>
            <div className="w-2 h-2 bg-coral rounded-full"></div>
          </div>
          <h2 className="section-title text-2xl md:text-3xl lg:text-4xl mb-4">
            Contact <span className="text-coral">Us</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4 md:mb-6">
            <div className="w-8 md:w-12 h-1 bg-teal rounded-full"></div>
            <div className="w-3 h-3 bg-navy rounded-full"></div>
            <div className="w-8 md:w-12 h-1 bg-coral rounded-full"></div>
          </div>
          <p className="text-slate-600 text-sm md:text-base max-w-xl mx-auto leading-relaxed px-4">
            Ready to join us? Get all the information you need to participate in ICAITSC 2026
          </p>
        </div>

        {/* Conference Venue - Full Width Centered */}
        <div className="max-w-4xl mx-auto mb-8 md:mb-12">
          <div className="bg-white p-4 md:p-6 rounded-2xl border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col gap-4 md:gap-6">
            <div className="flex items-center justify-center gap-3 md:gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-navy rounded-xl flex items-center justify-center shadow-md flex-shrink-0">
                <MapPin className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <h4 className="font-display font-semibold text-navy text-lg md:text-xl text-center">Conference Venue</h4>
            </div>
            
            {/* Physical Venue Card */}
            <div className="bg-teal/10 p-4 md:p-5 rounded-xl border border-teal/30 hover:shadow-md transition-all duration-300 flex items-start gap-3 md:gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-teal rounded-xl flex items-center justify-center shadow-md flex-shrink-0">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm3 1h6v2H7V5zm0 4h6v2H7V9zm0 4h4v2H7v-2z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h5 className="font-display font-semibold text-teal text-base md:text-lg mb-2 flex items-center gap-2">
                  Physical Venue
                  <div className="w-2 h-2 bg-teal rounded-full"></div>
                </h5>
                <address className="not-italic text-slate-700 text-sm leading-relaxed">
                  Department of Computer Science<br />
                  Periyar University<br />
                  Salem - 636011<br />
                  Tamil Nadu, India
                </address>
              </div>
            </div>

            {/* Virtual Mode Card */}
            <div className="bg-coral/10 p-4 md:p-5 rounded-xl border border-coral/30 hover:shadow-md transition-all duration-300 flex items-start gap-3 md:gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-coral rounded-xl flex items-center justify-center shadow-md flex-shrink-0">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h5 className="font-display font-semibold text-coral text-base md:text-lg mb-2 flex items-center gap-2">
                  Virtual Mode
                  <div className="w-2 h-2 bg-coral rounded-full"></div>
                </h5>
                <p className="text-slate-700 text-sm leading-relaxed">
                  Participants can join the conference via an online platform. The link will be provided upon registration.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Two-column layout: left = location map, right = contact info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-start">
          <div className="space-y-6 md:space-y-8">
            <div className="bg-white p-4 md:p-6 rounded-2xl border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-teal rounded-xl flex items-center justify-center shadow-md flex-shrink-0">
                  <MapPin className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <h4 className="font-display font-semibold text-navy text-lg md:text-xl">University Location</h4>
              </div>
              <div className="w-full rounded-xl overflow-hidden shadow-lg border border-slate-200 h-72 sm:h-80 md:h-96 lg:h-[28rem] xl:h-[32rem]">
                <iframe
                  src="https://maps.google.com/maps?q=Periyar%20University%2C%20Salem%2C%20Tamil%20Nadu%20636011%2C%20India&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Periyar University Location Map"
                  className="w-full h-full rounded-xl"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6 md:space-y-8">
            <div className="bg-white p-4 md:p-6 rounded-2xl border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 md:gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-teal rounded-xl flex items-center justify-center shadow-md flex-shrink-0">
                <Mail className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-display font-semibold text-navy text-lg md:text-xl mb-2">Email Contact</h4>
                <a href="mailto:icaitsc2026@periyaruniversity.ac.in" className="text-teal hover:text-navy transition-colors text-sm md:text-base font-medium break-all underline decoration-2 underline-offset-4 hover:decoration-4">
                  icaitsc2026@periyaruniversity.ac.in
                </a>
              </div>
            </div>

            <div className="bg-white p-4 md:p-6 rounded-2xl border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col gap-4 md:gap-6">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-navy rounded-xl flex items-center justify-center shadow-md flex-shrink-0">
                  <Phone className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <h4 className="font-display font-semibold text-navy text-lg md:text-xl">Contact Persons</h4>
              </div>
              <p className="text-slate-700 leading-relaxed text-sm">For any queries related to the conference, paper submission, or registration, please contact the following:</p>

              <div className="space-y-4 md:space-y-6">
                <div className="bg-teal/10 p-4 md:p-5 rounded-xl border border-teal/30 hover:shadow-md transition-all duration-300 flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-teal rounded-xl flex items-center justify-center shadow-md flex-shrink-0">
                    <Phone className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h5 className="font-display font-semibold text-teal text-base md:text-lg mb-1">Dr. H. Hannah Inbarani</h5>
                    <p className="text-slate-600 text-xs md:text-sm mb-2 font-medium">Organizing Secretary - (ICAITSC-2026)</p>
                    <a href="tel:9865380392" className="inline-flex items-center gap-2 text-teal hover:text-navy transition-colors text-sm md:text-base font-semibold underline decoration-2 underline-offset-4 hover:decoration-4">
                      <Phone className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                      <span className="break-all">9865380392</span>
                    </a>
                  </div>
                </div>

                <div className="bg-coral/10 p-4 md:p-5 rounded-xl border border-coral/30 hover:shadow-md transition-all duration-300 flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-coral rounded-xl flex items-center justify-center shadow-md flex-shrink-0">
                    <Phone className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h5 className="font-display font-semibold text-coral text-base md:text-lg mb-1">Dr. I. Laurence Aroquiaraj</h5>
                    <p className="text-slate-600 text-xs md:text-sm mb-2 font-medium">Organizing Secretary - (ICAITSC-2026)</p>
                    <a href="tel:9894358505" className="inline-flex items-center gap-2 text-coral hover:text-navy transition-colors text-sm md:text-base font-semibold underline decoration-2 underline-offset-4 hover:decoration-4">
                      <Phone className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                      <span className="break-all">9894358505</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
