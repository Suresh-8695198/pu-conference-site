import { useState } from "react";
import { Brain, Cpu, Database, Cloud, Shield, Zap } from "lucide-react";

const Tracks = () => {
  const [activeTrack, setActiveTrack] = useState(0);

  const tracks = [
    {
      id: 0,
      title: "Next-Gen AI for Healthcare, Bioinformatics & Biomedical Systems",
      icon: Brain,
      color: "bg-gold",
      topics: [
        "Medical Imaging, Radiomics & Biomedical Signals",
        "AI for Diagnosis, Early Detection & Clinical Intelligence",
        "Genomics, Proteomics & Multi-Omics Analysis",
        "Drug Discovery & Precision Medicine",
        "Wearable Health Systems & Smart Diagnostics",
      ],
    },
    {
      id: 1,
      title: "Intelligent Computer Vision, Imaging & Pattern Recognition",
      icon: Cpu,
      color: "bg-burgundy",
      topics: [
        "Deep Learning for Image/Video Analytics",
        "Medical, Agricultural & Satellite Imaging",
        "Object Detection, Segmentation & Tracking",
        "Multimodal Imaging Systems",
        "Explainable Vision Models",
      ],
    },
    {
      id: 2,
      title: "Advanced Signal Processing, Smart Sensing & Edge Intelligence",
      icon: Database,
      color: "bg-gold",
      topics: [
        "Audio/Speech/Signal Processing",
        "Wavelet, Time–Frequency & Feature Extraction",
        "IoT Sensors & Smart Sensing Systems",
        "Edge AI, FPGA/GPU Acceleration",
        "Energy-Efficient AI Systems",
      ],
    },
    {
      id: 3,
      title: "Machine Learning, Deep Learning & Computational Intelligence",
      icon: Cloud,
      color: "bg-burgundy",
      topics: [
        "Deep Learning Models & Optimization",
        "Evolutionary & Swarm-Based Intelligence",
        "Reinforcement Learning & Adaptive Systems",
        "Hybrid ML Models",
        "Explainable & Responsible AI",
      ],
    },
    {
      id: 4,
      title: "Data Science, Big Data Technologies & High-Performance Computing",
      icon: Shield,
      color: "bg-burgundy",
      topics: [
        "Big Data Analytics for Health & Agriculture",
        "Cloud, Distributed & Parallel ML",
        "HPC for AI Workloads",
        "Data Mining & Knowledge Discovery",
        "Privacy-Preserving Analytics",
      ],
    },
    {
      id: 5,
      title: "AI for Agriculture, Environment & Sustainable Systems",
      icon: Zap,
      color: "bg-gold",
      topics: [
        "Crop Disease Detection & Precision Agriculture",
        "Climate, Soil & Environmental Data Intelligence",
        "Drone/UAV-Based Remote Sensing",
        "Smart Irrigation & Food System Optimization",
      ],
    },
  ];

  return (
    <section id="tracks" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            Research <span className="text-burgundy">Tracks</span>
          </h2>
          <p className="section-subtitle mt-1">
            Click on any track to explore the topics covered
          </p>
              <p className="section-subtitle mt-1">
              (Not limited to)          
             </p>
         
          <div className="w-24 h-1 bg-gold mx-auto mt-5" />
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
