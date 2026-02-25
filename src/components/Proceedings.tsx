import { Document, Page, pdfjs } from "react-pdf";
import HTMLFlipBook from "react-pageflip";
import { useState, useEffect, useRef, useCallback } from "react";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { Download, ChevronLeft, ChevronRight, FileText, Users, Globe, BookOpen, CheckCircle2, Award, Calendar, Book } from "lucide-react";
import React from "react";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

/* ─── Decorative Frame Component ─────────── */
const DecorativeFrame = ({ className }: { className?: string }) => {
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      {/* Top Left Corner */}
      <svg className="absolute top-0 left-0 w-16 h-16 sm:w-24 sm:h-24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 100 L0 0 L100 0" stroke="currentColor" strokeWidth="2" strokeOpacity="0.3" />
        <path d="M10 100 L10 10 L100 10" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" />
        <circle cx="0" cy="0" r="4" fill="currentColor" fillOpacity="0.5" />
        <circle cx="10" cy="10" r="2" fill="currentColor" fillOpacity="0.4" />
        <path d="M0 30 L30 0" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="2 2" />
      </svg>

      {/* Top Right Corner */}
      <svg className="absolute top-0 right-0 w-16 h-16 sm:w-24 sm:h-24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0 L100 0 L100 100" stroke="currentColor" strokeWidth="2" strokeOpacity="0.3" />
        <path d="M0 10 L90 10 L90 100" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" />
        <circle cx="100" cy="0" r="4" fill="currentColor" fillOpacity="0.5" />
        <circle cx="90" cy="10" r="2" fill="currentColor" fillOpacity="0.4" />
        <path d="M70 0 L100 30" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="2 2" />
      </svg>

      {/* Bottom Left Corner */}
      <svg className="absolute bottom-0 left-0 w-16 h-16 sm:w-24 sm:h-24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0 L0 100 L100 100" stroke="currentColor" strokeWidth="2" strokeOpacity="0.3" />
        <path d="M10 0 L10 90 L100 90" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" />
        <circle cx="0" cy="100" r="4" fill="currentColor" fillOpacity="0.5" />
        <circle cx="10" cy="90" r="2" fill="currentColor" fillOpacity="0.4" />
        <path d="M0 70 L30 100" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="2 2" />
      </svg>

      {/* Bottom Right Corner */}
      <svg className="absolute bottom-0 right-0 w-16 h-16 sm:w-24 sm:h-24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 100 L100 100 L100 0" stroke="currentColor" strokeWidth="2" strokeOpacity="0.3" />
        <path d="M0 90 L90 90 L90 0" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" />
        <circle cx="100" cy="100" r="4" fill="currentColor" fillOpacity="0.5" />
        <circle cx="90" cy="90" r="2" fill="currentColor" fillOpacity="0.4" />
        <path d="M70 100 L100 70" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="2 2" />
      </svg>
    </div>
  );
};

/* ─── Decorative Center Component ─────────── */
const DecorativeCenter = ({ className }: { className?: string }) => {
  return (
    <svg className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none ${className}`} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="centerGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.08" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.0" />
        </radialGradient>
      </defs>
      
      {/* Background Glow */}
      <circle cx="100" cy="100" r="100" fill="url(#centerGrad)" />
      
      {/* Outer Rings */}
      <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.2" strokeDasharray="4 4" />
      <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="1" strokeOpacity="0.15" />
      
      {/* Tech Flower Petals (Center Outward) */}
      <path d="M100 100 C100 40 130 20 100 0 C70 20 100 40 100 100 Z" fill="currentColor" fillOpacity="0.03" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.2"/>
      <path d="M100 100 C100 160 130 180 100 200 C70 180 100 160 100 100 Z" fill="currentColor" fillOpacity="0.03" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.2"/>
      <path d="M100 100 C40 100 20 130 0 100 C20 70 40 100 100 100 Z" fill="currentColor" fillOpacity="0.03" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.2"/>
      <path d="M100 100 C160 100 180 130 200 100 C180 70 160 100 100 100 Z" fill="currentColor" fillOpacity="0.03" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.2"/>
      
      {/* Diagonal Petals */}
      <path d="M100 100 C140 60 160 40 170 30 C140 40 120 60 100 100 Z" fill="currentColor" fillOpacity="0.02" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.15"/>
      <path d="M100 100 C60 140 40 160 30 170 C60 160 80 140 100 100 Z" fill="currentColor" fillOpacity="0.02" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.15"/>
      <path d="M100 100 C60 60 40 40 30 30 C40 60 60 80 100 100 Z" fill="currentColor" fillOpacity="0.02" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.15"/>
      <path d="M100 100 C140 140 160 160 170 170 C160 140 140 120 100 100 Z" fill="currentColor" fillOpacity="0.02" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.15"/>

      {/* Circuit Nodes */}
      <circle cx="100" cy="100" r="6" fill="currentColor" fillOpacity="0.4" />
      <circle cx="100" cy="100" r="3" fill="currentColor" fillOpacity="0.8" />
      
      <circle cx="100" cy="20" r="3" fill="currentColor" fillOpacity="0.5" />
      <circle cx="100" cy="180" r="3" fill="currentColor" fillOpacity="0.5" />
      <circle cx="20" cy="100" r="3" fill="currentColor" fillOpacity="0.5" />
      <circle cx="180" cy="100" r="3" fill="currentColor" fillOpacity="0.5" />
      
      {/* Connecting Lines */}
      <path d="M100 20 L100 180 M20 100 L180 100" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.2" strokeDasharray="2 4" />
      <path d="M43 43 L157 157 M43 157 L157 43" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.15" strokeDasharray="2 4" />
    </svg>
  );
};

/* ─── Per-page wrapper ─────────── */
interface PDFPageProps {
  pageNumber: number;
  pageWidth: number;
}

const PDFPage = React.forwardRef<HTMLDivElement, PDFPageProps>(
  ({ pageNumber, pageWidth }, ref) => {
    return (
      <div
        ref={ref}
        className="bg-white overflow-hidden flex justify-center items-center border-r border-gray-200 shadow-sm"
        style={{ width: pageWidth, height: pageWidth * 1.4142 }}
      >
        <Page
          pageNumber={pageNumber}
          width={pageWidth}
          renderAnnotationLayer={false}
          renderTextLayer={false}
          className="object-cover"
          loading={
            <div className="flex items-center justify-center w-full h-full bg-gray-50">
              <div className="flex flex-col items-center gap-2">
                <div className="w-5 h-5 border-2 border-indigo-600 border-t-transparent rounded-full animate-spin" />
                <span className="text-xs text-gray-500 font-medium">Loading page...</span>
              </div>
            </div>
          }
        />
      </div>
    );
  }
);
PDFPage.displayName = "PDFPage";

const Proceedings = () => {
  const [numPages, setNumPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageWidth, setPageWidth] = useState(400);
  const [isMobile, setIsMobile] = useState(false);
  const bookRef = useRef<any>(null);

  useEffect(() => {
    const calc = () => {
      const vw = window.innerWidth;
      if (vw < 640) {
        setIsMobile(true);
        setPageWidth(vw - 32); // 16px padding on each side for mobile
      } else if (vw < 1024) {
        setIsMobile(true);
        setPageWidth(Math.min(vw - 64, 600)); // Single page on tablet
      } else if (vw < 1280) {
        setIsMobile(false);
        setPageWidth(450); // 2 pages = 900px total
      } else {
        setIsMobile(false);
        setPageWidth(550); // 2 pages = 1100px total
      }
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  const pageHeight = pageWidth * 1.4142;

  const onDocumentLoadSuccess = useCallback(({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setCurrentPage(1);
  }, []);

  const onFlip = useCallback((e: any) => {
    setCurrentPage(e.data + 1);
  }, []);

  const prevPage = () => bookRef.current?.pageFlip()?.flipPrev();
  const nextPage = () => bookRef.current?.pageFlip()?.flipNext();

  const domains = [
    "Artificial Intelligence",
    "Machine Learning & Deep Learning",
    "Smart Computing",
    "Internet of Things (IoT)",
    "Cybersecurity",
    "Data Science & Analytics",
    "Generative AI",
    "Explainable AI"
  ];

  return (
    <section id="proceedings" className="pt-10 pb-16 sm:pt-12 sm:pb-24 bg-[#F9FAFB] relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-[42rem] bg-[#010038]  -z-0 shadow-inner">
        {/* Abstract Shapes */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl mix-blend-overlay"></div>
        <div className="absolute bottom-10 right-20 w-80 h-80 bg-[#0E7490]/20 rounded-full blur-3xl mix-blend-overlay"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-white/5 rounded-full blur-3xl mix-blend-overlay"></div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-20" 
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* ── Header ── */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4 sm:mb-6 font-display">
            Conference Proceedings
          </h2>
          <p className="text-lg sm:text-xl md:text-3xl text-white font-semibold max-w-4xl mx-auto leading-relaxed drop-shadow-md">
            <span className="text-yellow-300">International Conference on Artificial Intelligence Techniques and Smart Computing (ICAITSC 2026)</span>
          </p>
        </div>

        {/* ── TOP: Content Section ── */}
        <div className="bg-[#FFFFFF] rounded-3xl shadow-xl border border-[#E2E8F0] p-6 sm:p-8 lg:p-12 mb-10 sm:mb-16 relative overflow-hidden">
          {/* Decorative Frame */}
          <DecorativeFrame className="text-[#0E7490]" />
          
          {/* Decorative Center */}
          <DecorativeCenter className="text-[#0E7490] opacity-40 w-[600px] h-[600px]" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 relative z-10">
            
            {/* Left Column: Intro & Domains */}
            <div className="space-y-8 sm:space-y-10">
              {/* Intro */}
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-[#010038] to-[#0E7490] rounded-full hidden sm:block"></div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#010038] mb-6 flex items-center gap-3 h-10 sm:h-12">
                  <div className="p-2 bg-[#F1F5F9] rounded-lg shadow-sm border border-[#E2E8F0]">
                    <Book className="w-6 h-6 sm:w-7 sm:h-7 text-[#0E7490] shrink-0" />
                  </div>
                  <span className="leading-tight bg-clip-text text-transparent bg-gradient-to-r from-[#010038] to-[#0E7490]">About the Proceedings</span>
                </h3>
                <div className="prose prose-gray max-w-none text-black leading-relaxed text-base sm:text-lg text-justify bg-white/50 backdrop-blur-sm rounded-2xl p-1">
                  <p>
                    We are delighted to announce the official release of the Conference Proceedings of the <span className="text-[#0E7490] font-bold">International Conference on Artificial Intelligence Techniques and Smart Computing (ICAITSC 2026)</span>.
                  </p>
                  <p className="mt-4">
                    The proceedings compile the peer-reviewed research papers presented during the conference held on 26–27 February 2026, organized by the Department of Computer Science, Periyar University, Salem, Tamil Nadu, India.
                  </p>
                  <p className="mt-4">
                    The <span className="text-[#0E7490] font-bold">ICAITSC 2026</span> proceedings represent significant scholarly contributions in emerging domains including:
                  </p>
                </div>
              </div>

              {/* Domains */}
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-[#0E7490] to-[#010038] rounded-full hidden sm:block"></div>
                <h3 className="text-lg sm:text-xl font-bold text-[#010038] mb-5 sm:mb-6 flex items-center gap-3 h-10 sm:h-12">
                  <div className="p-2 bg-[#F1F5F9] rounded-lg shadow-sm border border-[#E2E8F0]">
                    <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-[#0E7490] shrink-0" />
                  </div>
                  <span className="leading-tight bg-clip-text text-transparent bg-gradient-to-r from-[#010038] to-[#0E7490]">Research Domains</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mb-6">
                  {domains.map((domain, idx) => (
                    <div key={idx} className="flex items-start gap-3 group hover:-translate-y-0.5 transition-transform duration-300">
                      <div className="mt-0.5 bg-[#F1F5F9] rounded-full p-1 group-hover:bg-[#0E7490]/10 transition-colors duration-300">
                        <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#0E7490] shrink-0" />
                      </div>
                      <span className="text-base sm:text-lg font-medium text-black group-hover:text-[#0E7490] transition-colors duration-300">{domain}</span>
                    </div>
                  ))}
                </div>
                <div className="border-l-4 border-[#0E7490] pl-5 py-3 bg-gradient-to-r from-[#0E7490]/5 to-transparent rounded-r-xl">
                  <p className="text-base sm:text-lg text-black italic font-medium">
                    "Each paper has undergone a rigorous peer-review process to ensure academic quality, originality, and research relevance."
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Details & Team */}
            <div className="space-y-8 sm:space-y-10">
              {/* Details Grid */}
              <div className="grid grid-cols-1 gap-8 items-start">
                {/* Publication Details */}
                <div className="bg-[#F8FAFC] rounded-2xl p-6 sm:p-8 border border-[#E2E8F0] shadow-sm hover:shadow-md transition-shadow duration-300 relative overflow-hidden">
                  {/* Decorative Frame */}
                  <DecorativeFrame className="text-[#0E7490]" />
                  
                  {/* Decorative Center */}
                  <DecorativeCenter className="text-[#0E7490] opacity-30 w-[300px] h-[300px]" />

                  <h3 className="text-lg sm:text-xl font-bold text-[#010038] mb-6 border-b border-[#CBD5E1] pb-4 flex items-center gap-3 relative z-10">
                    <div className="p-2 bg-white rounded-lg shadow-sm border border-[#E2E8F0]">
                      <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-[#0E7490] shrink-0" />
                    </div>
                    <span className="leading-tight">Publication Details</span>
                  </h3>
                  <dl className="space-y-5 text-base sm:text-lg relative z-10">
                    <div className="flex flex-col gap-1.5 group">
                      <dt className="text-[#64748B] font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0E7490] group-hover:scale-150 transition-transform"></span>
                        Title
                      </dt>
                      <dd className="text-black font-semibold pl-3.5 border-l-2 border-transparent group-hover:border-[#0E7490]/30 transition-colors">Proceedings of the <span className="text-[#0E7490] font-bold">International Conference on Artificial Intelligence Techniques and Smart Computing (ICAITSC 2026)</span></dd>
                    </div>
                    <div className="flex flex-col gap-1.5 group">
                      <dt className="text-[#64748B] font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0E7490] group-hover:scale-150 transition-transform"></span>
                        ISBN
                      </dt>
                      <dd className="text-black font-semibold pl-3.5 border-l-2 border-transparent group-hover:border-[#0E7490]/30 transition-colors"><span className="bg-yellow-200 text-[#010038] px-2.5 py-1 rounded-md shadow-sm border border-yellow-300">978-81-999565-5-1</span></dd>
                    </div>
                    <div className="flex flex-col gap-1.5 group">
                      <dt className="text-[#64748B] font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0E7490] group-hover:scale-150 transition-transform"></span>
                        Publisher
                      </dt>
                      <dd className="text-black font-medium pl-3.5 border-l-2 border-transparent group-hover:border-[#0E7490]/30 transition-colors">Department of Computer Science, Periyar University, Salem -636011</dd>
                    </div>
                    <div className="flex flex-col gap-1.5 group">
                      <dt className="text-[#64748B] font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0E7490] group-hover:scale-150 transition-transform"></span>
                        Publication Date
                      </dt>
                      <dd className="text-black font-medium flex items-center gap-2 pl-3.5 border-l-2 border-transparent group-hover:border-[#0E7490]/30 transition-colors">
                        <div className="p-1 bg-white rounded shadow-sm border border-[#E2E8F0]">
                          <Calendar className="w-4 h-4 text-[#0E7490]" />
                        </div>
                        26 February 2026
                      </dd>
                    </div>
                    <div className="flex flex-col gap-1.5 group">
                      <dt className="text-[#64748B] font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0E7490] group-hover:scale-150 transition-transform"></span>
                        Language
                      </dt>
                      <dd className="text-black font-medium pl-3.5 border-l-2 border-transparent group-hover:border-[#0E7490]/30 transition-colors">English</dd>
                    </div>
                  </dl>
                </div>
              </div>

              {/* Acknowledgement */}
              <div className="bg-gradient-to-br from-[#010038] to-[#0E7490] rounded-2xl p-6 sm:p-8 shadow-lg relative overflow-hidden text-white">
                {/* Decorative Frame */}
                <DecorativeFrame className="text-white opacity-50" />
                
                {/* Decorative Center */}
                <DecorativeCenter className="text-white opacity-20 w-[300px] h-[300px]" />

                <h3 className="flex items-center gap-3 text-lg sm:text-xl font-bold mb-5 relative z-10">
                  <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
                    <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  Acknowledgement
                </h3>
                <div className="relative z-10 space-y-4">
                  <p className="leading-relaxed text-base sm:text-lg text-justify text-white/90">
                    We extend our sincere appreciation to all authors, reviewers, keynote speakers, advisory committee members, session chairs, and organizing committee members for their valuable contributions and dedication in making <span className="text-yellow-300 font-bold">ICAITSC 2026</span> a resounding success.
                  </p>
                  <p className="leading-relaxed text-base sm:text-lg font-medium text-justify text-white">
                    The proceedings stand as a testament to collaborative research excellence and innovation in Artificial Intelligence and Smart Computing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── BOTTOM: Flipbook Stage ── */}
        <div className="max-w-5xl mx-auto flex flex-col items-center justify-center">
          
          {/* Download CTA */}
          <div className="w-full bg-[#FFFFFF] rounded-2xl p-5 sm:p-6 border border-[#E2E8F0] mb-8 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 text-center sm:text-left relative overflow-hidden">
            {/* Decorative Frame */}
            <DecorativeFrame className="text-[#0E7490]" />
            
            {/* Decorative Center */}
            <DecorativeCenter className="text-[#0E7490] opacity-20 w-[400px] h-[400px]" />

            <div className="relative z-10">
              <h3 className="text-base sm:text-lg font-bold text-[#010038] mb-1">
                Download Proceedings
              </h3>
              <p className="text-sm sm:text-base text-black">
                The complete proceedings are available in PDF format:
              </p>
            </div>
            <a
              href="/All.pdf"
              download="ICAITSC_2026_Proceedings.pdf"
              className="group relative inline-flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-[#010038] to-[#0E7490] hover:from-[#0E7490] hover:to-[#010038] text-white font-bold px-6 py-3 sm:px-8 sm:py-4 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(14,116,144,0.3)] hover:shadow-[0_0_30px_rgba(14,116,144,0.5)] hover:-translate-y-1 w-full sm:w-auto whitespace-nowrap overflow-hidden z-10"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out rounded-full"></div>
              <Download className="h-4 w-4 sm:h-5 sm:w-5 relative z-10 group-hover:animate-bounce" />
              <span className="relative z-10 text-sm sm:text-base">Download ICAITSC 2026 Proceedings (PDF)</span>
            </a>
          </div>

          {/* Flipbook Container */}
          <div className="w-full relative flex flex-col items-center justify-center">
            <div className="relative w-full flex justify-center items-center" style={{ minHeight: pageHeight }}>
              
              {/* Left Side Hint (Only visible on first page) */}
              {currentPage === 1 && !isMobile && (
                <div className="absolute left-0 inset-y-0 w-1/2 flex flex-col items-center justify-center pointer-events-none z-10">
                  <div className="flex flex-col items-center text-center px-8">
                    
                    {/* Simple Icon */}
                    <div className="w-16 h-16 bg-[#010038] rounded-full flex items-center justify-center mb-6">
                      <BookOpen className="w-8 h-8 text-white" />
                    </div>

                    <h4 className="text-[#010038] font-bold text-3xl mb-4">
                      Interactive Proceedings
                    </h4>
                    
                    <div className="w-16 h-1 bg-[#0E7490] mb-6"></div>
                    
                    <p className="text-black text-lg max-w-[300px] leading-relaxed font-medium mb-8">
                      Click on the cover or drag the page corners to start reading the research papers.
                    </p>
                    
                    {/* Simple CTA */}
                    <div className="flex items-center gap-2 text-[#0E7490] font-bold text-lg">
                      <span>Open Book</span>
                      <ChevronRight className="w-6 h-6" />
                    </div>
                  </div>
                </div>
              )}

              <Document
                file="/All.pdf"
                onLoadSuccess={onDocumentLoadSuccess}
                loading={
                  <div className="flex flex-col items-center justify-center h-full text-[#0E7490] space-y-4">
                    <div className="w-10 h-10 border-4 border-[#E2E8F0] border-t-[#0E7490] rounded-full animate-spin" />
                    <span className="text-sm font-bold uppercase tracking-widest text-[#0F172A]/50">Loading Document</span>
                  </div>
                }
                error={
                  <div className="flex flex-col items-center justify-center h-full text-center p-8 bg-red-50 rounded-2xl border border-red-100">
                    <FileText className="w-12 h-12 text-red-400 mb-4" />
                    <p className="text-red-800 font-semibold mb-2">Failed to load PDF viewer</p>
                    <p className="text-sm text-red-600">Please use the download button above to view the proceedings.</p>
                  </div>
                }
              >
                {numPages > 0 && (
                  <HTMLFlipBook
                    ref={bookRef}
                    width={pageWidth}
                    height={pageHeight}
                    size="fixed"
                    minWidth={pageWidth}
                    maxWidth={pageWidth}
                    minHeight={pageHeight}
                    maxHeight={pageHeight}
                    maxShadowOpacity={0.5}
                    showCover={true}
                    mobileScrollSupport={true}
                    onFlip={onFlip}
                    className="shadow-2xl rounded-sm"
                    style={{}}
                    startPage={0}
                    drawShadow={true}
                    flippingTime={800}
                    usePortrait={isMobile}
                    startZIndex={0}
                    autoSize={true}
                    clickEventForward={true}
                    useMouseEvents={true}
                    swipeDistance={30}
                    showPageCorners={true}
                    disableFlipByClick={false}
                  >
                    {Array.from({ length: numPages }, (_, i) => (
                      <PDFPage
                        key={i + 1}
                        pageNumber={i + 1}
                        pageWidth={pageWidth}
                      />
                    ))}
                  </HTMLFlipBook>
                )}
              </Document>
            </div>

            {/* Modern Controls */}
            {numPages > 0 && (
              <div className="mt-8 sm:mt-12 flex items-center justify-center gap-4 sm:gap-6 bg-white/80 backdrop-blur-md rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-lg border border-[#E2E8F0] max-w-md mx-auto">
                <button
                  onClick={prevPage}
                  disabled={currentPage <= 1}
                  className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#F1F5F9] text-[#010038] hover:bg-[#010038] hover:text-white disabled:opacity-40 disabled:hover:bg-[#F1F5F9] disabled:hover:text-[#010038] transition-all duration-300 shadow-sm hover:shadow-md"
                  aria-label="Previous page"
                >
                  <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
                </button>
                
                <div className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 bg-[#FFFFFF] rounded-full shadow-inner border border-[#E2E8F0]">
                  <span className="text-sm sm:text-base font-bold text-[#010038]">
                    {currentPage}
                  </span>
                  <span className="text-[#0F172A]/40 text-xs sm:text-sm font-medium">of</span>
                  <span className="text-sm sm:text-base font-bold text-[#0F172A]/70">
                    {numPages}
                  </span>
                </div>

                <button
                  onClick={nextPage}
                  disabled={currentPage >= numPages}
                  className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#F1F5F9] text-[#010038] hover:bg-[#010038] hover:text-white disabled:opacity-40 disabled:hover:bg-[#F1F5F9] disabled:hover:text-[#010038] transition-all duration-300 shadow-sm hover:shadow-md"
                  aria-label="Next page"
                >
                  <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
                </button>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Proceedings;
