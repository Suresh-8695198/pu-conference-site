import { User, Users, Award, Briefcase, Mic } from "lucide-react";

const Committee = () => {
  const organizingCommittee = [
    { name: "Dr. R. Rathipriya", role: "Professor of Computer Science, Periyar University" },
    { name: "Dr. S. Sathish", role: "Associate Professor of Computer Science, Periyar University" },
  ];

   const internationalAdvisoryCommittee = [
    { name: "Dr. M. Ashok Kumar", role: "BlueCrest University, Liberia" },
    { name: "Dr. Nithya Rekha Sivakumar", role: "Princess Nourah Bint Abdulrahman University, Saudi Arabia" },
    { name: "Luis Martinez", role: "University of Jaén, Spain" },
    { name: "Muthmainnah Yakin", role: "Universitas Al Asyariah Mandar, Indonesia" },
    { name: "Preethi Ananthachari", role: "Ahlia University, Bahrain" },
    { name: "Prof. Lai Khin Wee", role: "University of Malaya, Malaysia" },
    { name: "Prof. Massimo Ficco", role: "University of Campania Luigi Vanvitelli, Italy" },
    { name: "Prof. Valentina E. Balas", role: "\"Aurel Vlaicu\" University of Arad, Romania" },
    { name: "Prof. Xiao-Zhi Gao", role: "University of Eastern Finland, Finland" },
    { name: "Prof. Yui Wing Leung", role: "Hong Kong Baptist University, Hong Kong" },
    { name: "Prof. Yuval Shavitt", role: "Tel Aviv University, Israel" },
  ];

  const nationalAdvisoryCommittee = [
    { name: "Dr. (Mrs.) R. Leela Velusamy", role: "National Institute of Technology Tiruchirappalli, India" },
    { name: "Dr. B. Surendiran", role: "National Institute of Technology Puducherry, India" },
    { name: "Dr. Abdul Nazeer K. A", role: "National Institute of Technology Calicut, India" },
    { name: "Dr. T. Veerakumar", role: "National Institute of Technology Goa, India" },
    { name: "Dr. S. Selvakumar", role: "National Institute of Technology Tiruchirappalli, India" },
    { name: "Dr. Namita Mittal", role: "Malaviya National Institute of Technology Jaipur, India" },
    { name: "Dr. Neeta Nain", role: "Malaviya National Institute of Technology Jaipur, India" },
    { name: "Dr. K. HIMABINDU", role: "National Institute of Technology Andhra Pradesh, India" },
    { name: "Dr. A. Prasanth", role: "Vel Tech University, India" },
    { name: "Dr. Choudhary Shyam Prakash", role: "National Institute of Technology Andhra Pradesh, India" },
    { name: "Dr. Saikat Gochhait", role: "SYMBIOSIS INTERNATIONAL UNIVERSITY, India" },
    { name: "Dr. Mushtaq Ahmed (Head)", role: "MNIT, India" },
    { name: "Senthilkumar Sengottaiyan", role: "Ant Philosophy Technology & Services Private Limited, India" },
    { name: "Nivas K", role: "Sify technologies pvt, India" },
    { name: "Dr.K.S.Sowmiya Rani", role: "Indian Institute of Engineering Science and Technology, India" },
    { name: "Dr. Sweta Jain", role: "NIT Bhopal (MANIT), India" },
  ];

  const academicLeadership = [
    { name: "Dr. D. Arul Pon Daniel", role: "Jayarani College, Salem, Tamil Nadu, India" },
    { name: "Dr. P. S. Raja", role: "Government Arts College, Dharmapuri, Tamil Nadu, India" },
    { name: "Dr. K. Sasirekha", role: "Sona College of Technology, Salem, Tamil Nadu, India" },
    { name: "Dr. D. Rajeswari", role: "Sona College of Arts & Science, Salem, Tamil Nadu, India" },
    { name: "Dr. Gowthamarayathirumal P", role: "Government Arts College, Dharmapuri, Tamil Nadu, India" },
    { name: "Dr. G. Jothi", role: "Sona College of Arts & Science, Salem, Tamil Nadu, India" },
    { name: "Dr. M. Bagyamathi", role: "—" },
    { name: "Dr. B. Lavanya", role: "—" },
    { name: "Dr. Renugadevi K", role: "NKR Government Arts College for Women, Namakkal, Tamil Nadu, India" },
    { name: "Dr. T. Sudhakar", role: "CHRIST (Deemed to be University), Bengaluru, Karnataka, India" },
    { name: "Dr. S. Angelin Sophy", role: "—" },
    { name: "Dr. G. Kavitha", role: "—" },
    { name: "Dr. T. Dharani", role: "RRCE, Bengaluru, Karnataka, India" },
    { name: "Mageshwari V", role: "Amrita Vishwa Vidyapeetham, Coimbatore, Tamil Nadu, India" },
  ];

  const technicalLeadership = [
    { name: "Dr. N. Suresh Kumar", role: "Chettinad Academy of Research and Education (Deemed to be University), CIT, Chengalpattu, Tamil Nadu, India" },
    { name: "Dr. T. Kalaiselvi", role: "Gandhigram Rural Institute (Deemed to be University), Dindigul, Tamil Nadu, India" },
    { name: "Dr. D. Ramyachitra", role: "Bharathiar University, Coimbatore, Tamil Nadu, India" },
    { name: "Dr. R. Vadivel", role: "Bharathiar University, Coimbatore, Tamil Nadu, India" },
    { name: "Dr. M. Sumathi", role: "Sri Meenakshi Government Arts College for Women (Autonomous), Madurai, Tamil Nadu, India" },
    { name: "Vijaya A", role: "Sri Meenakshi Government Arts College for Women (Autonomous), Madurai, Tamil Nadu, India" },
    { name: "Professor Vijaya A", role: "Sri Meenakshi Government Arts College for Women (Autonomous), Madurai, Tamil Nadu, India" },
    { name: "Dr. K. Akilandeswari", role: "Government Arts College, Salem, Tamil Nadu, India" },
    { name: "Dr. E. George Dharma Prakash Raj", role: "Bharathidasan University, Tiruchirappalli, Tamil Nadu, India" },
    { name: "Dr. S. Janakiraman", role: "Pondicherry University (Central University), Puducherry, India" },
    { name: "Dr. C. Velayutham", role: "Aditanar College of Arts and Science, Tiruchendur, Tamil Nadu, India" },
  ];

  const committees = [
    {
      title: "Chief Patron",
      icon: Award,
      color: "bg-gold",
      members: [
        { name: "Tmt. E. Sundaravalli, I.A.S.", role: "Syndicate Member, Periyar University, Salem - 636 011" },
        { name: "Prof. R. Subramani", role: "Syndicate Member, Periyar University, Salem - 636 011" },
        { name: "Dr. S. Jayanthi", role: "Syndicate Member, Periyar University, Salem - 636 011" },

      ],
    },
    {
      title: "Patron",
      icon: User,
      color: "bg-navy",
      members: [
        { name: "Dr. V. Raj", role: "Registrar(FAC), Periyar University Salem" },
      ],
    },
    {
      title: "Co-Patron",
      icon: Briefcase,
      color: "bg-coral",
      members: [
        { name: "Dr. C. Chandrasekar", role: "Senior Professor & Head of Computer Science, Periyar University" },
      ],
    },
    {
      title: "Organizing Secretary",
      icon: Users,
      color: "bg-navy",
      members: [
        { name: "Dr. H. Hannah Inbarani", role: "Professor, Periyar University, Salem, Tamilnadu, India" },
        { name: "Dr. I. Laurence Aroquiaraj", role: "Professor of Computer Science, Periyar University" },
      ],
    },
    {
      title: "Organizing Committee",
      icon: Users,
      color: "bg-coral",
      members: organizingCommittee,
    },
  ];

  return (
    <section id="committee" className="py-16 md:py-24 bg-slate">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-teal font-display font-semibold text-sm uppercase tracking-wider mb-4">
            Meet Our Team
          </span>
          <h2 className="section-title">
            Conference <span className="text-coral">Committee</span>
          </h2>
          <div className="w-24 h-1 bg-teal mx-auto mt-6" />
        </div>

        {/* Main Committee Cards */}
        {/* First Row: Chief Patron and Patron */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-6 md:mb-8">
          <div className="flex flex-col md:flex-row gap-6">
            {committees.slice(0, 2).map((committee) => (
              <div
                key={committee.title}
                className="bg-white rounded-2xl overflow-hidden card-hover border border-gray-200 shadow-lg"
                style={{ maxWidth: '100%', width: '100%' }}
              >
                <div className={`p-4 md:p-6 ${committee.title === 'Chief Patron' ? 'bg-gradient-to-r from-amber-600 to-yellow-600' : committee.title === 'Patron' ? 'bg-gradient-to-r from-blue-700 to-blue-800' : committee.title === 'Co-Patron' ? 'bg-gradient-to-r from-teal-600 to-teal-700' : 'bg-gradient-to-r from-emerald-600 to-emerald-700'}`}>
                  <committee.icon className="w-10 h-10 text-primary-foreground mb-3" />
                  <h3 className={`font-display font-bold text-xl text-primary-foreground ${
                    committee.title === 'Chief Patron' ? 'text-2xl' : ''
                  }`}>
                    {committee.title}
                  </h3>
                </div>
                <div className="p-6 space-y-4">
                  {committee.members.map((member) => (
                    <div key={member.name} className="flex items-center gap-3">
                        {member.name === "Dr. S. Jayanthi" && (
                          <img src="/jayanthi.png" alt="Dr. S. Jayanthi" className="w-28 h-28 object-cover border border-slate" />
                        )}
                        {member.name === "Prof. R. Subramani" && (
                          <img src="/subramani.jpeg" alt="Prof. R. Subramani" className="w-28 h-28 object-cover border border-slate" />
                        )}
                        {member.name === "Dr. C. Chandrasekar" && (
                          <img src="/chandrasekar.jpeg" alt="Dr. C. Chandrasekar" className="w-28 h-28 object-cover border border-slate" />
                        )}
                        {member.name === "Dr. H. Hannah Inbarani" && (
                          <img src="/inbarani.jpeg" alt="Dr. H. Hannah Inbarani" className="w-28 h-28 object-cover border border-slate" />
                        )}
                        {member.name === "Dr. I. Laurence Aroquiaraj" || member.name === "Dr.I. laurence aroquiaraj" ? (
                          <img src="/laurence.jpeg" alt="Dr. I. Laurence Aroquiaraj" className="w-28 h-28 object-cover border border-slate" />
                        ) : null}
                        {member.name.includes("Sundaravalli") && (
                          <img src="/sundharavalli.jpeg" alt="Tmt. E. Sundaravalli" className="w-28 h-28 object-cover border border-slate" />
                        )}
                        {member.name === "Dr. V. Raj" && (
                          <img src="/raj.jpeg" alt="Dr. V. Raj" className="w-28 h-28 object-cover border border-slate" />
                        )}
                        {member.name === "Dr. R. Rathipriya" && (
                          <img src="/rathipriya.jpeg" alt="Dr. R. Rathipriya" className="w-28 h-28 object-cover border border-slate" />
                        )}
                        {member.name === "Dr. S. Sathish" && (
                          <img src="/sathish.jpeg" alt="Dr. S. Sathish" className="w-28 h-28 object-cover border border-slate" />
                        )}
                      <div>
                        <p className={`font-display font-bold text-navy ${
                          committee.title === 'Chief Patron' ? 'text-lg' : ''
                        }`}>{member.name}</p>
                        <p className={`text-sm text-muted-foreground ${
                          committee.title === 'Chief Patron' ? 'text-base' : ''
                        }`}>{member.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Second Row: Co-Patron Centered */}
        <div className="flex justify-center mb-6 md:mb-8">
          <div style={{ maxWidth: '500px', width: '100%' }}>
            {committees.slice(2, 3).map((committee) => (
              <div
                key={committee.title}
                className="bg-background rounded-2xl overflow-hidden card-hover"
                style={{ minHeight: '450px' }}
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
                          <img src="/jayanthi.png" alt="Dr. S. Jayanthi" className="w-28 h-28 object-cover border border-slate" />
                        )}
                        {member.name === "Prof. R. Subramani" && (
                          <img src="/subramani.jpeg" alt="Prof. R. Subramani" className="w-28 h-28 object-cover border border-slate" />
                        )}
                        {member.name === "Dr. C. Chandrasekar" && (
                          <img src="/chandrasekar.jpeg" alt="Dr. C. Chandrasekar" className="w-28 h-28 object-cover border border-slate" />
                        )}
                        {member.name === "Dr. H. Hannah Inbarani" && (
                          <img src="/inbarani.jpeg" alt="Dr. H. Hannah Inbarani" className="w-28 h-28 object-cover border border-slate" />
                        )}
                        {member.name === "Dr. I. Laurence Aroquiaraj" || member.name === "Dr.I. laurence aroquiaraj" ? (
                          <img src="/laurence.jpeg" alt="Dr. I. Laurence Aroquiaraj" className="w-28 h-28 object-cover border border-slate" />
                        ) : null}
                        {member.name.includes("Sundaravalli") && (
                          <img src="/sundharavalli.jpeg" alt="Tmt. E. Sundaravalli" className="w-28 h-28 object-cover border border-slate" />
                        )}
                        {member.name === "Dr. V. Raj" && (
                          <img src="/raj.jpeg" alt="Dr. V. Raj" className="w-28 h-28 object-cover border border-slate" />
                        )}
                        {member.name === "Dr. R. Rathipriya" && (
                          <img src="/rathipriya.jpeg" alt="Dr. R. Rathipriya" className="w-28 h-28 object-cover border border-slate" />
                        )}
                        {member.name === "Dr. S. Sathish" && (
                          <img src="/sathish.jpeg" alt="Dr. S. Sathish" className="w-28 h-28 object-cover border border-slate" />
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
        </div>


        {/* Third Row: General Chair and Organizing Committee */}
        <div className="flex justify-center mb-12 md:mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
            {committees.slice(3).map((committee) => (
              <div
                key={committee.title}
                className="bg-background rounded-2xl overflow-hidden card-hover"
                style={{ maxWidth: '100%' }}
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
                        <img src="/jayanthi.png" alt="Dr. S. Jayanthi" className="w-28 h-28 object-cover border border-slate" />
                      )}
                      {member.name === "Prof. R. Subramani" && (
                        <img src="/subramani.jpeg" alt="Prof. R. Subramani" className="w-28 h-28 object-cover border border-slate" />
                      )}
                      {member.name === "Dr. C. Chandrasekar" && (
                        <img src="/chandrasekar.jpeg" alt="Dr. C. Chandrasekar" className="w-28 h-30 object-cover border border-slate" />
                      )}
                      {member.name === "Dr. H. Hannah Inbarani" && (
                        <img src="/inbarani.jpeg" alt="Dr. H. Hannah Inbarani" className="w-28 h-26 object-cover border border-slate" />
                      )}
                      {member.name === "Dr. I. Laurence Aroquiaraj" || member.name === "Dr.I. laurence aroquiaraj" ? (
                        <img src="/laurence.jpeg" alt="Dr. I. Laurence Aroquiaraj" className="w-28 h-26 object-cover border border-slate" />
                      ) : null}
                      {member.name.includes("Sundaravalli") && (
                        <img src="/sundharavalli.jpeg" alt="Tmt. E. Sundaravalli" className="w-28 h-28 object-cover border border-slate" />
                      )}
                      {member.name === "Dr. V. Raj" && (
                        <img src="/raj.jpeg" alt="Dr. V. Raj" className="w-28 h-28 object-cover border border-slate" />
                      )}
                      {member.name === "Dr. R. Rathipriya" && (
                        <img src="/rathipriya.jpeg" alt="Dr. R. Rathipriya" className="w-28 h-26 object-cover border border-slate" />
                      )}
                      {member.name === "Dr. S. Sathish" && (
                        <img src="/sathish.jpeg" alt="Dr. S. Sathish" className="w-28 h-26 object-cover border border-slate" />
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
        </div>

        {/* Advisory Committee */}
        <div className="bg-background rounded-2xl p-4 md:p-8 mt-16">
          <h3 className="font-display font-bold text-2xl text-navy text-center mb-8">
            Advisory Committee
          </h3>

          {/* International Advisory Committee */}
          <div className="mb-12">
            <h4 className="font-display font-bold text-xl text-navy mb-6 text-center">International Advisory Committee</h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {internationalAdvisoryCommittee.map((member, index) => (
                <div
                  key={member.name}
                  className="flex items-center gap-4 bg-slate p-4 rounded-xl hover:bg-muted transition-colors"
                >
                  <div className="w-14 h-14 bg-navy rounded-full flex items-center justify-center shrink-0">
                    <span className="text-primary-foreground font-bold text-lg">{index + 1}</span>
                  </div>
                  <div>
                    <p className="font-display font-bold text-navy">{member.name}</p>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* National Advisory Committee */}
          <div>
            <h4 className="font-display font-bold text-xl text-navy mb-6 text-center">National Advisory Committee</h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {nationalAdvisoryCommittee.map((member, index) => (
                <div
                  key={member.name}
                  className="flex items-center gap-4 bg-slate p-4 rounded-xl hover:bg-muted transition-colors"
                >
                  <div className="w-14 h-14 bg-navy rounded-full flex items-center justify-center shrink-0">
                    <span className="text-primary-foreground font-bold text-lg">{index + 1}</span>
                  </div>
                  <div>
                    <p className="font-display font-bold text-navy">{member.name}</p>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Academic & Technical Leadership */}
        <div className="bg-background rounded-2xl p-4 md:p-8 mt-16">
          <h3 className="font-display font-bold text-2xl text-navy text-center mb-8">
            Academic & Technical Leadership
          </h3>

          {/* Academic Leadership */}
          <div className="mb-12">
            <h4 className="font-display font-bold text-xl text-navy mb-6 text-center">Technical Program Chair (TPC Chair)</h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {academicLeadership.map((member, index) => (
                <div
                  key={member.name}
                  className="flex items-center gap-4 bg-slate p-4 rounded-xl hover:bg-muted transition-colors"
                >
                  <div className="w-14 h-14 bg-navy rounded-full flex items-center justify-center shrink-0">
                    <span className="text-primary-foreground font-bold text-lg">{index + 1}</span>
                  </div>
                  <div>
                    <p className="font-display font-bold text-navy">{member.name}</p>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Leadership */}
          <div>
            <h4 className="font-display font-bold text-xl text-navy mb-6 text-center">Technical Program Committee (TPC) Members</h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technicalLeadership.map((member, index) => (
                <div
                  key={member.name}
                  className="flex items-center gap-4 bg-slate p-4 rounded-xl hover:bg-muted transition-colors"
                >
                  <div className="w-14 h-14 bg-navy rounded-full flex items-center justify-center shrink-0">
                    <span className="text-primary-foreground font-bold text-lg">{index + 1}</span>
                  </div>
                  <div>
                    <p className="font-display font-bold text-navy">{member.name}</p>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Speakers */}
        <div className="bg-background rounded-2xl p-4 md:p-8 mt-16">
          <div className="text-center mb-8">
            <Mic className="w-12 h-12 text-teal mx-auto mb-4" />
            <h3 className="font-display font-bold text-2xl text-navy">
              Key Speakers
            </h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Speaker 1 */}
            <div className="bg-slate rounded-2xl p-6 hover:bg-slate-100 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-teal rounded-full flex items-center justify-center shrink-0">
                  <span className="text-primary-foreground font-bold text-xl">AP</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-display font-bold text-xl text-navy mb-2">Dr. A. Paventhan</h4>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p><strong>Senior Director, HoD-Research & Development</strong></p>
                    <p><strong>Scientist-G, ERNET India</strong></p>
                    <p>Ministry of Electronics & IT, Government of India</p>
                    <p><strong>Vice Chancellor - SR University</strong></p>
                    <p><strong>Director - leadingindia.ai</strong></p>
                    <p><strong>Director, Chair, IEEE Computer Society, India Council</strong></p>
                  </div>
                </div>
              </div>
            </div>

            {/* Speaker 2 */}
            <div className="bg-slate rounded-2xl p-6 hover:bg-slate-100 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-teal rounded-full flex items-center justify-center shrink-0">
                  <span className="text-primary-foreground font-bold text-xl">PP</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-display font-bold text-xl text-navy mb-2">Dr. Pramod Pisharady</h4>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p><strong>Assistant Professor</strong></p>
                    <p><strong>Chan Zuckerberg Imaging Scientist</strong></p>
                    <p>Assistant Professor at the Center for Magnetic Resonance Research (CMRR)</p>
                    <p>University of Minnesota (UMN)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Speaker 3 */}
            <div className="bg-slate rounded-2xl p-6 hover:bg-slate-100 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-teal rounded-full flex items-center justify-center shrink-0">
                  <span className="text-primary-foreground font-bold text-xl">SR</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-display font-bold text-xl text-navy mb-2">Dr. K. S. Sowmiya Rani</h4>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p><strong>Founder Editor & Reviewer</strong></p>
                    <p>Sowmis_AWW</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Speaker 4 */}
            <div className="bg-slate rounded-2xl p-6 hover:bg-slate-100 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-teal rounded-full flex items-center justify-center shrink-0">
                  <span className="text-primary-foreground font-bold text-xl">MY</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-display font-bold text-xl text-navy mb-2">Muthmainnah Yakin</h4>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p><strong>Assistant Professor</strong></p>
                    <p>Universitas Al Asyariah Mandar</p>
                    <p>West Sulawesi, Indonesia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Publishing Partner */}
        <div className="mt-12 text-center">
          <div className="bg-background rounded-2xl p-4 md:p-6 shadow">
            <h4 className="font-display font-bold text-xl text-navy mb-2">Publishing Partner</h4>
            <p className="text-muted-foreground text-base">All peer-reviewed full papers will be published in the edited book <b>"Beyond Algorithms: Next-Gen AI for Health, Agriculture, and Humanity"</b>, CRC Press, Taylor & Francis Group.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Committee;
