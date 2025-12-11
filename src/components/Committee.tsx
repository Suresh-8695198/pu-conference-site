import { User, Users, Award, Briefcase } from "lucide-react";
import { useState } from "react";

const Committee = () => {
  const [activeTab, setActiveTab] = useState<'academic' | 'technical'>('academic');
  const [advisoryTab, setAdvisoryTab] = useState<'international' | 'national'>('international');
  const organizingCommittee = [
    { name: "Dr. R. Rathipriya", role: "Professor of Computer Science, Periyar University" },
    { name: "Dr. S. Sathish", role: "Associate Professor of Computer Science, Periyar University" },
  ];

    const internationalAdvisoryCommittee = [
    { name: "Dr. M. Ashok Kumar", role: "Controller of Examination & HOD – OpenLabs, Associate Professor, BlueCrest University, Liberia" },
    { name: "Dr. Nithya Rekha Sivakumar", role: "Associate Professor, Princess Nourah Bint Abdulrahman University, Saudi Arabia" },
    { name: "Luis Martinez", role: "Professor (Full), University of Jaén, Spain" },
    { name: "Muthmainnah Yakin", role: "Assistant Professor, Universitas Al Asyariah Mandar, West Sulawesi, Indonesia" },
    { name: "Preethi Ananthachari", role: "Assistant Professor, Ahlia University, Manama, Bahrain" },
    { name: "Prof. Lai Khin Wee", role: "Associate Professor, Department of Biomedical Engineering, Faculty of Engineering, University of Malaya, Kuala Lumpur" },
    { name: "Prof. Massimo Ficco", role: "Full Professor, University of Campania Luigi Vanvitelli, Italy" },
    { name: "Prof. Valentina E. Balas", role: "Professor, Faculty of Engineering, Department of Automation and Applied Informatics, \"Aurel Vlaicu\" University of Arad, Romania" },
    { name: "Prof. Xiao-Zhi Gao", role: "Professor, School of Computing, Faculty of Science, Forestry and Technology, University of Eastern Finland, Finland" },
    { name: "Prof. Yui Wing Leung", role: "Professor, Department of Computer Science, Hong Kong Baptist University, Hong Kong" },
    { name: "Prof. Yuval Shavitt", role: "Professor, School of Electrical Engineering, Tel Aviv University, Israel" },
  ];

  const nationalAdvisoryCommittee = [
    { name: "Dr. (Mrs.) R. Leela Velusamy", role: "Professor, Computer Science and Engineering, National Institute of Technology Tiruchirappalli, Tiruchirappalli, Tamil Nadu, India" },
    { name: "Dr. B. Surendiran", role: "Professor, Computer Science and Engineering, National Institute of Technology Puducherry, Karaikal, Puducherry, India" },
    { name: "Dr. Abdul Nazeer K. A", role: "Professor, Computer Science and Engineering, National Institute of Technology Calicut, Calicut, Kerala, India" },
    { name: "Dr. T. Veerakumar", role: "Associate Professor, Electronics and Communication Engineering, National Institute of Technology Goa, Goa, India" },
    { name: "Dr. S. Selvakumar", role: "Professor (HAG), Computer Science and Engineering, National Institute of Technology Tiruchirappalli, Tiruchirappalli, Tamil Nadu, India" },
    { name: "Dr. Namita Mittal", role: "Associate Professor, Computer Science and Engineering, Malaviya National Institute of Technology Jaipur, Jaipur, Rajasthan, India" },
    { name: "Dr. Neeta Nain", role: "Associate Professor, Computer Science and Engineering, Malaviya National Institute of Technology Jaipur, Jaipur, Rajasthan, India" },
    { name: "Dr. K. HIMABINDU", role: "Assistant Professor, Department of Computer Science and Engineering, National Institute of Technology Andhra Pradesh, Tadepalligudem – 534101, Andhra Pradesh, India" },
    { name: "Dr. A. Prasanth", role: "Assistant Dean (Research) & Associate Professor, Computer Science and Engineering, Vel Tech University, Chennai, Tamil Nadu, India" },
    { name: "Dr. Choudhary Shyam Prakash", role: "Assistant Professor, Department of Computer Science and Engineering, National Institute of Technology Andhra Pradesh, Tadepalligudem – 534101, Andhra Pradesh, India" },
    { name: "Dr. Saikat Gochhait", role: "Associate Professor, SYMBIOSIS INTERNATIONAL UNIVERSITY, Lavale, Pune" },
    { name: "Dr. Mushtaq Ahmed (Head)", role: "Associate Professor, Dept. of Computer Science and Engineering, MNIT, Jaipur India-302017" },
    { name: "Senthilkumar Sengottaiyan", role: "Senior Developer Analyst, Ant Philosophy Technology & Services Private Limited, Bangalore" },
    { name: "Nivas K", role: "Sify technologies pvt, Tidel park, tharamani" },
    { name: "Dr.K.S.Sowmiya Rani", role: "Professor, Computer Science and Technology, Indian Institute of Engineering Science and Technology, Shibpur (IIEST)" },
    { name: "Dr. Sweta Jain", role: "Associate Professor, NIT Bhopal (MANIT)" },
  ];

  const academicLeadership = [
    { sno: 1, name: "Dr. D. Arul Pon Daniel", designation: "Assistant Professor", department: "Computer Science", affiliation: "Jayarani College", location: "Salem, Tamil Nadu, India" },
    { sno: 2, name: "Dr. P. S. Raja", designation: "Assistant Professor", department: "Computer Science", affiliation: "Government Arts College", location: "Dharmapuri, Tamil Nadu, India" },
    { sno: 3, name: "Dr. K. Sasirekha", designation: "Assistant Professor", department: "MCA", affiliation: "Sona College of Technology", location: "Salem, Tamil Nadu, India" },
    { sno: 4, name: "Dr. D. Rajeswari", designation: "Assistant Professor", department: "Computer Science", affiliation: "Sona College of Arts & Science", location: "Salem, Tamil Nadu, India" },
    { sno: 5, name: "Dr. Gowthamarayathirumal P", designation: "Assistant Professor", department: "Computer Science", affiliation: "Government Arts College", location: "Dharmapuri, Tamil Nadu, India" },
    { sno: 6, name: "Dr. G. Jothi", designation: "Assistant Professor", department: "Computer Science", affiliation: "Sona College of Arts & Science", location: "Salem, Tamil Nadu, India" },
    { sno: 7, name: "Dr. M. Bagyamathi", designation: "—", department: "—", affiliation: "—", location: "—" },
    { sno: 8, name: "Dr. B. Lavanya", designation: "—", department: "—", affiliation: "—", location: "—" },
    { sno: 9, name: "Dr. Renugadevi K", designation: "Assistant Professor", department: "Computer Science", affiliation: "NKR Government Arts College for Women", location: "Namakkal, Tamil Nadu, India" },
    { sno: 10, name: "Dr. T. Sudhakar", designation: "Assistant Professor", department: "Computer Science", affiliation: "CHRIST (Deemed to be University)", location: "Bengaluru, Karnataka, India" },
    { sno: 11, name: "Dr. S. Angelin Sophy", designation: "—", department: "—", affiliation: "—", location: "—" },
    { sno: 12, name: "Dr. G. Kavitha", designation: "—", department: "—", affiliation: "—", location: "—" },
    { sno: 13, name: "Dr. T. Dharani", designation: "Assistant Professor", department: "Information Science and Engineering", affiliation: "RRCE", location: "Bengaluru, Karnataka, India" },
    { sno: 14, name: "Mageshwari V", designation: "Assistant Professor", department: "—", affiliation: "Amrita Vishwa Vidyapeetham", location: "Coimbatore, Tamil Nadu, India" },
  ];

  const technicalLeadership = [
    { sno: 1, name: "Dr. N. Suresh Kumar", designation: "Director & Professor", department: "Computer Science and Engineering", affiliation: "Chettinad Academy of Research and Education (Deemed to be University), CIT", location: "Chengalpattu, Tamil Nadu, India" },
    { sno: 2, name: "Dr. T. Kalaiselvi", designation: "Associate Professor", department: "Computer Science and Technologies", affiliation: "Gandhigram Rural Institute (Deemed to be University)", location: "Dindigul, Tamil Nadu, India" },
    { sno: 3, name: "Dr. D. Ramyachitra", designation: "Associate Professor", department: "Computer Science", affiliation: "Bharathiar University", location: "Coimbatore, Tamil Nadu, India" },
    { sno: 4, name: "Dr. R. Vadivel", designation: "Associate Professor & Head (i/c)", department: "Information Technology", affiliation: "Bharathiar University", location: "Coimbatore, Tamil Nadu, India" },
    { sno: 5, name: "Dr. M. Sumathi", designation: "Head & Associate Professor", department: "PG & Research Department of Computer Science", affiliation: "Sri Meenakshi Government Arts College for Women (Autonomous)", location: "Madurai, Tamil Nadu, India" },
    { sno: 6, name: "Vijaya A", designation: "Professor", department: "Computer Science", affiliation: "Sri Meenakshi Government Arts College for Women (Autonomous)", location: "Madurai, Tamil Nadu, India" },
    { sno: 7, name: "Professor Vijaya A", designation: "Professor", department: "Computer Science", affiliation: "Sri Meenakshi Government Arts College for Women (Autonomous)", location: "Madurai, Tamil Nadu, India" },
    { sno: 8, name: "Dr. K. Akilandeswari", designation: "Associate Professor", department: "Computer Science", affiliation: "Government Arts College", location: "Salem, Tamil Nadu, India" },
    { sno: 9, name: "Dr. E. George Dharma Prakash Raj", designation: "Professor & Head", department: "School of Computer Science, Engineering and Applications", affiliation: "Bharathidasan University", location: "Tiruchirappalli, Tamil Nadu, India" },
    { sno: 10, name: "Dr. S. Janakiraman", designation: "Professor & Placement Coordinator", department: "Banking Technology, School of Management", affiliation: "Pondicherry University (Central University)", location: "Puducherry, India" },
    { sno: 11, name: "Dr. C. Velayutham", designation: "Associate Professor", department: "Computer Science", affiliation: "Aditanar College of Arts and Science", location: "Tiruchendur, Tamil Nadu, India" },
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
      title: "General Chair",
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {committees.slice(0, 3).map((committee) => (
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {committees.slice(3).map((committee) => (
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

        {/* Advisory Committee */}
        <div className="bg-background rounded-2xl p-8 mt-16">
          <h3 className="font-display font-bold text-2xl text-navy text-center mb-8">
            Advisory Committee
          </h3>

          {/* Advisory Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="bg-slate rounded-lg p-1 flex">
              <button
                onClick={() => setAdvisoryTab('international')}
                className={`px-6 py-3 rounded-lg font-display font-semibold transition-all duration-300 ${
                  advisoryTab === 'international'
                    ? 'bg-teal text-primary-foreground shadow-lg'
                    : 'text-navy hover:bg-slate-200'
                }`}
              >
                International Advisory Committee
              </button>
              <button
                onClick={() => setAdvisoryTab('national')}
                className={`px-6 py-3 rounded-lg font-display font-semibold transition-all duration-300 ${
                  advisoryTab === 'national'
                    ? 'bg-teal text-primary-foreground shadow-lg'
                    : 'text-navy hover:bg-slate-200'
                }`}
              >
                National Advisory Committee
              </button>
            </div>
          </div>

          {/* Advisory Tab Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advisoryTab === 'international' && internationalAdvisoryCommittee.map((member, index) => (
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

            {advisoryTab === 'national' && nationalAdvisoryCommittee.map((member, index) => (
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

        {/* Academic & Technical Leadership */}
        <div className="bg-background rounded-2xl p-8 mt-16">
          <h3 className="font-display font-bold text-2xl text-navy text-center mb-8">
            Academic & Technical Leadership
          </h3>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="bg-slate rounded-lg p-1 flex">
              <button
                onClick={() => setActiveTab('academic')}
                className={`px-6 py-3 rounded-lg font-display font-semibold transition-all duration-300 ${
                  activeTab === 'academic'
                    ? 'bg-teal text-primary-foreground shadow-lg'
                    : 'text-navy hover:bg-slate-200'
                }`}
              >
                Academic Leadership
              </button>
              <button
                onClick={() => setActiveTab('technical')}
                className={`px-6 py-3 rounded-lg font-display font-semibold transition-all duration-300 ${
                  activeTab === 'technical'
                    ? 'bg-teal text-primary-foreground shadow-lg'
                    : 'text-navy hover:bg-slate-200'
                }`}
              >
                Technical Leadership
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="overflow-x-auto">
            {activeTab === 'academic' && (
              <div>
                <h4 className="font-display font-bold text-xl text-navy mb-6 text-center">Technical Program Chair (TPC Chair)</h4>
                <table className="w-full border-collapse border border-slate-300 rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-navy text-primary-foreground">
                      <th className="border border-slate-300 px-4 py-3 text-left font-display font-bold">S.No</th>
                      <th className="border border-slate-300 px-4 py-3 text-left font-display font-bold">Name</th>
                      <th className="border border-slate-300 px-4 py-3 text-left font-display font-bold">Designation</th>
                      <th className="border border-slate-300 px-4 py-3 text-left font-display font-bold">Department</th>
                      <th className="border border-slate-300 px-4 py-3 text-left font-display font-bold">Affiliation (Institution)</th>
                      <th className="border border-slate-300 px-4 py-3 text-left font-display font-bold">Location</th>
                    </tr>
                  </thead>
                  <tbody>
                    {academicLeadership.map((member, index) => (
                      <tr key={member.sno} className={index % 2 === 0 ? 'bg-slate-50' : 'bg-white'}>
                        <td className="border border-slate-300 px-4 py-3 text-navy font-medium">{member.sno}</td>
                        <td className="border border-slate-300 px-4 py-3 text-navy font-medium">{member.name}</td>
                        <td className="border border-slate-300 px-4 py-3 text-muted-foreground">{member.designation}</td>
                        <td className="border border-slate-300 px-4 py-3 text-muted-foreground">{member.department}</td>
                        <td className="border border-slate-300 px-4 py-3 text-muted-foreground">{member.affiliation}</td>
                        <td className="border border-slate-300 px-4 py-3 text-muted-foreground">{member.location}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'technical' && (
              <div>
                <h4 className="font-display font-bold text-xl text-navy mb-6 text-center">Technical Program Committee (TPC) Members</h4>
                <table className="w-full border-collapse border border-slate-300 rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-navy text-primary-foreground">
                      <th className="border border-slate-300 px-4 py-3 text-left font-display font-bold">S.No</th>
                      <th className="border border-slate-300 px-4 py-3 text-left font-display font-bold">Name</th>
                      <th className="border border-slate-300 px-4 py-3 text-left font-display font-bold">Designation</th>
                      <th className="border border-slate-300 px-4 py-3 text-left font-display font-bold">Department / Role</th>
                      <th className="border border-slate-300 px-4 py-3 text-left font-display font-bold">Affiliation (Institution)</th>
                      <th className="border border-slate-300 px-4 py-3 text-left font-display font-bold">Location</th>
                    </tr>
                  </thead>
                  <tbody>
                    {technicalLeadership.map((member, index) => (
                      <tr key={member.sno} className={index % 2 === 0 ? 'bg-slate-50' : 'bg-white'}>
                        <td className="border border-slate-300 px-4 py-3 text-navy font-medium">{member.sno}</td>
                        <td className="border border-slate-300 px-4 py-3 text-navy font-medium">{member.name}</td>
                        <td className="border border-slate-300 px-4 py-3 text-muted-foreground">{member.designation}</td>
                        <td className="border border-slate-300 px-4 py-3 text-muted-foreground">{member.department}</td>
                        <td className="border border-slate-300 px-4 py-3 text-muted-foreground">{member.affiliation}</td>
                        <td className="border border-slate-300 px-4 py-3 text-muted-foreground">{member.location}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
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
