import { MapPin, Mail, Phone, Clock, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-teal font-display font-semibold text-sm uppercase tracking-wider mb-4">
            Get in Touch
          </span>
          <h2 className="section-title">
            Contact <span className="text-coral">Us</span>
          </h2>
          <div className="w-24 h-1 bg-teal mx-auto mt-6" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-display font-bold text-2xl text-navy mb-6">
                Conference Secretariat
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                For any queries regarding the conference, paper submission, or registration, 
                please feel free to contact us.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 bg-slate p-5 rounded-xl">
                <div className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-navy mb-1">Address</h4>
                  <p className="text-muted-foreground">
                    Department of Computer Science<br />
                    Periyar University<br />
                    Salem - 636011<br />
                    Tamil Nadu, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-slate p-5 rounded-xl">
                <div className="w-12 h-12 bg-teal rounded-xl flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-navy mb-1">Email</h4>
                  <a href="mailto:icaitsc2026@periyaruniversity.ac.in" className="text-teal hover:underline">
                    icaitsc2026@periyaruniversity.ac.in
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-slate p-5 rounded-xl">
                <div className="w-12 h-12 bg-coral rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-navy mb-1">Phone</h4>
                  <p className="text-muted-foreground">
                    +91 427 234 5678<br />
                    +91 98765 43210
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-slate p-5 rounded-xl">
                <div className="w-12 h-12 bg-gold rounded-xl flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-navy" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-navy mb-1">Office Hours</h4>
                  <p className="text-muted-foreground">
                    Monday - Friday: 9:00 AM - 5:00 PM<br />
                    Saturday: 9:00 AM - 1:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate rounded-2xl p-8">
            <h3 className="font-display font-bold text-2xl text-navy mb-6">
              Send us a Message
            </h3>
            <form className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-navy mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-teal transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-teal transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-navy mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-teal transition-all"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-navy mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-teal transition-all resize-none"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="w-full btn-primary flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-16 bg-slate rounded-2xl p-4 h-80 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-12 h-12 text-navy mx-auto mb-4" />
            <p className="text-muted-foreground">
              Periyar University, Salem, Tamil Nadu, India
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
