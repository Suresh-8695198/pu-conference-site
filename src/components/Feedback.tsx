import { Send } from "lucide-react";

const Feedback = () => {
  return (
    <section id="feedback" className="py-16 md:py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-navy">
            Conference Feedback
          </h2>
          <div className="w-24 h-1 bg-burgundy mx-auto mb-8"></div>
          <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Your feedback is valuable to us. Please take a moment to share your experience.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <div className="bg-white border-2 border-green-200 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col overflow-hidden">
            <div className="bg-gradient-to-br from-green-50 to-white text-center p-6 border-b-2 border-green-100">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl mb-4 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <h4 className="font-display font-bold text-xl text-green-900 mb-2 leading-tight">
                Feedback
              </h4>
              <p className="text-gray-600 text-sm font-medium">Share your experience</p>
              <div className="mt-3 inline-block bg-red-100 border-2 border-red-500 rounded-lg px-4 py-2">
                <p className="text-red-700 text-sm font-black tracking-wide"> LAST DATE: <span className="text-red-900">26.02.2026 & 27.02.2026</span></p>
              </div>
            </div>
            
            <div className="flex flex-col items-center justify-between p-6">
              <div className="w-full flex flex-col items-center gap-4 mb-6">
                <div className="bg-gradient-to-br from-gray-50 to-white p-5 rounded-2xl shadow-md border-2 border-green-100 hover:border-green-400 hover:scale-105 transition-all duration-300">
                  <img 
                    src="/feedback_form.png" 
                    alt="Feedback Form QR" 
                    className="w-40 h-40 object-contain"
                  />
                </div>
                <p className="text-sm text-gray-700 font-bold">Scan QR Code</p>
                
                <div className="flex items-center gap-3 w-full my-2">
                  <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-green-300 to-transparent"></div>
                  <span className="text-green-700 font-bold text-sm px-3 py-1 bg-green-50 rounded-full">OR</span>
                  <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-green-300 to-transparent"></div>
                </div>
              </div>
              
              <a
                href="https://forms.gle/yHr3ZpBNcCL5VhzAA"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-green-700 text-white px-5 py-3.5 rounded-xl font-display font-bold text-base hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 active:scale-95"
              >
                <Send className="w-5 h-5" />
                <span>Fill Form Now</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
