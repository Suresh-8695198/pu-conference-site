import { Document, Page, pdfjs } from "react-pdf";
import HTMLFlipBook from "react-pageflip";
import { useState, useEffect, useRef, useCallback } from "react";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { Download, ChevronLeft, ChevronRight, FileText, Users, Globe, BookOpen, CheckCircle2, Award, Calendar, Book } from "lucide-react";
import React from "react";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

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
      if (vw < 1024) {
        setIsMobile(true);
        setPageWidth(Math.min(vw - 48, 600)); // Single page on mobile/tablet
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
    <section id="proceedings" className="pt-12 pb-24 bg-[#F9FAFB] relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-[32rem] bg-[#010038] rounded-b-[3rem] sm:rounded-b-[5rem] -z-0 shadow-inner">
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
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6 font-display">
            Conference Proceedings
          </h2>
          <p className="text-xl sm:text-2xl md:text-3xl text-white font-semibold max-w-4xl mx-auto leading-relaxed drop-shadow-md">
            International Conference on Artificial Intelligence Techniques and Smart Computing (ICAITSC 2026)
          </p>
        </div>

        {/* ── TOP: Content Section ── */}
        <div className="bg-[#FFFFFF] rounded-3xl shadow-xl border border-[#E2E8F0] p-8 sm:p-12 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            
            {/* Left Column: Intro & Domains */}
            <div className="space-y-10">
              {/* Intro */}
              <div>
                <h3 className="text-2xl font-bold text-[#010038] mb-4 flex items-center gap-3">
                  <Book className="w-6 h-6 text-[#010038]" />
                  About the Proceedings
                </h3>
                <div className="prose prose-gray max-w-none text-black leading-relaxed">
                  <p>
                    We are delighted to announce the official release of the Conference Proceedings of the International Conference on Artificial Intelligence Techniques and Smart Computing (ICAITSC 2026).
                  </p>
                  <p className="mt-4">
                    The proceedings compile the peer-reviewed research papers presented during the conference held on 26–27 February 2026, organized by the Department of Computer Science, Periyar University, Salem, Tamil Nadu, India.
                  </p>
                  <p className="mt-4">
                    The ICAITSC 2026 proceedings represent significant scholarly contributions in emerging domains including:
                  </p>
                </div>
              </div>

              {/* Domains */}
              <div>
                <h3 className="text-xl font-bold text-[#010038] mb-5 flex items-center gap-3">
                  <BookOpen className="w-5 h-5 text-[#010038]" />
                  Research Domains
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mb-6">
                  {domains.map((domain, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#010038] shrink-0" />
                      <span className="text-sm font-medium text-black">{domain}</span>
                    </div>
                  ))}
                </div>
                <div className="border-l-4 border-[#010038] pl-4 py-1">
                  <p className="text-sm text-black italic">
                    Each paper has undergone a rigorous peer-review process to ensure academic quality, originality, and research relevance.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Details & Team */}
            <div className="space-y-10">
              {/* Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {/* Publication Details */}
                <div>
                  <h3 className="text-lg font-bold text-[#010038] mb-4 border-b border-[#E2E8F0] pb-2 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-[#010038]" />
                    Publication Details
                  </h3>
                  <dl className="space-y-3 text-sm">
                    <div className="flex flex-col gap-1">
                      <dt className="text-black font-medium text-xs uppercase tracking-wider">Title</dt>
                      <dd className="text-black font-semibold">Proceedings of the International Conference on Artificial Intelligence Techniques and Smart Computing (ICAITSC 2026)</dd>
                    </div>
                    <div className="flex flex-col gap-1">
                      <dt className="text-black font-medium text-xs uppercase tracking-wider">ISBN</dt>
                      <dd className="text-black font-semibold">978-81-999565-5-1</dd>
                    </div>
                    <div className="flex flex-col gap-1">
                      <dt className="text-black font-medium text-xs uppercase tracking-wider">Publisher</dt>
                      <dd className="text-black font-medium">Department of Computer Science, Periyar University, Salem -636011</dd>
                    </div>
                    <div className="flex flex-col gap-1">
                      <dt className="text-black font-medium text-xs uppercase tracking-wider">Publication Date</dt>
                      <dd className="text-black font-medium flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-black" />
                        26 February 2026
                      </dd>
                    </div>
                    <div className="flex flex-col gap-1">
                      <dt className="text-black font-medium text-xs uppercase tracking-wider">Language</dt>
                      <dd className="text-black font-medium">English</dd>
                    </div>
                  </dl>
                </div>

                {/* Editorial Team */}
                <div>
                  <h3 className="text-lg font-bold text-[#010038] mb-4 border-b border-[#E2E8F0] pb-2 flex items-center gap-2">
                    <Users className="w-5 h-5 text-[#010038]" />
                    Editorial Team
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex flex-col">
                      <span className="font-semibold text-black text-sm">Dr. C. Chandrasekar</span>
                      <span className="text-[#010038] font-medium text-xs uppercase tracking-wider">Editor</span>
                    </li>
                    <li className="flex flex-col">
                      <span className="font-semibold text-black text-sm">Dr. H. Hannah Inbarani</span>
                      <span className="text-[#010038] font-medium text-xs uppercase tracking-wider">Editor</span>
                    </li>
                    <li className="flex flex-col">
                      <span className="font-semibold text-black text-sm">Dr. Laurence Aroquiaraj</span>
                      <span className="text-[#010038] font-medium text-xs uppercase tracking-wider">Editor</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Acknowledgement */}
              <div className="bg-[#F9FAFB] rounded-2xl p-6 border border-[#E2E8F0]">
                <h3 className="flex items-center gap-2 text-lg font-bold text-[#010038] mb-3">
                  <Globe className="w-5 h-5 text-[#010038]" />
                  Acknowledgement
                </h3>
                <p className="text-black leading-relaxed mb-3 text-sm">
                  We extend our sincere appreciation to all authors, reviewers, keynote speakers, advisory committee members, session chairs, and organizing committee members for their valuable contributions and dedication in making ICAITSC 2026 a resounding success.
                </p>
                <p className="text-black leading-relaxed text-sm font-medium">
                  The proceedings stand as a testament to collaborative research excellence and innovation in Artificial Intelligence and Smart Computing.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── BOTTOM: Flipbook Stage ── */}
        <div className="max-w-5xl mx-auto flex flex-col items-center justify-center">
          
          {/* Download CTA */}
          <div className="w-full bg-[#FFFFFF] rounded-2xl p-6 border border-[#E2E8F0] mb-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-bold text-[#010038] mb-1">
                Download Proceedings
              </h3>
              <p className="text-black">
                The complete proceedings are available in PDF format:
              </p>
            </div>
            <a
              href="/All.pdf"
              download="ICAITSC_2026_Proceedings.pdf"
              className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#010038] to-[#0E7490] hover:from-[#0E7490] hover:to-[#010038] text-white font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(14,116,144,0.3)] hover:shadow-[0_0_30px_rgba(14,116,144,0.5)] hover:-translate-y-1 w-full sm:w-auto whitespace-nowrap overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out rounded-full"></div>
              <Download className="h-5 w-5 relative z-10 group-hover:animate-bounce" />
              <span className="relative z-10">Download ICAITSC 2026 Proceedings (PDF)</span>
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
              <div className="mt-12 flex items-center justify-center gap-6 bg-white/80 backdrop-blur-md rounded-full px-6 py-3 shadow-lg border border-[#E2E8F0] max-w-md mx-auto">
                <button
                  onClick={prevPage}
                  disabled={currentPage <= 1}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-[#F1F5F9] text-[#010038] hover:bg-[#010038] hover:text-white disabled:opacity-40 disabled:hover:bg-[#F1F5F9] disabled:hover:text-[#010038] transition-all duration-300 shadow-sm hover:shadow-md"
                  aria-label="Previous page"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                
                <div className="flex items-center gap-2 px-4 py-1.5 bg-[#FFFFFF] rounded-full shadow-inner border border-[#E2E8F0]">
                  <span className="text-base font-bold text-[#010038]">
                    {currentPage}
                  </span>
                  <span className="text-[#0F172A]/40 text-sm font-medium">of</span>
                  <span className="text-base font-bold text-[#0F172A]/70">
                    {numPages}
                  </span>
                </div>

                <button
                  onClick={nextPage}
                  disabled={currentPage >= numPages}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-[#F1F5F9] text-[#010038] hover:bg-[#010038] hover:text-white disabled:opacity-40 disabled:hover:bg-[#F1F5F9] disabled:hover:text-[#010038] transition-all duration-300 shadow-sm hover:shadow-md"
                  aria-label="Next page"
                >
                  <ChevronRight className="h-5 w-5" />
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
