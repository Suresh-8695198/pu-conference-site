import { User, Users, Award, Briefcase } from "lucide-react";

const Committee = () => {
  const committees = [
    {
      title: "Chief Patron",
      icon: Award,
      color: "bg-gold",
      members: [
        { name: "Tmt. E. Sundaravalli, I.A.S.", role: "Syndicate Member, Periyar University, Salem - 636 011" },
      ],
    },
    {
      title: "Patron",
      icon: User,
      color: "bg-navy",
      members: [
        { name: "Prof. R. Subramani", role: "Syndicate Member, Periyar University, Salem - 636 011" },
        { name: "Dr. S. Jayanthi", role: "Syndicate Member, Periyar University, Salem - 636 011" },
      ],
    },
    {
      title: "Co-Patron",
      icon: Briefcase,
      color: "bg-coral",
      members: [
        { name: "DR. C. CHANDRASEKAR", role: "Senior Professor & Head of Computer Science, Periyar University" },
      ],
    },
    {
      title: "General Chair",
      icon: Users,
      color: "bg-teal",
      members: [
        { name: "Dr. H. Hannah Inbarani", role: "Professor, Periyar University, Salem, Tamilnadu, India" },
        { name: "Dr.I. laurence Aroquiaraj", role: "Professor of Computer Science, Periyar University" },
      ],
    },
  ];

  const organizingCommittee = [
    { name: "Dr. H. Hannah Inbarani", role: "Professor, Periyar University" },
    { name: "Dr.I. laurence aroquiaraj", role: "Professor of Computer Science, Periyar University" },
    { name: "Dr.Saikat Gochhait", role: "Associate Professor, Symbiosis Institute of Telecom Management, Symbiosis International University" },
    { name: "Dr. Fabrício Moraes de Almeida", role: "Electrical Engineering Department - UFRO (Brazil)" },
    { name: "DR. C. CHANDRASEKAR", role: "Senior Professor & Head of Computer Science, Periyar University" },
    { name: "Dr.R.Rathipriya", role: "Professor of Computer Science, Periyar University" },
    { name: "DR. S. SATHISH", role: "Associate Professor of Computer Science, Periyar University" },
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
                  <div key={member.name} className="flex items-center gap-3">
                      {member.name === "Dr. S. Jayanthi" && (
                        <img src="/jayanthi.png" alt="Dr. S. Jayanthi" className="w-20 h-20 object-cover border border-slate" />
                      )}
                      {member.name === "Prof. R. Subramani" && (
                        <img src="/subramani.jpeg" alt="Prof. R. Subramani" className="w-20 h-20 object-cover border border-slate" />
                      )}
                      {member.name === "DR. C. CHANDRASEKAR" && (
                        <img src="/chandrasekar.jpeg" alt="DR. C. CHANDRASEKAR" className="w-20 h-20 object-cover border border-slate" />
                      )}
                      {member.name === "Dr. H. Hannah Inbarani" && (
                        <img src="/inbarani.jpeg" alt="Dr. H. Hannah Inbarani" className="w-20 h-20 object-cover border border-slate" />
                      )}
                      {member.name === "Dr.I. laurence Aroquiaraj" || member.name === "Dr.I. laurence aroquiaraj" ? (
                        <img src="/laurence.jpeg" alt="Dr.I. laurence Aroquiaraj" className="w-20 h-20 object-cover border border-slate" />
                      ) : null}
                      {member.name.includes("Sundaravalli") && (
                        <img src="/sundharavalli.jpeg" alt="Tmt. E. Sundaravalli" className="w-20 h-20 object-cover border border-slate" />
                      )}
                    <div>
                      <p className="font-display font-bold text-navy">{member.name}</p>
                      <p className="text-sm text-muted-foreground">{member.role}</p>
                    </div>
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

        {/* Publishing Partner & Keynote Speaker */}
        <div className="mt-12 text-center space-y-6">
          <div className="bg-background rounded-2xl p-6 shadow">
            <h4 className="font-display font-bold text-xl text-navy mb-2">Publishing Partner</h4>
            <p className="text-muted-foreground text-base">All peer-reviewed full papers will be published in the edited book <b>“Beyond Algorithms: Next-Gen AI for Health, Agriculture, and Humanity”</b>, CRC Press, Taylor & Francis Group.</p>
          </div>
          <div className="bg-background rounded-2xl p-6 shadow">
            <h4 className="font-display font-bold text-xl text-navy mb-2">Keynote Speaker</h4>
            <p className="text-muted-foreground text-base">(Add keynote speaker details here as needed)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Committee;
