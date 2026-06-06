import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Journey() {
  const [expandedPhase, setExpandedPhase] = useState(0);
  const [expandedCard, setExpandedCard] = useState(null);

  const phases = [
    {
      number: '01',
      title: 'Discovery',
      subtitle: 'Understanding the Problem Through Research',
      color: '#FF6B6B',
      summary: 'Discovery research revealed that student road accidents are not isolated incidents but a recurring behavioral pattern driven by overspeeding, peer influence, low risk perception, and weak safety culture.',
      sections: [
        {
          type: 'newspaper',
          title: 'Newspaper Clippings',
          description: 'Real-world cases highlighting the severity and patterns',
          items: [
            {
              source: 'THE TIMES OF INDIA',
              date: 'Jan 2, 2026',
              headline: '2 students among four die in road accidents across city',
              excerpt: 'Hyderabad: Since Wednesday afternoon, four people, including two students and an electrician, have died in separate road accidents in the city.',
              details: 'In Kondapur, a 19-year-old Instacart worker took his brother\'s bike to report for work at around 10:30 pm. While travelling towards Kothagudu, in front of Palapitta Park, his bike fell onto the road.'
            },
            {
              source: 'THE TIMES OF INDIA',
              date: 'Aug 1, 2025',
              headline: '2 students killed in road accidents within 24 hrs in Meerut',
              excerpt: 'Barely: A day after a 10-year-old schoolboy died in a road accident, another student was killed after a speeding govt bus ran over her while she was on her way to college.',
              details: 'Eyewitnesses said the bus allegedly dragged the body of Manisha Singh, a BA student, for about 20 metres before the driver abandoned the vehicle and fled the scene.'
            },
            {
              source: 'THE HINDU',
              date: 'Jan 8, 2026',
              headline: 'Hyderabad: Four students killed, one injured as car crashes near Mirzaguda Gate',
              excerpt: 'Preliminary probe suggests that overspeeding caused the accident near Mirzaguda Gate in Chevella in the early hours of Thursday (January 8, 2026).',
              details: 'The deceased have been identified as Kargayala Sumith, 20, Sri Nikhil, 20, Balmuri Rohith, 18 and Devala Surya Teja, 20.'
            },
            {
              source: 'THE TIMES OF INDIA',
              date: 'Jan 9, 2026',
              headline: 'Telangana horror: 4 students from ICFAI Business School (IBS) die in high-speed car crash',
              excerpt: 'Four students travelling in a car died in a road accident in Mokila late Wednesday night, following a birthday celebration.',
              details: 'According to police, five students were travelling in an SUV when the vehicle hit a tree at high speed. Authorities are yet to determine whether drunk driving was a factor.'
            },
            {
              source: 'THE FEDERAL',
              date: 'Feb 13, 2026',
              headline: 'Hoskote accident: How a joyride at dawn turned deadly for 6 students',
              excerpt: 'According to police sources, the group of youths had gone out for a "jolly ride", consumed biryani, and was driving towards Nandi Hills when the accident happened.',
              details: 'The SUV involved in the accident was registered in the name of the deceased student Ari\'s father.'
            }
          ]
        },
        {
          type: 'research',
          title: 'Key Research Findings',
          description: 'Insights from secondary research and case analysis',
          items: [
            {
              insight: 'Knowledge Gap',
              finding: 'Students know road rules but still violate them',
              impact: 'Awareness alone is insufficient to change behavior'
            },
            {
              insight: 'Speeding Prevalence',
              finding: 'Overspeeding is a major contributor to accidents',
              impact: '70% of student accidents involve excessive speed'
            },
            {
              insight: 'Peer Influence',
              finding: 'Driving behavior is heavily influenced by friends',
              impact: 'Social acceptance overrides personal safety concerns'
            },
            {
              insight: 'Risk Perception',
              finding: 'Youth underestimate accident likelihood',
              impact: 'Students believe accidents only happen to "other people"'
            }
          ]
        }
      ]
    },
    {
      number: '02',
      title: 'Empathy',
      subtitle: 'Understanding Student Perspectives',
      color: '#4ECDC4',
      summary: 'Empathy research showed that students often understand the rules but make unsafe decisions because of social pressure, overconfidence, emotions, convenience, and cultural norms.',
      sections: [
        {
          type: 'interviews',
          title: 'Student & Expert Interviews',
          description: 'Direct insights from students and professionals',
          items: [
            {
              type: 'student',
              name: 'Arjun Reddy',
              role: 'Engineering Student (Age 20)',
              quote: 'My friends take the risk, so I feel pressure to do the same. But I know it\'s dangerous.',
              insights: [
                'Wants to fit in with peer group',
                'Acknowledges risk but feels social pressure',
                'Overconfident in driving skills',
                'Doesn\'t believe "it will happen to me"'
              ]
            },
            {
              type: 'student',
              name: 'Priya Sharma',
              role: 'Business Student (Age 19)',
              quote: 'Everyone speeds. It\'s become normal. Slow driving feels boring compared to what my friends do.',
              insights: [
                'Risk normalization through peer behavior',
                'Thrill-seeking and excitement motivation',
                'Safety perception influenced by cultural norms',
                'Social status associated with risky behavior'
              ]
            },
            {
              type: 'student',
              name: 'Sree Sanjana',
              role: 'Medtech Student (Age 21)',
              quote: 'I know the consequences intellectually, but emotionally, in the moment, you don\'t think about it.',
              insights: [
                'Gap between knowledge and action',
                'Emotional decision-making overrides logic',
                'Moment-based impulsivity',
                'Disconnect from real-world consequences'
              ]
            },
            {
              type: 'expert',
              name: 'Dr. Meera Sharma',
              role: 'Clinical Psychologist (Age 42)',
              expertise: 'Youth Risk Behavior & Decision Making',
              insights: [
                'Risk normalization: Students see risky behavior as "normal" because peers do it',
                'Overconfidence bias: Youth overestimate their abilities and control',
                'Thrill-seeking: Adolescent neurochemistry drives sensation-seeking',
                'Peer pressure: Social acceptance matters more than safety',
                'Emotional decision-making: Logic takes backseat to emotions',
                'Status perception: Risky driving is seen as cool, confident, mature'
              ]
            }
          ]
        },
        {
          type: 'personas',
          title: 'Proto Personas',
          description: 'Archetypes representing key stakeholders',
          items: [
            {
              name: 'Arjun Reddy',
              role: 'Student Rider',
              age: 20,
              goals: ['Maintain social status', 'Enjoy freedom and independence', 'Keep up with peer group'],
              frustrations: ['Social pressure to take risks', 'Fear of being left out', 'Overconfidence leads to risky decisions'],
              needs: ['Peer acceptance without endangering life', 'Practical understanding of real consequences', 'Alternative ways to feel confident'],
              motivations: ['Social belonging', 'Thrill and excitement', 'Personal autonomy']
            },
            {
              name: 'Parent',
              role: 'Guardian & Protector',
              age: 45,
              goals: ['Child\'s safety and well-being', 'Responsible behavior development', 'Peace of mind'],
              frustrations: ['Cannot monitor child constantly', 'Weak enforcement of road safety', 'Limited accountability mechanisms'],
              needs: ['Systems that encourage responsibility', 'Real consequences and accountability', 'Child\'s awareness of real dangers'],
              motivations: ['Protecting loved ones', 'Building lifelong safe habits', 'Parental responsibility']
            },
            {
              name: 'Traffic Psychologist',
              role: 'Safety Expert',
              age: 42,
              goals: ['Reduce accident rates', 'Change driving culture', 'Implement systemic solutions'],
              frustrations: ['Awareness campaigns don\'t change behavior', 'Weak enforcement', 'Lack of accountability systems'],
              needs: ['Behavioral intervention strategies', 'Accountability mechanisms', 'Real-world consequence communication'],
              motivations: ['Public safety', 'Evidence-based solutions', 'Cultural transformation']
            }
          ]
        }
      ]
    },
    {
      number: '03',
      title: 'Define',
      subtitle: 'Identifying the Root Causes',
      color: '#FFD93D',
      summary: 'The Define phase revealed that road safety is fundamentally a behavioral and cultural challenge rather than simply an awareness problem.',
      sections: [
        {
          type: 'rootcause',
          title: 'Root Cause Analysis',
          description: 'Five major root causes identified',
          items: [
            {
              id: 1,
              title: 'Risky Driving Behaviors Are Normalized',
              statement: 'Students often see overspeeding, wrong-way driving, and negligent behavior as "normal" because their peers do it.',
              whyTree: [
                'Why students engage in risky behavior: They see peers doing it without immediate consequences',
                'Why peers normalize it: Social groups reinforce risky behavior as acceptable',
                'Why enforcement is weak: Police often don\'t catch violators in time',
                'Root Cause: Risky driving has become normalized in student culture'
              ]
            },
            {
              id: 2,
              title: 'Student Decision-Making Is Influenced by Bias and Overconfidence',
              statement: 'Students underestimate accident risks and overestimate their own driving skills due to psychological biases.',
              whyTree: [
                'Why students don\'t believe accidents can happen: Overconfidence bias makes them think they\'re better drivers',
                'Why risk perception is low: "It only happens to other people" mentality',
                'Why emotional decisions override logic: In-the-moment adrenaline overrides rational thinking',
                'Root Cause: Students know rules but don\'t believe consequences apply to them'
              ]
            },
            {
              id: 3,
              title: 'Inadequate Road Safety Education and Real-Life Exposure',
              statement: 'Current safety education lacks real-world impact and doesn\'t translate knowledge into behavior change.',
              whyTree: [
                'Why education doesn\'t work: Students already know the rules, awareness isn\'t the issue',
                'Why students feel invincible: No real exposure to serious consequences',
                'Why lectures fail: Abstract information doesn\'t create emotional impact',
                'Root Cause: Missing educational models that create behavioral change'
              ]
            },
            {
              id: 4,
              title: 'Weak Adoption of Safety Gear and Vehicle Responsibility',
              statement: 'Students neglect helmets, don\'t maintain vehicles, and don\'t feel ownership of safety responsibilities.',
              whyTree: [
                'Why helmets aren\'t worn: Seen as uncool or inconvenient',
                'Why vehicles aren\'t maintained: Students don\'t feel responsible for their own or borrowed vehicles',
                'Why safety gear is skipped: Peer pressure and cultural perception override safety',
                'Root Cause: Low accountability and missing sense of ownership'
              ]
            },
            {
              id: 5,
              title: 'Poor Monitoring, Enforcement, and Accountability Systems',
              statement: 'Existing enforcement mechanisms are insufficient, inconsistent, and don\'t create lasting behavioral change.',
              whyTree: [
                'Why students violate rules: Enforcement is rare and inconsistent',
                'Why penalties are ineffective: They\'re reactive, not preventive',
                'Why accountability is weak: No system tracks repeat violators or vehicle condition',
                'Root Cause: Absence of continuous monitoring and accountability framework'
              ]
            }
          ]
        },
        {
          type: 'statement',
          title: 'Problem Statement',
          description: 'Core challenge',
          content: 'University students continue to experience a high rate of road accidents because risky driving behaviors are normalized, consequences are underestimated, safety education lacks real-world impact, and accountability systems are weak.'
        }
      ]
    },
    {
      number: '04',
      title: 'Ideation',
      subtitle: 'Exploring Opportunities for Change',
      color: '#A8E6CF',
      summary: 'The ideation process generated 192 solutions. After evaluation, the Tiered Driving License Test System linked with vehicle maintenance compliance emerged as the most comprehensive solution because it addresses behavior, accountability, vehicle responsibility, and long-term safety culture.',
      sections: [
        {
          type: 'hmw',
          title: 'How Might We Questions',
          description: 'Six strategic opportunity areas',
          items: [
            {
              number: '1',
              question: 'How might we reduce the normalization of risky driving behaviors among university students?',
              focus: 'Cultural Change'
            },
            {
              number: '2',
              question: 'How might we enable students to make safer decisions despite social, emotional, and environmental pressures?',
              focus: 'Decision Support'
            },
            {
              number: '3',
              question: 'How might we transform road safety from a rule-following activity into a valued part of student identity and culture?',
              focus: 'Identity Integration'
            },
            {
              number: '4',
              question: 'How might we make safe driving more rewarding and socially respected than risky driving among university students?',
              focus: 'Social Incentives'
            },
            {
              number: '5',
              question: 'How might we help students recognize and understand the real-life consequences of unsafe driving before accidents occur?',
              focus: 'Consequence Awareness'
            },
            {
              number: '6',
              question: 'How might we create a continuous system of accountability that encourages responsible driving and vehicle maintenance among students?',
              focus: 'Accountability System'
            }
          ]
        },
        {
          type: 'brainwriting',
          title: 'Brainwriting (8-3-8 Method)',
          description: 'Systematic ideation process results',
          stats: {
            participants: 8,
            rounds: 8,
            ideasPerPersonPerRound: 3,
            totalIdeas: 192
          },
          featured: {
            title: 'Top Solution',
            solution: 'Tiered Driving License Test System Linked to Vehicle Maintenance Compliance',
            description: 'A comprehensive framework that combines progressive licensing with vehicle responsibility, creating accountability at multiple touchpoints.',
            why: 'Addresses behavior change, accountability, vehicle responsibility, and systemic cultural shift simultaneously.'
          }
        }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative py-20 px-6 sm:px-8"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl sm:text-7xl font-bold mb-6 bg-gradient-to-r from-amber-400 via-orange-400 to-red-500 bg-clip-text text-transparent">
            Our Journey
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-2xl mx-auto">
            Mapping the Design Thinking Process: From Problem Discovery to Innovative Solutions
          </p>
        </div>
      </motion.section>

      {/* Phases Timeline */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="relative py-16 px-6 sm:px-8"
      >
        <div className="max-w-6xl mx-auto">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-amber-500 to-transparent transform -translate-x-1/2" />

          {/* Phases Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {phases.map((phase, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
              >
                {/* Phase Card */}
                <div
                  className="bg-slate-900 border border-slate-800 rounded-lg p-8 cursor-pointer transition-all duration-300 hover:border-amber-500/50 hover:shadow-lg hover:shadow-amber-500/20"
                  onClick={() => setExpandedPhase(expandedPhase === index ? -1 : index)}
                >
                  {/* Phase Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div
                        className="text-5xl font-bold mb-2"
                        style={{ color: phase.color }}
                      >
                        {phase.number}
                      </div>
                      <h3 className="text-3xl font-bold mb-2">{phase.title}</h3>
                      <p className="text-amber-400 text-sm mb-4">{phase.subtitle}</p>
                    </div>
                    <motion.div
                      animate={{ rotate: expandedPhase === index ? 180 : 0 }}
                      className="text-2xl"
                    >
                      ▼
                    </motion.div>
                  </div>

                  {/* Summary */}
                  <p className="text-gray-300 text-sm leading-relaxed italic border-l-2 border-amber-500/30 pl-4">
                    {phase.summary}
                  </p>
                </div>

                {/* Expanded Content */}
                <motion.div
                  initial={false}
                  animate={{
                    opacity: expandedPhase === index ? 1 : 0,
                    height: expandedPhase === index ? 'auto' : 0,
                    marginTop: expandedPhase === index ? 16 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="space-y-6">
                    {phase.sections.map((section, sectionIndex) => (
                      <div
                        key={sectionIndex}
                        className="bg-slate-800/50 border border-slate-700 rounded-lg p-6"
                      >
                        <h4 className="text-xl font-bold mb-2 text-amber-400">
                          {section.title}
                        </h4>
                        <p className="text-gray-400 text-sm mb-4">{section.description}</p>

                        {/* Newspaper Clippings */}
                        {section.type === 'newspaper' && (
                          <div className="space-y-4">
                            {section.items.map((clipping, idx) => (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="bg-slate-700/30 border-l-4 border-red-500 p-4 rounded hover:bg-slate-700/50 transition-colors"
                              >
                                <div className="flex justify-between items-start mb-2">
                                  <span className="text-red-400 font-bold text-sm">
                                    {clipping.source}
                                  </span>
                                  <span className="text-gray-500 text-xs">{clipping.date}</span>
                                </div>
                                <h5 className="text-white font-bold mb-2">
                                  {clipping.headline}
                                </h5>
                                <p className="text-gray-300 text-sm mb-2">
                                  {clipping.excerpt}
                                </p>
                                <p className="text-gray-400 text-xs italic">
                                  {clipping.details}
                                </p>
                              </motion.div>
                            ))}
                          </div>
                        )}

                        {/* Research Findings */}
                        {section.type === 'research' && (
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {section.items.map((item, idx) => (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                className="bg-slate-700/30 p-4 rounded border border-slate-600"
                              >
                                <h5 className="text-amber-400 font-bold text-sm mb-2">
                                  {item.insight}
                                </h5>
                                <p className="text-white text-sm font-semibold mb-2">
                                  {item.finding}
                                </p>
                                <p className="text-gray-400 text-xs">{item.impact}</p>
                              </motion.div>
                            ))}
                          </div>
                        )}

                        {/* Student Interviews */}
                        {section.type === 'interviews' && (
                          <div className="space-y-3">
                            {section.items.map((interview, idx) => (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="bg-slate-700/30 p-4 rounded border border-slate-600 hover:border-amber-500/30 transition-colors"
                              >
                                <div className="flex justify-between items-start mb-3">
                                  <div>
                                    <h5 className="text-white font-bold">
                                      {interview.name}
                                    </h5>
                                    <p className="text-amber-400 text-xs">
                                      {interview.role || interview.expertise}
                                    </p>
                                  </div>
                                  <span className="text-xs bg-amber-500/20 text-amber-400 px-2 py-1 rounded">
                                    {interview.type === 'expert' ? 'Expert' : 'Student'}
                                  </span>
                                </div>
                                {interview.quote && (
                                  <p className="text-gray-300 italic text-sm mb-3">
                                    "{interview.quote}"
                                  </p>
                                )}
                                <div className="text-xs text-gray-400 space-y-1">
                                  {interview.insights?.map((insight, iIdx) => (
                                    <div key={iIdx} className="flex items-start">
                                      <span className="text-amber-500 mr-2">•</span>
                                      <span>{insight}</span>
                                    </div>
                                  ))}
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        )}

                        {/* Personas */}
                        {section.type === 'personas' && (
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            {section.items.map((persona, idx) => (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                className="bg-slate-700/30 p-4 rounded border border-slate-600 text-sm"
                              >
                                <h5 className="text-white font-bold mb-1">
                                  {persona.name}
                                </h5>
                                <p className="text-amber-400 text-xs mb-3">
                                  {persona.role} • Age {persona.age}
                                </p>
                                <div className="space-y-2">
                                  <div>
                                    <p className="text-amber-400 text-xs font-bold">
                                      Goals:
                                    </p>
                                    <ul className="text-gray-300 text-xs space-y-1">
                                      {persona.goals?.map((goal, gIdx) => (
                                        <li key={gIdx}>• {goal}</li>
                                      ))}
                                    </ul>
                                  </div>
                                  <div>
                                    <p className="text-red-400 text-xs font-bold">
                                      Frustrations:
                                    </p>
                                    <ul className="text-gray-300 text-xs space-y-1">
                                      {persona.frustrations?.map((f, fIdx) => (
                                        <li key={fIdx}>• {f}</li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        )}

                        {/* Root Cause Analysis */}
                        {section.type === 'rootcause' && (
                          <div className="space-y-4">
                            {section.items.map((cause, idx) => (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="bg-slate-700/30 border-l-4 border-yellow-500 p-4 rounded"
                              >
                                <div className="flex items-start gap-3 mb-2">
                                  <span className="text-yellow-400 font-bold text-lg">
                                    {cause.id}
                                  </span>
                                  <h5 className="text-white font-bold">
                                    {cause.title}
                                  </h5>
                                </div>
                                <p className="text-gray-300 text-sm mb-3">
                                  {cause.statement}
                                </p>
                                <div className="text-xs text-gray-400 space-y-1 pl-6">
                                  {cause.whyTree?.map((why, wIdx) => (
                                    <div key={wIdx} className="flex items-start">
                                      <span className="text-gray-500 mr-2 mt-1">
                                        {wIdx === cause.whyTree.length - 1
                                          ? '→'
                                          : '↓'}
                                      </span>
                                      <span>{why}</span>
                                    </div>
                                  ))}
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        )}

                        {/* Problem Statement */}
                        {section.type === 'statement' && (
                          <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-lg p-6">
                            <p className="text-white text-lg font-bold leading-relaxed">
                              {section.content}
                            </p>
                          </div>
                        )}

                        {/* HMW Questions */}
                        {section.type === 'hmw' && (
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {section.items.map((hmw, idx) => (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                className="bg-slate-700/30 p-4 rounded border border-slate-600 hover:border-green-500/30 transition-colors"
                              >
                                <span className="text-green-400 font-bold text-lg">
                                  {hmw.number}
                                </span>
                                <p className="text-white text-sm font-semibold mt-2 mb-2">
                                  {hmw.question}
                                </p>
                                <p className="text-green-400 text-xs">
                                  Focus: {hmw.focus}
                                </p>
                              </motion.div>
                            ))}
                          </div>
                        )}

                        {/* Brainwriting */}
                        {section.type === 'brainwriting' && (
                          <div className="space-y-4">
                            <div className="grid grid-cols-4 gap-3 mb-6">
                              <div className="bg-slate-700/30 p-3 rounded text-center">
                                <div className="text-2xl font-bold text-green-400">
                                  {section.stats.participants}
                                </div>
                                <p className="text-gray-400 text-xs">Participants</p>
                              </div>
                              <div className="bg-slate-700/30 p-3 rounded text-center">
                                <div className="text-2xl font-bold text-green-400">
                                  {section.stats.rounds}
                                </div>
                                <p className="text-gray-400 text-xs">Rounds</p>
                              </div>
                              <div className="bg-slate-700/30 p-3 rounded text-center">
                                <div className="text-2xl font-bold text-green-400">
                                  {section.stats.ideasPerPersonPerRound}
                                </div>
                                <p className="text-gray-400 text-xs">Ideas/Person/Round</p>
                              </div>
                              <div className="bg-slate-700/30 p-3 rounded text-center">
                                <div className="text-2xl font-bold text-green-400">
                                  {section.stats.totalIdeas}
                                </div>
                                <p className="text-gray-400 text-xs">Total Ideas</p>
                              </div>
                            </div>
                            <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-lg p-6">
                              <h5 className="text-green-400 font-bold text-lg mb-2">
                                ⭐ {section.featured.title}
                              </h5>
                              <h6 className="text-white font-bold text-base mb-2">
                                {section.featured.solution}
                              </h6>
                              <p className="text-gray-300 text-sm mb-3">
                                {section.featured.description}
                              </p>
                              <p className="text-green-400 text-sm italic">
                                {section.featured.why}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Reflection & Impact */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="py-16 px-6 sm:px-8 border-t border-slate-800"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Reflection & Impact</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our design thinking journey transformed assumptions into evidence-based insights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-slate-900 border border-slate-800 rounded-lg p-8"
            >
              <h3 className="text-2xl font-bold mb-4 text-amber-400">
                Key Learnings
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 mt-1">✓</span>
                  <span>Awareness alone doesn't change behavior - cultural and systemic factors dominate</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 mt-1">✓</span>
                  <span>Social influence is the primary driver of risky decisions among students</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 mt-1">✓</span>
                  <span>Solutions must address behavior, accountability, and identity simultaneously</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 mt-1">✓</span>
                  <span>Road safety is fundamentally a behavioral and cultural challenge</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-slate-900 border border-slate-800 rounded-lg p-8"
            >
              <h3 className="text-2xl font-bold mb-4 text-green-400">
                Next Steps
              </h3>
              <p className="text-gray-300 mb-4">
                The Tiered Driving License Test System emerged as our most comprehensive solution, addressing:
              </p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-400">→</span>
                  <span>Behavior change through progressive accountability</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">→</span>
                  <span>Vehicle responsibility and maintenance compliance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">→</span>
                  <span>Continuous monitoring and enforcement mechanisms</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">→</span>
                  <span>Long-term safety culture transformation</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Footer CTA */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="py-12 px-6 sm:px-8 border-t border-slate-800"
      >
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 mb-4">
            This Design Thinking process demonstrates how deep understanding precedes effective solutions.
          </p>
          <p className="text-amber-400 font-semibold">
            Every choice on the road matters. Follow the rules. Save lives.
          </p>
        </div>
      </motion.section>
    </div>
  );
}
