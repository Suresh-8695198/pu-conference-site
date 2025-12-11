import { User, Users, Award, Briefcase } from "lucide-react";

const Committee = () => {
  const organizingCommittee = [
    { name: "Dr. R. Rathipriya", role: "Professor, Periyar University, Salem, Tamilnadu, India" },
    { name: "Dr. S. Sathish", role: "Associate Professor, Periyar University, Salem, Tamilnadu, India" },
  ];

   const internationalAdvisoryCommittee = [
    { name: "Dr. Ahmed J. Obaid", university: "University of Kufa", country: "Iraq", image: "/Ahmed.jpeg" },
    { name: "Dr. Ganesh R. Naik", university: "Torrens University / Flinders University", country: "Australia", image: "/Ganesh Naik.jpeg" },
    { name: "Dr. Gunasekaran Thangavel", university: "University of Technology and Applied Sciences–HCT", country: "Oman", image: "/Gunasekaran Thangavel.jpeg" },
    { name: "Dr. M. Ashok Kumar", university: "BlueCrest University", country: "Liberia", image: "/Ashok Kumar.jpg" },
    { name: "Dr. Muthmainnah Yakin", university: "Universitas Al Asyariah Mandar", country: "Indonesia", image: "/Muthmainnah Yakin.jpg" },
    { name: "Dr. Nithya Rekha Sivakumar", university: "Princess Nourah Bint Abdulrahman University", country: "Saudi Arabia", image: "/Nithya Rekha Sivakumar.jpg" },
    { name: "Dr. Preethi Ananthachari", university: "Ahlia University", country: "Bahrain", image: "/Preethi Ananthachari.jpg" },
    { name: "Prof. Lai Khin Wee", university: "University of Malaya", country: "Malaysia", image: "/Lai Khin Wee.jpg" },
    { name: "Prof. Luis Martinez Lopez", university: "University of Jaén", country: "Spain", image: "/Luis Martinez Lopez.jpg" },
    { name: "Prof. Massimo Ficco", university: "University of Campania Luigi Vanvitelli", country: "Italy", image: "/Massimo Ficco.jpg" },
    { name: "Prof. Sudhir Dixit", university: "University of Oulu", country: "Finland", image: "/Sudhir Dixit.jpg" },
    { name: "Prof. Valentina E. Balas", university: "Aurel Vlaicu University of Arad", country: "Romania", image: "/Balas.jpg" },
    { name: "Prof. Xiao-Zhi Gao", university: "University of Eastern Finland", country: "Finland", image: "/Xiao-Zhi Gao.jpg" },
    { name: "Prof. Yui Wing Leung", university: "Hong Kong Baptist University", country: "Hong Kong", image: "/Yui Wing Leung.jpg" },
    { name: "Prof. Yuval Shavitt", university: "Tel Aviv University", country: "Israel", image: "/Yuval Shavitt.jpg" },
  ];

  const nationalAdvisoryCommittee = [
    { name: "Dr. Abdul Nazeer K. A", university: "National Institute of Technology Calicut", country: "India", image: "/Abdul Nazeer.jpg" },
    { name: "Dr. A. Prasanth", university: "Vel Tech University", country: "India", image: "/Prasanth.jpg" },
    { name: "Dr. Choudhary Shyam Prakash", university: "National Institute of Technology Andhra Pradesh", country: "India", image: "/Choudhary Shyam Prakash.jpg" },
    { name: "Dr. R. Leela Velusamy", university: "National Institute of Technology Tiruchirappalli", country: "India", image: "/Leela Velusamy.jpg" },
    { name: "Dr. K. Himabindu", university: "National Institute of Technology Andhra Pradesh", country: "India", image: "/HIMABINDU.jpg" },
    { name: "Dr. K. S. Sowmiya Rani", university: "Sowmis_AWW", country: "India", image: "/sowmiya.jpg" },
    { name: "Dr. Mushtaq Ahmed", university: "Malaviya National Institute of Technology (MNIT) Jaipur", country: "India", image: "/Mushtaq Ahmed.jpg" },
    { name: "Dr. Namita Mittal", university: "Malaviya National Institute of Technology Jaipur", country: "India", image: "/Namita Mittal.jpg" },
    { name: "Dr. Neeta Nain", university: "Malaviya National Institute of Technology Jaipur", country: "India", image: "/Neeta Nain.jpg" },
    { name: "Dr. Saikat Gochhait", university: "Symbiosis International University", country: "India", image: "/Saikat Gochhait.jpg" },
    { name: "Dr. S. Selvakumar", university: "National Institute of Technology Tiruchirappalli", country: "India", image: "/Selvakumar.jpg" },
    { name: "Dr. Senthilkumar Sengottaiyan", university: "Ant Philosophy Technology & Services Pvt. Ltd.", country: "India", image: "/Senthilkumar.jpg" },
    { name: "Dr. Sipra Das Bit", university: "Indian Institute of Engineering Science and Technology (IIEST) Shibpur", country: "India", image: "/Sipra Das Bit.jpg" },
    { name: "Dr. Sweta Jain", university: "Maulana Azad National Institute of Technology (MANIT)", country: "India", image: "/Sweta Jain.jpg" },
    { name: "Dr. T. Veerakumar", university: "National Institute of Technology Goa", country: "India", image: "/Veerakumar.jpg" },
    { name: "Dr. Tanmay De", university: "National Institute of Technology Durgapur", country: "India", image: "/Tanmay De.jpg" },
    { name: "Nivas K", university: "Sify Technologies Pvt. Ltd.", country: "India", image: "/Nivas.jpg" },
    { name: "Salom Jerlin", university: "Managing Director, Hitakey Tech solution", country: "India", image: "/Salom Jerlin.jpg" },
  ];

  const academicLeadership = [
    { name: "Dr. D. Arul Pon Daniel", role: "Jayarani College, Salem, Tamil Nadu, India", image: "/Arul Pon Daniel.jpg" },
    { name: "Dr. P. S. Raja", role: "Government Arts College, Dharmapuri, Tamil Nadu, India", image: "/Raja.jpg" },
    { name: "Dr. K. Sasirekha", role: "Sona College of Technology, Salem, Tamil Nadu, India", image: "/Sasirekha.jpg" },
    { name: "Dr. D. Rajeswari", role: "Sona College of Arts & Science, Salem, Tamil Nadu, India", image: "/Rajeswari.jpg" },
    { name: "Dr. Gowthamarayathirumal P", role: "Government Arts College, Dharmapuri, Tamil Nadu, India", image: "/Gowthamarayathirumal.jpg" },
    { name: "Dr. G. Jothi", role: "Sona College of Arts & Science, Salem, Tamil Nadu, India", image: "/Jothi.jpg" },
    { name: "Dr. M. Bagyamathi", role: "—", image: "/Bagyamathi.jpg" },
    { name: "Dr. B. Lavanya", role: "—", image: "/Lavanya.jpg" },
    { name: "Dr. Renugadevi K", role: "NKR Government Arts College for Women, Namakkal, Tamil Nadu, India", image: "/Renugadevi.jpg" },
    { name: "Dr. T. Sudhakar", role: "CHRIST (Deemed to be University), Bengaluru, Karnataka, India", image: "/Sudhakar.jpg" },
    { name: "Dr. S. Angelin Sophy", role: "—", image: "/Angelin Sophy.jpg" },
    { name: "Dr. G. Kavitha", role: "—", image: "/Kavitha.jpg" },
    { name: "Dr. T. Dharani", role: "RRCE, Bengaluru, Karnataka, India", image: "/Dharani.jpg" },
    { name: "Mageshwari V", role: "Amrita Vishwa Vidyapeetham, Coimbatore, Tamil Nadu, India", image: "/Mageshwari.jpg" },
  ];

  const technicalLeadership = [
    { name: "Dr. N. Suresh Kumar", role: "Chettinad Academy of Research and Education (Deemed to be University), CIT, Chengalpattu, Tamil Nadu, India", image: "/Suresh Kumar.jpg" },
    { name: "Dr. T. Kalaiselvi", role: "Gandhigram Rural Institute (Deemed to be University), Dindigul, Tamil Nadu, India", image: "/Kalaiselvi.jpg" },
    { name: "Dr. D. Ramyachitra", role: "Bharathiar University, Coimbatore, Tamil Nadu, India", image: "/Ramyachitra.jpg" },
    { name: "Dr. R. Vadivel", role: "Bharathiar University, Coimbatore, Tamil Nadu, India", image: "/Vadivel.jpg" },
    { name: "Dr. M. Sumathi", role: "Sri Meenakshi Government Arts College for Women (Autonomous), Madurai, Tamil Nadu, India", image: "/Sumathi.jpg" },
    { name: "Professor Vijaya A", role: "Sri Meenakshi Government Arts College for Women (Autonomous), Madurai, Tamil Nadu, India", image: "/Vijaya.jpg" },
    { name: "Dr. K. Akilandeswari", role: "Government Arts College, Salem, Tamil Nadu, India", image: "/Akilandeswari.jpg" },
    { name: "Dr. E. George Dharma Prakash Raj", role: "Bharathidasan University, Tiruchirappalli, Tamil Nadu, India", image: "/George Dharma Prakash Raj.jpg" },
    { name: "Dr. S. Janakiraman", role: "Pondicherry University (Central University), Puducherry, India", image: "/Janakiraman.jpg" },
    { name: "Dr. C. Velayutham", role: "Aditanar College of Arts and Science, Tiruchendur, Tamil Nadu, India", image: "/Velayutham.jpeg" },
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
        { name: "Dr. I. Laurence Aroquiaraj", role: "Professor, Periyar University, Salem, Tamilnadu, India" },
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
                          <img src="/sundharavalli.jpeg" alt="Tmt. E. Sundaravalli" className="w-28 h-30 object-cover border border-slate" />
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
                        {"university" in member && "country" in member ? (
                          <p className="text-sm text-muted-foreground">{(member as any).university}, {(member as any).country}</p>
                        ) : (
                          <p className="text-sm text-muted-foreground">{member.role}</p>
                        )}
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
                      {"university" in member && "country" in member ? (
                        <p className="text-sm text-muted-foreground">{(member as any).university}, {(member as any).country}</p>
                      ) : (
                        <p className="text-sm text-muted-foreground">{member.role}</p>
                      )}
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
              {internationalAdvisoryCommittee.map((member) => (
                <div
                  key={member.name}
                  className="flex items-center gap-4 bg-slate p-4 rounded-xl hover:bg-muted transition-colors"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-14 h-14 object-cover  shrink-0"
                  />
                  <div>
                    <p className="font-display font-bold text-navy">{member.name}</p>
                    <p className="text-sm text-muted-foreground">{member.university}, {member.country}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* National Advisory Committee */}
          <div>
            <h4 className="font-display font-bold text-xl text-navy mb-6 text-center">National Advisory Committee</h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {nationalAdvisoryCommittee.map((member) => (
                <div
                  key={member.name}
                  className="flex items-center gap-4 bg-slate p-4 rounded-xl hover:bg-muted transition-colors"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-14 h-14 object-cover shrink-0"
                  />
                  <div>
                    <p className="font-display font-bold text-navy">{member.name}</p>
                    <p className="text-sm text-muted-foreground">{member.university}, {member.country}</p>
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
                  <img
                    src={member.image || "/committee-placeholder.jpg"}
                    alt={member.name}
                    className="w-14 h-14 object-cover shrink-0"
                  />
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
                  <img
                    src={member.image || "/committee-placeholder.jpg"}
                    alt={member.name}
                    className="w-14 h-14 object-cover shrink-0"
                  />
                  <div>
                    <p className="font-display font-bold text-navy">{member.name}</p>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </div>
                </div>
              ))}
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
