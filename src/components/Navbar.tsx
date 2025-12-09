import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Call for Papers", href: "#call-for-papers" },
  { name: "Important Dates", href: "#dates" },
  { name: "Tracks", href: "#tracks" },
  { name: "Committee", href: "#committee" },
  { name: "Registration", href: "#registration" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 ">
            <img src="/logo.jpg" alt="Periyar University Logo" className="h-10 w-10 object-contain hidden sm:inline" />
            <img src="/icaitsc.png" alt="ICAITSC Logo" className="h-10 w-10 object-contain -ml-3 hidden sm:inline" />
            <div className="hidden sm:block">
              <p className={`font-display font-bold text-lg ${scrolled ? "text-navy" : "text-primary-foreground"}`}>
                ICAITSC 2026
              </p>
              <p className={`text-xs ${scrolled ? "text-muted-foreground" : "text-primary-foreground/80"}`}>
                Periyar University
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`nav-link text-sm ${
                  scrolled ? "text-foreground" : "text-primary-foreground"
                }`}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#registration"
              className="btn-secondary text-sm px-6 py-2.5"
            >
              Register Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 ${scrolled ? "text-navy" : "text-primary-foreground"}`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background shadow-xl border-t border-border">
            <div className="container mx-auto px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 px-4 text-foreground hover:bg-muted rounded-lg transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#registration"
                onClick={() => setIsOpen(false)}
                className="block btn-secondary text-center mt-4"
              >
                Register Now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
