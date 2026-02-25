import { Camera, MicOff, ShieldAlert, Video } from 'lucide-react';

const CameraAudioPolicy = () => {
  return (
    <section id="camera-audio-policy" className="py-16 md:py-24 bg-[#FFF7F5]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#000000] mb-5 font-display tracking-tight">
            Camera & Audio Policy
          </h2>
          <p className="text-[#000000] max-w-2xl mx-auto text-xl font-medium">
            Mandatory protocols for Keynote, Inaugural, and Valedictory Sessions to ensure a professional academic environment.
          </p>
        </div>

        {/* Professional Table/Document Format */}
        <div className="bg-[#FFFFFF] border border-[#9F1239]/20 shadow-sm rounded-lg overflow-hidden">
          
          {/* Document Header */}
          <div className="bg-[#9F1239] px-6 py-5 border-b border-[#9F1239]/30 flex items-center justify-between">
            <h3 className="text-[#FFFFFF] font-bold text-xl tracking-wide">
              Official Session Protocols
            </h3>
            <span className="text-[#FFE4E6] text-sm font-bold px-3 py-1 bg-[#FFFFFF]/10 rounded uppercase tracking-wider">
              Mandatory Compliance
            </span>
          </div>

          {/* Table Content */}
          <div className="divide-y divide-[#FFE4E6]">
            
            {/* Camera Row */}
            <div className="flex flex-col md:flex-row hover:bg-[#FFF7F5]/50 transition-colors">
              <div className="md:w-1/3 p-6 md:p-8 bg-[#FFF7F5]/30 md:border-r border-[#FFE4E6] flex items-start gap-4">
                <div className="w-12 h-12 shrink-0 bg-[#FFE4E6] text-[#E11D48] rounded flex items-center justify-center border border-[#E11D48]/20">
                  <Camera className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-[#000000] font-bold text-xl mb-2">Camera Protocol</h4>
                  <span className="inline-block px-3 py-1 bg-[#FFE4E6] text-[#E11D48] text-sm font-bold uppercase tracking-wider rounded">Required: ON</span>
                </div>
              </div>
              <div className="md:w-2/3 p-6 md:p-8 flex items-center">
                <p className="text-[#000000] text-lg leading-relaxed font-medium">
                  All participants (authors, delegates, academicians, and students) are required to keep their cameras turned ON. This is mandatory for ensuring visibility, documentation, and academic etiquette throughout the sessions.
                </p>
              </div>
            </div>

            {/* Audio Row */}
            <div className="flex flex-col md:flex-row hover:bg-[#FFF7F5]/50 transition-colors">
              <div className="md:w-1/3 p-6 md:p-8 bg-[#FFF7F5]/30 md:border-r border-[#FFE4E6] flex items-start gap-4">
                <div className="w-12 h-12 shrink-0 bg-[#FFE4E6] text-[#E11D48] rounded flex items-center justify-center border border-[#E11D48]/20">
                  <MicOff className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-[#000000] font-bold text-xl mb-2">Audio Protocol</h4>
                  <span className="inline-block px-3 py-1 bg-[#FFE4E6] text-[#E11D48] text-sm font-bold uppercase tracking-wider rounded">Required: MUTED</span>
                </div>
              </div>
              <div className="md:w-2/3 p-6 md:p-8 flex items-center">
                <p className="text-[#000000] text-lg leading-relaxed font-medium">
                  Participants must keep their microphones muted at all times. You may unmute only when explicitly invited by the Session Chair or Event Coordinator to prevent background noise and disruptions.
                </p>
              </div>
            </div>

          </div>

          {/* Compliance Footer */}
          <div className="bg-[#BE123C] px-6 py-6 flex items-start sm:items-center gap-5 border-t border-[#9F1239]">
            <div className="w-12 h-12 shrink-0 bg-[#FFFFFF]/10 rounded flex items-center justify-center border border-[#FFFFFF]/20">
              <ShieldAlert className="w-6 h-6 text-[#FFE4E6]" />
            </div>
            <div>
              <p className="text-[#FFFFFF] text-base sm:text-lg leading-snug font-medium">
                <strong className="font-bold tracking-wide text-xl block mb-1">STRICT COMPLIANCE REQUIRED:</strong> 
                Non-compliance with these instructions will be recorded and may result in removal from the session. This policy must be strictly followed by all attendees in online mode.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CameraAudioPolicy;
