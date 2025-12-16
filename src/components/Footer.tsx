import { ArrowUp, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-navy-dark text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/icaitsc.png"
                alt="ICAITSC-2026 Logo"
                className="w-12 h-12 object-contain"
              />
              <div>
                <p className="font-display font-bold text-lg">ICAITSC-2026</p>
                <p className="text-xs text-primary-foreground/60">Periyar University</p>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              International Conference on Artificial Intelligence Techniques and Smart Computing
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["About", "Call for Papers", "Important Dates", "Registration"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(/ /g, "-")}`}
                    className="text-primary-foreground/70 hover:text-teal transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-teal shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70 text-sm">
                  icaitsc2026@periyaruniversity.ac.in
                </span>
              </li>
            
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70 text-sm">
                  Salem, Tamil Nadu, India
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Stay Updated</h4>
            <p className="text-primary-foreground/70 text-sm mb-4">
              Subscribe for conference updates
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal"
              />
              <button className="px-4 py-2 bg-teal rounded-lg font-medium text-sm hover:bg-teal-light transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm text-center md:text-left">
            © 2026 ICAITSC. Department of Computer Science, Periyar University. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="w-12 h-12 bg-coral rounded-full flex items-center justify-center hover:bg-coral-light transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
