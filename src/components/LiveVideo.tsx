import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const videos = [
  {
    id: "upcoming",
    title: "Upcoming Live Stream",
    embedUrl: "https://www.youtube.com/embed/d5cDPzDQ7eI",
    watchUrl: "https://www.youtube.com/live/d5cDPzDQ7eI?si=x28kenpT20z846u7"
  },
  {
    id: "day1",
    title: "Day 1 - Live Stream",
    embedUrl: "https://www.youtube.com/embed/U-GvpVxd3eM",
    watchUrl: "https://www.youtube.com/live/U-GvpVxd3eM?si=SFj098FZXetcSFPZ"
  },
  {
    id: "day2",
    title: "Day 2 - Live Stream",
    embedUrl: "https://www.youtube.com/embed/-BGReUIVTSI",
    watchUrl: "https://www.youtube.com/live/-BGReUIVTSI?si=cVTZSFSJYYYFNiVO"
  }
];

const LiveVideo = () => {
  return (
    <section id="live-video" className="pt-16 pb-16 sm:pt-24 sm:pb-24 bg-[#F9FAFB] relative overflow-hidden">
      {/* Modern Geometric Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#020127] -z-0">
        {/* Architectural Grid */}
        <div className="absolute inset-0 opacity-20" 
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* ── Live Video Section ── */}
        <div className="mb-0">
          <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-600 text-white font-bold text-xs tracking-widest uppercase mb-6 shadow-[4px_4px_0px_rgba(0,0,0,0.3)]">
              <span className="w-2 h-2 bg-white animate-pulse"></span>
              Live Broadcast
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-4 font-display tracking-tight">
              WATCH ICAITSC 2026
            </h2>
            <div className="w-24 h-1 bg-[#0E7490] mx-auto mb-6"></div>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto font-medium">
              Join the International Conference on Artificial Intelligence Techniques and Smart Computing.
            </p>
          </div>

          {/* Modern Frame Container */}
          <div className="relative max-w-6xl mx-auto px-4 sm:px-12">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {videos.map((video) => (
                  <CarouselItem key={video.id}>
                    <div className="bg-white border-2 border-[#010038] p-2 sm:p-4 relative z-10">
                      
                      {/* Video Wrapper */}
                      <div className="aspect-video w-full bg-black border-2 border-[#010038] relative group">
                        {/* Corner Accents */}
                        <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-[#0E7490] z-20"></div>
                        <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-[#0E7490] z-20"></div>
                        <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-[#0E7490] z-20"></div>
                        <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-[#0E7490] z-20"></div>

                        <iframe 
                          width="100%" 
                          height="100%" 
                          src={video.embedUrl} 
                          title={`ICAITSC 2026 ${video.title}`} 
                          frameBorder="0" 
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                          referrerPolicy="strict-origin-when-cross-origin" 
                          allowFullScreen
                          className="w-full h-full relative z-10"
                        ></iframe>
                      </div>
                      
                      {/* Bottom Bar */}
                      <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-6 px-4 pb-4">
                        <div className="flex items-center gap-5 w-full sm:w-auto">
                          <div className="w-14 h-14 bg-[#010038] flex items-center justify-center shrink-0 border border-gray-200">
                            <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-xl font-black text-[#010038] uppercase tracking-wide">{video.title}</h4>
                            <p className="text-base text-gray-500 font-medium">Department of Computer Science, Periyar University, Salem</p>
                          </div>
                        </div>
                        
                        <a 
                          href={video.watchUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 transition-colors duration-200 w-full sm:w-auto justify-center uppercase tracking-wider text-base border-2 border-transparent hover:border-red-800"
                        >
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                          </svg>
                          Watch on YouTube
                        </a>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden sm:flex -left-16 bg-white border-2 border-[#010038] text-[#010038] hover:bg-[#0E7490] hover:text-white hover:border-[#0E7490] h-14 w-14 shadow-[0_4px_15px_rgba(0,0,0,0.2)] transition-all duration-300 hover:scale-110 z-50" />
              <CarouselNext className="hidden sm:flex -right-16 bg-white border-2 border-[#010038] text-[#010038] hover:bg-[#0E7490] hover:text-white hover:border-[#0E7490] h-14 w-14 shadow-[0_4px_15px_rgba(0,0,0,0.2)] transition-all duration-300 hover:scale-110 z-50" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveVideo;
