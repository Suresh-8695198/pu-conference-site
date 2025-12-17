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
    "Remaining accepted and presented papers will be published in the ICAITSC 2026 Conference Proceedings.",
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
                All paper submissions must be made ONLY through the Microsoft CMT submission portal. Authors who are new to MicrosoftCMT must create a login account before submitting. Please upload your manuscript in Microsoft Word/PDF format strictly following the conference template. Email submissions will NOT be accepted under any circumstances. Only papers submitted through MicrosoftCMT will be considered for review, acceptance, and publication.
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
            <div className="bg-navy border border-navy rounded-lg p-8 text-center shadow-sm">
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

        {/* CMT Acknowledgement */}
        <div className="max-w-4xl mx-auto mt-12">
          <div className="bg-gradient-to-br from-cream to-white border-2 border-gold/20 rounded-2xl p-8 shadow-xl">
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-3 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-md mb-4">
                <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gold font-display font-semibold text-sm uppercase tracking-wide">
                  Acknowledgement
                </span>
              </div>
              <h3 className="font-display font-bold text-2xl text-navy mb-4">
                CMT Service Acknowledgement
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-gold to-burgundy rounded-full mx-auto mb-6"></div>
            </div>

            <div className="text-center">
              <p className="text-slate-700 text-base leading-relaxed mb-8 text-justify max-w-3xl mx-auto">
               The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center gap-2 text-black">
                  <svg className="w-5 h-5 text-gold " fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">Powered by Microsoft</span>
                </div>
                <a
                  href="https://cmt3.research.microsoft.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-burgundy to-burgundy text-white px-6 py-3 rounded-lg font-display font-semibold hover:from-gold-dark hover:to-navy/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
                  </svg>
                  Visit CMT Portal
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CMT Acknowledgment */}
      <div className="mt-16 text-center">
        <p>The Microsoft CMT service was used for managing the peer-reviewing process for this conference.</p>
        <p>This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.</p>
      </div>
    </section>
  );
};

export default CallForPapers;
