import { BookOpen, Target, Users, Award } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Research Excellence",
      description: "A premier platform for researchers to present innovative ideas in AI and smart computing technologies.",
    },
    {
      icon: Target,
      title: "Industry Connect",
      description: "Bridge the gap between academia and industry with insights from leading professionals.",
    },
    {
      icon: Users,
      title: "Networking",
      description: "Connect with researchers, academicians, and industry experts from around the globe.",
    },
    {
      icon: Award,
      title: "Publication",
      description: "Selected papers will be published in reputed international journals and proceedings.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-teal font-display font-semibold text-sm uppercase tracking-wider mb-4">
            About the Conference
          </span>
          <h2 className="section-title">
            Welcome to <span className="text-teal">ICAITSC 2026</span>
          </h2>
          <div className="w-24 h-1 bg-coral mx-auto mt-6" />
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              The International Conference on Artificial Intelligence Techniques and Smart Computing (ICAITSC 2026) 
              is organized by the Department of Computer Science, Periyar University, Salem, Tamil Nadu, India.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              This conference provides a global platform for scientists, researchers, and practitioners from academia 
              and industry to share their creative proposals on cutting-edge technologies in AI, Machine Learning, 
              Deep Learning, and Smart Computing applications.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The forum aims to disseminate technical innovations in theoretical concepts, methodologies, and 
              applications across various fields of computing and information technologies.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 bg-mint px-4 py-2 rounded-lg">
                <div className="w-2 h-2 bg-teal rounded-full" />
                <span className="text-sm font-medium text-navy">Keynote Sessions</span>
              </div>
              <div className="flex items-center gap-2 bg-mint px-4 py-2 rounded-lg">
                <div className="w-2 h-2 bg-coral rounded-full" />
                <span className="text-sm font-medium text-navy">Technical Workshops</span>
              </div>
              <div className="flex items-center gap-2 bg-mint px-4 py-2 rounded-lg">
                <div className="w-2 h-2 bg-gold rounded-full" />
                <span className="text-sm font-medium text-navy">Paper Presentations</span>
              </div>
            </div>
          </div>

          {/* Right Content - Stats Cards */}
          <div className="grid grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`p-6 rounded-2xl card-hover ${
                  index % 2 === 0 ? "bg-navy text-primary-foreground" : "bg-slate"
                }`}
              >
                <feature.icon className={`w-10 h-10 mb-4 ${index % 2 === 0 ? "text-teal" : "text-coral"}`} />
                <h3 className={`font-display font-bold text-lg mb-2 ${index % 2 === 0 ? "" : "text-navy"}`}>
                  {feature.title}
                </h3>
                <p className={`text-sm ${index % 2 === 0 ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* University Info */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate rounded-2xl p-8">
            <h3 className="font-display font-bold text-2xl text-navy mb-4">
              About Periyar University
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Periyar University, established in 1997, is a state university located in Salem, Tamil Nadu. 
              Named after the social reformer E.V. Ramasamy Periyar, the university is known for its 
              excellence in higher education and research across various disciplines.
            </p>
          </div>
          <div className="bg-slate rounded-2xl p-8">
            <h3 className="font-display font-bold text-2xl text-navy mb-4">
              About the Department
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              The Department of Computer Science at Periyar University offers quality education and research 
              opportunities in cutting-edge areas of computing. The department has experienced faculty members 
              and excellent infrastructure to support advanced research activities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
