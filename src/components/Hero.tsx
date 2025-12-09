import { Calendar, MapPin, Users, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen bg-navy overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 border border-primary-foreground rounded-full" />
        <div className="absolute top-40 right-20 w-96 h-96 border border-primary-foreground rounded-full" />
        <div className="absolute bottom-20 left-1/4 w-48 h-48 border border-primary-foreground rounded-full" />
        <div className="absolute -bottom-20 right-1/3 w-64 h-64 bg-teal rounded-full blur-3xl opacity-20" />
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-coral rounded-full blur-3xl opacity-10" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5" 
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary-foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container mx-auto px-4 mb-7  pt-32 pb-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-teal/20 border border-teal/30 text-teal-light px-4 py-2 rounded-full mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-teal rounded-full animate-pulse" />
            <span className="text-sm font-medium">International Conference 2026</span>
          </div>


          {/* Logo + ICAITSC 2026 Card */}
          <div className="flex justify-center items-center mt-5 bg-white rounded-xl shadow-lg px-2 py-6 mb-10 animate-fade-in" style={{maxWidth: '500px', margin: '0 auto'}}>
            <img src="/logo.jpg" alt="Periyar University Logo" className="h-20 w-20 object-contain mr-6" />
            <img src="/icaitsc.png" alt="ICAITSC Logo" className="h-24 w-24 object-contain mr-6" />
            <span className="text-3xl font-bold text-navy">ICAITSC 2026</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl mt-6 lg:text-7xl font-display font-bold text-primary-foreground mb-0 leading-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
            International Conference on
            <span className="block text-teal-light mt-2">
              Artificial Intelligence
            </span>
            <span className="block text-coral-light">
              Techniques & Smart Computing
            </span>
          </h1>

         
          {/* Info Cards */}
          <div className="flex flex-wrap mt-6 justify-center gap-6 mb-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="flex items-center gap-3 bg-primary-foreground/10 backdrop-blur-sm px-6 py-3 rounded-xl border border-primary-foreground/20">
              <Calendar className="w-5 h-5 text-coral" />
              <span className="text-primary-foreground font-medium">26-27 February 2026</span>
            </div>
            <div className="flex items-center gap-3 bg-primary-foreground/10 backdrop-blur-sm px-6 py-3 rounded-xl border border-primary-foreground/20">
              <MapPin className="w-5 h-5 text-teal" />
              <span className="text-primary-foreground font-medium">Salem, Tamil Nadu, India</span>
            </div>
          </div>

          {/* University Info */}
          <div className="mb-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <p className="text-primary-foreground/60 text-sm uppercase tracking-wider mb-2">Organized by</p>
            <p className="text-xl md:text-2xl text-primary-foreground font-display font-semibold">
              Department of Computer Science
            </p>
            <p className="text-lg text-teal-light font-medium">
              Periyar University
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <a href="#registration" className="btn-accent flex items-center gap-2 group">
              Register Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#call-for-papers" className="bg-primary-foreground/10 backdrop-blur-sm border-2 border-primary-foreground/30 text-primary-foreground px-8 py-4 font-display font-semibold text-lg rounded-lg transition-all duration-300 hover:bg-primary-foreground/20 hover:border-primary-foreground/50">
              Submit Paper
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            {[
              { number: "50+", label: "Speakers" },
              { number: "200+", label: "Papers" },
              { number: "30+", label: "Sessions" },
              { number: "500+", label: "Attendees" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl md:text-5xl font-display font-bold text-teal">{stat.number}</p>
                <p className="text-primary-foreground/60 text-sm uppercase tracking-wider mt-2">{stat.label}</p>
              </div>
            ))}
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
