import { BookOpen, Target, Users, Award } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Advance Human-Centric AI",
      description: "To promote the development of intelligent computing solutions that prioritize human health, inclusivity, accessibility, and quality of life, ensuring that AI technologies serve society responsibly and ethically.",
    },
    {
      icon: Target,
      title: "Foster Sustainable Technologies",
      description: "To encourage innovative research in energy-efficient, eco-friendly, and sustainable AI systems that support environmental protection, climate resilience, and responsible use of computational resources.",
    },
    {
      icon: Users,
      title: "Bridge Research to Impact",
      description: "To create a global platform that connects cutting-edge academic research, industry innovation, and societal needs, enabling the translation of intelligent algorithms into practical solutions for healthcare, agriculture, education, and public services.",
    },
    {
      icon: Award,
      title: "Support Interdisciplinary Collaboration",
      description: "To stimulate collaboration across computer science, engineering, life sciences, and social sciences, fostering holistic and future-ready AI solutions aligned with UN Sustainable Development Goals.",
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
            Welcome to <span className="text-teal">HORIZON-AI 2026</span>
          </h2>
          <div className="w-24 h-1 bg-coral mx-auto mt-6" />
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div className="space-y-6">
            <p className="text-lg text-slate-700 leading-normal text-justify">
              The International Conference on Health, Optimization, Research, Intelligence, and Next-Gen AI for Humanity (HORIZON-AI 2026) is a global forum for presenting advanced research and innovations in artificial intelligence and intelligent computing. The conference focuses on next-generation AI solutions for healthcare, agriculture, sustainability, and human-centric systems, moving beyond traditional algorithms to address real-world challenges. Aligned with key UN Sustainable Development Goals-SDG 3 (Good Health), SDG 4 (Quality Education), SDG 8 (Economic Growth), and SDG 9 (Innovation & Infrastructure) - HORIZON-AI 2026 promotes interdisciplinary collaboration, research excellence, and impactful technological advancements for societal development.
            </p>
            <p className="text-lg text-slate-700 leading-normal text-justify">
              The conference aligns with key UN SDGs-SDG 3, SDG 4, SDG 8, and SDG 9 emphasizing health, quality education, economic growth, and technological innovation.
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

        {/* SDG Images */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="font-display font-bold text-2xl text-navy mb-4">
              Aligned with UN Sustainable Development Goals
            </h3>
            <p className="text-lg text-slate-700">
              Our conference focuses on key SDGs to drive positive change through AI and technology.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <img src="/good%20health.jpg" alt="Good Health" className="w-24 h-24 mx-auto mb-4 rounded-lg object-cover shadow-lg hover:scale-105 transition-transform" />
              <h4 className="font-semibold text-navy">Good Health</h4>
            </div>
            <div className="text-center">
              <img src="/quality%20education.jpg" alt="Quality Education" className="w-24 h-24 mx-auto mb-4 rounded-lg object-cover shadow-lg hover:scale-105 transition-transform" />
              <h4 className="font-semibold text-navy">Quality Education</h4>
            </div>
            <div className="text-center">
              <img src="/decent%20work.jpg" alt="Decent Work" className="w-24 h-24 mx-auto mb-4 rounded-lg object-cover shadow-lg hover:scale-105 transition-transform" />
              <h4 className="font-semibold text-navy">Decent Work</h4>
            </div>
            <div className="text-center">
              <img src="/industry.jpg" alt="Industry" className="w-24 h-24 mx-auto mb-4 rounded-lg object-cover shadow-lg hover:scale-105 transition-transform" />
              <h4 className="font-semibold text-navy">Industry</h4>
            </div>
          </div>
        </div>

        {/* University Info */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate rounded-2xl p-8">
            <h3 className="font-display font-bold text-2xl text-navy mb-4">
              About Periyar University
            </h3>
            <p className="text-slate-700 leading-normal text-justify">
              Periyar University, established in 1997 by the Government of Tamil Nadu, is a state public university located in Salem. Named after social reformer Thanthai Periyar E. V. Ramasamy, it upholds the values of social justice, rationalism, and inclusive education. The university offers diverse UG, PG, M.Phil., and Ph.D. programmes across Science, Arts, Humanities, Commerce, Management, Engineering, and Computer Science, functioning as both a teaching and affiliating university for colleges in the region. Committed to quality education, research excellence, and innovation, Periyar University promotes interdisciplinary research, skill development, industry–academia collaboration, and community engagement. Through its academic and outreach initiatives, the university plays a vital role in advancing higher education and regional development in Tamil Nadu.
            </p>
          </div>
          <div className="bg-slate rounded-2xl p-8">
            <h3 className="font-display font-bold text-2xl text-navy mb-4">
              About the Department
            </h3>
            <p className="text-slate-700 leading-normal text-justify">
              The Department of Computer Science, Periyar University, is a leading academic and research centre committed to quality education, innovation, and skill-based training. The department offers postgraduate and doctoral programmes covering core and emerging areas such as AI, machine learning, data science, cloud computing, cybersecurity, image and signal processing, and software engineering. With experienced faculty and a strong research culture, the department promotes interdisciplinary research addressing real-world challenges in healthcare, agriculture, sustainability, and social development. Through funded projects, publications, workshops, and conferences, it nurtures excellence, ethical computing, and innovation—preparing graduates for impactful careers in industry, academia, and society.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
