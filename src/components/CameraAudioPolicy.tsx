const CameraAudioPolicy = () => {
  return (
    <section id="camera-audio-policy" className="py-8 md:py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-purple-900 border-2 border-purple-400 rounded-xl overflow-hidden">
            {/* Header with Icon */}
            <div className="bg-purple-800 px-6 md:px-8 py-5 md:py-6 border-b-2 border-purple-400">
              <div className="flex items-center justify-center gap-3 md:gap-4">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-purple-700 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 md:w-7 md:h-7 text-purple-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-xl md:text-2xl lg:text-3xl text-white text-center">
                  Camera & Audio Policy
                </h3>
                <div className="w-12 h-12 md:w-14 md:h-14 bg-purple-700 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 md:w-7 md:h-7 text-purple-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                </div>
              </div>
              <p className="text-center text-purple-200 text-sm md:text-base font-semibold mt-3">
                Keynote, Inaugural and Valedictory Sessions
              </p>
            </div>

            {/* Policy Content */}
            <div className="p-6 md:p-8 lg:p-10">
              <div className="bg-white rounded-lg border border-gray-200 p-6 md:p-8">
                <div className="space-y-6">
                  {/* Camera Protocol */}
                  <div className="relative pl-6 border-l-4 border-purple-600">
                    <div className="absolute -left-3 top-0 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                      </svg>
                    </div>
                    <h4 className="font-display font-bold text-purple-900 mb-2 text-lg md:text-xl">Camera Protocol</h4>
                    <p className="text-gray-800 text-sm md:text-base leading-relaxed text-justify">
                      All participants (authors, delegates, academicians, industry attendees, and students) are <strong className="text-purple-900">required to keep their cameras turned ON</strong> during the Inaugural Session, Keynote Talks, and Valedictory Session. This protocol is mandatory for ensuring visibility, documentation, and academic etiquette.
                    </p>
                  </div>

                  {/* Audio Protocol */}
                  <div className="relative pl-6 border-l-4 border-indigo-600">
                    <div className="absolute -left-3 top-0 w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h4 className="font-display font-bold text-indigo-900 mb-2 text-lg md:text-xl">Audio Protocol</h4>
                    <p className="text-gray-800 text-sm md:text-base leading-relaxed text-justify">
                      Participants must <strong className="text-indigo-900">keep their microphones muted at all times</strong>, and may unmute only when invited by the Session Chair or Event Coordinator.
                    </p>
                  </div>

                  {/* Compliance Notice */}
                  <div className="relative pl-6 border-l-4 border-purple-700">
                    <div className="absolute -left-3 top-0 w-6 h-6 bg-purple-700 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h4 className="font-display font-bold text-purple-900 mb-2 text-lg md:text-xl">Compliance Notice</h4>
                    <p className="text-gray-800 text-sm md:text-base leading-relaxed text-justify">
                      Non-compliance with this instruction will be recorded and may result in <strong className="text-purple-900">removal from the session</strong>. This policy must be <strong className="text-purple-900">strictly followed by all attendees in online mode</strong>.
                    </p>
                  </div>
                </div>

                {/* Important Notice Banner */}
                <div className="mt-8 bg-purple-700 rounded-lg p-5 md:p-6">
                  <div className="flex flex-col md:flex-row items-center justify-center gap-3 text-center">
                    <svg className="w-6 h-6 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    <p className="font-display font-bold text-base md:text-lg text-white">
                      Strict Compliance Required for All Participants
                    </p>
                    <svg className="w-6 h-6 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CameraAudioPolicy;
