import { FileText, CheckCircle, AlertCircle, Send, Home } from "lucide-react";

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-7xl mx-auto">
          {/* Card 1 */}
          <div className="bg-white border-l-4 border-l-gold border border-warm-grey rounded-xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gold rounded-xl flex items-center justify-center shadow-md">
                <FileText className="w-7 h-7 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-display font-bold text-2xl text-navy mb-1">Submission Requirements</h3>
                <p className="text-gray-600 text-sm">Basic submission criteria</p>
              </div>
            </div>
            <div className="flex-1 bg-gray-50 rounded-lg p-5">
            <ul className="space-y-4 text-sm md:text-base text-gray-800 leading-relaxed list-disc list-outside ml-5">
              <li>The paper must present original, unpublished research related to the conference themes and must not be under review elsewhere.</li>
              <li>Authors are responsible for ensuring originality, validity, integrity, and freedom from conflicts with previously published or concurrently submitted work.</li>
              <li>Papers must be carefully proofread and written in clear, grammatically correct English; poor language quality may lead to outright rejection.</li>
            </ul>
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-white border-l-4 border-l-burgundy border border-warm-grey rounded-xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-burgundy rounded-xl flex items-center justify-center shadow-md">
                <FileText className="w-7 h-7 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-display font-bold text-2xl text-navy mb-1">Manuscript Preparation</h3>
                <p className="text-gray-600 text-sm">Content and formatting guidelines</p>
              </div>
            </div>
            <div className="flex-1 bg-gray-50 rounded-lg p-5">
            <ul className="space-y-4 text-sm md:text-base text-gray-800 leading-relaxed list-disc list-outside ml-5">
              <li>Each manuscript must include an abstract (150-200 words) summarizing objectives, methodology, key results, and conclusions, along with 5-6 keywords.</li>
              <li>Authors are required to submit manuscripts with a maximum length of 3,000 words, formatted strictly as per the official conference template available on the conference website.</li>
              <li>Figures, tables, graphs, and images must be editable (not inserted as pictures), numbered consecutively, referenced properly, and must have a minimum resolution of 300 DPI.</li>
              <li>All mathematical equations must be created using a math equation editor and must not be included as images.</li>
              <li>All references must be cited correctly in the text, and the reference list must include every cited source and only cited sources.</li>
            </ul>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white border-l-4 border-l-gold border border-warm-grey rounded-xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gold rounded-xl flex items-center justify-center shadow-md">
                <FileText className="w-7 h-7 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-display font-bold text-2xl text-navy mb-1">Review and Publication</h3>
                <p className="text-gray-600 text-sm">Review process and publication details</p>
              </div>
            </div>
            <div className="flex-1 bg-gray-50 rounded-lg p-5">
            <ul className="space-y-4 text-sm md:text-base text-gray-800 leading-relaxed list-disc list-outside ml-5">
              <li>Each paper may have a maximum of four (4) authors, with full affiliations and the corresponding author clearly identified.</li>
              <li>All manuscripts will undergo a double-blind peer-review process; authors must submit revisions within seven (7) days if requested.</li>
              <li>Only papers that are accepted, registered, and presented will be included in the conference proceedings and considered valid for certificates.</li>
              <li>At least one author must present the paper (online/offline as applicable) for it to be officially accepted.</li>
            </ul>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white border-l-4 border-l-burgundy border border-warm-grey rounded-xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-burgundy rounded-xl flex items-center justify-center shadow-md">
                <CheckCircle className="w-7 h-7 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-display font-bold text-2xl text-navy mb-1">Ethical Standards</h3>
                <p className="text-gray-600 text-sm">Academic integrity guidelines</p>
              </div>
            </div>
            <div className="flex-1 bg-gray-50 rounded-lg p-5">
            <ul className="space-y-4 text-sm md:text-base text-gray-800 leading-relaxed list-disc list-outside ml-5">
              <li>Authors must adhere to all ethical guidelines, including plagiarism policies, proper citations, and respecting intellectual property.</li>
              <li>Authors must ensure all figures, tables, and data representations are accurate, clear, and scientifically valid.</li>
            </ul>
            </div>
          </div>

          {/* Card 5 */}
          <div className="bg-white border-l-4 border-l-gold border border-warm-grey rounded-xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gold rounded-xl flex items-center justify-center shadow-md">
                <Send className="w-7 h-7 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-display font-bold text-2xl text-navy mb-1">Submission</h3>
                <p className="text-gray-600 text-sm">Paper submission guidelines</p>
              </div>
            </div>
            <div className="flex-1 bg-gray-50 rounded-lg p-5">
            <p className="text-sm md:text-base text-gray-800 leading-relaxed">
              All paper submissions must be made ONLY through the Microsoft CMT submission portal. Authors who are new to Microsoft CMT must create a login account before submitting. Please upload your manuscript in Microsoft Word/PDF format strictly following the conference template. Email submissions will NOT be accepted under any circumstances. Only papers submitted through Microsoft CMT will be considered for review, acceptance, and publication.
            </p>
            </div>
          </div>

          {/* Card 6 */}
          <div className="bg-white border-l-4 border-l-burgundy border border-warm-grey rounded-xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-burgundy rounded-xl flex items-center justify-center shadow-md">
                <CheckCircle className="w-7 h-7 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-display font-bold text-2xl text-navy mb-1">Publication Ethics</h3>
                <p className="text-gray-600 text-sm">Ethical guidelines for publication</p>
              </div>
            </div>
            <div className="flex-1 bg-gray-50 rounded-lg p-5">
            <ol className="space-y-4 text-sm md:text-base text-gray-800 leading-relaxed list-decimal list-outside ml-5">
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
          <div className="bg-white border-l-4 border-l-gold border border-warm-grey rounded-xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gold rounded-xl flex items-center justify-center shadow-md">
                <FileText className="w-7 h-7 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-display font-bold text-2xl text-navy mb-1">Initial Submission Rules</h3>
                <p className="text-gray-600 text-sm">Guidelines for first-time submission</p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-5">
            <ol className="space-y-4 text-sm md:text-base text-gray-800 leading-relaxed list-decimal list-outside ml-5">
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
          </div>
           {/* Presentation Guidelines */}
          <div className="bg-white border-l-4 border-l-purple-500 border border-warm-grey rounded-xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-purple-600 rounded-xl flex items-center justify-center shadow-md">
                <Send className="w-7 h-7 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-display font-bold text-2xl text-navy mb-1">Presentation Guidelines</h3>
                <p className="text-gray-600 text-sm">Guidelines for paper presentation</p>
              </div>
            </div>
            <div className="flex-1 bg-gray-50 rounded-lg p-5">
              <ul className="space-y-4 text-sm md:text-base text-gray-800 leading-relaxed list-disc list-outside ml-5">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 px-5">
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
          {/* Card 8 - Taylor & Francis Submission */}
          <div className="bg-gradient-to-br from-orange-50 via-white to-orange-50 border-l-4 border-l-orange-600 border-2 border-orange-200 rounded-lg p-4 md:p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
            <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-orange-600 to-orange-700 rounded-xl flex items-center justify-center shadow-lg">
                <FileText className="w-7 h-7 md:w-8 md:h-8 text-white" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl md:text-2xl lg:text-3xl text-orange-900">
                  Final Camera-Ready Submission
                </h3>
                <p className="text-orange-700 text-sm md:text-base font-semibold bg-orange-100 px-3 py-1 rounded-full inline-block mt-1">
                  Taylor & Francis
                </p>
              </div>
            </div>
            <div className="flex-1">
              <p className="text-black text-base leading-relaxed mb-6 font-medium bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500">
                All accepted papers recommended for Taylor & Francis publication must submit the final camera-ready package. Upload <strong>one (1) .zip folder</strong> containing:
              </p>
              <ol className="space-y-3 text-sm md:text-base text-black leading-relaxed list-decimal pl-6">
                <li className="mb-2">
                  <strong className="text-orange-800">Revised Camera-Ready Paper (PDF Format)</strong><br/>
                  <code className="text-xs bg-gray-100 px-2 py-1 rounded mt-1 inline-block">Paper_ID_No_Revised_Camera_Ready.pdf</code>
                </li>
                <li className="mb-2">
                  <strong className="text-orange-800">Source File (Word Format) — Compulsory</strong><br/>
                  <code className="text-xs bg-gray-100 px-2 py-1 rounded mt-1 inline-block">Paper_ID_No_Revised_Camera_Ready.docx</code>
                </li>
                <li className="mb-2">
                  <strong className="text-orange-800">Response to Reviewers</strong><br/>
                  <code className="text-xs bg-gray-100 px-2 py-1 rounded mt-1 inline-block">Paper_ID_No_Reviewer_Response.docx</code><br/>
                  <span className="text-xs text-gray-600">Point-wise response to each reviewer comment</span>
                </li>
                <li className="mb-2">
                  <strong className="text-orange-800">Proof of Payment</strong><br/>
                  <code className="text-xs bg-gray-100 px-2 py-1 rounded mt-1 inline-block">Paper_ID_No_Payment_Proof.pdf</code>
                </li>
                <li className="mb-2">
                  <strong className="text-orange-800">Academic Integrity Committee (AIC) Form — Compulsory</strong><br/>
                  <code className="text-xs bg-gray-100 px-2 py-1 rounded mt-1 inline-block">Paper_ID_No_AIC.pdf</code><br/>
                  <span className="text-xs text-red-600 font-semibold">Submission without AIC form will not be processed</span>
                </li>
                <li className="mb-2">
                  <strong className="text-orange-800">Plagiarism Report — Mandatory</strong><br/>
                  <code className="text-xs bg-gray-100 px-2 py-1 rounded mt-1 inline-block">Paper_ID_No_Plagiarism_Report.pdf</code><br/>
                  <span className="text-xs text-gray-600">Similarity index must meet acceptable standards</span>
                </li>
                <li className="mb-2">
                  <strong className="text-orange-800">AI Content Usage Report — Mandatory</strong><br/>
                  <code className="text-xs bg-gray-100 px-2 py-1 rounded mt-1 inline-block">Paper_ID_No_AI_Report.pdf</code><br/>
                  <span className="text-xs text-gray-600">Declare AI tool usage</span>
                </li>
              </ol>
              <div className="mt-6 p-4 bg-red-50 border-l-4 border-red-500 rounded">
                <p className="text-sm text-red-800 font-semibold">⚠️ Important Instructions:</p>
                <ul className="text-xs text-red-700 mt-2 space-y-1 list-disc pl-5">
                  <li>Follow exact naming convention</li>
                  <li>Only one .zip file per paper ID</li>
                  <li>Incomplete submissions = processing delays/rejection</li>
                  <li>Must comply with Taylor & Francis template</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Card 9 - Wiley Submission */}
          <div className="bg-gradient-to-br from-emerald-50 via-white to-emerald-50 border-l-4 border-l-emerald-600 border-2 border-emerald-200 rounded-lg p-4 md:p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
            <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-xl flex items-center justify-center shadow-lg">
                <FileText className="w-7 h-7 md:w-8 md:h-8 text-white" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl md:text-2xl lg:text-3xl text-emerald-900">
                  Final Camera-Ready Submission
                </h3>
                <p className="text-emerald-700 text-sm md:text-base font-semibold bg-emerald-100 px-3 py-1 rounded-full inline-block mt-1">
                  Wiley Book Chapter
                </p>
              </div>
            </div>
            <div className="flex-1">
              <p className="text-black text-base leading-relaxed mb-6 font-medium bg-teal-50 p-4 rounded-lg border-l-4 border-teal-500">
                All accepted papers recommended for Wiley Book Chapter publication must submit the final camera-ready package. Upload <strong>one (1) .zip folder</strong> containing:
              </p>
              <ol className="space-y-3 text-sm md:text-base text-black leading-relaxed list-decimal pl-6">
                <li className="mb-2">
                  <strong className="text-emerald-800">Revised Camera-Ready Paper (PDF Format)</strong><br/>
                  <code className="text-xs bg-gray-100 px-2 py-1 rounded mt-1 inline-block">Paper_ID_No_Revised_Camera_Ready.pdf</code>
                </li>
                <li className="mb-2">
                  <strong className="text-emerald-800">Source File (Word Format) — Compulsory</strong><br/>
                  <code className="text-xs bg-gray-100 px-2 py-1 rounded mt-1 inline-block">Paper_ID_No_Revised_Camera_Ready.docx</code>
                </li>
                <li className="mb-2">
                  <strong className="text-emerald-800">Response to Reviewers</strong><br/>
                  <code className="text-xs bg-gray-100 px-2 py-1 rounded mt-1 inline-block">Paper_ID_No_Reviewer_Response.docx</code><br/>
                  <span className="text-xs text-gray-600">Point-wise response to each reviewer comment</span>
                </li>
                <li className="mb-2">
                  <strong className="text-emerald-800">Proof of Payment</strong><br/>
                  <code className="text-xs bg-gray-100 px-2 py-1 rounded mt-1 inline-block">Paper_ID_No_Payment_Proof.pdf</code>
                </li>
                <li className="mb-2">
                  <strong className="text-emerald-800">Copyright Form — Compulsory</strong><br/>
                  <code className="text-xs bg-gray-100 px-2 py-1 rounded mt-1 inline-block">Paper_ID_No_Copyright_Form.pdf</code><br/>
                  <span className="text-xs text-red-600 font-semibold">Submission without copyright form will not be processed</span>
                </li>
                <li className="mb-2">
                  <strong className="text-emerald-800">Plagiarism Report — Mandatory</strong><br/>
                  <code className="text-xs bg-gray-100 px-2 py-1 rounded mt-1 inline-block">Paper_ID_No_Plagiarism_Report.pdf</code><br/>
                  <span className="text-xs text-gray-600">Similarity index must meet acceptable standards</span>
                </li>
                <li className="mb-2">
                  <strong className="text-emerald-800">AI Content Usage Report — Mandatory</strong><br/>
                  <code className="text-xs bg-gray-100 px-2 py-1 rounded mt-1 inline-block">Paper_ID_No_AI_Report.pdf</code><br/>
                  <span className="text-xs text-gray-600">Declare AI tool usage</span>
                </li>
              </ol>
              <div className="mt-6 p-4 bg-red-50 border-l-4 border-red-500 rounded">
                <p className="text-sm text-red-800 font-semibold">⚠️ Important Instructions:</p>
                <ul className="text-xs text-red-700 mt-2 space-y-1 list-disc pl-5">
                  <li>Follow exact naming convention</li>
                  <li>Only one .zip file per Paper ID</li>
                  <li>Incomplete submissions = processing delays/rejection</li>
                  <li>Must comply with Wiley template and formatting</li>
                </ul>
              </div>
            
            </div>
          </div>

          {/* Card 10 - DOI, Copyright & Compliance */}
          <div className="lg:col-span-2 flex justify-center">
            <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 border-l-4 border-l-blue-600 border-2 border-blue-200 rounded-lg p-4 md:p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full w-full max-w-4xl">
            <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center shadow-lg">
                <CheckCircle className="w-7 h-7 md:w-8 md:h-8 text-white" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl md:text-2xl lg:text-3xl text-blue-900">
                  DOI, Copyright, Payment & Compliance
                </h3>
                <p className="text-blue-700 text-sm md:text-base font-semibold bg-blue-100 px-3 py-1 rounded-full inline-block mt-1">
                  All Publications
                </p>
              </div>
            </div>
            <div className="flex-1">
              <p className="text-black text-base leading-relaxed mb-6 font-medium bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
                All accepted papers must complete required compliance documentation for final processing and DOI assignment. Submit the following <strong>mandatory documents</strong>:
              </p>
              <ol className="space-y-3 text-sm md:text-base text-black leading-relaxed list-decimal pl-6">
                <li className="mb-2">
                  <strong className="text-blue-800">DOI Metadata Template — Mandatory</strong><br/>
                  <code className="text-xs bg-gray-100 px-2 py-1 rounded mt-1 inline-block">Paper_ID_No_DOI_Metadata.pdf</code><br/>
                  <span className="text-xs text-gray-600">Used for DOI registration and indexing. Cannot be changed after publication.</span>
                </li>
                <li className="mb-2">
                  <strong className="text-blue-800">Copyright Form — Mandatory</strong><br/>
                  <code className="text-xs bg-gray-100 px-2 py-1 rounded mt-1 inline-block">Paper_ID_No_Copyright_Form.pdf</code><br/>
                  <span className="text-xs text-gray-600">Official publisher copyright form must be signed. Required for DOI assignment.</span>
                </li>
                <li className="mb-2">
                  <strong className="text-blue-800">Proof of Payment — Mandatory</strong><br/>
                  <code className="text-xs bg-gray-100 px-2 py-1 rounded mt-1 inline-block">Paper_ID_No_Payment_Proof.pdf</code><br/>
                  <span className="text-xs text-gray-600">Financial clearance required before production processing</span>
                </li>
                <li className="mb-2">
                  <strong className="text-blue-800">Plagiarism Report — Mandatory</strong><br/>
                  <code className="text-xs bg-gray-100 px-2 py-1 rounded mt-1 inline-block">Paper_ID_No_Plagiarism_Report.pdf</code><br/>
                  <span className="text-xs text-gray-600">Similarity index must meet academic standards</span>
                </li>
                <li className="mb-2">
                  <strong className="text-blue-800">AI Content Usage Report — Mandatory</strong><br/>
                  <code className="text-xs bg-gray-100 px-2 py-1 rounded mt-1 inline-block">Paper_ID_No_AI_Report.pdf</code><br/>
                  <span className="text-xs text-gray-600">Declare AI tool usage for writing, editing, analysis, etc.</span>
                </li>
              </ol>
              <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">
                <p className="text-sm text-yellow-900 font-semibold">📌 Publisher Processing Note:</p>
                <ul className="text-xs text-yellow-800 mt-2 space-y-1 list-disc pl-5">
                  <li>DOI assignment by respective publisher after production initiation</li>
                  <li>Metadata must be finalized at camera-ready stage</li>
                  <li>All documents compulsory for both Taylor & Francis and Wiley</li>
                  <li>Files must follow exact naming convention</li>
                  <li>Submit inside single .zip file with camera-ready package</li>
                </ul>
              </div>
              
            </div>
            </div>
          </div>

          {/* All Google Forms Section */}
          <div className="col-span-1 lg:col-span-2">
            <div className="text-center mb-8 md:mb-10">
              <h3 className="font-display font-bold text-3xl md:text-4xl text-navy mb-3">
                Conference <span className="text-gold">Forms</span>
              </h3>
              <p className="text-gray-600 text-base md:text-lg">Complete the forms as applicable</p>
              <div className="w-24 h-1 bg-gold mx-auto mt-4"></div>
            </div>
        
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Publication Willingness Form */}
          <div className="bg-white border-2 border-blue-200 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col overflow-hidden min-h-[520px]">
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 text-center border-b-2 border-blue-100">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl mb-4 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h4 className="font-display font-bold text-xl text-blue-900 mb-2 leading-tight">
                Publication Willingness
              </h4>
              <p className="text-gray-600 text-sm font-medium">TAYLOR & FRANCIS BOOK CHAPTER</p>
            </div>
            
            <div className="flex flex-col items-center justify-between p-6 flex-1">
              <div className="w-full flex flex-col items-center gap-4">
                <div className="bg-gradient-to-br from-gray-50 to-white p-5 rounded-2xl shadow-md border-2 border-blue-100 hover:border-blue-400 hover:scale-105 transition-all duration-300">
                  <img 
                    src="/publication_willingness_form.png" 
                    alt="Publication Willingness Form QR" 
                    className="w-40 h-40 object-contain"
                  />
                </div>
                <p className="text-sm text-gray-700 font-bold">Scan QR Code</p>
                
                <div className="flex items-center gap-3 w-full my-2">
                  <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>
                  <span className="text-blue-700 font-bold text-sm px-3 py-1 bg-blue-50 rounded-full">OR</span>
                  <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>
                </div>
              </div>
              
              <a
                href="https://forms.gle/Xbhaofcy8pC5K8zXA"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-5 py-3.5 rounded-xl font-display font-bold text-base hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 active:scale-95"
              >
                <Send className="w-5 h-5" />
                <span>Fill Form Now</span>
              </a>
            </div>
          </div>

          {/* Publication Willingness (WILEY PUBLICATION) Form */}
          <div className="bg-white border-2 border-emerald-200 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col overflow-hidden min-h-[520px]">
            <div className="bg-gradient-to-br from-emerald-50 to-white p-6 text-center border-b-2 border-emerald-100">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl mb-4 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h4 className="font-display font-bold text-xl text-emerald-900 mb-2 leading-tight">
                Publication Willingness
              </h4>
              <p className="text-gray-600 text-sm font-medium">WILEY PUBLICATION</p>
            </div>
            
            <div className="flex flex-col items-center justify-between p-6 flex-1">
              <div className="w-full flex flex-col items-center gap-4">
                <div className="bg-gradient-to-br from-gray-50 to-white p-5 rounded-2xl shadow-md border-2 border-emerald-100 hover:border-emerald-400 hover:scale-105 transition-all duration-300">
                  <div className="w-40 h-40 flex items-center justify-center bg-emerald-50 rounded-xl">
                     <img 
                    src="/WILEY_PUBLICATION_form.png" 
                    alt="WILEY PUBLICATION Form QR" 
                    className="w-40 h-40 object-contain"
                  />
                  </div>
                </div>
                <p className="text-sm text-gray-700 font-bold">Scan QR Code</p>
                
                <div className="flex items-center gap-3 w-full my-2">
                  <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-emerald-300 to-transparent"></div>
                  <span className="text-emerald-700 font-bold text-sm px-3 py-1 bg-emerald-50 rounded-full">OR</span>
                  <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-emerald-300 to-transparent"></div>
                </div>
              </div>
              
              <a
                href="https://forms.gle/vTiNLB6WD1yguzNo9"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-5 py-3.5 rounded-xl font-display font-bold text-base hover:from-emerald-700 hover:to-emerald-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 active:scale-95"
              >
                <Send className="w-5 h-5" />
                <span>Fill Form Now</span>
              </a>
            </div>
          </div>

          {/* Publication Willingness (DOI INDEXING) Form */}
          <div className="bg-white border-2 border-indigo-200 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col overflow-hidden min-h-[520px]">
            <div className="bg-gradient-to-br from-indigo-50 to-white p-6 text-center border-b-2 border-indigo-100">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-2xl mb-4 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h4 className="font-display font-bold text-xl text-indigo-900 mb-2 leading-tight">
                Publication Willingness
              </h4>
              <p className="text-gray-600 text-sm font-medium">DOI INDEXING</p>
            </div>
            
            <div className="flex flex-col items-center justify-between p-6 flex-1">
              <div className="w-full flex flex-col items-center gap-4">
                <div className="bg-gradient-to-br from-gray-50 to-white p-5 rounded-2xl shadow-md border-2 border-indigo-100 hover:border-indigo-400 hover:scale-105 transition-all duration-300">
                  <div className="w-40 h-40 flex items-center justify-center bg-indigo-50 rounded-xl">
                     <img 
                    src="/DOI_INDEXING_form.png" 
                    alt="DOI INDEXING FORM QR" 
                    className="w-40 h-40 object-contain"
                  />
                  </div>
                </div>
                <p className="text-sm text-gray-700 font-bold">Scan QR Code</p>
                
                <div className="flex items-center gap-3 w-full my-2">
                  <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-indigo-300 to-transparent"></div>
                  <span className="text-indigo-700 font-bold text-sm px-3 py-1 bg-indigo-50 rounded-full">OR</span>
                  <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-indigo-300 to-transparent"></div>
                </div>
              </div>
              
              <a
                href="https://forms.gle/DwYe1LHpyqQkTUmh7"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white px-5 py-3.5 rounded-xl font-display font-bold text-base hover:from-indigo-700 hover:to-indigo-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 active:scale-95"
              >
                <Send className="w-5 h-5" />
                <span>Fill Form Now</span>
              </a>
            </div>
          </div>

          {/* Certificate Form */}
          <div className="bg-white border-2 border-amber-200 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col overflow-hidden min-h-[520px]">
            <div className="bg-gradient-to-br from-amber-50 to-white p-6 text-center border-b-2 border-amber-100">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-amber-600 to-amber-700 rounded-2xl mb-4 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h4 className="font-display font-bold text-xl text-amber-900 mb-2 leading-tight">
                Certificate
              </h4>
              <p className="text-gray-600 text-sm font-medium">After acceptance only</p>
            </div>
            
            <div className="flex flex-col items-center justify-between p-6 flex-1">
              <div className="w-full flex flex-col items-center gap-4">
                <div className="bg-gradient-to-br from-gray-50 to-white p-5 rounded-2xl shadow-md border-2 border-amber-100 hover:border-amber-400 hover:scale-105 transition-all duration-300">
                  <img 
                    src="/certificate_form.png" 
                    alt="Certificate Form QR" 
                    className="w-40 h-40 object-contain"
                  />
                </div>
                <p className="text-sm text-gray-700 font-bold">Scan QR Code</p>
                
                <div className="flex items-center gap-3 w-full my-2">
                  <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-amber-300 to-transparent"></div>
                  <span className="text-amber-700 font-bold text-sm px-3 py-1 bg-amber-50 rounded-full">OR</span>
                  <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-amber-300 to-transparent"></div>
                </div>
              </div>
              
              <a
                href="https://forms.gle/pYJbxmdxAdmNEM4p6"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-600 to-amber-700 text-white px-5 py-3.5 rounded-xl font-display font-bold text-base hover:from-amber-700 hover:to-amber-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 active:scale-95"
              >
                <Send className="w-5 h-5" />
                <span>Fill Form Now</span>
              </a>
            </div>
          </div>

          {/* Presentation Form */}
          <div className="bg-white border-2 border-purple-200 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col overflow-hidden min-h-[520px]">
            <div className="bg-gradient-to-br from-purple-50 to-white p-6 text-center border-b-2 border-purple-100">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl mb-4 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <h4 className="font-display font-bold text-xl text-purple-900 mb-2 leading-tight">
                Presentation
              </h4>
              <p className="text-gray-600 text-sm font-medium">Submit PPT details</p>
            </div>
            
            <div className="flex flex-col items-center justify-between p-6 flex-1">
              <div className="w-full flex flex-col items-center gap-4">
                <div className="bg-gradient-to-br from-gray-50 to-white p-5 rounded-2xl shadow-md border-2 border-purple-100 hover:border-purple-400 hover:scale-105 transition-all duration-300">
                  <img 
                    src="/presentation_form.png" 
                    alt="Presentation Form QR" 
                    className="w-40 h-40 object-contain"
                  />
                </div>
                <p className="text-sm text-gray-700 font-bold">Scan QR Code</p>
                
                <div className="flex items-center gap-3 w-full my-2">
                  <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-purple-300 to-transparent"></div>
                  <span className="text-purple-700 font-bold text-sm px-3 py-1 bg-purple-50 rounded-full">OR</span>
                  <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-purple-300 to-transparent"></div>
                </div>
              </div>
              
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSczrQD7EnMFrjrceGqUL-7qeX40SGyrMErO3Tm2R6AKESgtDw/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white px-5 py-3.5 rounded-xl font-display font-bold text-base hover:from-purple-700 hover:to-purple-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 active:scale-95"
              >
                <Send className="w-5 h-5" />
                <span>Fill Form Now</span>
              </a>
            </div>
          </div>

          {/* Feedback Form */}
          <div className="bg-white border-2 border-green-200 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col overflow-hidden min-h-[520px]">
            <div className="bg-gradient-to-br from-green-50 to-white p-6 text-center border-b-2 border-green-100">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl mb-4 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <h4 className="font-display font-bold text-xl text-green-900 mb-2 leading-tight">
                Feedback
              </h4>
              <p className="text-gray-600 text-sm font-medium">Share your experience</p>
            </div>
            
            <div className="flex flex-col items-center justify-between p-6 flex-1">
              <div className="w-full flex flex-col items-center gap-4">
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

          {/* Additional Services Section */}
          <div className="col-span-1 lg:col-span-2">
            <div className="text-center mb-8 md:mb-10">
              <h3 className="font-display font-bold text-3xl md:text-4xl text-navy mb-3">
                Additional <span className="text-gold">Services</span>
              </h3>
              <p className="text-gray-600 text-base md:text-lg">Download request forms for additional services</p>
              <div className="w-24 h-1 bg-gold mx-auto mt-4"></div>
            </div>
        
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Food Request Form */}
          <div className="group relative bg-gradient-to-br from-green-50 via-green-50 to-green-100 border-4 border-green-400 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden">
            {/* Decorative Corner Elements */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-green-300 rounded-bl-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-green-300 rounded-tr-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
            
            <div className="relative z-10">
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-xl group-hover:rotate-12 transition-transform duration-500">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
              </div>
              
              {/* Title */}
              <h4 className="font-display font-bold text-2xl md:text-3xl text-green-900 mb-3 text-center">
                Food Request Form
              </h4>
              
              {/* Description */}
              <p className="text-gray-700 text-center mb-6 text-sm md:text-base leading-relaxed">
                Submit your food and catering requirements for the conference period
              </p>
              
              {/* Decorative Divider */}
              <div className="flex items-center justify-center gap-2 mb-6">
                <div className="w-12 h-1 bg-green-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="w-12 h-1 bg-green-400 rounded-full"></div>
              </div>
              
              {/* Download Button */}
              <a
                href="https://www.periyaruniversity.ac.in/Documents/2024/Food-Request-Form.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn inline-flex items-center justify-center gap-3 w-full bg-green-600 text-white px-6 py-4 rounded-xl font-display font-bold text-base hover:bg-green-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 border-2 border-green-700 hover:border-green-800"
              >
                <FileText className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
                <span>Download PDF Form</span>
                <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              
              {/* Info Badge */}
              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-green-700 bg-green-100 px-3 py-2 rounded-full">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">PDF Format - Print & Fill</span>
              </div>
            </div>
          </div>

          {/* Room Request Form */}
          <div className="group relative bg-gradient-to-br from-indigo-50 via-blue-50 to-indigo-100 border-4 border-indigo-400 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden">
            {/* Decorative Corner Elements */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-indigo-300 rounded-bl-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-blue-300 rounded-tr-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
            
            <div className="relative z-10">
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-full flex items-center justify-center shadow-xl group-hover:rotate-12 transition-transform duration-500">
                  <Home className="w-10 h-10 text-white" />
                </div>
              </div>
              
              {/* Title */}
              <h4 className="font-display font-bold text-2xl md:text-3xl text-indigo-900 mb-3 text-center">
                Room Request Form
              </h4>
              
              {/* Description */}
              <p className="text-gray-700 text-center mb-6 text-sm md:text-base leading-relaxed">
                Book your accommodation for the conference duration at university campus
              </p>
              
              {/* Decorative Divider */}
              <div className="flex items-center justify-center gap-2 mb-6">
                <div className="w-12 h-1 bg-indigo-400 rounded-full"></div>
                <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                <div className="w-12 h-1 bg-indigo-400 rounded-full"></div>
              </div>
              
              {/* Download Button */}
              <a
                href="https://www.periyaruniversity.ac.in/Documents/2024/Room-Request-Form.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn inline-flex items-center justify-center gap-3 w-full bg-indigo-600 text-white px-6 py-4 rounded-xl font-display font-bold text-base hover:bg-indigo-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 border-2 border-indigo-700 hover:border-indigo-800"
              >
                <FileText className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
                <span>Download PDF Form</span>
                <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              
              {/* Info Badge */}
              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-indigo-700 bg-indigo-100 px-3 py-2 rounded-full">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">PDF Format - Print & Fill</span>
              </div>
            </div>
          </div>
            </div>
          </div>

          {/* Card 11 - Publication Partner */}
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
              <li>Selected high-quality and presented papers will be published as <span className="font-bold text-purple-700">book chapters</span> in the <span className="font-bold text-blue-700">Scopus</span>-indexed edited volumes "Beyond Algorithms: Next-Gen AI for Health, Agriculture, and Humanity" (<span className="font-bold text-orange-600">CRC Press, Taylor & Francis Group</span> publication) or "Computational Intelligence & Knowledge-Based Systems: Models, Algorithms & Applications" (<span className="font-bold text-emerald-600">Wiley publication</span>), subject to the respective publisher's scope and editorial policies.</li>
              <li>Papers not selected for inclusion as <span className="font-bold text-purple-700">book chapters</span> will be considered for publication in the <span className="font-bold text-rose-600">ISBN-registered conference proceedings</span>, with DOI assigned where applicable.</li>
            </ol>
          </div>

          {/* Card 12 - Paper Submission Format */}
          <div className="bg-white border-l-4 border-l-teal border border-slate-700 rounded-lg p-4 md:p-6 lg:p-8 shadow-sm flex flex-col h-full">
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
              <div role="status" aria-live="polite" className="relative bg-gradient-to-r from-amber-50 via-yellow-50 to-amber-50 border-l-4 border-amber-500 rounded-lg p-4 md:p-6 mb-6 md:mb-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <style>{`
                  @keyframes swing {
                    0%, 100% { transform: rotate(-3deg); }
                    50% { transform: rotate(3deg); }
                  }
                  .swing-badge {
                    animation: swing 2s ease-in-out infinite;
                  }
                `}</style>
                <div className="flex items-start gap-4 md:gap-5">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center shrink-0 text-white font-bold shadow-md">
                    <AlertCircle className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-display font-bold text-xl md:text-2xl text-amber-900 mb-3 flex items-center gap-2 flex-wrap">
                      Submission & Post-Review Formatting
                      <span className="swing-badge inline-block px-3 py-1 text-xs font-bold bg-gradient-to-r from-red-500 to-red-600 text-white rounded-md shadow-lg">IMPORTANT</span>
                    </h4>
                    <p className="text-gray-800 font-medium leading-relaxed text-justify text-sm md:text-base">
                      Initially, all papers must be submitted in accordance with the <span className="font-bold text-amber-700 bg-amber-100 px-1 rounded">Taylor & Francis</span> manuscript guidelines. After the review process and upon receipt of the reviewers' decision, authors of accepted papers will be required to revise and format their manuscripts as per the specific submission guidelines of <span className="font-bold text-amber-700 bg-amber-100 px-1 rounded">Taylor & Francis</span> or <span className="font-bold text-emerald-700 bg-emerald-100 px-1 rounded">World Scientific / Wiley</span>, as applicable.
                    </p>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-20 h-20 bg-amber-200 rounded-bl-full opacity-20"></div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                <a 
                  href="/Abstracts_Guidelines.pdf" 
                  download="Abstracts_Guidelines.pdf"
                  className="inline-flex items-center justify-center gap-2 bg-gold text-white px-4 md:px-6 py-3 md:py-4 rounded-lg font-display font-semibold hover:bg-gold-dark transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm md:text-base"
                >
                  <FileText className="w-4 h-4 md:w-5 md:h-5" />
                  Abstracts Guidelines
                </a>
                <a 
                  href="/Manuscript_Guidelines.pdf" 
                  download="Manuscript_Guidelines_Taylor_Francis.pdf"
                  className="inline-flex items-center justify-center gap-2 bg-burgundy text-white px-4 md:px-6 py-3 md:py-4 rounded-lg font-display font-semibold hover:bg-burgundy-light transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm md:text-base"
                >
                  <FileText className="w-4 h-4 md:w-5 md:h-5" />
                  Manuscript Guidelines - Taylor & Francis
                </a>
                <a 
                  href="/sample_file.pdf" 
                  download="Manuscript_Guidelines_Wiley.pdf"
                  className="inline-flex items-center justify-center gap-2 bg-emerald-600 text-white px-4 md:px-6 py-3 md:py-4 rounded-lg font-display font-semibold hover:bg-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm md:text-base"
                >
                  <FileText className="w-4 h-4 md:w-5 md:h-5" />
                  Manuscript Guidelines - Wiley
                </a>
                <a 
                  href="/AIC_docx.docx" 
                  download="AIC_docx.docx"
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-4 md:px-6 py-3 md:py-4 rounded-lg font-display font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm md:text-base"
                >
                  <FileText className="w-4 h-4 md:w-5 md:h-5" />
                  Academic Integrity Committee (AIC) - Taylor & Francis
                </a>
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
     

     
    </section>
    
  );
};

export default CallForPapers;
