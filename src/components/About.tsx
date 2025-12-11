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
            Welcome to <span className="text-teal">HORIZON-AI 2025</span>
          </h2>
          <div className="w-24 h-1 bg-coral mx-auto mt-6" />
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              HORIZON-AI 2025 aims to provide an international platform for researchers, academicians, industry professionals, and practitioners to present and exchange innovative ideas, methodologies, and research outcomes in the field of intelligent computing beyond traditional algorithmic approaches. The conference seeks to explore emerging paradigms in artificial intelligence, data-driven intelligence, and interdisciplinary computing, addressing real-world challenges in healthcare, agriculture, sustainability, and human-centric systems.
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

        {/* Aims of HORIZON-AI 2025 */}
        <div className="mb-20">
          <h3 className="font-display font-bold text-3xl text-navy text-center mb-12">
            Aims of HORIZON-AI 2025
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate rounded-2xl p-6">
              <div className="w-12 h-12 bg-teal rounded-xl flex items-center justify-center mb-4">
                <span className="text-primary-foreground font-bold text-xl">1</span>
              </div>
              <h4 className="font-display font-bold text-lg text-navy mb-3">
                Advance Human-Centric AI
              </h4>
              <p className="text-muted-foreground text-sm">
                To promote the development of intelligent computing solutions that prioritize human health, inclusivity, accessibility, and quality of life, ensuring that AI technologies serve society responsibly and ethically.
              </p>
            </div>
            <div className="bg-slate rounded-2xl p-6">
              <div className="w-12 h-12 bg-coral rounded-xl flex items-center justify-center mb-4">
                <span className="text-primary-foreground font-bold text-xl">2</span>
              </div>
              <h4 className="font-display font-bold text-lg text-navy mb-3">
                Foster Sustainable Technologies
              </h4>
              <p className="text-muted-foreground text-sm">
                To encourage innovative research in energy-efficient, eco-friendly, and sustainable AI systems that support environmental protection, climate resilience, and responsible use of computational resources.
              </p>
            </div>
            <div className="bg-slate rounded-2xl p-6">
              <div className="w-12 h-12 bg-gold rounded-xl flex items-center justify-center mb-4">
                <span className="text-primary-foreground font-bold text-xl">3</span>
              </div>
              <h4 className="font-display font-bold text-lg text-navy mb-3">
                Bridge Research to Impact
              </h4>
              <p className="text-muted-foreground text-sm">
                To create a global platform that connects cutting-edge academic research, industry innovation, and societal needs, enabling the translation of intelligent algorithms into practical solutions for healthcare, agriculture, education, and public services.
              </p>
            </div>
            <div className="bg-slate rounded-2xl p-6">
              <div className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center mb-4">
                <span className="text-primary-foreground font-bold text-xl">4</span>
              </div>
              <h4 className="font-display font-bold text-lg text-navy mb-3">
                Support Interdisciplinary Collaboration
              </h4>
              <p className="text-muted-foreground text-sm">
                To stimulate collaboration across computer science, engineering, life sciences, and social sciences, fostering holistic and future-ready AI solutions aligned with UN Sustainable Development Goals.
              </p>
            </div>
          </div>
        </div>

        {/* University Info */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate rounded-2xl p-8">
            <h3 className="font-display font-bold text-2xl text-navy mb-4">
              About Periyar University
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Periyar University is a state public university established in 1997 by the Government of Tamil Nadu and is located in Salem, Tamil Nadu, India. The university is named after the great social reformer Thanthai Periyar E. V. Ramasamy, reflecting its commitment to social justice, rationalism, and inclusive education.
              The university offers a wide range of undergraduate, postgraduate, M.Phil., and Ph.D. programmes across disciplines such as Science, Arts, Humanities, Commerce, Management, Engineering, and Computer Science. It functions as both a teaching and affiliating university, supporting numerous affiliated colleges across the region.
              Periyar University emphasizes quality education, research excellence, and community engagement. It actively promotes interdisciplinary research, innovation, and skill development aligned with national priorities and sustainable development goals. The university also focuses on strengthening industry–academia collaboration and nurturing socially responsible graduates.
              Through its academic initiatives and outreach activities, Periyar University plays a significant role in higher education advancement and regional development in Tamil Nadu.
            </p>
          </div>
          <div className="bg-slate rounded-2xl p-8">
            <h3 className="font-display font-bold text-2xl text-navy mb-4">
              About the Department
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              The Department of Computer Science, Periyar University, is a well-established academic and research unit committed to delivering quality education, innovative research, and skill-oriented training in the field of computer science. The department plays a vital role in aligning advanced computing education with societal needs and technological advancements.
              The department offers postgraduate and doctoral programmes that focus on core computer science foundations and emerging technologies, including artificial intelligence, machine learning, data science, image and signal processing, cloud computing, cybersecurity, and software engineering. Emphasis is placed on both theoretical knowledge and practical application.
              With a team of experienced faculty members, the department actively promotes interdisciplinary research, encouraging scholars to address real-world challenges in healthcare, agriculture, sustainability, and social development through intelligent computing solutions. The department also fosters a strong research culture through funded projects, publications, seminars, workshops, and conferences.
              The Department of Computer Science at Periyar University is dedicated to academic excellence, ethical computing practices, and innovation, preparing graduates to contribute meaningfully to industry, academia, and society at large.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
