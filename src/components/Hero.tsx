import { Calendar, MapPin, Users, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen bg-navy overflow-hidden"
      style={{
        backgroundImage: `url('/herobg.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-navy/70"></div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5" 
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary-foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container mx-auto px-4 mb-0 pt-16 sm:pt-10 md:pt-14 xl:pt-24 2xl:pt-28 pb-8 sm:pb-12 md:pb-16 xl:pb-16 2xl:pb-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 border border-white/30 text-white px-4 sm:px-6 xl:px-6 2xl:px-8 py-3 rounded-full mb-1 sm:mb-2 xl:mb-10 2xl:mb-8 animate-fade-in text-sm sm:text-base xl:text-base 2xl:text-lg backdrop-blur-sm drop-shadow-lg">
            <span className="w-2 h-2 bg-teal rounded-full animate-pulse" />
            <span className="font-medium">International Conference 2026</span>
          </div>


          {/* Logo + ICAITSC 2026 Card */}
          <div className="flex flex-col justify-center items-center mt-4 sm:mt-6 md:mt-8 xl:mt-8 2xl:mt-10 bg-white rounded-xl shadow-lg px-6 py-8 sm:px-8 sm:py-10 md:px-8 md:py-10 xl:px-8 xl:py-10 2xl:px-10 2xl:py-12 mb-6 sm:mb-8 md:mb-10 xl:mb-10 2xl:mb-12 animate-fade-in max-w-full sm:max-w-lg md:max-w-xl xl:max-w-xl 2xl:max-w-2xl mx-auto">
            {/* Logos Row */}
            <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-6 xl:gap-6 2xl:gap-8 mb-4 sm:mb-6">
              <img src="/logo.jpg" alt="Periyar University Logo" className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 xl:h-20 xl:w-20 2xl:h-24 2xl:w-24 object-contain" />
              <img src="/icaitsc.png" alt="ICAITSC Logo" className="h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 xl:h-20 xl:w-20 2xl:h-24 2xl:w-24 object-contain" />
              <div className="flex flex-col items-center">
                <img src="/colob.png" alt="Colobarrative Partner" className="h-14 sm:h-16 md:h-18 xl:h-20 2xl:h-24 w-auto object-contain rounded-md shadow-sm border border-white/20" />
              </div>
            </div>
            {/* Title */}
            <span className="text-xl sm:text-2xl md:text-3xl xl:text-3xl 2xl:text-4xl font-bold text-navy text-center block">ICAITSC 2026</span>
          </div>

          {/* Main Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-4xl 2xl:text-5xl font-display font-bold text-white mb-0 leading-tight animate-fade-in px-2 drop-shadow-lg" style={{ animationDelay: "0.1s" }}>
            International Conference on
            <span className="block text-teal-300 mt-2 sm:mt-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-5xl drop-shadow-lg">
              Artificial Intelligence
            </span>
            <span className="block text-coral-300 mt-3 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl drop-shadow-lg">
             Techniques and Smart Computing
            </span>
          </h1>

         
          {/* Info Cards */}
          <div className="flex flex-col sm:flex-row mt-8 sm:mt-10 flex-wrap justify-center gap-4 sm:gap-6 mb-8 sm:mb-12 animate-fade-in px-4" style={{ animationDelay: "0.3s" }}>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-xl border border-white/20 w-full sm:w-auto">
              <Calendar className="w-5 h-5 text-coral flex-shrink-0" />
              <span className="text-white font-medium text-base drop-shadow-sm">26-27 February 2026</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-xl border border-white/20 w-full sm:w-auto">
              <MapPin className="w-5 h-5 text-coral flex-shrink-0" />
              <span className="text-white font-medium text-base drop-shadow-sm">Salem, Tamil Nadu, India</span>
            </div>
          </div>

          {/* University Info */}
          <div className="mb-10 sm:mb-12 xl:mb-12 2xl:mb-14 animate-fade-in px-4" style={{ animationDelay: "0.4s" }}>
            <p className="text-white/80 text-sm sm:text-base xl:text-base 2xl:text-lg uppercase tracking-wider mb-3 drop-shadow-sm">Organized by</p>
            <p className="text-xl sm:text-2xl xl:text-xl 2xl:text-3xl text-white font-display font-semibold mb-2 drop-shadow-lg">
              Department of Computer Science
            </p>
            <p className="text-lg sm:text-xl xl:text-lg 2xl:text-2xl text-teal-300 font-medium drop-shadow-lg">
              Periyar University
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col mb-7 sm:flex-row justify-center gap-4 sm:gap-6 xl:gap-6 2xl:gap-8 animate-fade-in px-4" style={{ animationDelay: "0.5s" }}>
            <a href="#registration" className="btn-accent flex items-center justify-center gap-2 group text-base sm:text-lg xl:text-lg 2xl:text-xl px-8 py-4 sm:px-10 sm:py-5 xl:px-10 xl:py-5 2xl:px-12 2xl:py-6 w-full sm:w-auto">
              Register Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#call-for-papers" className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 sm:px-10 sm:py-5 xl:px-10 xl:py-5 2xl:px-12 2xl:py-6 font-display font-semibold text-base sm:text-lg xl:text-lg 2xl:text-xl rounded-lg transition-all duration-300 hover:bg-white/20 hover:border-white/50 text-center w-full sm:w-auto drop-shadow-lg">
              Submit Paper
            </a>
          </div>

        </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
