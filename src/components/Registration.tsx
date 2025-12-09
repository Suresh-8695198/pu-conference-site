import { Check, Users, GraduationCap, Briefcase, Globe } from "lucide-react";

const Registration = () => {
  const categories = [
    {
      title: "Faculty / Research Scholar",
      icon: GraduationCap,
      indian: "₹5,000",
      foreign: "$150",
    },
    {
      title: "UG / PG Students",
      icon: Users,
      indian: "₹3,000",
      foreign: "$100",
    },
    {
      title: "Industry Professionals",
      icon: Briefcase,
      indian: "₹7,000",
      foreign: "$200",
    },
    {
      title: "Attendees (Non-Author)",
      icon: Globe,
      indian: "₹2,000",
      foreign: "$75",
    },
  ];

  const includes = [
    "Conference Kit",
    "Certificate of Participation",
    "Lunch & Refreshments",
    "Access to All Sessions",
    "Conference Proceedings",
    "Publication Support",
  ];

  return (
    <section id="registration" className="py-24 bg-navy text-primary-foreground">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-coral font-display font-semibold text-sm uppercase tracking-wider mb-4">
            Join the Conference
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Registration <span className="text-teal-light">Details</span>
          </h2>
          <div className="w-24 h-1 bg-coral mx-auto mt-6" />
        </div>

        {/* Registration Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {categories.map((category, index) => (
            <div
              key={category.title}
              className={`rounded-2xl overflow-hidden card-hover ${
                index === 0 ? "bg-teal" : "bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20"
              }`}
            >
              <div className="p-6">
                <category.icon className={`w-10 h-10 mb-4 ${
                  index === 0 ? "text-primary-foreground" : "text-teal"
                }`} />
                <h3 className={`font-display font-bold text-lg mb-4 ${
                  index === 0 ? "text-primary-foreground" : "text-primary-foreground"
                }`}>
                  {category.title}
                </h3>
                
                <div className="space-y-3">
                  <div className={`p-3 rounded-lg ${
                    index === 0 ? "bg-primary-foreground/20" : "bg-primary-foreground/10"
                  }`}>
                    <p className="text-sm text-primary-foreground/70">Indian Delegates</p>
                    <p className="font-display font-bold text-2xl text-primary-foreground">
                      {category.indian}
                    </p>
                  </div>
                  <div className={`p-3 rounded-lg ${
                    index === 0 ? "bg-primary-foreground/20" : "bg-primary-foreground/10"
                  }`}>
                    <p className="text-sm text-primary-foreground/70">Foreign Delegates</p>
                    <p className="font-display font-bold text-2xl text-primary-foreground">
                      {category.foreign}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* What's Included */}
        <div className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-8 mb-12">
          <h3 className="font-display font-bold text-2xl text-center mb-8">
            Registration Includes
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {includes.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 bg-primary-foreground/10 p-4 rounded-xl"
              >
                <div className="w-8 h-8 bg-teal rounded-lg flex items-center justify-center shrink-0">
                  <Check className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="font-medium text-primary-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bank Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-teal rounded-2xl p-4 sm:p-8">
            <h3 className="font-display font-bold text-2xl mb-6 text-primary-foreground">
              Bank Transfer Details
            </h3>
            <div className="space-y-4">
              {[
                { label: "Account Name", value: "Periyar University Conference Account" },
                { label: "Account Number", value: "1234567890" },
                { label: "Bank Name", value: "State Bank of India" },
                { label: "Branch", value: "Periyar University Campus" },
                { label: "IFSC Code", value: "SBIN0001234" },
              ].map((item) => (
                <div key={item.label} className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-primary-foreground/20 pb-3 gap-1">
                  <span className="text-primary-foreground/70 break-words">{item.label}</span>
                  <span className="font-display font-semibold text-primary-foreground break-words">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-coral rounded-2xl p-4 sm:p-8 flex flex-col justify-center items-center text-center">
            <h3 className="font-display font-bold text-2xl mb-4 text-primary-foreground">
              Ready to Register?
            </h3>
            <p className="text-primary-foreground/80 mb-6">
              Complete your registration by filling out the form and making the payment.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-primary-foreground text-coral px-8 py-4 rounded-lg font-display font-bold text-lg hover:bg-primary-foreground/90 transition-colors"
            >
              Register Now
            </a>
          </div>
        </div>

        {/* Note */}
        <p className="text-center text-primary-foreground/60 text-sm mt-8">
          * All fees are inclusive of 18% GST for Indian delegates
        </p>
      </div>
    </section>
  );
};

export default Registration;
