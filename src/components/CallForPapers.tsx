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
    <section id="call-for-papers" className="py-8 md:py-12 lg:py-16 bg-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <span className="inline-block text-gold font-display font-semibold text-xs md:text-sm uppercase tracking-wider mb-3 md:mb-4">
            Submit Your Research
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 text-navy">
            Camera Ready<span className="text-gold"> Submission</span>
          </h2>
          <div className="w-20 md:w-24 h-1 bg-burgundy mx-auto"></div>
        </div>

        {/* Important Notice */}
        <div className="max-w-6xl mx-auto mb-8 md:mb-12">
          <div className="bg-white border-2 border-gold rounded-lg p-4 md:p-6 lg:p-8 shadow-sm">
            <div className="flex items-start gap-3 md:gap-4">
              <AlertCircle className="w-5 h-5 md:w-6 md:h-6 text-gold mt-0.5 md:mt-1 shrink-0" />
              <p className="text-black text-sm md:text-base leading-relaxed text-justify">
                Authors are invited to submit original and unpublished research articles that are not under review in any other conference or journal. Only accepted and registered papers will be scheduled for presentation. For inclusion in the book proceedings, at least one author of each accepted paper must complete the conference registration. Papers without a registered author will not be considered for publication in the book proceedings.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-stretch">
          {/* Card 1 */}
          <div className="bg-white border-l-4 border-l-gold border border-warm-grey rounded-lg p-4 md:p-6 lg:p-8 shadow-sm flex flex-col h-full">
            <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-gold rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl md:text-2xl text-navy">Submission Requirements</h3>
                <p className="text-black text-sm md:text-base">Basic submission criteria</p>
              </div>
            </div>
            <div className="flex-1">
            <ul className="space-y-3 text-base text-black leading-relaxed text-justify list-disc list-inside">
              <li>The paper must present original, unpublished research related to the conference themes and must not be under review elsewhere.</li>
              <li>Authors are responsible for ensuring originality, validity, integrity, and freedom from conflicts with previously published or concurrently submitted work.</li>
              <li>Papers must be carefully proofread and written in clear, grammatically correct English; poor language quality may lead to outright rejection.</li>
            </ul>
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-white border-l-4 border-l-burgundy border border-warm-grey rounded-lg p-4 md:p-6 lg:p-8 shadow-sm flex flex-col h-full">
            <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-burgundy rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl md:text-2xl text-navy">Manuscript Preparation</h3>
                <p className="text-black text-sm md:text-base">Content and formatting guidelines</p>
              </div>
            </div>
            <div className="flex-1">
            <ul className="space-y-3 text-base text-black leading-relaxed text-justify list-disc list-inside">
              <li>Each manuscript must include an abstract (150-200 words) summarizing objectives, methodology, key results, and conclusions, along with 5-6 keywords.</li>
              <li>Authors are required to submit manuscripts with a maximum length of 3,000 words, formatted strictly as per the official conference template available on the conference website.</li>
              <li>Figures, tables, graphs, and images must be editable (not inserted as pictures), numbered consecutively, referenced properly, and must have a minimum resolution of 300 DPI.</li>
              <li>All mathematical equations must be created using a math equation editor and must not be included as images.</li>
              <li>All references must be cited correctly in the text, and the reference list must include every cited source and only cited sources.</li>
            </ul>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white border-l-4 border-l-gold border border-warm-grey rounded-lg p-4 md:p-6 lg:p-8 shadow-sm flex flex-col h-full">
            <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-gold rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl md:text-2xl text-navy">Review and Publication</h3>
                <p className="text-black text-sm md:text-base">Review process and publication details</p>
              </div>
            </div>
            <div className="flex-1">
            <ul className="space-y-3 text-base text-black leading-relaxed text-justify list-disc list-inside">
              <li>Each paper may have a maximum of four (4) authors, with full affiliations and the corresponding author clearly identified.</li>
              <li>All manuscripts will undergo a double-blind peer-review process; authors must submit revisions within seven (7) days if requested.</li>
              <li>Only papers that are accepted, registered, and presented will be included in the conference proceedings and considered valid for certificates.</li>
              <li>At least one author must present the paper (online/offline as applicable) for it to be officially accepted.</li>
            </ul>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white border-l-4 border-l-burgundy border border-warm-grey rounded-lg p-4 md:p-6 lg:p-8 shadow-sm flex flex-col h-full">
            <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-burgundy rounded-lg flex items-center justify-center">
                <CheckCircle className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl md:text-2xl text-navy">Ethical Standards</h3>
                <p className="text-black text-sm md:text-base">Academic integrity guidelines</p>
              </div>
            </div>
            <div className="flex-1">
            <ul className="space-y-3 text-base text-black leading-relaxed text-justify list-disc list-inside">
              <li>Authors must adhere to all ethical guidelines, including plagiarism policies, proper citations, and respecting intellectual property.</li>
              <li>Authors must ensure all figures, tables, and data representations are accurate, clear, and scientifically valid.</li>
            </ul>
            </div>
          </div>

          {/* Card 5 */}
          <div className="bg-white border-l-4 border-l-gold border border-warm-grey rounded-lg p-4 md:p-6 lg:p-8 shadow-sm flex flex-col h-full">
            <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-gold rounded-lg flex items-center justify-center">
                <Send className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl md:text-2xl text-navy">Submission</h3>
                <p className="text-black text-sm md:text-base">Paper submission guidelines</p>
              </div>
            </div>
            <div className="flex-1">
            <p className="text-black text-base leading-relaxed text-justify">
              All paper submissions must be made ONLY through the Microsoft CMT submission portal. Authors who are new to Microsoft CMT must create a login account before submitting. Please upload your manuscript in Microsoft Word/PDF format strictly following the conference template. Email submissions will NOT be accepted under any circumstances. Only papers submitted through Microsoft CMT will be considered for review, acceptance, and publication.
            </p>
            </div>
          </div>

          {/* Card 6 */}
          <div className="bg-white border-l-4 border-l-burgundy border border-warm-grey rounded-lg p-4 md:p-6 lg:p-8 shadow-sm flex flex-col h-full">
            <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-burgundy rounded-lg flex items-center justify-center">
                <CheckCircle className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl md:text-2xl text-navy">Publication Ethics</h3>
                <p className="text-black text-sm md:text-base">Ethical guidelines for publication</p>
              </div>
            </div>
            <div className="flex-1">
            <ol className="space-y-3 text-base text-black leading-relaxed text-justify list-decimal list-inside">
              <li>Authors must strictly follow the publication ethics and academic integrity standards before submitting their manuscripts.</li>
              <li>The manuscript must have a plagiarism ratio below 10% as checked through Turnitin.</li>
              <li>AI-generated content is not permitted; the manuscript must contain less than 2% AI-detected content.</li>
              <li>Any paper exceeding the permitted plagiarism or AI-content limits will be outright rejected without review.</li>
              <li>Authors must upload both Plagiarism Report and AI-Content Detection Report along with the paper. Submissions without these reports will not be considered.</li>
              <li>An additional plagiarism and AI-content screening will be performed by the conference committee, and discrepancies will lead to rejection.</li>
            </ol>
            </div>
          </div>

          {/* Card 7 */}
          <div className="bg-white border-l-4 border-l-gold border border-warm-grey rounded-lg p-4 md:p-6 lg:p-8 shadow-sm flex flex-col h-full">
            <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-gold rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl md:text-2xl text-navy">Initial Submission Rules</h3>
                <p className="text-black text-sm md:text-base">Guidelines for first-time submission</p>
              </div>
            </div>
            <ol className="space-y-4 text-base text-black leading-relaxed text-justify list-decimal list-inside">
              <li>
                <strong>Upload three separate files:</strong>
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>Main Paper</li>
                  <li>Plagiarism Report</li>
                  <li>AI Content Detection Report</li>
                </ul>
              </li>
              <li><strong>ZIP/RAR files are not allowed.</strong></li>
              <li>
                <strong>Mandatory file naming format:</strong>
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>MainPaper.docx</li>
                  <li>MainPaper.pdf</li>
                  <li>PlagiarismReport.pdf</li>
                  <li>AI Report.pdf</li>
                </ul>
              </li>
            </ol>
          </div>
           {/* Presentation Guidelines */}
          <div className="bg-white border-l-4 border-l-purple-500 border border-warm-grey rounded-lg p-4 md:p-6 lg:p-8 shadow-sm flex flex-col h-full">
            <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-purple-600 rounded-lg flex items-center justify-center">
                <Send className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl md:text-2xl text-navy">Presentation Guidelines</h3>
                <p className="text-black text-sm md:text-base">Guidelines for paper presentation</p>
              </div>
            </div>
            <div className="flex-1">
              <ul className="space-y-3 text-sm md:text-base text-black leading-relaxed text-justify list-disc list-inside">
                <li>Presentations must be prepared strictly using the official conference PPT template and must follow the structure defined in the template.</li>
                <li>Only registered authors are permitted to present papers.</li>
                <li>At least one author of each accepted paper must present the paper.</li>
                <li>Presentations may be delivered in physical or online (hybrid) mode, as allotted by the organizing committee.</li>
                <li>The presenting author must attend the entire session, including the question-and-answer segment.</li>
                <li>Certificates of Presentation will be issued only to authors who present the paper.</li>
                <li>Failure to present may result in exclusion from the conference proceedings and certification.</li>
                <li>The presentation schedule and session details will be communicated in advance.</li>
                <li>Authors must strictly adhere to the allocated presentation time.</li>
              </ul>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mt-6">
              <a 
                href="/Presentation_Template.pptx" 
                download="Presentation_Template.pptx"
                className="inline-flex items-center justify-center gap-2 bg-purple-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg font-display font-semibold hover:bg-purple-700 transition-colors text-sm md:text-base"
              >
                <FileText className="w-4 h-4 md:w-5 md:h-5" />
                PPT Template
              </a>
              <a 
                href="/Presentation_Guidelines.pdf" 
                download="Presentation_Template.pdf"
                className="inline-flex items-center justify-center gap-2 bg-indigo-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg font-display font-semibold hover:bg-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm md:text-base"
              >
                <FileText className="w-4 h-4 md:w-5 md:h-5" />
                PDF Template
              </a>
            </div>
          </div>
          {/* Card 8 */}
          <div className="bg-white border-l-4 border-l-burgundy border border-warm-grey rounded-lg p-4 md:p-6 lg:p-8 shadow-sm flex flex-col h-full">
            <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-burgundy rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl md:text-2xl text-navy">Final Submission Requirements</h3>
                <p className="text-black text-sm md:text-base">After review process</p>
              </div>
            </div>
            <p className="text-black text-base leading-relaxed mb-6 font-medium text-left">
              After addressing the reviewers' comments, upload a single .zip folder containing the following documents:
            </p>
            <ol className="space-y-4 text-base text-black leading-relaxed text-left list-decimal list-inside pl-6">
              <li className="mb-3 leading-relaxed"><strong>Revised Camera-Ready Paper (PDF)</strong> — Paper_ID_No_Revised_Camera_Ready.pdf</li>
              <li className="mb-3 leading-relaxed"><strong>Source File (Word or LaTeX)</strong> — Word format: Paper_ID_No_Revised_Camera_Ready.docx</li>
              <li className="mb-3 leading-relaxed"><strong>Response to Reviewers</strong> — Paper_ID_No_Reviewer_Response.docx</li>
              <li className="mb-3 leading-relaxed"><strong>Proof of Payment </strong> — Paper_ID_No_Payment_Proof.pdf</li>
              <li className="mb-3 leading-relaxed"><strong>Copyright Form</strong> — Paper_ID_No_Copyright_Form.pdf</li>
            </ol>
          </div>

         
          {/* Card 9 */}
          <div className="bg-white border-l-4 border-l-teal border border-slate-700 rounded-lg p-4 md:p-6 lg:p-8 shadow-sm flex flex-col h-full">
            <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-teal-600 rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl md:text-2xl text-navy">Publication Partner</h3>
                <p className="text-black text-sm md:text-base">Publication opportunities</p>
              </div>
            </div>
            <ol className="space-y-4 text-base text-black leading-relaxed text-justify list-decimal list-inside">
              <li>Selected high-quality papers will be published as book chapters in the Scopus-indexed edited volumes Beyond Algorithms: Next-Gen AI for Health, Agriculture, and Humanity or Computational Intelligence & Knowledge-Based Systems: Models, Algorithms & Applications, subject to publisher scope and editorial policies.</li>
            </ol>
          </div>

        </div>

        {/* Centered Paper Submission Format Section */}
        <div className="flex justify-center mt-8 md:mt-12">
          <div className="w-full max-w-4xl">
            {/* Card 10 */}
            <div className="bg-white border-l-4 border-l-teal border border-slate-700 rounded-lg p-4 md:p-6 lg:p-8 shadow-sm">
              <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-teal-600 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl md:text-2xl text-navy">Paper Submission Format</h3>
                  <p className="text-black text-sm md:text-base">Download guidelines and templates</p>
                </div>
              </div>
              <p className="text-black mb-6 leading-relaxed text-center md:text-left">
                Please download the manuscript and abstract guidelines for proper formatting and submission requirements.
              </p>

              {/* Submission Notice */}
              <div role="status" aria-live="polite" className="bg-amber-50 border-2 border-amber-400 rounded-lg p-3 md:p-5 mb-4 md:mb-6 shadow-md animate-pulse">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-amber-600 rounded-full flex items-center justify-center shrink-0 text-white font-bold">
                    ⚠
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-lg md:text-xl lg:text-2xl text-amber-800 mb-1">
                      Submission & Post-Review Formatting
                    </h4>
                    <p className="text-amber-700 font-semibold leading-relaxed text-justify text-sm md:text-base">
                      Initially, all papers must be submitted in accordance with the Taylor & Francis manuscript guidelines. After the review process and upon receipt of the reviewers' decision, authors of accepted papers will be required to revise and format their manuscripts as per the specific submission guidelines of <span className="font-extrabold text-amber-900">Taylor & Francis</span> or <span className="font-extrabold text-amber-900">World Scientific / Wiley</span>, as applicable.
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                <a 
                  href="/Abstracts_Guidelines.pdf" 
                  download="Abstracts_Guidelines.pdf"
                  className="inline-flex items-center justify-center gap-2 bg-gold text-white px-4 md:px-6 py-2 md:py-3 rounded-lg font-display font-semibold hover:bg-gold-dark transition-colors text-sm md:text-base"
                >
                  <FileText className="w-4 h-4 md:w-5 md:h-5" />
                  Abstracts Guidelines
                </a>
                <a 
                  href="/Manuscript_Guidelines.pdf" 
                  download="Manuscript_Guidelines_Taylor_Francis.pdf"
                  className="inline-flex items-center justify-center gap-2 bg-burgundy text-white px-4 md:px-6 py-2 md:py-3 rounded-lg font-display font-semibold hover:bg-burgundy-light transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm md:text-base"
                >
                  <FileText className="w-4 h-4 md:w-5 md:h-5" />
                  Manuscript Guidelines - Taylor & Francis
                </a>
                <a 
                  href="/sample_file.pdf" 
                  download="Manuscript_Guidelines_Wiley.pdf"
                  className="inline-flex items-center justify-center gap-2 bg-emerald-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg font-display font-semibold hover:bg-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm md:text-base"
                >
                  <FileText className="w-4 h-4 md:w-5 md:h-5" />
                  Manuscript Guidelines - Wiley
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Refund Policy */}
      <div className="max-w-6xl mx-auto mt-8 md:mt-12">
        <div className="bg-white border-l-4 border-l-gold border border-warm-grey rounded-lg p-4 md:p-6 lg:p-8 shadow-sm">
          <div className="text-center mb-4 md:mb-6">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-gold rounded-lg flex items-center justify-center mx-auto mb-3 md:mb-4">
              <AlertCircle className="w-6 h-6 md:w-7 md:h-7 text-white" />
            </div>
            <h3 className="font-display font-bold text-xl md:text-2xl text-navy">Refund and Cancellation Policy</h3>
            <p className="text-black text-sm md:text-base">Important policy information</p>
          </div>
          <p className="text-black text-sm md:text-base leading-relaxed text-justify">
            Once a candidate has completed registration and paid the applicable registration fee, the registration cannot be cancelled. The registration fee paid for the conference is strictly non-refundable under any circumstances.
          </p>
        </div>
      </div>

      {/* Participation, Presentation & Certificate Rules */}
      <div className="max-w-6xl mx-auto mt-8 md:mt-12">
        <div className="bg-white border-l-4 border-l-teal border border-slate-700 rounded-lg p-4 md:p-6 lg:p-8 shadow-sm">
          <div className="text-center mb-4 md:mb-6">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-teal-600 rounded-lg flex items-center justify-center mx-auto mb-3 md:mb-4">
              <CheckCircle className="w-6 h-6 md:w-7 md:h-7 text-white" />
            </div>
            <h3 className="font-display font-bold text-xl md:text-2xl text-navy">Rules for Certificate</h3>
            <p className="text-black text-sm md:text-base">Guidelines for conference certification</p>
          </div>
          <ol className="space-y-3 md:space-y-4 text-sm md:text-base text-black leading-relaxed text-justify list-decimal list-inside">
            <li><strong>Registration & Payment:</strong> All participants, including authors and co-authors, must register individually and pay the applicable fee to be eligible for participation and certificates.</li>
            <li><strong>Attendance:</strong> Registered participants must attend all required conference sessions; attendance will be recorded.</li>
            <li><strong>Presentation Requirement:</strong> For accepted papers, at least one registered author must present the paper in the allotted session and complete the Q&A.</li>
            <li><strong>Certificates:</strong> Participation and presentation certificates will be issued only after verification of registration, payment, attendance, and presentation.</li>
            <li><strong>Co-authors:</strong> Co-authors will receive certificates only if they are individually registered, paid, and attend the relevant sessions.</li>
            <li><strong>Non-Compliance:</strong> No certificate will be issued in cases of non-registration, non-payment, non-attendance, or failure to present the paper.</li>
          </ol>
        </div>
      </div>

     
      {/* CMT Acknowledgment - Plain HTML, static, outside fancy UI blocks, as per Microsoft rules */}
      <div style={{width:'100%',background:'#fff',color:'#111',textAlign:'center',padding:'24px 16px 12px 16px',fontSize:'15px',lineHeight:'1.7',boxSizing:'border-box',marginTop:'24px'}}>
        <p style={{margin:0,padding:0,maxWidth:'700px',marginLeft:'auto',marginRight:'auto'}}>The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.</p>
      </div>

      {/* Link to CMT Acknowledgment HTML */}
      <div style={{textAlign:'center',marginTop:'12px'}}>
        <a href="/cmt-acknowledgment.html" target="_blank" rel="noopener noreferrer" style={{color:'#b08a2e',fontWeight:600,textDecoration:'underline',fontSize:'14px',display:'block',marginBottom:'14px'}}>View CMT Acknowledgment</a>
        <a
          href="https://cmt3.research.microsoft.com/ICAITSC2026"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-5 md:px-7 py-2 md:py-3 rounded-full font-display font-semibold shadow-md hover:shadow-xl transition-all duration-200 text-sm md:text-lg transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-300"
          style={{marginTop:'6px', letterSpacing: '0.01em'}}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75V6A2.25 2.25 0 0015 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25h9A2.25 2.25 0 0017.25 18v-.75M15.75 12h5.25m0 0l-2.25-2.25m2.25 2.25l-2.25 2.25" />
          </svg>
          Go to Microsoft CMT Portal
        </a>
      </div>
      {/* Card 11 */}
      <div className="max-w-6xl mx-auto mt-8 md:mt-12">
        <div className="bg-green-900 border border-navy rounded-lg p-4 md:p-6 lg:p-8 text-center shadow-sm">
          <Send className="w-10 h-10 md:w-12 md:h-12 text-gold mx-auto mb-3 md:mb-4" />
          <h3 className="font-display font-bold text-lg md:text-xl mb-2 text-white">Ready to Submit?</h3>
          <p className="text-white/90 mb-4 md:mb-6 text-sm md:text-base">
          After paper acceptance, authors are requested to submit the Google Form only after receiving the official acceptance notification, for participation confirmation and certificate processing.          </p>
          <a
            href="https://forms.gle/fBEX117QF3QYBgd7A"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gold text-white-900 px-4 md:px-6 py-2 md:py-3 rounded-lg font-display font-semibold hover:bg-gold-dark transition-colors text-sm md:text-base"
          >
            <Send className="w-4 h-4 md:w-5 md:h-5" />
            Fill Google Form
          </a>
        </div>
      </div>
    </section>
    
  );
};

export default CallForPapers;
