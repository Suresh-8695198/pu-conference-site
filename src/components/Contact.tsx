import { MapPin, Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-8 md:py-12 lg:py-24 bg-cream relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gold rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-burgundy rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-navy rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-warm-grey shadow-md mb-4">
            <div className="w-2 h-2 bg-gold rounded-full"></div>
            <span className="text-gold font-display font-medium text-xs uppercase tracking-wide">
              Get in Touch
            </span>
            <div className="w-2 h-2 bg-burgundy rounded-full"></div>
          </div>
          <h2 className="section-title text-2xl md:text-3xl lg:text-4xl mb-4">
            Contact <span className="text-burgundy">Us</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4 md:mb-6">
            <div className="w-8 md:w-12 h-1 bg-gold rounded-full"></div>
            <div className="w-3 h-3 bg-navy rounded-full"></div>
            <div className="w-8 md:w-12 h-1 bg-burgundy rounded-full"></div>
          </div>
          <p className="text-black text-sm md:text-base max-w-xl mx-auto leading-relaxed px-4">
            Ready to join us? Get all the information you need to participate in ICAITSC2026
          </p>
        </div>

        {/* Conference Venue - Advanced Design */}
        <div className="max-w-5xl mx-auto mb-8 md:mb-12">
          <div className="relative">
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-burgundy/5 rounded-3xl"></div>
            
            {/* Main venue card with advanced styling */}
            <div className="relative bg-white/95 backdrop-blur-sm p-6 md:p-8 rounded-3xl border border-slate-200/50 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
              {/* Decorative background elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gold/10 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-burgundy/10 to-transparent rounded-full translate-y-12 -translate-x-12"></div>
              
              {/* Header with enhanced design */}
              <div className="relative z-10 text-center mb-8 md:mb-10">
                <div className="inline-flex items-center gap-4 bg-gradient-to-r from-gold/10 to-burgundy/10 px-6 py-3 rounded-full border border-warm-grey/50 shadow-lg mb-6">
                  <div className="w-3 h-3 bg-gold rounded-full animate-pulse"></div>
                  <div className="w-12 h-12 bg-gradient-to-br from-navy to-gold rounded-xl flex items-center justify-center shadow-md">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div className="w-3 h-3 bg-burgundy rounded-full animate-pulse"></div>
                </div>
                <h3 className="font-display font-bold text-2xl md:text-3xl mb-4 bg-gradient-to-r from-navy to-gold bg-clip-text text-transparent">
                  Conference Venue
                </h3>
                <div className="flex items-center justify-center gap-3">
                  <div className="w-16 h-1 bg-gradient-to-r from-gold to-navy rounded-full"></div>
                  <div className="w-3 h-3 bg-navy rounded-full"></div>
                  <div className="w-16 h-1 bg-gradient-to-r from-navy to-burgundy rounded-full"></div>
                </div>
              </div>

              {/* Venue cards grid with advanced styling */}
              <div className="relative z-10 grid md:grid-cols-2 gap-6 md:gap-8">
                {/* Physical Venue Card - Enhanced */}
                <div className="group relative bg-gradient-to-br from-gold/5 to-gold/10 p-6 md:p-7 rounded-2xl border-2 border-gold/20 hover:border-gold/40 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 hover:scale-[1.02] overflow-hidden">
                  {/* Card background pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-4 right-4 w-16 h-16 border-2 border-gold rounded-full"></div>
                    <div className="absolute bottom-4 left-4 w-12 h-12 bg-gold rounded-lg rotate-45"></div>
                  </div>
                  
                  <div className="relative z-10 flex items-start gap-4 md:gap-5">
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-gold to-gold/80 rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 flex-shrink-0">
                      <svg className="w-7 h-7 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm3 1h6v2H7V5zm0 4h6v2H7V9zm0 4h4v2H7v-2z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-3">
                        <h4 className="font-display font-bold text-gold text-lg md:text-xl">Physical Venue</h4>
                        <div className="w-3 h-3 bg-gold rounded-full animate-pulse"></div>
                      </div>
                      <address className="not-italic text-black text-sm md:text-base leading-relaxed font-medium">
                        Department of Computer Science<br />
                        <span className="text-navy font-semibold">Periyar University</span><br />
                        Salem - 636011<br />
                        Tamil Nadu, India
                      </address>
                      <div className="mt-4 flex items-center gap-2 text-gold/70 text-sm">
                        <div className="w-2 h-2 bg-gold rounded-full"></div>
                        <span>On-campus facility</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Virtual Mode Card - Enhanced */}
                <div className="group relative bg-gradient-to-br from-burgundy/5 to-burgundy/10 p-6 md:p-7 rounded-2xl border-2 border-burgundy/20 hover:border-burgundy/40 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 hover:scale-[1.02] overflow-hidden">
                  {/* Card background pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-4 left-4 w-16 h-16 border-2 border-burgundy rounded-full"></div>
                    <div className="absolute bottom-4 right-4 w-12 h-12 bg-burgundy rounded-lg rotate-45"></div>
                  </div>
                  
                  <div className="relative z-10 flex items-start gap-4 md:gap-5">
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-burgundy to-burgundy/80 rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 flex-shrink-0">
                      <svg className="w-7 h-7 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-3">
                        <h4 className="font-display font-bold text-burgundy text-lg md:text-xl">Virtual Mode</h4>
                        <div className="w-3 h-3 bg-burgundy rounded-full animate-pulse"></div>
                      </div>
                      <p className="text-black text-sm md:text-base leading-relaxed text-justify font-medium mb-4">
                        Join us from anywhere in the world through our online platform. Conference link will be provided upon registration.
                      </p>
                      <div className="flex items-center gap-2 text-burgundy/70 text-sm">
                        <div className="w-2 h-2 bg-burgundy rounded-full"></div>
                        <span>Global accessibility</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom decorative element */}
              <div className="relative z-10 mt-8 flex justify-center">
                <div className="flex items-center gap-4 px-6 py-3 bg-gradient-to-r from-warm-grey to-cream rounded-full border border-warm-grey/50 shadow-md">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                  <span className="text-navy text-sm font-medium">ICAITSC2026</span>
                  <div className="w-2 h-2 bg-burgundy rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Two-column layout: left = location map, right = contact info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-start">
          <div className="space-y-6 md:space-y-8">
            <div className="bg-white p-4 md:p-6 rounded-2xl border border-warm-grey shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gold rounded-xl flex items-center justify-center shadow-md flex-shrink-0">
                  <MapPin className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <h4 className="font-display font-semibold text-navy text-lg md:text-xl">University Location</h4>
              </div>
              <div className="w-full rounded-xl overflow-hidden shadow-lg border border-warm-grey h-72 sm:h-80 md:h-96 lg:h-[28rem] xl:h-[32rem]">
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
            <div className="bg-white p-4 md:p-6 rounded-2xl border border-warm-grey shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 md:gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-navy  rounded-xl flex items-center justify-center shadow-md flex-shrink-0">
                <Mail className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-display font-semibold text-navy text-lg md:text-xl mb-2">Email Contact</h4>
                <a href="mailto:icaitsc2026@periyaruniversity.ac.in" className="text-gold hover:text-navy transition-colors text-sm md:text-base font-medium break-all underline decoration-2 underline-offset-4 hover:decoration-4">
                  icaitsc2026@periyaruniversity.ac.in
                </a>
              </div>
            </div>

            <div className="bg-white p-4 md:p-6 rounded-2xl border border-warm-grey shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col gap-4 md:gap-6">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-navy rounded-xl flex items-center justify-center shadow-md flex-shrink-0">
                  <Phone className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <h4 className="font-display font-semibold text-navy text-lg md:text-xl">Contact Persons</h4>
              </div>
              <p className="text-black leading-relaxed text-sm">For any queries related to the conference, paper submission, or registration, please contact the following:</p>

              <div className="space-y-4 md:space-y-6">
                <div className="bg-gold/10 p-4 md:p-5 rounded-xl border border-gold/30 hover:shadow-md transition-all duration-300 flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gold rounded-xl flex items-center justify-center shadow-md flex-shrink-0">
                    <Phone className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h5 className="font-display font-semibold text-burgundy text-base md:text-lg mb-1">Dr. H. Hannah Inbarani</h5>
                    <p className="text-black text-xs md:text-sm mb-2 font-medium">Organizing Secretary - (ICAITSC-2026)</p>
                    <a href="tel:9865380392" className="inline-flex items-center gap-2 text-burgundy hover:text-navy transition-colors text-sm md:text-base font-semibold underline decoration-2 underline-offset-4 hover:decoration-4">
                      <Phone className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                      <span className="break-all">9865380392</span>
                    </a>
                  </div>
                </div>

                <div className="bg-burgundy/10 p-4 md:p-5 rounded-xl border border-burgundy/30 hover:shadow-md transition-all duration-300 flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-burgundy rounded-xl flex items-center justify-center shadow-md flex-shrink-0">
                    <Phone className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h5 className="font-display font-semibold text-burgundy text-base md:text-lg mb-1">Dr. I. Laurence Aroquiaraj</h5>
                    <p className="text-black text-xs md:text-sm mb-2 font-medium">Organizing Secretary - (ICAITSC-2026)</p>
                    <a href="tel:9894358505" className="inline-flex items-center gap-2 text-burgundy hover:text-navy transition-colors text-sm md:text-base font-semibold underline decoration-2 underline-offset-4 hover:decoration-4">
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
