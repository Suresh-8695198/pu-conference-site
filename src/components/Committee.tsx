import { User, Users, Award, Briefcase } from "lucide-react";

const Committee = () => {
  const committees = [
    {
      title: "Chief Patron",
      icon: Award,
      color: "bg-gold",
      members: [
        { name: "Dr. R. Sankar", role: "Vice-Chancellor, Periyar University" },
      ],
    },
    {
      title: "Patron",
      icon: User,
      color: "bg-navy",
      members: [
        { name: "Dr. K. Sethuraman", role: "Registrar, Periyar University" },
      ],
    },
    {
      title: "General Chair",
      icon: Users,
      color: "bg-teal",
      members: [
        { name: "Dr. M. Sundaramurthy", role: "Head, Dept. of Computer Science" },
      ],
    },
    {
      title: "Conference Chair",
      icon: Briefcase,
      color: "bg-coral",
      members: [
        { name: "Dr. A. Rajesh Kumar", role: "Associate Professor" },
        { name: "Dr. S. Priya", role: "Assistant Professor" },
      ],
    },
  ];

  const organizingCommittee = [
    { name: "Dr. P. Venkatesh", role: "Professor" },
    { name: "Dr. S. Lakshmi", role: "Associate Professor" },
    { name: "Dr. R. Karthik", role: "Assistant Professor" },
    { name: "Dr. M. Deepa", role: "Assistant Professor" },
    { name: "Dr. K. Ramesh", role: "Assistant Professor" },
    { name: "Dr. T. Saranya", role: "Assistant Professor" },
  ];

  return (
    <section id="committee" className="py-24 bg-slate">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-teal font-display font-semibold text-sm uppercase tracking-wider mb-4">
            Meet Our Team
          </span>
          <h2 className="section-title">
            Conference <span className="text-coral">Committee</span>
          </h2>
          <div className="w-24 h-1 bg-teal mx-auto mt-6" />
        </div>

        {/* Main Committee Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {committees.map((committee) => (
            <div
              key={committee.title}
              className="bg-background rounded-2xl overflow-hidden card-hover"
            >
              <div className={`${committee.color} p-6`}>
                <committee.icon className="w-10 h-10 text-primary-foreground mb-3" />
                <h3 className="font-display font-bold text-xl text-primary-foreground">
                  {committee.title}
                </h3>
              </div>
              <div className="p-6 space-y-4">
                {committee.members.map((member) => (
                  <div key={member.name}>
                    <p className="font-display font-bold text-navy">{member.name}</p>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Organizing Committee */}
        <div className="bg-background rounded-2xl p-8">
          <h3 className="font-display font-bold text-2xl text-navy text-center mb-8">
            Organizing Committee
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {organizingCommittee.map((member) => (
              <div
                key={member.name}
                className="flex items-center gap-4 bg-slate p-4 rounded-xl hover:bg-muted transition-colors"
              >
                <div className="w-14 h-14 bg-navy rounded-full flex items-center justify-center shrink-0">
                  <User className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-display font-bold text-navy">{member.name}</p>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Advisory Board Note */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            For the complete list of Advisory Board and Technical Program Committee members,{" "}
            <a href="#contact" className="text-teal font-medium hover:underline">
              contact us
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Committee;
