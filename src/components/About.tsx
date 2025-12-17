import { BookOpen, Target, Users, Award, FileText } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: BookOpen,
      title: "SDG 3 – Good Health and Well-Being",
      description: "The conference promotes AI-driven healthcare solutions such as medical imaging, disease prediction, telemedicine, and intelligent health systems to improve diagnosis, treatment, and public health outcomes.",
    },
    {
      icon: Target,
      title: "SDG 4 – Quality Education",
      description: "ICAITSC2026 fosters knowledge dissemination, research skill development, and AI-enabled learning technologies by bringing together academicians, researchers, and students on a global platform.",
    },
    {
      icon: Users,
      title: "SDG 8 – Decent Work and Economic Growth",
      description: "By encouraging industry–academia collaboration and showcasing AI innovations, the conference supports skill development, entrepreneurship, and employment opportunities in emerging AI-driven sectors.",
    },
    {
      icon: Award,
      title: "SDG 9 – Industry, Innovation, and Infrastructure",
      description: "The conference advances next-generation AI research, intelligent systems, and digital infrastructure, promoting innovation, sustainable industrial development, and technology-driven solutions for real-world challenges.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-cream">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-gold font-display font-semibold text-sm uppercase tracking-wider mb-4">
            About the Conference
          </span>
          <h2 className="section-title">
            Welcome to <span className="text-gold">ICAITSC2026</span>
          </h2>
          <div className="w-24 h-1 bg-burgundy mx-auto mt-6" />
        </div>

        {/* Publication Announcement Scrolling */}
        <div className="mb-12 bg-white border-l-4 border-l-burgundy rounded-lg shadow-xl">
          <div className="relative bg-cream">
            <div className="marquee overflow-hidden py-5">
              <div className="marquee-track animate-marquee inline-flex items-center px-4">
                <span className="text-navy font-display font-bold text-lg inline-block mr-8">
                  Selected high-quality papers will be published as book chapters in the Scopus-indexed edited volumes " Beyond Algorithms: Next-Gen AI for Health, Agriculture, and Humanity" or "Computational Intelligence & Knowledge-Based Systems: Models, Algorithms & Applications", subject to publisher scope and editorial policies.
                </span>
                <span className="text-navy font-display font-bold text-lg inline-block mr-8">
                  Selected high-quality papers will be published as book chapters in the Scopus-indexed edited volumes " Beyond Algorithms: Next-Gen AI for Health, Agriculture, and Humanity" or "Computational Intelligence & Knowledge-Based Systems: Models, Algorithms & Applications", subject to publisher scope and editorial policies.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
          <div className="max-w-4xl mx-auto mb-20">
          <p className="text-lg text-black leading-relaxed text-justify indent-10">
            The International Conference on Artificial Intelligence Techniques and Smart Computing (ICAITSC2026) serves as a multidisciplinary forum that brings together researchers, academicians, industry experts, and practitioners to explore recent advances and emerging trends in artificial intelligence and smart computing. The conference covers a broad spectrum of themes, including AI for healthcare and bioinformatics, computer vision and imaging, signal processing and edge intelligence, machine learning and computational intelligence, data science, big data and high-performance computing, and AI-driven solutions for agriculture and sustainable systems. ICAITSC2026 aims to foster innovation through the integration of intelligent algorithms, data-centric approaches, and scalable computational frameworks, encouraging research that bridges theory with real-world applications and contributes to technological progress and societal well-being.
          </p>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <a
              href="/Brochure.pdf"
              download="ICAITSC_2026_Brochure.pdf"
              className="inline-flex items-center justify-center gap-2 bg-gold text-white px-8 py-4 rounded-lg font-display font-semibold text-lg hover:bg-gold-dark transition-colors shadow-sm"
            >
              <FileText className="w-5 h-5" />
              Download Brochure
            </a>
            <a
              href="/Schedule.pdf"
                download="ICAITSC_2026_Schedule.pdf"
              className="inline-flex items-center justify-center gap-2 bg-burgundy text-white px-8 py-4 rounded-lg font-display font-semibold text-lg hover:bg-burgundy-light transition-colors shadow-sm"
            >
              <FileText className="w-5 h-5" />
              Download Schedule
            </a>
          </div>
        </div>

        {/* SDG Cards */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="font-display font-bold text-3xl text-navy mb-4">
              Conference Focus Areas
            </h3>
            <p className="text-lg text-black max-w-2xl mx-auto leading-relaxed indent-10">
              ICAITSC2026 aligns with key UN Sustainable Development Goals to drive positive change through AI and technology.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="bg-white border-l-4 border-l-gold border border-warm-grey rounded-lg p-6 shadow-sm min-h-[280px] flex flex-col"
              >
                <feature.icon className="w-12 h-12 mb-4 text-gold" />
                <h3 className="font-display font-bold text-lg mb-3 text-navy">
                  {feature.title}
                </h3>
                <p className="text-sm text-black text-justify leading-relaxed flex-grow">
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
            <p className="text-lg text-black leading-relaxed">
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
          <div className="bg-slate rounded-2xl p-8 min-h-[300px]">
            <h3 className="font-display font-bold text-2xl text-navy mb-4">
              ABOUT THE UNIVERSITY
            </h3>
            <p className="text-black leading-relaxed text-justify indent-10">
              Periyar University, established by the Government of Tamil Nadu on 17 September 1997 under the Periyar University Act, 1997, is located in Salem and serves the districts of Salem, Namakkal, Dharmapuri, and Krishnagiri. The University has been reaccredited with an “A++” grade by NAAC (2021) and holds 12(B) and 2(f) status from the University Grants Commission (UGC). Periyar University is the only state-run university in Tamil Nadu to have received a four-star rating from the Institution’s Innovation Council (IIC) for three consecutive years (2022–2024). In the MoE–NIRF 2024 rankings, the University was placed 56th among Indian Universities. The University actively promotes interdisciplinary teaching and research, emphasizing academic flexibility, curriculum innovation, quality research publications, modern laboratory infrastructure, and strong anti-plagiarism practices, thereby ensuring academic excellence, integrity, and originality.
            </p>
          </div>
          <div className="bg-slate rounded-2xl p-8 min-h-[300px]">
            <h3 className="font-display font-bold text-2xl text-navy mb-4">
              ABOUT THE DEPARTMENT
            </h3>
            <p className="text-black leading-relaxed text-justify indent-10">
              The Department of Computer Science at Periyar University, established in 2002, is dedicated to providing high-quality education in Computer Science and its applications. The department offers postgraduate programmes including MCA, M.Sc. (Computer Science), and M.Sc. (Data Science), along with a doctoral programme in Computer Science covering both core and emerging areas such as Artificial Intelligence, Machine Learning, Deep Learning, Natural Language Processing, Bioinformatics and Genomic Data Analysis, Computer Networks, and Image and Signal Processing. With a dynamic and regularly updated curriculum delivered by experienced faculty, the department places strong emphasis on academic excellence, innovation, and skill development. Faculty members actively contribute to research, publishing extensively in reputed national and international journals. Through funded research projects, publications, workshops, and conferences, the department fosters a culture of ethical computing, research excellence, and innovation, equipping graduates for impactful careers in industry, academia, and society.            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
