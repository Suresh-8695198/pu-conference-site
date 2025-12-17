import { User, Users, Award, Briefcase } from "lucide-react";
import { useState } from "react";

const MemberImage = ({ name, size = "w-28 h-28" }: { name: string; size?: string }) => {
  const [imgError, setImgError] = useState(false);
  
  const imageMap: Record<string, string> = {
    "Dr. S. Jayanthi": "/jayanthi.png",
    "Prof. R. Subramani": "/subramani.jpeg",
    "Dr. C. Chandrasekar": "/chandrasekar.jpeg",
    "Dr. H. Hannah Inbarani": "/inbarani.jpeg",
    "Dr. I. Laurence Aroquiaraj": "/laurence.jpeg",
    "Dr.I. laurence aroquiaraj": "/laurence.jpeg",
    "Tmt. E. Sundaravalli, I.A.S.": "/sundharavalli.jpeg",
    "Dr. V. Raj": "/raj.jpeg",
    "Dr. R. Rathipriya": "/rathipriya.jpeg",
    "Dr. S. Sathish": "/sathish.jpeg",
    // Images for newly added technical leadership members
    "Dr. R PORKODI": "/R_PORKODI.jpg",
    "Dr. Kaja Mohideen A": "/Kaja_Mohideen_A.jpg",
    "Dr. Manikandan Kumar": "/Manikandan_Kumar.jpg",
    "Dr. P. Shanmuga Sundari": "/P_Shanmuga_Sundari.jpg",
    "Dr. J. Frank Ruban Jebaraj": "/J_Frank_Ruban_Jebaraj.png",
    "Dr. T RAMESH": "/T_RAMESH.jpg",
    "Dr. D NAPOLEON": "/D_NAPOLEON.jpg",
    "Dr. W. Rose verna, M.C.A Ph.D": "/W_Rose_verna.jpg",
    "Dr. ABDUL GAFFAR H": "/ABDUL_GAFFAR_H.jpg",
    "Dr. Murali S": "/Murali_S.jpg",
    // Images for recently added national advisory members
    "Mohanasundaram Ranganathan": "/Mohanasundaram_Ranganathan.jpeg",
    "Dr. Vijayarajan R": "/Vijayarajan_R.jpeg",
    "Dr. Nagarajan Deivanayagam Pillai": "/Nagarajan_Deivanayagam_Pillai.jpg",
  };

  const findImageSrc = (name: string) => {
    if (imageMap[name]) return imageMap[name];
    const removeTitles = (s: string) => s.replace(/^(Dr\.|Prof\.|Mr\.|Ms\.|Mrs\.|Tmt\.)\s*/i, '').replace(/[.,]/g, '').trim().toLowerCase();
    const nameClean = removeTitles(name);
    const nameWords = nameClean.split(/\s+/).filter(Boolean);

    // Exact cleaned match
    for (const key of Object.keys(imageMap)) {
      if (removeTitles(key) === nameClean) return imageMap[key];
    }

    // Match by last substantive word
    const lastWord = [...nameWords].reverse().find(w => w.length > 2) || nameWords[0];
    for (const key of Object.keys(imageMap)) {
      const keyClean = removeTitles(key);
      const keyWords = keyClean.split(/\s+/);
      if (keyWords.includes(lastWord)) return imageMap[key];
    }

    // Match by any substantive word
    for (const key of Object.keys(imageMap)) {
      const keyClean = removeTitles(key);
      for (const w of nameWords) {
        if (w.length > 2 && keyClean.includes(w)) return imageMap[key];
      }
    }

    return null;
  };

  const imageSrc = findImageSrc(name) || '/placeholder.svg';

  if (imageSrc && !imgError) {
    return (
      <img
        src={imageSrc}
        alt={name}
        className={`${size} object-cover border border-slate`}
        onError={() => setImgError(true)}
      />
    );
  }

  return (
    <div className={`${size} bg-navy rounded-lg flex items-center justify-center border border-slate`}>
      <User className="w-12 h-12 text-white" />
    </div>
  );
};

const Committee = () => {
  const titleCaseName = (s: string) => {
    if (!s) return s;
    return s
      .split(/\s+/)
      .map((w) => {
        // leave initials (single letters) uppercase, and preserve words with dots (e.g., M.C.A)
        if (w.length === 1) return w.toUpperCase();
        if (/[.]/.test(w)) return w;
        return w.charAt(0).toUpperCase() + w.slice(1).toLowerCase();
      })
      .join(' ');
  };
  const organizingCommittee = [
    { name: "Dr. R. Rathipriya", role: "Professor, Department of Computer Science, Periyar University, Salem" },
    { name: "Dr. S. Sathish", role: "Associate Professor, Department of Computer Science, Periyar University, Salem" },
  ];

   const internationalAdvisoryCommittee = [
    { name: "Dr. Ahmed J. Obaid", university: "University of Kufa", country: "Iraq", image: "/Ahmed.jpeg" },
    { name: "Dr. M. Ashok Kumar", university: "BlueCrest University", country: "Liberia, West Africa", image: "/Ashok Kumar.jpg" },
    { name: "Dr. Ganesh R. Naik", university: "Flinders University", country: "Australia", image: "/Ganesh Naik.jpeg" },
    { name: "Dr. Gunasekaran Thangavel", university: "University of Technology and Applied Sciences–HCT", country: "Oman", image: "/Gunasekaran Thangavel.jpeg" },
    { name: "Prof. Lai Khin Wee", university: "University of Malaya", country: "Malaysia", image: "/Lai Khin Wee.jpg" },
    { name: "Prof. Luis Martinez Lopez", university: "University of Jaén", country: "Spain", image: "/Luis Martinez Lopez.jpg" },
    { name: "Prof. Massimo Ficco", university: "University of Campania Luigi Vanvitelli", country: "Italy", image: "/Massimo Ficco.jpg" },
    { name: "Dr. Muthmainnah Yakin", university: "Universitas Al Asyariah Mandar", country: "Indonesia", image: "/Muthmainnah Yakin.jpg" },
    { name: "Dr. Nithya Rekha Sivakumar", university: "Princess Nourah Bint Abdulrahman University", country: "Saudi Arabia", image: "/Nithya Rekha Sivakumar.jpg" },
    { name: "Dr. Preethi Ananthachari", university: "Ahlia University", country: "Bahrain", image: "/Preethi Ananthachari.jpg" },
    { name: "Prof. Sudhir Dixit", university: "University of Oulu", country: "Finland", image: "/Sudhir Dixit.jpg" },
    { name: "Prof. Tzung-Pei Hong", university: "National University of Kaohsiung", location: "Kaohsiung, Taiwan", country: "Taiwan", image: "/Tzung-Pei Hong.jpg" },
    { name: "Prof. Valentina E. Balas", university: "Aurel Vlaicu University of Arad", country: "Romania", image: "/Balas.jpg" },
    { name: "Prof. Xiao-Zhi Gao", university: "University of Eastern Finland", country: "Finland", image: "/Xiao-Zhi Gao.jpg" },
    { name: "Prof. Yui Wing Leung", university: "Hong Kong Baptist University", country: "Hong Kong", image: "/Yui Wing Leung.jpg" },
    { name: "Prof. Yuval Shavitt", university: "Tel Aviv University", country: "Israel", image: "/Yuval Shavitt.jpg" },
  ];

  const nationalAdvisoryCommittee = [
    { name: "Dr. K. A. Abdul Nazeer", university: "National Institute of Technology Calicut,", location: "Calicut, Kerala, India", country: "India", image: "/Abdul Nazeer.jpg" },
    { name: "Dr. A. Prasanth", university: "Vel Tech University", location: "Chennai, Tamil Nadu, India", country: "India", image: "/Prasanth.jpg" },
    { name: "Dr. Choudhary Shyam Prakash", university: "National Institute of Technology Andhra Pradesh,", location: "Andhra Pradesh, India", country: "India", image: "/Choudhary Shyam Prakash.jpg" },
    { name: "Dr. K. Himabindu", university: "National Institute of Technology Andhra Pradesh,", location: "Andhra Pradesh, India", country: "India", image: "/HIMABINDU.jpg" },
    { name: "Dr. K. S. Sowmiya Rani", university: "Sowmis_AWW", location: "Coimbatore, Tamil Nadu, India", country: "India", image: "/sowmiya.jpg" },
    { name: "Dr. M. Thangarsu", university: "CGVAK", location: "Coimbatore, Tamil Nadu, India", country: "India", image: "/Thangarasu.jpg" },
    { name: "Dr. Mushtaq Ahmed", university: "Malaviya National Institute of Technology (MNIT) Jaipur,", location: "Jaipur, Rajasthan, India", country: "India", image: "/Mushtaq Ahmed.jpg" },
    { name: "Dr. Namita Mittal", university: "Malaviya National Institute of Technology Jaipur,", location: "Jaipur, Rajasthan, India", country: "India", image: "/Namita Mittal.jpg" },
    { name: "Dr. Neeta Nain", university: "Malaviya National Institute of Technology Jaipur,", location: "Jaipur, Rajasthan, India", country: "India", image: "/Neeta Nain.jpg" },
    { name: "K. Nivas", university: "Sify Technologies Pvt. Ltd.", location: "Tidel Park, Chennai, Tamil Nadu, India", country: "India", image: "/Nivas.jpg" },
    { name: "Dr. R. Leela Velusamy", university: "National Institute of Technology Tiruchirappalli,", location: "Tiruchirappalli, Tamil Nadu, India", country: "India", image: "/Leela Velusamy.jpg" },
    { name: "Dr. Saikat Gochhait", university: "Symbiosis International University,", location: "Lavale, Pune, Maharashtra, India", country: "India", image: "/Saikat Gochhait.jpg" },
    { name: "Dr. S. Selvakumar", university: "National Institute of Technology Tiruchirappalli,", location: "Tiruchirappalli, Tamil Nadu, India", country: "India", image: "/Selvakumar.jpg" },
    { name: "Dr. Senthilkumar Sengottaiyan", university: "Ant Philosophy Technology & Services Pvt. Ltd.,", location: "Bangalore, Karnataka, India", country: "India", image: "/Senthilkumar.jpg" },
    { name: "Dr. Sipra Das Bit", university: "Indian Institute of Engineering Science and Technology (IIEST) Shibpur,", location: "West Bengal, India", country: "India", image: "/Sipra Das Bit.jpg" },
    { name: "Salom Jerlin", university: "Hitakey Tech Solution, Trichy ", location: "Jerlin, India", country: "India", image: "/Salom Jerlin.jpg" },
    { name: "Dr. Susanta Chakraborty", university: "Indian Institute of Engineering Science and Technology (IIEST) Shibpur,", location: "West Bengal, India", country: "India", image: "/Susanta Chakraborty.jpg" },
    { name: "Dr. Sweta Jain", university: "Maulana Azad National Institute of Technology (MANIT),", location: "Bhopal, Madhya Pradesh, India", country: "India", image: "/Sweta Jain.jpg" },
    { name: "Dr. Tanmay De", university: "National Institute of Technology Durgapur,", location: "Durgapur, West Bengal, India", country: "India", image: "/Tanmay De.jpg" },
    { name: "Dr. S. Udhaya Kumar", university: " (Principal Data Scientist), HDFC Bank,", location: "Chennai, Tamil Nadu, India", country: "India", image: "/Udaya.jpg" },
    { name: "Dr. T. Veerakumar", university: "National Institute of Technology Goa,", location: "Goa, India", country: "India", image: "/Veerakumar.jpg" },
   
  ].sort((a, b) => {
    const getFirstName = (name: string) => {
      // Remove titles like Dr., Prof., Mr., Ms., Mrs., Tmt.
      let cleaned = name.replace(/^(Dr\.|Prof\.|Mr\.|Ms\.|Mrs\.|Tmt\.)\s*/i, '').trim();
      // Split into words and find first word that's not an initial (length > 2)
      const words = cleaned.split(/\s+/);
      for (const word of words) {
        if (word.length > 2 && !word.endsWith('.')) {
          return word;
        }
      }
      return cleaned; // fallback
    };
    return getFirstName(a.name).localeCompare(getFirstName(b.name));
  });
  const academicLeadership = [
    { name: "Dr. D. Arul Pon Daniel", role: "Jayarani College, Salem, Tamil Nadu, India", image: "/Arul Pon Daniel.jpg" },
    // { name: "Dr. T. Dharani", role: "Rajarajeswari College of Engineering, Bengaluru, Karnataka, India", image: "/Dharani.jpg" },
    { name: "Dr. Gowthamarayathirumal P", role: "Government Arts College, Dharmapuri, Tamil Nadu, India", image: "/Gowthamarayathirumal.jpg" },
    { name: "Dr. G. Jothi", role: "Sona College of Arts & Science, Salem, Tamil Nadu, India", image: "/Jothi.jpg" },
    // { name: "Dr. G. Kavitha", role: "Vinayaka Mission's Kirupananda Variyar Engineering College, Salem, Tamil Nadu, India", image: "/Kavitha.jpg" },
    { name: "Dr. V. Mageshwari V", role: "Amrita Vishwa Vidyapeetham, Coimbatore, Tamil Nadu, India", image: "/Mageshwari.jpg" },
    // { name: "Dr. P. S. Raja", role: "Government Arts College, Dharmapuri, Tamil Nadu, India", image: "/Raja.jpg" },
    // { name: "Dr. D. Rajeswari", role: "Sona College of Arts & Science, Salem, Tamil Nadu, India", image: "/Rajeswari.jpg" },
    { name: "Dr. K. Sasirekha", role: "Sona College of Technology, Salem, Tamil Nadu, India", image: "/Sasirekha.jpg" },
    { name: "Dr. T. Sudhakar", role: "CHRIST (Deemed to be University), Bengaluru, Karnataka, India", image: "/Sudhakar.jpg" },
  ];

  const technicalLeadership = [
    // { name: "Dr. K. Akilandeswari", role: "Government Arts College, Salem, Tamil Nadu, India", image: "/Akilandeswari.jpg" },
    { name: "Dr. J. Bagyamani", role: "Government Arts College, Pennagaram, Tamil Nadu, India", image: "/Bagyamani.jpg" },
    { name: "Dr. E. George Dharma Prakash Raj", role: "Bharathidasan University, Tiruchirappalli, Tamil Nadu, India", image: "/George Dharma Prakash Raj.jpg" },
    { name: "Dr. S. Janakiraman", role: "Pondicherry University (Central University), Puducherry, India", image: "/Janakiraman.jpg" },
    { name: "Dr. T. Kalaiselvi", role: "Gandhigram Rural Institute (Deemed to be University), Dindigul, Tamil Nadu, India", image: "/Kalaiselvi.jpg" },
    { name: "Dr. D. Ramyachitra", role: "Bharathiar University, Coimbatore, Tamil Nadu, India", image: "/Ramyachitra.jpg" },
    { name: "Dr. M. Sumathi", role: "Sri Meenakshi Government Arts College for Women (Autonomous), Madurai, Tamil Nadu, India", image: "/Sumathi.jpg" },
    { name: "Dr. N. Suresh Kumar", role: "Chettinad Academy of Research and Education (Deemed to be University), CIT, Chengalpattu, Tamil Nadu, India", image: "/Suresh Kumar.jpg" },
    { name: "Dr. R. Vadivel", role: "Bharathiar University, Coimbatore, Tamil Nadu, India", image: "/Vadivel.jpg" },
    { name: "Dr. A. Vijaya", role: "Sri Meenakshi Government Arts College for Women (Autonomous), Madurai, Tamil Nadu, India", image: "/Vijaya.jpg" },
    { name: "Dr. R. PORKODI", role: "Bharathiar University, Coimbatore, Tamil Nadu, India", image: "/R_PORKODI.jpg" },
    { name: "Dr. A. Kaja Mohideen", role: "Vellore Institute of Technology, Chennai, Tamil Nadu, India", image: "/Kaja_Mohideen_A.jpg" },
    { name: "Dr. Manikandan Kumar", role: "PSG College of Arts and Science, Coimbatore, Tamil Nadu, India", image: "/Manikandan_Kumar.jpg" },
    { name: "Dr. P. Shanmuga Sundari", role: "SRMIST, Trichy, Tamil Nadu, India", image: "/P_Shanmuga_Sundari.jpg" },
    { name: "Dr. J. Frank Ruban Jebaraj", role: "The American College, Madurai, Tamil Nadu, India", image: "/J_Frank_Ruban_Jebaraj.png" },
    { name: "Dr. T. RAMESH", role: "Bharathiar University, Coimbatore, Tamil Nadu, India", image: "/T_RAMESH.jpg" },
    { name: "Dr. D. NAPOLEON", role: "Bharathiar University, Coimbatore, Tamil Nadu, India", image: "/D_NAPOLEON.jpg" },
    { name: "Dr. W. Rose verna", role: "Bharathiar University, Coimbatore, Tamil Nadu, India", image: "/W_Rose_verna.jpg" },
    // { name: "Dr. H. ABDUL GAFFAR", role: "Vellore Institute of Technology (VIT), Vellore, Tamil Nadu, India", image: "/ABDUL_GAFFAR_H.jpg" },
    { name: "Dr. Mohanasundaram Ranganathan", role: "Vellore Institute of Technology (VIT University), Vellore, Tamil Nadu, India", country: "India", image: "/Mohanasundaram_Ranganathan.jpeg" },
    { name: "Dr. R. Vijayarajan", role: "Vellore Institute of Technology University, Chennai, Tamil Nadu, India", country: "India", image: "/Vijayarajan_R.jpeg" },
    { name: "Dr. Nagarajan Deivanayagam Pillai", role: "Chettinad Institute of Technology, Chennai, Tamil Nadu, India", country: "India", image: "/Nagarajan_Deivanayagam_Pillai.jpg" },
    // { name: "Dr. S. Murali", role: "Vellore Institute of Technology (VIT), Vellore, Tamil Nadu, India", image: "/Murali_S.jpg" },
  ].sort((a, b) => {
    const getFirstName = (name: string) => {
      let cleaned = name.replace(/^(Dr\.|Prof\.|Mr\.|Ms\.|Mrs\.|Tmt\.)\s*/i, '').trim();
      const words = cleaned.split(/\s+/);
      for (const word of words) {
        if (word.length > 2 && !word.endsWith('.')) {
          return word.toLowerCase();
        }
      }
      return cleaned.toLowerCase();
    };
    return getFirstName(a.name).localeCompare(getFirstName(b.name));
  });

  const committees = [
    {
      title: "Chief Patron",
      icon: Award,
      color: "bg-gold",
      members: [
        { name: "Tmt. E. Sundaravalli, I.A.S.", role: "Convenor, Member- Vice Chancellor Committee, Member Syndicate, Periyar University, Salem - 636 011" },
        { name: "Prof. R. Subramani", role: "Convenor, Member- Vice Chancellor Committee, Member Syndicate, Periyar University, Salem - 636 011" },
        { name: "Dr. S. Jayanthi", role: "Convenor, Member- Vice Chancellor Committee, Member Syndicate, Periyar University, Salem - 636 011" },
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
        { name: "Dr. C. Chandrasekar", role: "Senior Professor & Head of Computer Science, Periyar University, Salem" },
      ],
    },
    {
      title: "Organizing Secretaries",
      icon: Users,
      color: "bg-navy",
      members: [
        { name: "Dr. H. Hannah Inbarani", role: "Professor, Department of Computer Science, Periyar University, Salem" },
        { name: "Dr. I. Laurence Aroquiaraj", role: "Professor, Department of Computer Science, Periyar University, Salem" },
      ],
    },
    {
      title: "Organizing Members",
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
        <div className="grid md:grid-cols-2 gap-6 mb-8 max-w-6xl mx-auto justify-center">
          {committees.slice(0, 2).map((committee, index) => (
            <div
              key={committee.title}
              className={`rounded-lg shadow-lg overflow-hidden ${
                index === 0 
                  ? 'bg-white border-2 border-navy' 
                  : 'bg-white border-2 border-teal'
              }`}
            >
              <div className={`p-6 ${
                index === 0 
                  ? 'bg-navy' 
                  : 'bg-teal'
              }`}>
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm">
                    <committee.icon className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="font-display font-bold text-3xl text-white">
                    {committee.title}
                  </h3>
                </div>
              </div>
              <div className="p-6 space-y-4">
                  {committee.members.map((member) => (
                    <div key={member.name} className="flex items-center gap-3">
                      <MemberImage name={member.name} />
                      <div>
                        <p className="font-display font-bold text-xl text-navy">{titleCaseName(member.name)}</p>
                        <p className="text-base text-slate-700 font-medium text-justify">{member.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>

        {/* Second Row: Co-Patron and Organizing Secretary */}
        <div className="grid md:grid-cols-2 gap-6 mb-8 max-w-6xl mx-auto justify-center">
          {committees.slice(2, 4).map((committee) => (
            <div
              key={committee.title}
              className="bg-white border-l-4 border-l-coral border border-slate-200 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="p-6 border-b border-slate-200 bg-gradient-to-r from-coral/5 to-coral/10">
                <div className="flex items-center gap-3">
                  <div className="bg-coral p-2 rounded-lg">
                    <committee.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-navy">
                    {committee.title}
                  </h3>
                </div>
              </div>
                <div className="p-6 space-y-4">
                  {committee.members.map((member) => (
                    <div key={member.name} className="flex items-center gap-3">
                      <MemberImage name={member.name} />
                      <div>
                        <p className="font-display font-bold text-lg text-navy">{titleCaseName(member.name)}</p>
                        <p className="text-base text-slate-600 text-justify">{member.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>

        {/* Third Row: Organizing Committee */}
        <div className="max-w-3xl mx-auto mb-12 justify-center">
          {committees.slice(4, 5).map((committee) => (
            <div
              key={committee.title}
              className="bg-white border-l-4 border-l-teal border border-slate-200 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="p-6 border-b border-slate-200 bg-gradient-to-r from-teal/5 to-teal/10">
                <div className="flex items-center gap-3">
                  <div className="bg-teal p-2 rounded-lg">
                    <committee.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-navy">
                    {committee.title}
                  </h3>
                </div>
              </div>
              <div className="p-6 space-y-4">
                {committee.members.map((member) => (
                  <div key={member.name} className="flex items-center gap-3">
                    <MemberImage name={member.name} />
                    <div>
                      <p className="font-display font-bold text-lg text-navy">{titleCaseName(member.name)}</p>
                      <p className="text-base text-slate-600">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Advisory Committee */}
        <div className="bg-[#efeee3] rounded-2xl p-4 md:p-8 mt-16">
          <h3 className="font-display font-bold text-2xl text-navy text-center mb-8">
            Advisory Committee
          </h3>

          {/* International Advisory Committee */}
          <div className="mb-12">
            <h4 className="font-display font-bold text-xl text-navy mb-6 text-center">International Advisory Committee</h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {internationalAdvisoryCommittee.map((member) => {
                const [imgError, setImgError] = useState(false);
                return (
                  <div
                    key={member.name}
                    className="flex items-center gap-4 bg-slate p-4 rounded-xl hover:bg-muted transition-colors"
                  >
                    {member.image && !imgError ? (
                      <img
                        src={member.image}
                        alt={titleCaseName(member.name)}
                        className="w-14 h-14 object-cover shrink-0"
                        onError={() => setImgError(true)}
                      />
                    ) : (
                      <div className="w-14 h-14 bg-teal rounded-full flex items-center justify-center shrink-0">
                        <User className="w-7 h-7 text-white" />
                      </div>
                    )}
                    <div>
                      <p className="font-display font-bold text-navy">{titleCaseName(member.name)}</p>
                      <p className="text-sm text-muted-foreground">{member.university}, {member.country}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* National Advisory Committee */}
          <div>
            <h4 className="font-display font-bold text-xl text-navy mb-6 text-center">National Advisory Committee</h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {nationalAdvisoryCommittee.map((member) => {
                const [imgError, setImgError] = useState(false);
                return (
                  <div
                    key={member.name}
                    className="flex items-center gap-4 bg-slate p-4 rounded-xl hover:bg-muted transition-colors"
                  >
                    {member.image && !imgError ? (
                      <img
                        src={member.image}
                        alt={titleCaseName(member.name)}
                        className="w-14 h-14 object-cover shrink-0"
                        onError={() => setImgError(true)}
                      />
                    ) : (
                      <div className="w-14 h-14 bg-teal rounded-full flex items-center justify-center shrink-0">
                        <User className="w-7 h-7 text-white" />
                      </div>
                    )}
                    <div>
                      <p className="font-display font-bold text-navy">{titleCaseName(member.name)}</p>
                      
                      <p className="text-sm text-muted-foreground">{member.university}</p>
                      <p className="text-sm text-muted-foreground">{member.location}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Academic & Technical Leadership */}
        <div className="bg-[#efeee3] rounded-2xl p-4 md:p-8 mt-16">

          {/* Technical Leadership */}
          <div className="mb-12">
            <h4 className="font-display font-bold text-xl text-navy mb-6 text-center">Technical Program Committee (TPC) Members</h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technicalLeadership.map((member, index) => {
                const [imgError, setImgError] = useState(false);
                return (
                  <div
                    key={member.name}
                    className="flex items-center gap-4 bg-slate p-4 rounded-xl hover:bg-muted transition-colors"
                  >
                    {member.image && !imgError ? (
                      <img
                        src={member.image}
                        alt={titleCaseName(member.name)}
                        className="w-14 h-14 object-cover shrink-0"
                        onError={() => setImgError(true)}
                      />
                    ) : (
                      <div className="w-14 h-14 bg-coral rounded-full flex items-center justify-center shrink-0">
                        <User className="w-7 h-7 text-white" />
                      </div>
                    )}
                    <div>
                      <p className="font-display font-bold text-navy">{titleCaseName(member.name)}</p>
                      <p className="text-sm text-muted-foreground">{member.role}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Academic Leadership
          <div>
            <h4 className="font-display font-bold text-xl text-navy mb-6 text-center">Technical Program Chair (TPC Chair)</h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {academicLeadership.map((member, index) => {
                const [imgError, setImgError] = useState(false);
                return (
                  <div
                    key={member.name}
                    className="flex items-center gap-4 bg-slate p-4 rounded-xl hover:bg-muted transition-colors"
                  >
                    {member.image && !imgError ? (
                      <img
                        src={member.image}
                        alt={titleCaseName(member.name)}
                        className="w-14 h-14 object-cover shrink-0"
                        onError={() => setImgError(true)}
                      />
                    ) : (
                      <div className="w-14 h-14 bg-coral rounded-full flex items-center justify-center shrink-0">
                        <User className="w-7 h-7 text-white" />
                      </div>
                    )}
                    <div>
                      <p className="font-display font-bold text-navy">{member.name}</p>
                      <p className="text-sm text-muted-foreground">{member.role}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div> */}
        </div>

       
      </div>
    </section>
  );
};

export default Committee;
