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
      description: "ICAITSC 2026 fosters knowledge dissemination, research skill development, and AI-enabled learning technologies by bringing together academicians, researchers, and students on a global platform.",
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

        {/* Publication Announcement Scrolling */}
        <div className="mb-12 bg-white border-l-4 border-l-coral rounded-lg shadow-xl overflow-hidden">
          <div className="relative bg-slate-50">
            <div className="animate-marquee whitespace-nowrap py-5 px-4">
              <span className="text-navy font-display font-bold text-lg inline-block">
                PUBLICATION ANNOUNCEMENT: Selected high-quality papers from ICAITSC 2026 will be published as post-conference proceedings in the edited book titled "Beyond Algorithms: Next-Gen AI for Health, Agriculture, and Humanity", to be published by CRC Press, Taylor & Francis Group.
              </span>
            </div>
          </div>
        </div>

        {/* Main Content */}
          <div className="max-w-4xl mx-auto mb-20">
          <p className="text-lg text-slate-700 leading-normal text-justify">
            The International Conference on Health, Optimization, Research, Intelligence, and Next-Gen AI for Humanity (IC-ICAITSC 2026) serves as a global forum for presenting advanced research findings and technological innovations in artificial intelligence and intelligent computing. The conference emphasizes next-generation AI solutions for healthcare, agriculture, sustainability, and human-centric systems, moving beyond traditional algorithms to effectively address real-world challenges. The primary aim of ICAITSC 2026 is to bring together researchers, academicians, industry professionals, and innovators from around the world to present, discuss, and advance cutting-edge developments in artificial intelligence. The conference seeks to promote impactful, ethical, and sustainable AI technologies that translate research outcomes into practical societal benefits while fostering interdisciplinary collaboration and global knowledge exchange.
          </p>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <a
              href="/Brochure.pdf"
              download="ICAITSC_2026_Brochure.pdf"
              className="inline-flex items-center justify-center gap-2 bg-teal text-white px-8 py-4 rounded-lg font-display font-semibold text-lg hover:bg-teal/90 transition-colors shadow-sm"
            >
              <FileText className="w-5 h-5" />
              Download Brochure
            </a>
            <a
              href="/Schedule.pdf"
                download="ICAITSC_2026_Schedule.pdf"
              className="inline-flex items-center justify-center gap-2 bg-coral text-white px-8 py-4 rounded-lg font-display font-semibold text-lg hover:bg-coral/90 transition-colors shadow-sm"
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
            <p className="text-lg text-slate-700 max-w-2xl mx-auto text-justify leading-relaxed">
              ICAITSC 2026 aligns with key UN Sustainable Development Goals to drive positive change through AI and technology.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="bg-white border-l-4 border-l-teal border border-slate-200 rounded-lg p-6 shadow-sm min-h-[280px] flex flex-col"
              >
                <feature.icon className="w-12 h-12 mb-4 text-teal" />
                <h3 className="font-display font-bold text-lg mb-3 text-navy">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-700 text-justify leading-relaxed flex-grow">
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
            <p className="text-lg text-slate-700 leading-relaxed">
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
              About Periyar University
            </h3>
            <p className="text-slate-700 leading-normal text-justify">
              Periyar University, established in 1997 by the Government of Tamil Nadu, is a state public university located in Salem. Named after social reformer Thanthai Periyar E. V. Ramasamy, it upholds the values of social justice, rationalism, and inclusive education. The university offers diverse UG, PG, M.Phil., and Ph.D. programmes across Science, Arts, Humanities, Commerce, Management, Engineering, and Computer Science, functioning as both a teaching and affiliating university for colleges in the region. Committed to quality education, research excellence, and innovation, Periyar University promotes interdisciplinary research, skill development, industry–academia collaboration, and community engagement. Through its academic and outreach initiatives, the university plays a vital role in advancing higher education and regional development in Tamil Nadu.
            </p>
          </div>
          <div className="bg-slate rounded-2xl p-8 min-h-[300px]">
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
