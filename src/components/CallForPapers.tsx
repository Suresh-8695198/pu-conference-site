import { FileText, CheckCircle, AlertCircle, Send } from "lucide-react";

const CallForPapers = () => {
  const guidelines = [
    "Papers must be full-length original research or review articles and must not exceed six (6) pages in length.",
    "The manuscript must clearly present original research ideas, methodology or analysis, results and findings, and conclusions.",
    "The manuscript must not have been published previously and must not be under review elsewhere at the time of submission.",
    "A paper may have a maximum of four (4) authors and must clearly mention the corresponding author's name, email ID, and affiliations of all authors.",
    "All submissions will undergo a peer-review process, and review decisions will be communicated to the corresponding author; revised manuscripts, if required, must be submitted within seven (7) days.",
    "Only papers that are accepted, registered, and presented will be considered valid, and authors of such papers will receive conference certificates.",
    "Selected high-quality and accepted papers will be published as book chapters in the edited volume titled 'Beyond Algorithms: Next-Gen AI for Health, Agriculture, and Humanity', subject to the publisher's scope, quality, and editorial requirements.",
    "Remaining accepted and presented papers will be published in the ICAITSC2026 Conference Proceedings.",
  ];

  return (
    <section id="call-for-papers" className="py-5 bg-cream">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-gold font-display font-semibold text-sm uppercase tracking-wider mb-4">
            Submit Your Research
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-navy">
            Camera Ready<span className="text-gold"> Submission</span>
          </h2>
          <div className="w-24 h-1 bg-burgundy mx-auto"></div>
        </div>

        {/* Important Notice */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="bg-white border-2 border-gold rounded-lg p-8 shadow-sm">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-gold mt-1 shrink-0" />
              <p className="text-black text-base leading-relaxed text-justify">
                Authors are invited to submit original and unpublished research articles that are not under review in any other conference or journal. Only accepted and registered papers will be scheduled for presentation. For inclusion in the book proceedings, at least one author of each accepted paper must complete the conference registration. Papers without a registered author will not be considered for publication in the book proceedings.
              </p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Submission Requirements */}
            <div className="bg-white border-l-4 border-l-gold border border-warm-grey rounded-lg p-8 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gold rounded-lg flex items-center justify-center">
                  <FileText className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl text-navy">Submission Requirements</h3>
                  <p className="text-black text-base">Basic submission criteria</p>
                </div>
              </div>
              <ul className="space-y-3 text-base text-black leading-relaxed text-justify list-disc list-inside">
                <li>The paper must present original, unpublished research related to the conference themes and must not be under review elsewhere.</li>
                <li>Authors are responsible for ensuring originality, validity, integrity, and freedom from conflicts with previously published or concurrently submitted work.</li>
                <li>Papers must be carefully proofread and written in clear, grammatically correct English; poor language quality may lead to outright rejection.</li>
              </ul>
            </div>

            {/* Manuscript Preparation */}
            <div className="bg-white border-l-4 border-l-burgundy border border-warm-grey rounded-lg p-8 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-burgundy rounded-lg flex items-center justify-center">
                  <FileText className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl text-navy">Manuscript Preparation</h3>
                  <p className="text-black text-base">Content and formatting guidelines</p>
                </div>
              </div>
              <ul className="space-y-3 text-base text-black leading-relaxed text-justify list-disc list-inside">
                <li>Each manuscript must include an abstract (150-200 words) summarizing objectives, methodology, key results, and conclusions, along with 5-6 keywords.</li>
                <li>The maximum length of the manuscript is Twelve (12) pages, formatted strictly according to the official conference template available on the conference website.</li>
                <li>Figures, tables, graphs, and images must be editable (not inserted as pictures), numbered consecutively, referenced properly, and must have a minimum resolution of 300 DPI.</li>
                <li>All mathematical equations must be created using a math equation editor and must not be included as images.</li>
                <li>All references must be cited correctly in the text, and the reference list must include every cited source and only cited sources.</li>
              </ul>
            </div>

            {/* Review and Publication */}
            <div className="bg-white border-l-4 border-l-gold border border-warm-grey rounded-lg p-8 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gold rounded-lg flex items-center justify-center">
                  <FileText className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl text-navy">Review and Publication</h3>
                  <p className="text-black text-base">Review process and publication details</p>
                </div>
              </div>
              <ul className="space-y-3 text-base text-black leading-relaxed text-justify list-disc list-inside">
                <li>Each paper may have a maximum of four (4) authors, with full affiliations and the corresponding author clearly identified.</li>
                <li>All manuscripts will undergo a double-blind peer-review process; authors must submit revisions within seven (7) days if requested.</li>
                <li>Only papers that are accepted, registered, and presented will be included in the conference proceedings and considered valid for certificates.</li>
                <li>At least one author must present the paper (online/offline as applicable) for it to be officially accepted.</li>
              </ul>
            </div>

            {/* Ethical Standards */}
            <div className="bg-white border-l-4 border-l-burgundy border border-warm-grey rounded-lg p-8 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-burgundy rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl text-navy">Ethical Standards</h3>
                  <p className="text-black text-base">Academic integrity guidelines</p>
                </div>
              </div>
              <ul className="space-y-3 text-base text-black leading-relaxed text-justify list-disc list-inside">
                <li>Authors must adhere to all ethical guidelines, including plagiarism policies, proper citations, and respecting intellectual property.</li>
                <li>Authors must ensure all figures, tables, and data representations are accurate, clear, and scientifically valid.</li>
              </ul>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            {/* Submission */}
            <div className="bg-white border-l-4 border-l-gold border border-warm-grey rounded-lg p-8 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gold rounded-lg flex items-center justify-center">
                  <Send className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl text-navy">Submission</h3>
                  <p className="text-black text-base">Paper submission guidelines</p>
                </div>
              </div>
              <p className="text-black text-base leading-relaxed text-justify">
                All paper submissions must be made ONLY through the Microsoft CMT submission portal. Authors who are new to Microsoft CMT must create a login account before submitting. Please upload your manuscript in Microsoft Word/PDF format strictly following the conference template. Email submissions will NOT be accepted under any circumstances. Only papers submitted through Microsoft  CMT will be considered for review, acceptance, and publication.
              </p>
            </div>

            {/* Publication Ethics */}
            <div className="bg-white border-l-4 border-l-burgundy border border-warm-grey rounded-lg p-8 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-burgundy rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl text-navy">Publication Ethics</h3>
                  <p className="text-black text-base">Ethical guidelines for publication</p>
                </div>
              </div>
              <ol className="space-y-3 text-base text-black leading-relaxed text-justify list-decimal list-inside">
                <li>Authors must strictly follow the publication ethics and academic integrity standards before submitting their manuscripts.</li>
                <li>The manuscript must have a plagiarism ratio below 10% as checked through Turnitin.</li>
                <li>AI-generated content is not permitted; the manuscript must contain less than 2% AI-detected content.</li>
                <li>Any paper exceeding the permitted plagiarism or AI-content limits will be outright rejected without review.</li>
                <li>Authors must conduct a plagiarism check before submission and upload their own plagiarism report along with the paper.</li>
                <li>An additional plagiarism and AI-content screening will be performed by the conference committee, and discrepancies will lead to rejection.</li>
              </ol>
            </div>

            {/* Final Submission Requirements */}
            <div className="bg-white border-l-4 border-l-burgundy border border-warm-grey rounded-lg p-8 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-burgundy rounded-lg flex items-center justify-center">
                  <FileText className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl text-navy">Final Submission Requirements</h3>
                  <p className="text-black text-base">After review process</p>
                </div>
              </div>
              <p className="text-black text-base leading-relaxed text-justify mb-4">
                After addressing the reviewers' comments, upload a single .zip folder containing the following documents:
              </p>
              <ol className="space-y-2 text-base text-black leading-relaxed text-justify list-decimal list-inside">
                <li>PDF of the revised paper.</li>
                <li>Source files (Word document or all LaTeX source files).</li>
                <li>A detailed response to the reviewers' comments.</li>
                <li>Proof of payment (invoice/receipt).</li>
              </ol>
            </div>

            {/* Submission Format */}
            <div className="bg-white border-l-4 border-l-teal border border-slate-200 rounded-lg p-8 shadow-sm">
              <h3 className="font-display font-bold text-2xl mb-4 text-navy">
                Paper Submission Format
              </h3>
              <p className="text-black mb-6 leading-relaxed">
                Please download the manuscript and abstract guidelines for proper formatting and submission requirements.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a 
                  href="/Abstracts_Guidelines.pdf" 
                  download="Abstracts_Guidelines.pdf"
                  className="inline-flex items-center justify-center gap-2 bg-gold text-white px-6 py-3 rounded-lg font-display font-semibold hover:bg-gold-dark transition-colors"
                >
                  <FileText className="w-5 h-5" />
                  Abstracts Guidelines
                </a>
                <a 
                  href="/Manuscript_Guidelines.pdf" 
                  download="Manuscript_Guidelines_Taylor_Francis.pdf"
                  className="inline-flex items-center justify-center gap-2 bg-burgundy text-white px-6 py-3 rounded-lg font-display font-semibold hover:bg-burgundy-light transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <FileText className="w-5 h-5" />
                  Manuscript Guidelines - Taylor & Francis
                </a>
                <a 
                  href="/sample_file.pdf" 
                  download="Manuscript_Guidelines_Wiley.pdf"
                  className="inline-flex items-center justify-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-lg font-display font-semibold hover:bg-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <FileText className="w-5 h-5" />
                  Manuscript Guidelines - Wiley
                </a>
              </div>
            </div>

            {/* Publication Partner */}
            <div className="bg-white border-l-4 border-l-teal border border-slate-200 rounded-lg p-8 shadow-sm text-justify">
              <h3 className="font-display font-bold text-2xl mb-6 text-navy">
                Publication Partner
              </h3>
              <ol className="space-y-4 text-base text-slate-700 leading-relaxed list-decimal list-inside">
                <li>Selected high-quality papers will be published as book chapters in the Scopus-indexed edited volumes Beyond Algorithms: Next-Gen AI for Health, Agriculture, and Humanity or Computational Intelligence & Knowledge-Based Systems: Models, Algorithms & Applications, subject to publisher scope and editorial policies.</li>
              </ol>
            </div>

            {/* Submit Button */}
            <div className="bg-green-900 border border-navy rounded-lg p-8 text-center shadow-sm">
              <Send className="w-12 h-12 text-gold mx-auto mb-4" />
              <h3 className="font-display font-bold text-xl mb-2 text-white">Ready to Submit?</h3>
              <p className="text-white/90 mb-6 text-base">
                Authors are requested to submit the Google Form only after completing the paper submission through Microsoft CMT
              </p>
              <a 
                href="https://forms.gle/YBBhAq98RbPFqEeYA" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gold text-white px-6 py-3 rounded-lg font-display font-semibold hover:bg-gold-dark transition-colors"
              >
                <Send className="w-5 h-5" />
                Submit Paper
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Refund Policy */}
      <div className="max-w-6xl mx-auto mt-12">
        <div className="bg-white border-l-4 border-l-gold border border-warm-grey rounded-lg p-8 shadow-sm">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 bg-gold rounded-lg flex items-center justify-center">
              <AlertCircle className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="font-display font-bold text-2xl text-navy">Refund and Cancellation Policy</h3>
              <p className="text-black text-base">Important policy information</p>
            </div>
          </div>
          <p className="text-black text-base leading-relaxed text-justify">
            Once a candidate has completed registration and paid the applicable registration fee, the registration cannot be cancelled. The registration fee paid for the conference is strictly non-refundable under any circumstances.
          </p>
        </div>
      </div>

      {/* Participation, Presentation & Certificate Rules */}
      <div className="max-w-6xl mx-auto mt-12">
        <div className="bg-white border-l-4 border-l-teal border border-slate-200 rounded-lg p-8 shadow-sm">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 bg-teal-600 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="font-display font-bold text-2xl text-navy">Participation, Presentation & Certificate Rules</h3>
              <p className="text-black text-base">Guidelines for conference participation</p>
            </div>
          </div>
          <ol className="space-y-4 text-base text-black leading-relaxed text-justify list-decimal list-inside">
            <li><strong>Registration & Payment:</strong> All participants, including authors and co-authors, must <strong>register individually and pay the applicable fee</strong> to be eligible for participation and certificates.</li>
            <li><strong>Attendance:</strong> Registered participants must <strong>attend all required conference sessions</strong>; attendance will be recorded.</li>
            <li><strong>Presentation Requirement:</strong> For accepted papers, <strong>at least one registered author must present the paper</strong> in the allotted session and complete the <strong>Q&A</strong>.</li>
            <li><strong>Certificates:</strong> Participation and presentation certificates will be issued <strong>only after verification of registration, payment, attendance, and presentation</strong>.</li>
            <li><strong>Co-authors:</strong> Co-authors will receive certificates <strong>only if they are individually registered, paid, and attend the relevant sessions</strong>.</li>
            <li><strong>Non-Compliance:</strong> <strong>No certificate will be issued</strong> in cases of non-registration, non-payment, non-attendance, or failure to present the paper.</li>
          </ol>
        </div>
      </div>

      {/* Google Form for Participation and Certificate Processing */}
      <div className="max-w-6xl mx-auto mt-12">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl p-8 shadow-xl text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
          <div className="mb-6">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V12zm0 3h.008v.008H6.75V12z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Important: Complete Your Registration</h3>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed mb-8 font-medium">
            After successful paper submission through Microsoft CMT, all authors and participants are required to fill out this Google Form for participation and certificate processing.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSc5sDdnTeLxQxZH_eJ015BUh22GHEhYGw3fwe9riN-6y9F4aQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-10 py-5 rounded-xl font-display font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 text-xl transform hover:-translate-y-2 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75V6A2.25 2.25 0 0015 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25h9A2.25 2.25 0 0017.25 18v-.75M15.75 12h5.25m0 0l-2.25-2.25m2.25 2.25l-2.25 2.25" />
            </svg>
            Fill Google Form Now
          </a>
        </div>
      </div>

      {/* CMT Acknowledgment - Plain HTML, static, outside fancy UI blocks, as per Microsoft rules */}
      <div style={{width:'100%',background:'#fff',color:'#111',textAlign:'center',padding:'32px 0 16px 0',fontSize:'17px',lineHeight:'1.7',boxSizing:'border-box',marginTop:'32px'}}>
        <p style={{margin:0,padding:0,maxWidth:'700px',marginLeft:'auto',marginRight:'auto'}}>The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.</p>
      </div>

      {/* Link to CMT Acknowledgment HTML */}
      <div style={{textAlign:'center',marginTop:'16px'}}>
        <a href="/cmt-acknowledgment.html" target="_blank" rel="noopener noreferrer" style={{color:'#b08a2e',fontWeight:600,textDecoration:'underline',fontSize:'16px',display:'block',marginBottom:'18px'}}>View CMT Acknowledgment</a>
        <a
          href="https://cmt3.research.microsoft.com/ICAITSC2026"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-7 py-3 rounded-full font-display font-semibold shadow-md hover:shadow-xl transition-all duration-200 text-lg transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-300"
          style={{marginTop:'8px', letterSpacing: '0.01em'}}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75V6A2.25 2.25 0 0015 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25h9A2.25 2.25 0 0017.25 18v-.75M15.75 12h5.25m0 0l-2.25-2.25m2.25 2.25l-2.25 2.25" />
          </svg>
          Go to Microsoft CMT Portal
        </a>
      </div>
    </section>
  );
};

export default CallForPapers;
