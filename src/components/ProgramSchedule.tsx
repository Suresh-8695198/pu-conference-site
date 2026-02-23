import { useState } from "react";
import { Calendar, Clock, Video, Users, BookOpen, Award } from "lucide-react";

const ProgramSchedule = () => {
  const [activeTab, setActiveTab] = useState("instructions");

  return (
    <section id="program-schedule" className="py-16 md:py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <Calendar className="w-6 h-6 text-burgundy" />
            <span className="text-burgundy font-display font-semibold text-sm uppercase tracking-wider">
              Conference Schedule
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-navy">
            Program & Presentation Instructions
          </h2>
          <div className="w-24 h-1 bg-burgundy mx-auto mb-8"></div>
          <p className="text-gray-700 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            We are pleased to invite you to participate in the conference, which will be conducted in <strong className="text-navy">Hybrid Mode</strong>. This page contains the complete program schedule. Click on the respective dates below to view detailed sessions.
          </p>
        </div>

        {/* Quick Session Overview Table */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="bg-white border-2 border-emerald-600 rounded-lg overflow-hidden shadow-lg">
            <div className="bg-emerald-700 px-8 py-6">
              <h3 className="font-display font-bold text-2xl md:text-3xl text-white text-center flex items-center justify-center gap-3">
                <Video className="w-8 h-8" />
                Quick Session Access
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-emerald-50 border-b-2 border-emerald-600">
                    <th className="px-6 py-4 text-left font-bold text-emerald-800 text-base md:text-lg">Session</th>
                    <th className="px-6 py-4 text-left font-bold text-emerald-800 text-base md:text-lg">Date & Time</th>
                    <th className="px-6 py-4 text-center font-bold text-emerald-800 text-base md:text-lg">Join Meeting</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-slate-200">
                  <tr className="hover:bg-slate-50">
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <Award className="w-6 h-6 text-green-700 flex-shrink-0" />
                        <div>
                          <p className="font-bold text-navy text-base">Inaugural Session</p>
                          <p className="text-sm text-gray-600">Day 1</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <p className="font-semibold text-gray-900 text-base">26.02.2026</p>
                      <p className="text-base text-gray-600">09:00 AM - 01:30 PM</p>
                    </td>
                    <td className="px-6 py-5 text-center">
                      <a href="https://meet.google.com/mwp-ngzb-iyp" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-md text-base font-bold transition-colors">
                        <Video className="w-5 h-5" />
                        Join Now
                      </a>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <Users className="w-6 h-6 text-orange-700 flex-shrink-0" />
                        <div>
                          <p className="font-bold text-navy text-base">Technical Presentations</p>
                          <p className="text-sm text-gray-600">Day 1 - Parallel Sessions I & II</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <p className="font-semibold text-gray-900 text-base">26.02.2026</p>
                      <p className="text-base text-gray-600">01:30 PM - 05:00 PM</p>
                    </td>
                    <td className="px-6 py-5 text-center">
                      <div className="flex flex-col gap-2">
                        <a href="https://meet.google.com/oxq-drqq-mwp" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-orange-700 hover:bg-orange-800 text-white px-5 py-2.5 rounded-md text-sm font-bold transition-colors">
                          <Video className="w-4 h-4" />
                          Session I
                        </a>
                        <a href="https://meet.google.com/iyj-ughb-ayu" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-purple-700 hover:bg-purple-800 text-white px-5 py-2.5 rounded-md text-sm font-bold transition-colors">
                          <Video className="w-4 h-4" />
                          Session II
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <BookOpen className="w-6 h-6 text-indigo-700 flex-shrink-0" />
                        <div>
                          <p className="font-bold text-navy text-base">Keynote Sessions</p>
                          <p className="text-sm text-gray-600">Day 2</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <p className="font-semibold text-gray-900 text-base">27.02.2026</p>
                      <p className="text-base text-gray-600">09:00 AM - 01:30 PM</p>
                    </td>
                    <td className="px-6 py-5 text-center">
                      <a href="https://meet.google.com/uxj-pmse-vop" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-indigo-700 hover:bg-indigo-800 text-white px-6 py-3 rounded-md text-base font-bold transition-colors">
                        <Video className="w-5 h-5" />
                        Join Now
                      </a>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <Users className="w-6 h-6 text-teal-700 flex-shrink-0" />
                        <div>
                          <p className="font-bold text-navy text-base">Technical Presentations</p>
                          <p className="text-sm text-gray-600">Day 2 - Session III</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <p className="font-semibold text-gray-900 text-base">27.02.2026</p>
                      <p className="text-base text-gray-600">01:30 PM - 05:00 PM</p>
                    </td>
                    <td className="px-6 py-5 text-center">
                      <a href="https://meet.google.com/iur-zctt-rvg" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-teal-700 hover:bg-teal-800 text-white px-6 py-3 rounded-md text-base font-bold transition-colors">
                        <Video className="w-5 h-5" />
                        Join Now
                      </a>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <Award className="w-6 h-6 text-red-700 flex-shrink-0" />
                        <div>
                          <p className="font-bold text-navy text-base">Valedictory Function</p>
                          <p className="text-sm text-gray-600">Day 2 - Closing Ceremony</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <p className="font-semibold text-gray-900 text-base">27.02.2026</p>
                      <p className="text-base text-gray-600">04:00 PM - 05:00 PM</p>
                    </td>
                    <td className="px-6 py-5 text-center">
                      <a href="https://meet.google.com/fsb-noyr-abh" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-red-700 hover:bg-red-800 text-white px-6 py-3 rounded-md text-base font-bold transition-colors">
                        <Video className="w-5 h-5" />
                        Join Now
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-slate-100 px-6 py-4 border-t-2 border-navy">
              <div className="flex items-center justify-center gap-2">
                <Clock className="w-5 h-5 text-red-700" />
                <p className="text-base text-gray-800 font-semibold">
                  All timings follow Indian Standard Time (IST)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabbed Program Schedule Section */}
        <div className="max-w-7xl mx-auto mb-8 md:mb-12">
          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-3 mb-8">
            <button
              onClick={() => setActiveTab("instructions")}
              className={`flex-1 min-w-[140px] px-8 py-4 font-display font-bold text-base md:text-lg rounded-lg transition-all duration-200 border-2 ${
                activeTab === "instructions"
                  ? "bg-teal-700 text-white border-teal-700 shadow-md"
                  : "bg-teal-50 text-teal-800 border-teal-400 hover:bg-teal-100"
              }`}
            >
              Instructions
            </button>
            <button
              onClick={() => setActiveTab("feb26")}
              className={`flex-1 min-w-[140px] px-8 py-4 font-display font-bold text-base md:text-lg rounded-lg transition-all duration-200 border-2 ${
                activeTab === "feb26"
                  ? "bg-blue-700 text-white border-blue-700 shadow-md"
                  : "bg-blue-50 text-blue-800 border-blue-400 hover:bg-blue-100"
              }`}
            >
              FEB 26
            </button>
            <button
              onClick={() => setActiveTab("feb27")}
              className={`flex-1 min-w-[140px] px-8 py-4 font-display font-bold text-base md:text-lg rounded-lg transition-all duration-200 border-2 ${
                activeTab === "feb27"
                  ? "bg-indigo-700 text-white border-indigo-700 shadow-md"
                  : "bg-indigo-50 text-indigo-800 border-indigo-400 hover:bg-indigo-100"
              }`}
            >
              FEB 27
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === "instructions" && (
            <div className="bg-white border-2 border-navy rounded-lg p-8 md:p-12">
              
              <div className="text-center mb-10">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-navy rounded-lg mb-4">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-display font-bold text-2xl md:text-3xl text-navy mb-4">
                  Conference Program & Presentation Instructions
                </h3>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-4xl mx-auto">
                  We are pleased to invite you to participate in the conference, which will be conducted in <strong className="text-navy">Hybrid Mode</strong>. This page contains the complete program schedule of the conference. Participants may click on the respective dates to view the detailed daily schedule.
                </p>
              </div>

              <div className="bg-slate-50 border-2 border-slate-300 rounded-lg p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <BookOpen className="w-7 h-7 text-navy" />
                  <h4 className="font-display font-bold text-xl md:text-2xl text-navy">
                    Technical Session Presentation Instructions
                  </h4>
                </div>
                <p className="text-gray-700 text-base md:text-lg mb-8 leading-relaxed">
                  All presenters are requested to carefully read the following instructions before joining their respective technical sessions or keynote sessions:
                </p>

                <div className="space-y-4">
                  {/* Instruction 1 */}
                  <div className="bg-white border-2 border-slate-300 p-6 rounded-lg">
                    <div className="flex gap-4 items-start">
                      <div className="flex-shrink-0 w-10 h-10 bg-navy text-white rounded-lg flex items-center justify-center font-bold text-lg">
                        1
                      </div>
                      <div className="flex-1">
                        <h5 className="font-bold text-lg text-navy mb-2">Mode of Presentation</h5>
                        <p className="text-gray-800 text-base leading-relaxed">
                          All Keynote Talks and Technical Paper Presentations will be conducted in <span className="text-navy font-bold">Hybrid Mode</span> (Online via <span className="text-red-700 font-bold">Google Meet</span> and Offline at the venue on Day-1).
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Instruction 2 */}
                  <div className="bg-white border-2 border-slate-300 p-6 rounded-lg">
                    <div className="flex gap-4 items-start">
                      <div className="flex-shrink-0 w-10 h-10 bg-navy text-white rounded-lg flex items-center justify-center font-bold text-lg">
                        2
                      </div>
                      <div className="flex-1">
                        <h5 className="font-bold text-lg text-navy mb-2">Session Access</h5>
                        <p className="text-gray-800 text-base leading-relaxed">
                          For online attendees, click the <span className="inline-block bg-navy text-white px-3 py-1 rounded font-semibold text-sm">"Join Now"</span> button on the respective Date Tab to attend/present in Keynotes (K) and Technical Sessions (TS).
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Instruction 3 */}
                  <div className="bg-white border-2 border-slate-300 p-6 rounded-lg">
                    <div className="flex gap-4 items-start">
                      <div className="flex-shrink-0 w-10 h-10 bg-navy text-white rounded-lg flex items-center justify-center font-bold text-lg">
                        3
                      </div>
                      <div className="flex-1">
                        <h5 className="font-bold text-lg text-navy mb-2">Reporting Time</h5>
                        <p className="text-gray-800 text-base leading-relaxed">
                          Presenters must join their respective Keynotes (K) / Technical Sessions (TS) at least <span className="font-bold">05 minutes before</span> the scheduled time.<br/>
                          <span className="text-gray-600 text-sm mt-2 inline-block">(All timings follow <span className="text-red-700 font-bold">Indian Standard Time (IST)</span>.)</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Instruction 4 */}
                  <div className="bg-white border-2 border-slate-300 p-6 rounded-lg">
                    <div className="flex gap-4 items-start">
                      <div className="flex-shrink-0 w-10 h-10 bg-navy text-white rounded-lg flex items-center justify-center font-bold text-lg">
                        4
                      </div>
                      <div className="flex-1">
                        <h5 className="font-bold text-lg text-navy mb-2">Session Etiquette</h5>
                        <p className="text-gray-800 text-base leading-relaxed">
                          All participants and presenters must keep their <span className="font-bold">microphones and cameras turned off</span> unless instructed by the Session Chair.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Instruction 5 */}
                  <div className="bg-white border-2 border-slate-300 p-6 rounded-lg">
                    <div className="flex gap-4 items-start">
                      <div className="flex-shrink-0 w-10 h-10 bg-navy text-white rounded-lg flex items-center justify-center font-bold text-lg">
                        5
                      </div>
                      <div className="flex-1">
                        <h5 className="font-bold text-lg text-navy mb-2">Technical Readiness</h5>
                        <p className="text-gray-800 text-base leading-relaxed">
                          Presenters must be ready with their presentation slides and should verify <span className="font-bold">microphone and camera settings</span> in advance for smooth delivery.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Instruction 6 */}
                  <div className="bg-white border-2 border-slate-300 p-6 rounded-lg">
                    <div className="flex gap-4 items-start">
                      <div className="flex-shrink-0 w-10 h-10 bg-navy text-white rounded-lg flex items-center justify-center font-bold text-lg">
                        6
                      </div>
                      <div className="flex-1">
                        <h5 className="font-bold text-lg text-navy mb-2">Presentation Order</h5>
                        <p className="text-gray-800 text-base leading-relaxed">
                          Authors (presenters) will be invited <span className="font-bold">one-by-one</span> during their respective Technical Sessions by the designated Session Chairs.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Instruction 7 */}
                  <div className="bg-white border-2 border-slate-300 p-6 rounded-lg">
                    <div className="flex gap-4 items-start">
                      <div className="flex-shrink-0 w-10 h-10 bg-navy text-white rounded-lg flex items-center justify-center font-bold text-lg">
                        7
                      </div>
                      <div className="flex-1">
                        <h5 className="font-bold text-lg text-navy mb-2">Presentation Format</h5>
                        <p className="text-gray-800 text-base leading-relaxed">
                          Presentation slides may be prepared in any standard format (PowerPoint, PDF, etc.), following good academic and visual presentation practices.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Instruction 8 */}
                  <div className="bg-white border-2 border-slate-300 p-6 rounded-lg">
                    <div className="flex gap-4 items-start">
                      <div className="flex-shrink-0 w-10 h-10 bg-navy text-white rounded-lg flex items-center justify-center font-bold text-lg">
                        8
                      </div>
                      <div className="flex-1">
                        <h5 className="font-bold text-lg text-navy mb-2">Time Allocation</h5>
                        <p className="text-gray-800 text-base leading-relaxed mb-3">
                          Each paper will be allotted:
                        </p>
                        <ul className="list-disc list-inside ml-4 space-y-2 text-gray-800 text-base">
                          <li><span className="font-bold">10 Minutes</span> for Presentation</li>
                          <li><span className="font-bold">2 Minutes</span> for Q&A Interaction</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Instruction 9 */}
                  <div className="bg-white border-2 border-slate-300 p-6 rounded-lg">
                    <div className="flex gap-4 items-start">
                      <div className="flex-shrink-0 w-10 h-10 bg-navy text-white rounded-lg flex items-center justify-center font-bold text-lg">
                        9
                      </div>
                      <div className="flex-1">
                        <h5 className="font-bold text-lg text-navy mb-2">Google Meet Name Format (Mandatory)</h5>
                        <p className="text-gray-800 text-base leading-relaxed mb-3">
                          Participants must rename themselves in Google Meet using the format: <span className="font-bold">PaperID_Name</span>
                        </p>
                        <ul className="list-disc list-inside ml-4 space-y-2 text-gray-800 text-base">
                          <li>Example: <span className="font-mono bg-slate-100 px-2 py-0.5 rounded text-navy">101_RahulSharma</span></li>
                          <li>This is mandatory for proper identification and session coordination.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "feb26" && (
            <div className="border-2 border-blue-400 rounded-lg bg-white overflow-hidden">
              {/* Day Header */}
              <div className="bg-blue-800 px-6 py-5 text-center">
                <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-1">
                  Day 1 — February 26, 2026 (Thursday)
                </h3>
                <p className="text-blue-200 font-medium text-base">Department of Computer Science, Periyar University</p>
              </div>

              {/* Quick Access Table */}
              <div className="p-6 border-b-2 border-blue-200 bg-blue-50">
                <h4 className="font-display font-bold text-lg text-blue-800 mb-3 uppercase tracking-wide">Quick Session Access</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-base border border-blue-300 rounded-lg overflow-hidden">
                    <thead>
                      <tr className="bg-blue-800 text-white">
                        <th className="px-4 py-3 text-left font-semibold">Session</th>
                        <th className="px-4 py-3 text-left font-semibold">Time (IST)</th>
                        <th className="px-4 py-3 text-left font-semibold">Mode</th>
                        <th className="px-4 py-3 text-center font-semibold">Online Link</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="bg-white hover:bg-green-50">
                        <td className="px-4 py-3 font-semibold text-green-900">Inaugural Session</td>
                        <td className="px-4 py-3 text-slate-700">10:00 AM – 10:35 AM</td>
                        <td className="px-4 py-3"><span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">Hybrid</span></td>
                        <td className="px-4 py-3 text-center"><a href="https://meet.google.com/mwp-ngzb-iyp" target="_blank" rel="noopener noreferrer" className="bg-green-700 hover:bg-green-800 text-white px-4 py-1.5 rounded font-semibold text-sm transition-all">Join Now</a></td>
                      </tr>
                      <tr className="bg-slate-50 hover:bg-blue-50">
                        <td className="px-4 py-3 font-semibold text-blue-900">Keynote Sessions</td>
                        <td className="px-4 py-3 text-slate-700">10:45 AM – 1:00 PM</td>
                        <td className="px-4 py-3"><span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium">Hybrid</span></td>
                        <td className="px-4 py-3 text-center"><a href="https://meet.google.com/mwp-ngzb-iyp" target="_blank" rel="noopener noreferrer" className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-1.5 rounded font-semibold text-sm transition-all">Join Now</a></td>
                      </tr>
                      <tr className="bg-white hover:bg-orange-50">
                        <td className="px-4 py-3 font-semibold text-orange-900">Technical Session I — Track 1</td>
                        <td className="px-4 py-3 text-slate-700">2:30 PM – 4:30 PM</td>
                        <td className="px-4 py-3"><span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-sm font-medium">Online</span></td>
                        <td className="px-4 py-3 text-center"><a href="https://meet.google.com/oxq-drqq-mwp" target="_blank" rel="noopener noreferrer" className="bg-orange-700 hover:bg-orange-800 text-white px-4 py-1.5 rounded font-semibold text-sm transition-all">Join Now</a></td>
                      </tr>
                      <tr className="bg-slate-50 hover:bg-purple-50">
                        <td className="px-4 py-3 font-semibold text-purple-900">Technical Session II — Track 2</td>
                        <td className="px-4 py-3 text-slate-700">2:30 PM – 4:30 PM</td>
                        <td className="px-4 py-3"><span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm font-medium">Online</span></td>
                        <td className="px-4 py-3 text-center"><a href="https://meet.google.com/iyj-ughb-ayu" target="_blank" rel="noopener noreferrer" className="bg-purple-700 hover:bg-purple-800 text-white px-4 py-1.5 rounded font-semibold text-sm transition-all">Join Now</a></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="p-6 space-y-8">

                {/* Inaugural Session */}
                <div>
                  <div className="bg-green-800 px-5 py-3 rounded-t-lg">
                    <h4 className="font-display font-bold text-xl text-white">Inaugural Session &nbsp;|&nbsp; 10:00 AM – 10:35 AM IST</h4>
                  </div>
                  <div className="border-2 border-green-200 rounded-b-lg overflow-x-auto">
                    <table className="w-full text-base">
                      <thead className="bg-green-100">
                        <tr>
                          <th className="px-4 py-3 text-left font-semibold text-green-900 w-44">Time (IST)</th>
                          <th className="px-4 py-3 text-left font-semibold text-green-900 w-48">Session</th>
                          <th className="px-4 py-3 text-left font-semibold text-green-900">Speaker / Details</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-green-100">
                        <tr className="bg-white hover:bg-green-50">
                          <td className="px-4 py-3 font-medium text-slate-700 whitespace-nowrap">10:00 – 10:05 AM</td>
                          <td className="px-4 py-3 text-slate-700">Welcome Address</td>
                          <td className="px-4 py-3 text-slate-800">Dr. C. Chandrasekar, Senior Professor & Head, Department of Computer Science, Periyar University, Salem</td>
                        </tr>
                        <tr className="bg-green-50 hover:bg-green-100">
                          <td className="px-4 py-3 font-medium text-slate-700 whitespace-nowrap">10:05 – 10:10 AM</td>
                          <td className="px-4 py-3 text-slate-700">Lamp Lighting Ceremony</td>
                          <td className="px-4 py-3 text-slate-800">Chief Guests & Dignitaries</td>
                        </tr>
                        <tr className="bg-white hover:bg-green-50">
                          <td className="px-4 py-3 font-medium text-slate-700 whitespace-nowrap">10:10 – 10:15 AM</td>
                          <td className="px-4 py-3 text-slate-700">Conference Prelude</td>
                          <td className="px-4 py-3 text-slate-800">Dr. H. Hannah Inbarani, Professor & Conference Chair-ICAITSC 2026, Department of Computer Science, Periyar University, Salem</td>
                        </tr>
                        <tr className="bg-green-50 hover:bg-green-100">
                          <td className="px-4 py-3 font-medium text-slate-700 whitespace-nowrap">10:15 – 10:20 AM</td>
                          <td className="px-4 py-3 text-slate-700">Presidential Address</td>
                          <td className="px-4 py-3 text-slate-800">
                            Dr. S. Jayanthi<br/>
                            <span className="text-sm text-slate-600">Member- Vice-Chancellor Convener Committee, Syndicate Member, Periyar University, Salem</span>
                          </td>
                        </tr>
                        <tr className="bg-white hover:bg-green-50">
                          <td className="px-4 py-3 font-medium text-slate-700 whitespace-nowrap">10:20 – 10:30 AM</td>
                          <td className="px-4 py-3 text-slate-700">Inaugural Address</td>
                          <td className="px-4 py-3 text-slate-800">Mr. Shanthababu Pandian, Director – Data & AI Engineering, Rolan Software Service, London, UK</td>
                        </tr>
                        <tr className="bg-green-50 hover:bg-green-100">
                          <td className="px-4 py-3 font-medium text-slate-700 whitespace-nowrap">10:30 – 10:35 AM</td>
                          <td className="px-4 py-3 text-slate-700">Vote of Thanks</td>
                          <td className="px-4 py-3 text-slate-800">Dr. I. Laurence Aroquiaraj, Professor & Organizing Secretary- ICAITSC 2026, Department of Computer Science, Periyar University, Salem</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="bg-green-100 px-5 py-3 border-t-2 border-green-200 text-right">
                      <a href="https://meet.google.com/mwp-ngzb-iyp" target="_blank" rel="noopener noreferrer" className="inline-block bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded font-semibold text-base transition-all">
                        Join Inaugural Session (Google Meet)
                      </a>
                    </div>
                  </div>
                </div>

                {/* Break notice */}
                <div className="bg-amber-50 border border-amber-300 rounded-lg px-5 py-3 text-amber-900 font-semibold text-base">
                  Break &nbsp;|&nbsp; 10:35 AM – 10:45 AM
                </div>

                {/* Keynote Sessions */}
                <div>
                  <div className="bg-blue-800 px-5 py-3 rounded-t-lg">
                    <h4 className="font-display font-bold text-xl text-white">Keynote Sessions &nbsp;|&nbsp; 10:45 AM – 1:00 PM IST</h4>
                  </div>
                  <div className="border-2 border-blue-200 rounded-b-lg overflow-x-auto">
                    <table className="w-full text-base">
                      <thead className="bg-blue-100">
                        <tr>
                          <th className="px-4 py-3 text-left font-semibold text-blue-900 w-44">Time (IST)</th>
                          <th className="px-4 py-3 text-left font-semibold text-blue-900 w-36">Session</th>
                          <th className="px-4 py-3 text-left font-semibold text-blue-900">Speaker & Topic</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-blue-100">
                        <tr className="bg-white hover:bg-blue-50">
                          <td className="px-4 py-3 font-medium text-slate-700 whitespace-nowrap">10:45 AM – 11:45 AM</td>
                          <td className="px-4 py-3 font-semibold text-blue-800">Keynote Address – I</td>
                          <td className="px-4 py-3 text-slate-800">
                            <p className="font-semibold">Mr. Shanthababu Pandian</p>
                            <p className="text-slate-600 text-sm">Director – Data & AI Engineering, Rolan Software Service, London, United Kingdom</p>
                            <p className="text-blue-700 italic text-sm mt-1">Title of the Talk: Artificial Intelligence in Healthcare: The Role of Agentic AI in Future Medical Systems</p>
                          </td>
                        </tr>
                        <tr className="bg-blue-50 hover:bg-blue-100">
                          <td className="px-4 py-3 font-medium text-slate-700 whitespace-nowrap">11:45 AM – 1:00 PM</td>
                          <td className="px-4 py-3 font-semibold text-blue-800">Keynote Address – II</td>
                          <td className="px-4 py-3 text-slate-800">
                            <p className="font-semibold">Prof. Deepak Garg</p>
                            <p className="text-slate-600 text-sm">Vice Chancellor, SR University & Founder, Director of Leadingindia.ai, Hyderabad, Telengana</p>
                            <p className="text-blue-700 italic text-sm mt-1">Title of the Talk: Convergence of Data Science , Computer Vision and Physical AI</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="bg-blue-100 px-5 py-3 border-t-2 border-blue-200 text-right">
                      <a href="https://meet.google.com/mwp-ngzb-iyp" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded font-semibold text-base transition-all">
                        Join Keynote Sessions (Google Meet)
                      </a>
                    </div>
                  </div>
                </div>

                {/* Lunch Break */}
                <div className="bg-amber-50 border-2 border-amber-300 rounded-lg px-5 py-4 text-center">
                  <p className="font-bold text-amber-900 text-xl">Lunch Break &nbsp;|&nbsp; 1:10 PM – 2:00 PM</p>
                  <p className="text-amber-700 text-base mt-1">For Offline Participants at the Venue</p>
                </div>

                {/* Track 1 */}
                <div>
                  <div className="bg-orange-800 px-5 py-3 rounded-t-lg">
                    <h4 className="font-display font-bold text-xl text-white">Track 1: AI, Machine Learning & Deep Learning Applications</h4>
                    <p className="text-orange-200 text-sm mt-1">2:00 PM – 5:00 PM &nbsp;|&nbsp; Venue: Smart Class Room, First Floor, Dept. of Computer Science</p>
                  </div>
                  <div className="border-2 border-orange-200 rounded-b-lg overflow-x-auto">
                    <table className="w-full text-base">
                      <thead className="bg-orange-100">
                        <tr>
                          <th className="px-4 py-3 text-left font-semibold text-orange-900 w-28">Mode</th>
                          <th className="px-4 py-3 text-left font-semibold text-orange-900 w-24">Paper ID</th>
                          <th className="px-4 py-3 text-left font-semibold text-orange-900">Title</th>
                          <th className="px-4 py-3 text-left font-semibold text-orange-900">Authors</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-orange-100">
                        <tr className="bg-orange-50">
                          <td colSpan={4} className="px-4 py-2 font-bold text-orange-800 text-sm uppercase tracking-wide bg-orange-100">
                            Offline Presentations — 2:00 PM to 2:30 PM &nbsp;|&nbsp; Session Chairs: <br/> Dr. Preethi Ananthachari, Assistant Professor, College of IT, Ahila University, Bahrain<br/> Dr. G. Jothi, Assistant Professor, Sona College of Arts and Science, Salem, Tamil Nadu, India
                          </td>
                        </tr>
                        <tr className="bg-white hover:bg-orange-50">
                          <td className="px-4 py-3"><span className="bg-slate-200 text-slate-700 px-2 py-1 rounded text-sm font-medium">Offline</span></td>
                          <td className="px-4 py-3 font-bold text-orange-900">ID 13</td>
                          <td className="px-4 py-3 text-slate-800 font-medium">AI-Powered Retinal Disease Detection and Classification</td>
                          <td className="px-4 py-3 text-black text-sm">B. Jenisha Angel, M S. Sreeleka, A. Gowtham, R. Arun Kumar</td>
                        </tr>
                        <tr className="bg-orange-50 hover:bg-orange-100">
                          <td className="px-4 py-3"><span className="bg-slate-200 text-slate-700 px-2 py-1 rounded text-sm font-medium">Offline</span></td>
                          <td className="px-4 py-3 font-bold text-orange-900">ID 108</td>
                          <td className="px-4 py-3 text-slate-800 font-medium">AI – Driven Cyberbullying Detection and Prevention System Using NLP</td>
                          <td className="px-4 py-3 text-black text-sm">Lalitha K, Nivedha K, Pradeepa M, Sneka R</td>
                        </tr>
                        <tr className="bg-white hover:bg-orange-50">
                          <td className="px-4 py-3"><span className="bg-slate-200 text-slate-700 px-2 py-1 rounded text-sm font-medium">Offline</span></td>
                          <td className="px-4 py-3 font-bold text-orange-900">ID 128</td>
                          <td className="px-4 py-3 text-slate-800 font-medium">Smart Agricultural Weed Management using Image Classification and Automated Actuation</td>
                          <td className="px-4 py-3 text-black text-sm">Abishek C, Jaivikas S, Shivakumar R, Sampath P S</td>
                        </tr>
                        <tr className="bg-orange-100">
                          <td colSpan={4} className="px-4 py-2 font-bold text-orange-800 text-sm uppercase tracking-wide">
                            Online Presentations — 2:30 PM to 4:30 PM &nbsp;|&nbsp; Session Chairs: <br/> Dr. Preethi Ananthachari, Assistant Professor, College of IT, Ahila University, Bahrain<br/> Dr. G. Jothi, Assistant Professor, Sona College of Arts and Science, Salem, Tamil Nadu, India
                          </td>
                        </tr>
                        {[
                          { id: "37", title: "A Novel Spacy-Based Named Entity Recognition for Structured Medical Documentation", authors: "O. Pandithurai, Sridharan. S, Vinamrata Balaji, J. Praveenkumar" },
                          { id: "38", title: "Designing a Mental Health Support Bot Using NLP and CBT", authors: "O. Pandithurai, G. Annamalai, R. Ajay, S. Ashwin" },
                          { id: "42", title: "A Layered Explainable AI Framework for Trustworthy Generative Intelligence: The Dynamo AI Approach", authors: "Anish Krisna" },
                          { id: "63", title: "Cyberbullying and Harassment Detection Bot for Social Media", authors: "Abhishek Tripathi, Vamsi Kandukuru, Sai Pranay Pydimarry, Sai Chaitanya Kola, V. Bhanu Prakash Reddy" },
                          { id: "75", title: "Real Time Intelligent Pantry Monitoring System for Food Preservation and Storage Safety", authors: "Abhishek Tripathi, Shaik Mahammad Sharook B Kartheek, K Sai Harsha, P Sumanth Chowdary" },
                          { id: "92", title: "Digital Therapeutics and Music Therapy: A Computational Perspective", authors: "Pericles, Vijay Arputharaj J, Hubert Shanthan, Ashok Kumar M" },
                          { id: "100", title: "EventQuest: AI-Powered Event Management", authors: "Satchi Baghla, Shah Riya Pranav, Shah Vansh Paras, Ashok Immanuel, Helen K Joy, Sudhakar T" },
                          { id: "109", title: "Data-Driven AI-Enabled HVAC Systems for Predictive Maintenance", authors: "Preethi Ananthachari, Mansoor Ahmed Hasan Husain Alaali, Chandrasekar Chellaiya, Santhosh Padmanabhan" },
                          { id: "119", title: "A Deployed Machine Learning Framework for Automated Insurance Claim Fraud Detection", authors: "Abhishek Tripathi, P. Ganesh, N. Maheshwar Reddy, M. V. Sumanth Reddy, T. Koushik, D. Balakrishnan" },
                          { id: "120", title: "Design and Implementation of a Proof-Validated NLP-Based Campus Asset Recovery System", authors: "Abhishek Tripathi, R. Arjun Kumar, M. Abhinay Reddy, C. Charan Vignesh, K.V. Rupesh, D. Balakrishnan" },
                          { id: "114", title: "Explainable AI and Optimized Multi-Branch CNN Model for Eye Anemia Diagnosis", authors: "T. R. Vedhavathy, S. Vishnu Priya, N. Barath Kumar" },
                          { id: "127", title: "Geospatially Driven Interactive Analytics Framework for Multiscale Water Quality Intelligence Systems", authors: "T. R. Vedhavathy, S. Vishnu Priya, N. Barath Kumar" },
                        ].map((p, i) => (
                          <tr key={p.id} className={i % 2 === 0 ? "bg-white hover:bg-orange-50" : "bg-orange-50 hover:bg-orange-100"}>
                            <td className="px-4 py-3"><span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium">Online</span></td>
                            <td className="px-4 py-3 font-bold text-orange-900">ID {p.id}</td>
                            <td className="px-4 py-3 text-slate-800 font-medium">{p.title}</td>
                            <td className="px-4 py-3 text-black text-sm">{p.authors}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <div className="bg-orange-100 px-5 py-3 border-t-2 border-orange-200 text-right">
                      <a href="https://meet.google.com/oxq-drqq-mwp" target="_blank" rel="noopener noreferrer" className="inline-block bg-orange-700 hover:bg-orange-800 text-white px-6 py-2 rounded font-semibold text-base transition-all">
                        Join Track 1 — Online Session (Google Meet)
                      </a>
                    </div>
                  </div>
                </div>

                {/* Track 2 */}
                <div>
                  <div className="bg-purple-800 px-5 py-3 rounded-t-lg">
                    <h4 className="font-display font-bold text-xl text-white">Track 2: IoT, Smart Systems & Embedded Intelligence</h4>
                    <p className="text-purple-200 text-sm mt-1">2:00 PM – 5:00 PM &nbsp;|&nbsp; Venue: Smart Class Room, First Floor, Dept. of Computer Science</p>
                  </div>
                  <div className="border-2 border-purple-200 rounded-b-lg overflow-x-auto">
                    <table className="w-full text-base">
                      <thead className="bg-purple-100">
                        <tr>
                          <th className="px-4 py-3 text-left font-semibold text-purple-900 w-28">Mode</th>
                          <th className="px-4 py-3 text-left font-semibold text-purple-900 w-24">Paper ID</th>
                          <th className="px-4 py-3 text-left font-semibold text-purple-900">Title</th>
                          <th className="px-4 py-3 text-left font-semibold text-purple-900">Authors</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-purple-100">
                        <tr className="bg-purple-100">
                          <td colSpan={4} className="px-4 py-2 font-bold text-purple-800 text-sm uppercase tracking-wide">
                            Offline Presentations — 2:00 PM to 2:30 PM &nbsp;|&nbsp; Session Chairs: <br/> Dr. M. Ashok Kumar, Controller of Examination & HOD OpenLabs (Associate Professor), Bluecrest University, Liberia, West Africa<br/> Dr. D. Arul Pon Daniel, Assistant Professor, Department of Computer Science, Jayarani College of Arts and Science, Salem
                          </td>
                        </tr>
                        <tr className="bg-white hover:bg-purple-50">
                          <td className="px-4 py-3"><span className="bg-slate-200 text-slate-700 px-2 py-1 rounded text-sm font-medium">Offline</span></td>
                          <td className="px-4 py-3 font-bold text-purple-900">ID 51</td>
                          <td className="px-4 py-3 text-slate-800 font-medium">Solar Assisted Iot Integrated E-Bike Conversion Kit with Real-Time Battery Health and Power Monitoring System</td>
                          <td className="px-4 py-3 text-black text-sm">R Ganesan, Amuthan N, Haribaskaran A, Joshua Raj R</td>
                        </tr>
                        <tr className="bg-purple-50 hover:bg-purple-100">
                          <td className="px-4 py-3"><span className="bg-slate-200 text-slate-700 px-2 py-1 rounded text-sm font-medium">Offline</span></td>
                          <td className="px-4 py-3 font-bold text-purple-900">ID 129</td>
                          <td className="px-4 py-3 text-slate-800 font-medium">Satellite Image Classification of Transport Infrastructure using Transfer Learning</td>
                          <td className="px-4 py-3 text-black text-sm">M Prabhavathy, Valliappan Raman , Putra Sumari , K.R.Shanmuga Priyaa</td>
                        </tr>
                        <tr className="bg-purple-100">
                          <td colSpan={4} className="px-4 py-2 font-bold text-purple-800 text-sm uppercase tracking-wide">
                            Online Presentations — 2:30 PM to 4:30 PM &nbsp;|&nbsp; Session Chairs: <br/> Dr. M. Ashok Kumar, Controller of Examination & HOD OpenLabs (Associate Professor), Bluecrest University, Liberia, West Africa<br/> Dr. D. Arul Pon Daniel, Assistant Professor, Department of Computer Science, Jayarani College of Arts and Science, Salem
                          </td>
                        </tr>
                        {[
                          { id: "84", title: "Augmenting Web3 Development in VS Code Through Prompt Driven Copilot Extensions and Slither-Based Security Analysis", authors: "Josaiah Murfeal Dhkar, Sudhakar T, Logeshwaran J" },
                          { id: "93", title: "Deep Learning Based Algorithm for LED Driver", authors: "Seshaiah M.A, Ashwanth A, Kesavagurumoorthy J, Tharun Vignesh R" },
                          { id: "95", title: "Cloud Integrated Industrial Equipment Monitoring and Early Fault Indication System", authors: "Manimegalai M, Jitvan S, GokulKumar M, Arun Kumar M" },
                          { id: "97", title: "SMARTFORM AI-Powered Exercise Guidance", authors: "Hami Yasir, Christy Jackson J" },
                          { id: "112", title: "Leopard Optimized Energy-Adaptive Path-Selective Routing Protocol for Reliable and Efficient IoV Communication Networks", authors: "J. Ramkumar, R. Vadivel, R. Karthikeyan, Divya Jose J, S.P. Priyadharshini" },
                          { id: "121", title: "IoT-Enabled CNC Machine Health Monitoring with Hybrid ML and Adaptive Threshold Control", authors: "Ramya T, Nandakrishna S, Sai Pratap C, Yasvanth Bala G" },
                          { id: "125", title: "Handheld Device for Apartment Building Quality Detection", authors: "Vinodhini R, Iniyan SK, Naveen Prakash G, Vishal A" },
                          { id: "126", title: "Defect Detection in PCB Images Using CNNs", authors: "Nirmala Devi K, Ganishkar S B, Mohanan R K" },
                          { id: "132", title: "Multi-Scale CNN with Attention Mechanism for Predictive Printed Circuit Board Failure Detection", authors: "Sabari L Uma Maheswari Avinash V Sanjay S Hariesh.S" },
                          { id: "133", title: "A Hybrid NLP-Generative AI Framework for Enhancing SME Customer Support Through Intelligent Multilingual Chatbots", authors: "R. Logesh Babu , Nuzha Razia, Nivetha R, Kathiravel K" },
                          { id: "117", title: "Web-Enabled IoT Monitoring of Dust and Noise in Public Events", authors: "Abhishek Tripathi, Suresh Balpande, Bala Nagireddy, M. Geeta Sai Charan, J. Deny, R Raja Subramanian" },
                          { id: "123", title: "Digital Framework for Waste Segregation and Sustainable Resource Management in Educational Institutions", authors: "Abhishek Tripathi, Vishal Rathee, N. Naga Harshitha" },
                          { id: "124", title: "Smart Honey Adulteration Detection Using Color Sensing", authors: "Abhishek Tripathi, Shubham Anjankar, Y Bala NagiReddy, A Hemanth Kumar Reddy, A Venkata Naga Sai Charan, G Haritha Reddy" },
                        ].map((p, i) => (
                          <tr key={p.id} className={i % 2 === 0 ? "bg-white hover:bg-purple-50" : "bg-purple-50 hover:bg-purple-100"}>
                            <td className="px-4 py-3"><span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium">Online</span></td>
                            <td className="px-4 py-3 font-bold text-purple-900">ID {p.id}</td>
                            <td className="px-4 py-3 text-slate-800 font-medium">{p.title}</td>
                            <td className="px-4 py-3 text-black text-sm">{p.authors}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <div className="bg-purple-100 px-5 py-3 border-t-2 border-purple-200 text-right">
                      <a href="https://meet.google.com/iyj-ughb-ayu" target="_blank" rel="noopener noreferrer" className="inline-block bg-purple-700 hover:bg-purple-800 text-white px-6 py-2 rounded font-semibold text-base transition-all">
                        Join Track 2 — Online Session (Google Meet)
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          )}

          {activeTab === "feb27" && (
            <div className="border-2 border-violet-400 rounded-lg bg-white overflow-hidden">
              {/* Day Header */}
              <div className="bg-violet-800 px-6 py-5 text-center">
                <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-1">
                  Day 2 — February 27, 2026 (Friday)
                </h3>
                <p className="text-violet-200 font-medium text-base">Department of Computer Science, Periyar University</p>
              </div>

              {/* Quick Access Table */}
              <div className="p-6 border-b-2 border-violet-200 bg-violet-50">
                <h4 className="font-display font-bold text-lg text-violet-800 mb-3 uppercase tracking-wide">Quick Session Access</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-base border border-violet-300 rounded-lg overflow-hidden">
                    <thead>
                      <tr className="bg-violet-800 text-white">
                        <th className="px-4 py-3 text-left font-semibold">Session</th>
                        <th className="px-4 py-3 text-left font-semibold">Time (IST)</th>
                        <th className="px-4 py-3 text-left font-semibold">Mode</th>
                        <th className="px-4 py-3 text-center font-semibold">Online Link</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="bg-white hover:bg-indigo-50">
                        <td className="px-4 py-3 font-semibold text-indigo-900">Keynote Sessions (Day 2)</td>
                        <td className="px-4 py-3 text-slate-700">10:00 AM – 12:45 PM</td>
                        <td className="px-4 py-3"><span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-sm font-medium">Hybrid</span></td>
                        <td className="px-4 py-3 text-center"><a href="https://meet.google.com/uxj-pmse-vop" target="_blank" rel="noopener noreferrer" className="bg-indigo-700 hover:bg-indigo-800 text-white px-4 py-1.5 rounded font-semibold text-sm transition-all">Join Now</a></td>
                      </tr>
                      <tr className="bg-slate-50 hover:bg-teal-50">
                        <td className="px-4 py-3 font-semibold text-teal-900">Technical Session III — Track 3 (Online)</td>
                        <td className="px-4 py-3 text-slate-700">2:00 PM – 3:30 PM</td>
                        <td className="px-4 py-3"><span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium">Online</span></td>
                        <td className="px-4 py-3 text-center"><a href="https://meet.google.com/iur-zctt-rvg" target="_blank" rel="noopener noreferrer" className="bg-teal-700 hover:bg-teal-800 text-white px-4 py-1.5 rounded font-semibold text-sm transition-all">Join Now</a></td>
                      </tr>
                      <tr className="bg-white hover:bg-red-50">
                        <td className="px-4 py-3 font-semibold text-red-900">Valedictory Function</td>
                        <td className="px-4 py-3 text-slate-700">4:00 PM – 5:00 PM</td>
                        <td className="px-4 py-3"><span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-medium">Hybrid</span></td>
                        <td className="px-4 py-3 text-center"><a href="https://meet.google.com/fsb-noyr-abh" target="_blank" rel="noopener noreferrer" className="bg-red-700 hover:bg-red-800 text-white px-4 py-1.5 rounded font-semibold text-sm transition-all">Join Now</a></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="p-6 space-y-8">

                {/* Introduction notice */}
                <div className="bg-indigo-50 border border-indigo-300 rounded-lg px-5 py-3 text-indigo-900 font-semibold text-base">
                  Introduction & Felicitation &nbsp;|&nbsp; 9:50 AM – 10:00 AM
                </div>

                {/* Keynote Sessions Day 2 */}
                <div>
                  <div className="bg-indigo-800 px-5 py-3 rounded-t-lg">
                    <h4 className="font-display font-bold text-xl text-white">Keynote Sessions &nbsp;|&nbsp; 10:00 AM – 12:45 PM IST</h4>
                  </div>
                  <div className="border-2 border-indigo-200 rounded-b-lg overflow-x-auto">
                    <table className="w-full text-base">
                      <thead className="bg-indigo-100">
                        <tr>
                          <th className="px-4 py-3 text-left font-semibold text-indigo-900 w-44">Time (IST)</th>
                          <th className="px-4 py-3 text-left font-semibold text-indigo-900 w-36">Session</th>
                          <th className="px-4 py-3 text-left font-semibold text-indigo-900">Speaker & Topic</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-indigo-100">
                        <tr className="bg-white hover:bg-indigo-50">
                          <td className="px-4 py-3 font-medium text-slate-700 whitespace-nowrap">10:00 AM – 11:15 AM</td>
                          <td className="px-4 py-3 font-semibold text-indigo-800">Keynote Talk I</td>
                          <td className="px-4 py-3 text-slate-800">
                            <p className="font-semibold">Dr. Pramod Pisharady</p>
                            <p className="text-slate-600 text-sm">Associate Professor, Dept. of Neurology & Radiology, Center for Magnetic Resonance Research, University of Minnesota, USA</p>
                            <p className="text-indigo-700 italic text-sm mt-1">Computational Neuroimaging: A Window into the Human Brain in Health and Disease</p>
                          </td>
                        </tr>
                        <tr className="bg-indigo-50">
                          <td className="px-4 py-3 font-medium text-slate-700 whitespace-nowrap" colSpan={3}>
                            <span className="text-amber-800 font-semibold">Break &nbsp;|&nbsp; 11:15 AM – 11:30 AM</span>
                          </td>
                        </tr>
                        <tr className="bg-white hover:bg-indigo-50">
                          <td className="px-4 py-3 font-medium text-slate-700 whitespace-nowrap">11:30 AM – 12:45 PM</td>
                          <td className="px-4 py-3 font-semibold text-indigo-800">Keynote Talk II</td>
                          <td className="px-4 py-3 text-slate-800">
                            <p className="font-semibold">Dr. A. Paventhan</p>
                            <p className="text-slate-600 text-sm">Senior Director, HoD-Research & Development, Scientist-G, ERNET India, Ministry of Electronics & IT, Government of India</p>
                            <p className="text-indigo-700 italic text-sm mt-1">Evolving computing paradigm in the era of AI</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="bg-indigo-100 px-5 py-3 border-t-2 border-indigo-200 text-right">
                      <a href="https://meet.google.com/uxj-pmse-vop" target="_blank" rel="noopener noreferrer" className="inline-block bg-indigo-700 hover:bg-indigo-800 text-white px-6 py-2 rounded font-semibold text-base transition-all">
                        Join Keynote Sessions (Google Meet)
                      </a>
                    </div>
                  </div>
                </div>

                {/* Lunch Break */}
                <div className="bg-amber-50 border-2 border-amber-300 rounded-lg px-5 py-4 text-center">
                  <p className="font-bold text-amber-900 text-xl">Lunch Break &nbsp;|&nbsp; 12:45 PM – 2:00 PM</p>
                  <p className="text-amber-700 text-base mt-1">For Offline Participants at the Venue</p>
                </div>

                {/* Track 3 */}
                <div>
                  <div className="bg-teal-800 px-5 py-3 rounded-t-lg">
                    <h4 className="font-display font-bold text-xl text-white">Track 3: Cyber Security, Intelligent Systems & Computer Vision</h4>
                    <p className="text-teal-200 text-sm mt-1">2:00 PM – 3:30 PM &nbsp;|&nbsp; Venue: Smart Class Room, First Floor, Dept. of Computer Science</p>
                  </div>
                  <div className="border-2 border-teal-200 rounded-b-lg overflow-x-auto">
                    <table className="w-full text-base">
                      <thead className="bg-teal-100">
                        <tr>
                          <th className="px-4 py-3 text-left font-semibold text-teal-900 w-28">Mode</th>
                          <th className="px-4 py-3 text-left font-semibold text-teal-900 w-24">Paper ID</th>
                          <th className="px-4 py-3 text-left font-semibold text-teal-900">Title</th>
                          <th className="px-4 py-3 text-left font-semibold text-teal-900">Authors</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-teal-100">
                        <tr className="bg-teal-100">
                          <td colSpan={4} className="px-4 py-2 font-bold text-teal-800 text-sm uppercase tracking-wide">
                            Offline Presentations — 2:00 PM to 3:30 PM &nbsp;|&nbsp; Session Chairs: <br/> Dr. N. Suresh Kumar, Director and Professor, Department of Computer Science, Chettinad Academy of Research and Education (Deemed to be University), Chennai, TamilNadu, India<br/> Dr. T. Sudhakar, Assistant Professor, Department of Computer Science, CHRIST (Deemed to be University), Bengaluru, India
                          </td>
                        </tr>
                        {[
                          { id: "89", title: "Intelligent Renewable-Energy Prioritized Home Automation and Load Balancing Using Raspberry Pi and Predictive AI", authors: "Naveenbalaji Gowthaman, Naveen Aakash S, Vishal M, Suwasthika Sri KV" },
                          { id: "90", title: "Elliptic Curve Cryptography Enhanced Encryption and Detection of Covert Timing Channels with Machine Learning", authors: "Abrohneel Roy, Nithin C, Amrutavarshan L" },
                          { id: "91", title: "Intelligent ML Pipeline Automation Using AI for Real-Time Predictive Analytics in Financial Fraud Detection", authors: "Naveenbalaji Gowthaman G, Sri Vasudevan R, Infant Lydia, Brathika G S" },
                          { id: "130", title: "PROTECTEST: A Unified Framework For Proactive Security Monitoring", authors: "Saravanabhavan C, Sibiraj B, Swasthegan S, Vishnuram M D" },
                        ].map((p, i) => (
                          <tr key={p.id} className={i % 2 === 0 ? "bg-white hover:bg-teal-50" : "bg-teal-50 hover:bg-teal-100"}>
                            <td className="px-4 py-3"><span className="bg-slate-200 text-slate-700 px-2 py-1 rounded text-sm font-medium">Offline</span></td>
                            <td className="px-4 py-3 font-bold text-teal-900">ID {p.id}</td>
                            <td className="px-4 py-3 text-slate-800 font-medium">{p.title}</td>
                            <td className="px-4 py-3 text-black text-sm">{p.authors}</td>
                          </tr>
                        ))}
                        <tr className="bg-teal-100">
                          <td colSpan={4} className="px-4 py-2 font-bold text-teal-800 text-sm uppercase tracking-wide">
                            Online Presentations — 2:30 PM to 3:30 PM &nbsp;|&nbsp; Session Chairs: <br/> Dr. P. Gowthamaraya Thirumal, Assistant Professor, Department of Computer Science, Government Arts College, Dharamapuri, Tamil Nadu India<br/> Dr. T. Sudhakar, Assistant Professor, Department of Computer Science, CHRIST (Deemed to be University), Bengaluru, India
                          </td>
                        </tr>
                        {[
                          { id: "40", title: "Speech-Enabled Email Assistant with Facial Recognition for Secure and Accessible Communication", authors: "K. Muthumayil, D. Mohan Sai Charan, Kotha Ganesh, M. Buvana" },
                          { id: "46", title: "Smart Blood Donor Identification System Using GPS-Based Location Tracking and Nearest Donor Matching", authors: "Kennady.R, Sabarritha.I, Rakshana.M, Viveka.K" },
                          { id: "58", title: "Adversarial Robustness in Federated Learning Environments for IoT Security", authors: "Kennady.R, G. Saikrishnan, O. Pandithurai, J. Praveenkumar" },
                          { id: "94", title: "Fault Diagnosis in Three-Core Power Cables Utilizing Neural Network Models and Machine Learning", authors: "Arul Thilagavathi M, Karthikeyan M, Naveen Kumar T, Siva Subramanian N" },
                          { id: "99", title: "AI Based Chatbot for Student Skill Assessment, Career Guidance and Job Recommendation", authors: "Anu T K, Radhika R" },
                          { id: "131", title: "Hybrid Edge–Cloud Facial Emotion Recognition Framework for Real-Time Elderly Care Environments", authors: "Magesh T, Logadharshini S, T Bhanuja Chowdary, B. Angayarkanni, Shyam D, G Devi" },
                        ].map((p, i) => (
                          <tr key={p.id} className={i % 2 === 0 ? "bg-white hover:bg-teal-50" : "bg-teal-50 hover:bg-teal-100"}>
                            <td className="px-4 py-3"><span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium">Online</span></td>
                            <td className="px-4 py-3 font-bold text-teal-900">ID {p.id}</td>
                            <td className="px-4 py-3 text-slate-800 font-medium">{p.title}</td>
                            <td className="px-4 py-3 text-black text-sm">{p.authors}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <div className="bg-teal-100 px-5 py-3 border-t-2 border-teal-200 text-right">
                      <a href="https://meet.google.com/iur-zctt-rvg" target="_blank" rel="noopener noreferrer" className="inline-block bg-teal-700 hover:bg-teal-800 text-white px-6 py-2 rounded font-semibold text-base transition-all">
                        Join Track 3 — Online Session (Google Meet)
                      </a>
                    </div>
                  </div>
                </div>

                {/* Valedictory Function */}
                <div>
                  <div className="bg-red-800 px-5 py-3 rounded-t-lg">
                    <h4 className="font-display font-bold text-xl text-white">Valedictory Function &nbsp;|&nbsp; 4:00 PM – 5:00 PM IST</h4>
                  </div>
                  <div className="border-2 border-red-200 rounded-b-lg overflow-x-auto">
                    <table className="w-full text-base">
                      <thead className="bg-red-100">
                        <tr>
                          <th className="px-4 py-3 text-left font-semibold text-red-900 w-44">Time (IST)</th>
                          <th className="px-4 py-3 text-left font-semibold text-red-900 w-52">Session</th>
                          <th className="px-4 py-3 text-left font-semibold text-red-900">Speaker / Details</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-red-100">
                        <tr className="bg-white hover:bg-red-50">
                          <td className="px-4 py-3 font-medium text-slate-700 whitespace-nowrap">4:00 – 4:10 PM</td>
                          <td className="px-4 py-3 text-slate-700">Welcome Address</td>
                          <td className="px-4 py-3 text-slate-800">Dr. C. Chandrasekar, Senior Professor & Head, Department of Computer Science</td>
                        </tr>
                        <tr className="bg-red-50 hover:bg-red-100">
                          <td className="px-4 py-3 font-medium text-slate-700 whitespace-nowrap">4:10 – 4:20 PM</td>
                          <td className="px-4 py-3 text-slate-700">Presidential Address</td>
                          <td className="px-4 py-3 text-slate-800">Prof. Dr. V. Raj, Registrar (FAC), Periyar University, Salem</td>
                        </tr>
                        <tr className="bg-white hover:bg-slate-50">
                          <td className="px-4 py-3 font-medium text-slate-700 whitespace-nowrap">4:20 – 4:30 PM</td>
                          <td className="px-4 py-3 text-slate-700">Valedictory Address</td>
                          <td className="px-4 py-3 text-slate-800">Dr. A. Paventhan, Senior Director, HoD- Research & Development, Scientist- G, ERNET India, Ministry of Electronics & IT, Government of India</td>
                        </tr>
                        <tr className="bg-red-50 hover:bg-slate-50">
                          <td className="px-4 py-3 font-medium text-slate-700 whitespace-nowrap">4:30 – 4:45 PM</td>
                          <td className="px-4 py-3 text-slate-700">Certificate Distribution</td>
                          <td className="px-4 py-3 text-slate-800">Participants Feedback <br/> Distribution of Certificates</td>
                        </tr>
                        <tr className="bg-white hover:bg-red-50">
                          <td className="px-4 py-3 font-medium text-slate-700 whitespace-nowrap">4:45 – 5:00 PM</td>
                          <td className="px-4 py-3 text-slate-700">Vote of Thanks & Closing</td>
                          <td className="px-4 py-3 text-slate-800">Dr. I. Laurence Aroquiaraj, Professor & Conference Chair – ICAITSC 2026, Department of Computer Science, Periyar University, Salem</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="bg-red-100 px-5 py-3 border-t-2 border-red-200 text-right">
                      <a href="https://meet.google.com/fsb-noyr-abh" target="_blank" rel="noopener noreferrer" className="inline-block bg-red-700 hover:bg-red-800 text-white px-6 py-2 rounded font-semibold text-base transition-all">
                        Join Valedictory Function (Google Meet)
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProgramSchedule;
