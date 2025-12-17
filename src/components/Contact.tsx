import { MapPin, Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-teal font-display font-semibold text-sm uppercase tracking-wider mb-4">
            Get in Touch
          </span>
          <h2 className="section-title">Contact <span className="text-coral">Us</span></h2>
          <div className="w-24 h-1 bg-teal mx-auto mt-4" />
        </div>

        {/* Two-column layout: left = secretariat + map, right = contact cards */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-6">
           
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
              <h4 className="font-display font-semibold text-navy mb-3">University Location</h4>
              <div className="aspect-[16/9] w-full rounded-md overflow-hidden">
                <iframe
                  src="https://maps.google.com/maps?q=Periyar%20University%2C%20Salem%2C%20Tamil%20Nadu%20636011%2C%20India&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Periyar University Location Map"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-4 rounded-xl border border-slate-200 flex items-start gap-4">
              <div className="w-12 h-12 bg-navy rounded-lg flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-display font-semibold text-navy mb-1">Address</h4>
                <address className="not-italic text-slate-700 text-sm">
                  Department of Computer Science,<br />
                  Periyar University,<br />
                  Salem - 636011,<br />
                  Tamil Nadu, India.
                </address>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-slate-200 flex items-start gap-4">
              <div className="w-12 h-12 bg-teal rounded-lg flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-display font-semibold text-navy mb-1">Email</h4>
                <a href="mailto:icaitsc2026@periyaruniversity.ac.in" className="text-teal hover:underline break-words">icaitsc2026@periyaruniversity.ac.in</a>
              </div>
            </div>

            <div>
               <div className="bg-white p-6 rounded-2xl mb-4 border border-slate-200 shadow-sm">
              <p className="text-slate-700 leading-relaxed">For queries regarding the conference, paper submission, or registration, please contact the secretariat below.</p>
            </div>

              <div className="flex flex-col gap-4">
                <div className="bg-white p-4 rounded-xl border border-slate-200 flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-navy">Dr. H. Hannah Inbarani</h4>
                    <p className="text-slate-600 text-sm mb-1">Professor, Department of Computer Science</p>
                    <p className="text-teal font-medium"><a href="tel:+918965380392">+91 98653 80392</a></p>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200 flex items-start gap-4">
                  <div className="w-12 h-12 bg-coral rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-navy">Dr. I. Laurence Aroquiaraj</h4>
                    <p className="text-slate-600 text-sm mb-1">Professor, Department of Computer Science</p>
                    <p className="text-teal font-medium"><a href="tel:+918807058505">+91 88070 58505</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
