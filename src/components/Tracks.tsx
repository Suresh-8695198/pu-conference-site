import { useState } from "react";
import { Brain, Cpu, Database, Cloud, Shield, Zap } from "lucide-react";

const Tracks = () => {
  const [activeTrack, setActiveTrack] = useState(0);

  const tracks = [
    {
      id: 0,
      title: "Artificial Intelligence",
      icon: Brain,
      color: "bg-teal",
      topics: [
        "Machine Learning and Deep Learning",
        "Natural Language Processing",
        "Computer Vision and Image Processing",
        "Expert Systems and Knowledge Representation",
        "Neural Networks and Fuzzy Systems",
        "Evolutionary Computing and Genetic Algorithms",
        "AI in Healthcare and Medicine",
        "Autonomous Systems and Robotics",
      ],
    },
    {
      id: 1,
      title: "Smart Computing",
      icon: Cpu,
      color: "bg-coral",
      topics: [
        "Internet of Things (IoT)",
        "Smart Cities and Infrastructure",
        "Edge Computing and Fog Computing",
        "Embedded Systems and VLSI",
        "Wearable Computing",
        "Smart Grid and Energy Systems",
        "Intelligent Transportation Systems",
        "Smart Manufacturing and Industry 4.0",
      ],
    },
    {
      id: 2,
      title: "Data Science",
      icon: Database,
      color: "bg-navy",
      topics: [
        "Big Data Analytics",
        "Data Mining and Knowledge Discovery",
        "Predictive Analytics",
        "Statistical Learning Methods",
        "Data Visualization",
        "Text Mining and Sentiment Analysis",
        "Social Network Analysis",
        "Time Series Analysis and Forecasting",
      ],
    },
    {
      id: 3,
      title: "Cloud & Distributed",
      icon: Cloud,
      color: "bg-teal",
      topics: [
        "Cloud Computing Architectures",
        "Distributed Systems and Algorithms",
        "Serverless Computing",
        "Containerization and Microservices",
        "High Performance Computing",
        "Parallel Processing",
        "Grid Computing",
        "Quantum Computing",
      ],
    },
    {
      id: 4,
      title: "Security & Privacy",
      icon: Shield,
      color: "bg-coral",
      topics: [
        "Cybersecurity and Threat Detection",
        "Blockchain Technology",
        "Cryptography and Encryption",
        "Privacy Preserving Computing",
        "Biometric Security Systems",
        "Network Security",
        "Secure Software Development",
        "Digital Forensics",
      ],
    },
    {
      id: 5,
      title: "Emerging Technologies",
      icon: Zap,
      color: "bg-gold",
      topics: [
        "Augmented and Virtual Reality",
        "5G and 6G Networks",
        "Digital Twins",
        "Metaverse Technologies",
        "Brain-Computer Interfaces",
        "Sustainable Computing",
        "Computational Biology",
        "Smart Agriculture",
      ],
    },
  ];

  return (
    <section id="tracks" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-teal font-display font-semibold text-sm uppercase tracking-wider mb-4">
            Conference Topics
          </span>
          <h2 className="section-title">
            Research <span className="text-coral">Tracks</span>
          </h2>
          <p className="section-subtitle mt-4">
            Click on any track to explore the topics covered
          </p>
          <div className="w-24 h-1 bg-teal mx-auto mt-6" />
        </div>

        {/* Tracks Grid */}
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Track Tabs */}
          <div className="lg:col-span-4 space-y-3">
            {tracks.map((track, index) => (
              <button
                key={track.id}
                onClick={() => setActiveTrack(index)}
                className={`w-full flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-300 ${
                  activeTrack === index
                    ? `${track.color} text-primary-foreground shadow-lg`
                    : "bg-slate text-foreground hover:bg-muted"
                }`}
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                  activeTrack === index ? "bg-primary-foreground/20" : "bg-background"
                }`}>
                  <track.icon className={`w-6 h-6 ${
                    activeTrack === index ? "text-primary-foreground" : "text-navy"
                  }`} />
                </div>
                <div>
                  <h3 className="font-display font-bold">{track.title}</h3>
                  <p className={`text-sm ${
                    activeTrack === index ? "text-primary-foreground/70" : "text-muted-foreground"
                  }`}>
                    {track.topics.length} topics
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Topics Display */}
          <div className="lg:col-span-8">
            <div className="bg-slate rounded-2xl p-8 h-full">
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-border">
                {(() => {
                  const ActiveIcon = tracks[activeTrack].icon;
                  return (
                    <div className={`w-14 h-14 ${tracks[activeTrack].color} rounded-xl flex items-center justify-center`}>
                      <ActiveIcon className="w-7 h-7 text-primary-foreground" />
                    </div>
                  );
                })()}
                <div>
                  <h3 className="font-display font-bold text-2xl text-navy">
                    {tracks[activeTrack].title}
                  </h3>
                  <p className="text-muted-foreground">Conference Track {activeTrack + 1}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {tracks[activeTrack].topics.map((topic, index) => (
                  <div
                    key={topic}
                    className="flex items-center gap-3 bg-background p-4 rounded-xl hover:shadow-md transition-all duration-300"
                  >
                    <div className={`w-8 h-8 ${tracks[activeTrack].color} rounded-lg flex items-center justify-center shrink-0`}>
                      <span className="text-primary-foreground font-bold text-sm">{index + 1}</span>
                    </div>
                    <span className="text-foreground font-medium">{topic}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tracks;
