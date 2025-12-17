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
           
          

          {/* Logo + ICAITSC-2026 Card */}
          <div className="flex flex-col justify-center items-center mt-4 sm:mt-6 md:mt-8 xl:mt-8 2xl:mt-10 bg-white border-4 border-gray-400  rounded-xl shadow-lg px-6 py-8 sm:px-8 sm:py-10 md:px-8 md:py-10 xl:px-8 xl:py-10 2xl:px-8 2xl:py-12 mb-6 sm:mb-8 md:mb-10 xl:mb-10 2xl:mb-12 animate-fade-in max-w-full sm:max-w-xl md:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl mx-auto">
            {/* Logos Row */}
            <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-6 xl:gap-6 2xl:gap-8 mb-4 sm:mb-6">
              <img src="/icaitsc.png" alt="Periyar University Logo" className="h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 xl:h-32 xl:w-32 2xl:h-36 2xl:w-36 object-contain" />
              <img src="/logo.jpg" alt="ICAITSC Logo" className="h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 xl:h-32 xl:w-32 2xl:h-36 2xl:w-36 object-contain" />
              <div className="flex items-center justify-center bg-white/80 p-2 rounded-md shadow-sm border border-white/20 min-w-[96px]">
                  <img src="/colob.png" alt="Partner 4" className="h-12 sm:h-14 md:h-16 object-contain" />
                </div>  
            </div>
            {/* Partners (single row logos) */}
            <div className="w-full overflow-x-auto mt-3 mb-2">
              <div className="flex items-center justify-center gap-3 sm:gap-5 flex-nowrap px-1">
                <div className="flex items-center justify-center bg-white/80 p-2 rounded-md shadow-sm border border-white/20 min-w-[96px]">
                  <img src="/partner1.jpeg" alt="Partner 1" className="h-12 sm:h-14 md:h-16 object-contain" />
                </div>
                <div className="flex items-center justify-center bg-white/80 p-2 rounded-md shadow-sm border border-white/20 min-w-[96px]">
                  <img src="/partner2.jpeg" alt="Partner 2" className="h-12 sm:h-14 md:h-16 object-contain" />
                </div>
                
              </div>
            </div>

            {/* Title */}
            <span className="text-xl sm:text-2xl md:text-3xl xl:text-3xl 2xl:text-4xl mt-5 font-bold text-navy text-center block">ICAITSC-2026</span>
          </div>

          {/* Main Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-5xl font-display font-bold text-white mb-0 leading-tight animate-fade-in px-2 drop-shadow-lg" style={{ animationDelay: "0.1s" }}>
            International Conference on
            <span className="block text-yellow-200 mt-2 sm:mt-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-5xl drop-shadow-lg">
              Artificial Intelligence
            </span>
            <span className="block text-coral-300 mt-3 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl drop-shadow-lg">
             Techniques and Smart Computing
            </span>
          </h1>

         
          {/* Info Cards */}
          <div className="flex flex-col sm:flex-row mt-8 sm:mt-10 flex-wrap items-center justify-center gap-4 sm:gap-6 mb-8 sm:mb-8 animate-fade-in px-4" style={{ animationDelay: "0.3s" }}>
            <div className="flex items-center gap-3 bg-white backdrop-blur-sm px-6 py-4 rounded-xl border border-white/20 w-full sm:w-auto">
                <Users className="w-5 h-5 text-coral flex-shrink-0" />
                <span className="text-navy font-semibold text-base sm:text-lg">Hybrid Mode</span>
            </div>
            <div className="flex items-center gap-3 bg-white backdrop-blur-sm px-6 py-4 rounded-xl border border-white/20 w-full sm:w-auto">
              <Calendar className="w-5 h-5 text-coral font-bold flex-shrink-0" />
              <span className="text-navy font-semibold text-base">26-27 February 2026</span>
            </div>
            <div className="flex items-center gap-3 bg-white backdrop-blur-sm px-6 py-4 rounded-xl border border-white/20 w-full sm:w-auto">
              <MapPin className="w-5 h-5 text-coral flex-shrink-0" />
              <span className="text-navy font-semibold text-base">Salem, Tamil Nadu, India</span>
            </div>
          </div>

          {/* University Info */}
          <div className="mb-10 sm:mb-12 xl:mb-12 2xl:mb-14 animate-fade-in px-4" style={{ animationDelay: "0.4s" }}>
            <p className="text-white/80 text-sm sm:text-base xl:text-base 2xl:text-lg uppercase tracking-wider mb-3 drop-shadow-sm">Organized by</p>
            <p className="text-xl sm:text-2xl xl:text-xl 2xl:text-3xl text-white font-display font-semibold mb-2 drop-shadow-lg">
              Department of Computer Science
            </p>
            <p className="text-lg sm:text-xl xl:text-2xl 2xl:text-2xl text-yellow-200 font-medium drop-shadow-lg">
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
