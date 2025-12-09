import { FileText, CheckCircle, AlertCircle, Send } from "lucide-react";

const CallForPapers = () => {
  const guidelines = [
    "Full length original research contributions not exceeding six pages as per IEEE format",
    "The manuscript should contribute original research ideas, findings, results, and conclusions",
    "The manuscript should not have been published in any journals or conference proceedings",
    "Manuscript should contain the corresponding author name with e-mail id and affiliation",
    "A paper may contain a maximum of 4 authors",
    "All submitted manuscripts will be sent for peer review process",
    "Authors of accepted papers are eligible to receive certificates",
    "Selected papers will be published in reputed international journals",
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
                  <p className="text-primary-foreground/60 text-sm">Follow these submission guidelines</p>
                </div>
              </div>

              <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                ICAITSC 2026 invites full length original research contributions from engineering professionals 
                from industries, R&D organizations, academic institutions, government departments and research 
                scholars from across the world.
              </p>

              <ul className="space-y-4">
                {guidelines.map((guideline, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-teal shrink-0 mt-0.5" />
                    <span className="text-primary-foreground/80 text-sm">{guideline}</span>
                  </li>
                ))}
              </ul>
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
              <p className="text-primary-foreground/60 mb-6 text-sm">
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
