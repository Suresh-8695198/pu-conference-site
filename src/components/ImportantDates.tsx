import { Calendar, FileText, Bell, CheckCircle, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";

const ImportantDates = () => {
  const dates = [
    {
      date: "25 December 2025",
      title: "Paper Submission Opens",
      description: "Start submitting your research papers",
      icon: FileText,
      color: "bg-navy",
      side: "left",
    },
    {
      date: "22 January 2026",
      title: "Paper Submission Deadline",
      description: "Last date for paper submission",
      icon: Calendar,
      color: "bg-burgundy",
      side: "right",
    },
    {
      date: "30 January 2026",
      title: "Acceptance Notification",
      description: "Notification of acceptance/rejection",
      icon: Bell,
      color: "bg-navy",
      side: "left",
    },
    {
      date: "02 February 2026",
      title: "Camera Ready Submission",
      description: "Final paper submission deadline",
      icon: CheckCircle,
      color: "bg-burgundy",
      side: "right",
    },
    {
      date: "19 February 2026",
      title: "Registration Deadline",
      description: "Last date for registration",
      icon: CreditCard,
      color: "bg-navy",
      side: "left",
    },
    {
      date: "26-27 February 2026",
      title: "Conference Dates",
      description: "Main conference event",
      icon: Calendar,
      color: "bg-burgundy",
      side: "right",
    },
  ];

  return (
    <section id="dates" className="py-24 bg-cream">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-gold font-display font-semibold text-sm uppercase tracking-wider mb-4">
            Mark Your Calendar
          </span>
          <h2 className="section-title">
            Important <span className="text-burgundy">Dates</span>
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mt-6" />
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Center Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-navy/20 hidden md:block" />

          {dates.map((item, index) => (
            <div
              key={item.title}
              className={`relative flex items-center mb-8 md:mb-12 ${
                item.side === "right" ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Content Card */}
              <div className={`w-full md:w-5/12 ${item.side === "right" ? "md:pl-8" : "md:pr-8"}`}>
                <div className={`${item.color} rounded-2xl p-6 card-hover relative overflow-hidden`}>
                  {/* Decorative element */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-primary-foreground/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-3">
                      <item.icon className="w-6 h-6 text-primary-foreground" />
                      <span className="text-primary-foreground/80 text-sm font-medium">{item.date}</span>
                    </div>
                    <h3 className="font-display font-bold text-xl text-primary-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-primary-foreground/70 text-sm">{item.description}</p>
                  </div>

                  {/* Arrow */}
                  <div 
                    className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 ${item.color} transform rotate-45 ${
                      item.side === "right" ? "-left-2" : "-right-2"
                    }`}
                  />
                </div>
              </div>

              {/* Center Dot */}
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-background rounded-full border-4 border-navy items-center justify-center z-10">
                <div className="w-2 h-2 bg-gold rounded-full" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Don't miss the deadlines!</p>
          <Link to="/registration" className="btn-primary">
            Register Early
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ImportantDates;
