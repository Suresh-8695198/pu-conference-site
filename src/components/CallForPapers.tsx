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
    "Remaining accepted and presented papers will be published in the HORIZON-AI 2026 Conference Proceedings.",
  ];

  return (
    <section id="call-for-papers" className="py-5 bg-slate">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8">
          <span className="inline-block text-teal font-display font-semibold text-sm uppercase tracking-wider mb-4">
            Submit Your Research
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-navy">
            Camera Ready<span className="text-teal"> Submission</span>
          </h2>
          <div className="w-24 h-1 bg-coral mx-auto mt-6" />
        </div>

        {/* Important Notice */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="bg-white border-2 border-teal rounded-lg p-8 shadow-sm">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-teal mt-1 shrink-0" />
              <p className="text-slate-700 text-base leading-relaxed text-justify">
                Authors are invited to submit original and unpublished research articles that are not under review in any other conference or journal. Only accepted and registered papers will be scheduled for presentation. For inclusion in the book proceedings, at least one author of each accepted paper must complete the conference registration. Papers without a registered author will not be considered for publication in the book proceedings.
              </p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Submission Requirements */}
            <div className="bg-white border-l-4 border-l-teal border border-slate-200 rounded-lg p-8 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-teal rounded-lg flex items-center justify-center">
                  <FileText className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl text-navy">Submission Requirements</h3>
                  <p className="text-slate-600 text-base">Basic submission criteria</p>
                </div>
              </div>
              <ul className="space-y-3 text-base text-slate-700 leading-relaxed text-justify list-disc list-inside">
                <li>The paper must present original, unpublished research related to the conference themes and must not be under review elsewhere.</li>
                <li>Authors are responsible for ensuring originality, validity, integrity, and freedom from conflicts with previously published or concurrently submitted work.</li>
                <li>Papers must be carefully proofread and written in clear, grammatically correct English; poor language quality may lead to outright rejection.</li>
              </ul>
            </div>

            {/* Manuscript Preparation */}
            <div className="bg-white border-l-4 border-l-teal border border-slate-200 rounded-lg p-8 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-teal rounded-lg flex items-center justify-center">
                  <FileText className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl text-navy">Manuscript Preparation</h3>
                  <p className="text-slate-600 text-base">Content and formatting guidelines</p>
                </div>
              </div>
              <ul className="space-y-3 text-base text-slate-700 leading-relaxed text-justify list-disc list-inside">
                <li>Each manuscript must include an abstract (150-200 words) summarizing objectives, methodology, key results, and conclusions, along with 5-6 keywords.</li>
                <li>The maximum length of the manuscript is Twelve (12) pages, formatted strictly according to the official conference template available on the conference website.</li>
                <li>Figures, tables, graphs, and images must be editable (not inserted as pictures), numbered consecutively, referenced properly, and must have a minimum resolution of 300 DPI.</li>
                <li>All mathematical equations must be created using a math equation editor and must not be included as images.</li>
                <li>All references must be cited correctly in the text, and the reference list must include every cited source and only cited sources.</li>
              </ul>
            </div>

            {/* Review and Publication */}
            <div className="bg-white border-l-4 border-l-teal border border-slate-200 rounded-lg p-8 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-teal rounded-lg flex items-center justify-center">
                  <FileText className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl text-navy">Review and Publication</h3>
                  <p className="text-slate-600 text-base">Review process and publication details</p>
                </div>
              </div>
              <ul className="space-y-3 text-base text-slate-700 leading-relaxed text-justify list-disc list-inside">
                <li>Each paper may have a maximum of four (4) authors, with full affiliations and the corresponding author clearly identified.</li>
                <li>All manuscripts will undergo a double-blind peer-review process; authors must submit revisions within seven (7) days if requested.</li>
                <li>Only papers that are accepted, registered, and presented will be included in the conference proceedings and considered valid for certificates.</li>
                <li>At least one author must present the paper (online/offline as applicable) for it to be officially accepted.</li>
              </ul>
            </div>

            {/* Ethical Standards */}
            <div className="bg-white border-l-4 border-l-teal border border-slate-200 rounded-lg p-8 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-teal rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl text-navy">Ethical Standards</h3>
                  <p className="text-slate-600 text-base">Academic integrity guidelines</p>
                </div>
              </div>
              <ul className="space-y-3 text-base text-slate-700 leading-relaxed text-justify list-disc list-inside">
                <li>Authors must adhere to all ethical guidelines, including plagiarism policies, proper citations, and respecting intellectual property.</li>
                <li>Authors must ensure all figures, tables, and data representations are accurate, clear, and scientifically valid.</li>
              </ul>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            {/* Submission */}
            <div className="bg-white border-l-4 border-l-teal border border-slate-200 rounded-lg p-8 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-teal rounded-lg flex items-center justify-center">
                  <Send className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl text-navy">Submission</h3>
                  <p className="text-slate-600 text-base">Paper submission guidelines</p>
                </div>
              </div>
              <p className="text-slate-700 text-base leading-relaxed text-justify">
                All paper submissions must be made ONLY through the Microsoft CMT submission portal. Authors who are new to MicrosoftCMT must create a login account before submitting. Please upload your manuscript in Microsoft Word/PDF format strictly following the conference template. Email submissions will NOT be accepted under any circumstances. Only papers submitted through MicrosoftCMT will be considered for review, acceptance, and publication.
              </p>
            </div>

            {/* Publication Ethics */}
            <div className="bg-white border-l-4 border-l-teal border border-slate-200 rounded-lg p-8 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-teal rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl text-navy">Publication Ethics</h3>
                  <p className="text-slate-600 text-base">Ethical guidelines for publication</p>
                </div>
              </div>
              <ol className="space-y-3 text-base text-slate-700 leading-relaxed text-justify list-decimal list-inside">
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
              <p className="text-slate-700 mb-6 leading-relaxed">
                Please download the manuscript and abstract guidelines for proper formatting and submission requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="/Manuscript_Guidelines.pdf" 
                  download="Manuscript_Guidelines.pdf"
                  className="inline-flex items-center justify-center gap-2 bg-coral text-white px-6 py-3 rounded-lg font-display font-semibold hover:bg-coral/90 transition-colors"
                >
                  <FileText className="w-5 h-5" />
                  Manuscript Guidelines
                </a>
                <a 
                  href="/Abstracts_Guidelines.pdf" 
                  download="Abstracts_Guidelines.pdf"
                  className="inline-flex items-center justify-center gap-2 bg-teal text-white px-6 py-3 rounded-lg font-display font-semibold hover:bg-teal/90 transition-colors"
                >
                  <FileText className="w-5 h-5" />
                  Abstracts Guidelines
                </a>
              </div>
            </div>

            {/* Publication Partner */}
            <div className="bg-white border-l-4 border-l-teal border border-slate-200 rounded-lg p-8 shadow-sm text-justify">
              <h3 className="font-display font-bold text-2xl mb-6 text-navy">
                Publication Partner
              </h3>
              <ol className="space-y-4 text-base text-slate-700 leading-relaxed list-decimal list-inside">
                <li>Selected high-quality papers will be published as book chapters in the edited volume: "Beyond Algorithms: Next-Gen AI for Health, Agriculture, and Humanity", subject to publisher scope, quality, and editorial policies.</li>
                <li>Remaining accepted and presented papers will be published in the HORIZON-AI 2026 Conference Proceedings, with applicable publication charges.</li>
              </ol>
            </div>

            {/* Submit Button */}
            <div className="bg-navy border border-navy rounded-lg p-8 text-center shadow-sm">
              <Send className="w-12 h-12 text-coral mx-auto mb-4" />
              <h3 className="font-display font-bold text-xl mb-2 text-white">Ready to Submit?</h3>
              <p className="text-white/90 mb-6 text-base">
                Submit your paper through our online submission portal
              </p>
              <a 
                href="#" 
                className="inline-flex items-center gap-2 bg-coral text-white px-6 py-3 rounded-lg font-display font-semibold hover:bg-coral/90 transition-colors"
              >
                <Send className="w-5 h-5" />
                Submit Paper
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallForPapers;
