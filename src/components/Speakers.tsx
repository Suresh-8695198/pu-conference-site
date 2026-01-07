import { Mic } from "lucide-react";

const Speakers = () => {
  return (
    <section id="speakers" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-gold font-display font-semibold text-sm uppercase tracking-wider mb-4">
            Keynote Speakers
          </span>
          <h2 className="section-title">
            Meet Our <span className="text-burgundy">Speakers</span>
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mt-6" />
        </div>

        {/* Speakers Grid */}
        <div className="flex flex-col items-center gap-12">
          <div className="flex flex-col md:flex-row justify-center items-center gap-12">
            {/* Speaker 2 */}
            <div className="bg-slate rounded-2xl p-6 hover:bg-slate-100 transition-colors w-full">
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
                <img
                  src="/paventhan.jpg"
                  alt="Dr. A. Paventhan"
                  className="w-40 h-40 object-cover shrink-0"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex';
                  }}
                />
                <div className="w-40 h-40 bg-burgundy rounded-full flex items-center justify-center shrink-0" style={{ display: 'none' }}>
                  <span className="text-primary-foreground font-bold text-xl">AP</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-display font-bold text-xl text-navy mb-2">Dr. A. Paventhan</h4>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p><strong>Senior Director, HoD-Research & Development</strong></p>
                    <p><strong>Scientist-G, ERNET India</strong></p>
                    <p>Ministry of Electronics & IT, Government of India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Speaker 3 */}
            <div className="bg-slate rounded-2xl p-6 hover:bg-slate-100 transition-colors w-full">
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
                <img
                  src="/pisharady.jpg"
                  alt="Dr. Pramod Pisharady"
                  className="w-40 h-40 object-cover shrink-0"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex';
                  }}
                />
                <div className="w-44 h-52 bg-burgundy rounded-full flex items-center justify-center shrink-0" style={{ display: 'none' }}>
                  <span className="text-primary-foreground font-bold text-xl">PP</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-display font-bold text-xl text-navy mb-2">Dr. Pramod Pisharady</h4>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p><strong>Associate Professor, Departments of Neurology & Radiology</strong></p>
                    <p>Center for Magnetic Resonance Research</p>
                    <p>University of Minnesota, United States</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Speaker 4 */}
          <div className="bg-slate rounded-2xl p-6 hover:bg-slate-100 transition-colors w-full max-w-md">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
              <img
                src="/shanthababu.jpeg"
                alt="Shanthababu Pandian"
                className="w-40 h-40 object-cover shrink-0"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex';
                }}
              />
              <div className="w-40 h-40 bg-burgundy rounded-full flex items-center justify-center shrink-0" style={{ display: 'none' }}>
                <span className="text-primary-foreground font-bold text-xl">SP</span>
              </div>
              <div className="flex-1">
                <h4 className="font-display font-bold text-xl text-navy mb-2">Shanthababu Pandian</h4>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p><strong>Director-Data and AI (Data and AI Engineering)</strong></p>
                  <p>Rolan Software Service</p>
                  <p>London, United Kingdom</p>
                </div>
              </div>
            </div>
          </div>
        </div>

          {/* Speaker 4
          <div className="bg-slate rounded-2xl p-6 hover:bg-slate-100 transition-colors w-full">
            <div className="flex items-center gap-4">
              <img
                src="/sowmiya.jpg"
                alt="Dr. K. S. Sowmiya Rani"
                className="w-44 h-52 object-cover shrink-0"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex';
                }}
              />
              <div className="w-40 h-40 bg-burgundy rounded-full flex items-center justify-center shrink-0" style={{ display: 'none' }}>
                <span className="text-primary-foreground font-bold text-xl">SR</span>
              </div>
              <div className="flex-1">
                <h4 className="font-display font-bold text-xl text-navy mb-2">Dr. K. S. Sowmiya Rani</h4>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p><strong>Founder Editor & Reviewer</strong></p>
                  <p>Sowmis_AWW</p>
                </div>
              </div>
            </div>
          </div> */}
{/* 
          Speaker 5
          <div className="bg-slate rounded-2xl p-8 hover:bg-slate-100 transition-colors w-full md:col-span-2 md:max-w-md md:mx-auto">
            <div className="flex items-center gap-4">
              <img
                src="/muthmainnah.png"
                alt="Muthmainnah Yakin"
                className="w-40 h-41   object-cover shrink-0"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex';
                }}
              />
              <div className="w-40 h-40 bg-teal rounded-full flex items-center justify-center shrink-0" style={{ display: 'none' }}>
                <span className="text-primary-foreground font-bold text-xl">MY</span>
              </div>
              <div className="flex-1">
                <h4 className="font-display font-bold text-xl text-navy mb-2">Muthmainnah Yakin</h4>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p><strong>Assistant Professor</strong></p>
                  <p>Universitas Al Asyariah Mandar</p>
                  <p>West Sulawesi, Indonesia</p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
    </section>
  );
};

export default Speakers;