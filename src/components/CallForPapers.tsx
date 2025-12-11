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
    <section id="call-for-papers" className="py-24 bg-navy text-primary-foreground">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-coral font-display font-semibold text-sm uppercase tracking-wider mb-4">
            Submit Your Research
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Call for <span className="text-teal-light">Papers</span>
          </h2>
          <div className="w-24 h-1 bg-coral mx-auto mt-6" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Content */}
          <div>
            <div className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-8 mb-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-teal rounded-xl flex items-center justify-center">
                  <FileText className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl">Author Guidelines</h3>
                  <p className="text-primary-foreground/90 text-sm">Follow these submission guidelines</p>
                </div>
              </div>

              <p className="text-primary-foreground text-base leading-normal text-justify mb-6">
                HORIZON-AI 2025 (HORIZON25) invites full-length original research contributions from engineering professionals, industry experts, R&D organizations, academic institutions, government departments, and research scholars from across the world.
                All submissions must be original, unpublished, ethically compliant, and prepared in accordance with CRC Press (Taylor & Francis) editorial guidelines.
              </p>

              <p className="text-primary-foreground text-base leading-normal text-justify mb-6">
                Authors are invited to submit original and unpublished research articles that are not under review in any other conference or journal. Only accepted and registered papers will be scheduled for presentation. For inclusion in the book proceedings, at least one author of each accepted paper must complete the conference registration. Papers without a registered author will not be considered for publication in the book proceedings.
              </p>

              <div className="space-y-4">
                <h4 className="font-display font-bold text-xl text-primary-foreground">Key Information</h4>
                <ul className="space-y-3 text-base text-primary-foreground font-medium text-justify">
                  <li>• Papers must be full-length original research or review articles and must not exceed six (6) pages in length.</li>
                  <li>• All submissions will undergo a peer-review process with decisions communicated within the specified timeline.</li>
                  <li>• Selected high-quality papers will be published as book chapters, while remaining papers will be published in conference proceedings.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            {/* Submission Format */}
            <div className="bg-coral rounded-2xl p-8">
              <h3 className="font-display font-bold text-2xl mb-4 text-primary-foreground">
                Paper Submission Format
              </h3>
              <p className="text-primary-foreground/90 mb-4">
                All papers must be submitted in IEEE double column format. Please use the official IEEE template 
                for your submission.
              </p>
              <a 
                href="https://www.ieee.org/conferences/publishing/templates.html" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary-foreground text-coral px-6 py-3 rounded-lg font-display font-semibold hover:bg-primary-foreground/90 transition-colors"
              >
                <FileText className="w-5 h-5" />
                IEEE Template
              </a>
            </div>

            {/* Publication */}
            <div className="bg-teal rounded-2xl p-8">
              <h3 className="font-display font-bold text-2xl mb-4 text-primary-foreground">
                Publication
              </h3>
              <p className="text-primary-foreground/90 mb-4">
                All accepted and presented papers will be submitted for publication in reputed international 
                journals indexed in major databases.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-primary-foreground/20 px-4 py-2 rounded-lg text-sm font-medium">Scopus</span>
                <span className="bg-primary-foreground/20 px-4 py-2 rounded-lg text-sm font-medium">Web of Science</span>
                <span className="bg-primary-foreground/20 px-4 py-2 rounded-lg text-sm font-medium">UGC Care</span>
              </div>
            </div>

            {/* Submit Button */}
            <div className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-2xl p-8 text-center">
              <AlertCircle className="w-12 h-12 text-gold mx-auto mb-4" />
              <h3 className="font-display font-bold text-xl mb-2">Ready to Submit?</h3>
              <p className="text-primary-foreground/80 mb-6 text-sm">
                Submit your paper through our online submission portal
              </p>
              <a 
                href="#" 
                className="inline-flex items-center gap-2 btn-accent"
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
