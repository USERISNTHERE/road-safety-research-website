import React, { useState, useMemo } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import HeroSection from '@/components/Journey/HeroSection';
import ReflectionSection from '@/components/Journey/ReflectionSection';
import FooterSection from '@/components/Journey/FooterSection';
import { getMotionConfig } from '@/utils/animationConfig';
import {
  SurveyGallery,
  MindMap,
  YouTubePlayer,
  TimelinePhase,
} from '@/components/Journey';

// Import phases data
const surveyCharts = [
  { file: '/survey/01_gender.png', title: 'Gender Distribution', caption: '44 respondents surveyed' },
  { file: '/survey/02_age.png', title: 'Age Distribution', caption: 'Majority aged 18–22' },
  { file: '/survey/03_accident_yn.png', title: 'Accident Involvement', caption: 'Direct accident experience' },
  { file: '/survey/04_traffic_rules.png', title: 'Rule Compliance', caption: 'How often rules are followed' },
  { file: '/survey/05_transport.png', title: 'Mode of Transport', caption: 'Daily commute vehicles' },
  { file: '/survey/06_accident_location.png', title: 'Accident Locations', caption: 'Where accidents occurred' },
  { file: '/survey/07_speed_comfort.png', title: 'Speed Limit Views', caption: 'Comfort with current limits' },
  { file: '/survey/08_awareness_week.png', title: 'Safety Awareness', caption: 'Awareness of safety campaigns' },
];

const phases = [
  {
    phase: 'Phase 01',
    title: 'Secondary Research',
    subtitle: 'Grounding in Evidence',
    color: '#e8c547',
    icon: '📄',
    content: [
      {
        type: 'paper',
        title: 'Road Safety Behavior & Injuries Among College Students — Bengaluru',
        authors: 'Rana Sarvar, P. K. Sreenath Menon, M. D. Sangeetha',
        insight: '27.5% of students experienced injuries in the past 30 days. Road accidents accounted for 55.5% of these. Unsafe practices like no helmets, mobile phone use, and overspeeding were rampant.',
        tag: 'Research Paper',
      },
      {
        type: 'paper',
        title: 'Knowledge, Attitude & Practice Toward Road Safety — Telangana',
        authors: 'Jothula, Kishore Yadav; Sreeharshika, D.',
        insight: 'The gap between attitude and practice was startling: 94.7% agreed helmets are necessary, but only 76% wore them. 80.3% believed in following road signs — only 16% consistently did.',
        tag: 'Research Paper',
      },
      {
        type: 'paper',
        title: 'Road Traffic Injuries to Children During School Commute — Hyderabad',
        authors: 'Tetali, Edwards, Murthy, Roberts',
        insight: 'Cycling had a 33% injury rate — the highest by mode. School buses had just 8%. Boys were injured at 25% vs 11% for girls. Urban infrastructure fails to protect its most vulnerable users.',
        tag: 'Research Paper',
      },
      {
        type: 'paper',
        title: 'Traffic Analysis & Road Accidents — GIS Study of Hyderabad',
        authors: 'Abhinav Jata (Team)',
        insight: 'Rapid urbanization increased vehicle numbers while roads stayed static. Certain intersections consistently produced accidents. But behavioral reasons behind violations remained unclear.',
        tag: 'GIS Analysis',
      },
      {
        type: 'news',
        title: 'Hoskote: How a Joyride at Dawn Turned Deadly',
        source: 'The Federal, Feb 2026',
        insight: 'A group of students drove at high speed at 3 AM "in excitement" toward Nandi Hills. They lost control. Six students died. The "joyride effect" — where driving becomes entertainment.',
        tag: 'News Article',
        color: '#f0855a',
      },
      {
        type: 'news',
        title: 'MBBS Student Killed as Speeding Fortuner Rams Bikers — Gorakhpur',
        source: 'Times of India',
        insight: 'A 22-year-old student killed on a night overbridge. The SUV was on the wrong side, traveling at high speed. Speed + darkness + wrong-side driving — a fatal combination.',
        tag: 'News Article',
        color: '#f0855a',
      },
    ],
    summary: 'Secondary research revealed a persistent gap between knowing and doing, and pointed us toward psychological factors as the missing piece.',
  },
  {
    phase: 'Phase 02',
    title: 'Student Survey',
    subtitle: 'Quantitative Insights',
    color: '#7eb8d4',
    icon: '📊',
    content: [
      {
        type: 'insight',
        title: 'Helmet Usage',
        stat: '79%',
        detail: 'wore helmets — meaning 1 in 5 students didn\'t, even with awareness of the rule',
        tag: 'Safety Gear',
      },
      {
        type: 'insight',
        title: 'Why Students Speed',
        stat: '41.6%',
        detail: 'said "for fun" — thrill-seeking overrides safety knowledge',
        tag: 'Psychology',
      },
      {
        type: 'insight',
        title: 'No Valid License',
        stat: '34%',
        detail: 'of students drove vehicles without a valid license',
        tag: 'Compliance',
      },
      {
        type: 'insight',
        title: 'Familiar Route Overconfidence',
        stat: '3/3',
        detail: 'interview subjects described accidents on familiar, daily-use routes — familiarity breeds complacency',
        tag: 'Behavior',
      },
      {
        type: 'insight',
        title: 'Drunk Driving Admission',
        stat: '24.6%',
        detail: 'admitted to driving under the influence despite 55.3% acknowledging its danger',
        tag: 'Attitude vs. Practice',
      },
      {
        type: 'insight',
        title: 'Peak Accident Time',
        stat: '8–9 AM',
        detail: 'College rush hours dominate — students trade safety for punctuality',
        tag: 'Timing',
      },
    ],
    summary: 'Survey data confirmed the behavior-knowledge gap is not a knowledge problem. It\'s an emotional and contextual one.',
  },
  {
    phase: 'Phase 03',
    title: 'Student Interviews',
    subtitle: 'Lived Experiences',
    color: '#c47eb5',
    icon: '🎙️',
    content: [
      {
        type: 'quote',
        name: 'Meet Sanghani',
        role: 'AI2, Mahindra University',
        text: 'I was at 20 km/h on a T-cross I\'ve used every day for four months. The truck came from behind a wall — no honk, no warning. The road was wet. I suffered a concussion and remember waking in the hospital.',
        insight: 'Key issue: blind-spot intersections with no visual or audio warnings. Familiar routes cause complacency.',
        solutions: ['Convex mirrors at dangerous intersections', 'Maps integration flagging accident-prone turns', 'Vehicle-approach indicator lights'],
      },
      {
        type: 'quote',
        name: 'Maitreya',
        role: 'Student Witness',
        text: 'The biker was rushing, maybe trying to beat the signal. It was 6:30 PM, and he wasn\'t focused. The familiar route made him overconfident. Help arrived in 10–15 minutes.',
        insight: 'Key issue: time pressure and overconfidence. Urgency and impatience override traffic rules.',
        solutions: ['Real-time speed monitoring app', 'Reward-based safe driving gamification', 'Emergency alert to contacts'],
      },
      {
        type: 'quote',
        name: 'Taha',
        role: 'Student — Self-involved',
        text: 'I was at 30–35 km/h, on my daily route to college at 8:15 AM. Another bike came from a side street without slowing. I didn\'t expect it. Potholes, peak hour, both of us rushing.',
        insight: 'Key issue: no side-road hazard warning. Rush hour + poor road conditions + unexpected entry = collision.',
        solutions: ['Intersection sensors for blind-spot alerts', 'GPS-based hazard zone reminders', 'Sudden impact detection + emergency contact notification'],
      },
    ],
    summary: 'Every interviewee independently pointed to the same core need: real-time, in-the-moment warnings at dangerous points — not awareness campaigns after the fact.',
  },
  {
    phase: 'Phase 04',
    title: 'Psychologist Interview',
    subtitle: 'Expert Behavioral Analysis',
    color: '#f0855a',
    icon: '🧠',
    content: [
      {
        type: 'theory',
        title: 'Indian Road Culture & Rule Bending',
        author: 'Traffic Psychologist Interview',
        text: 'Informal driving norms are deeply embedded in Indian road culture — rule bending is normalized and even socially expected. Students absorb these norms before they ever get behind the wheel.',
        implication: 'Interventions must address the social norm, not just the individual — peer-visible safe behavior is more powerful than private warnings.',
      },
      {
        type: 'theory',
        title: 'Overconfidence in Young Drivers',
        author: 'Traffic Psychologist Interview',
        text: 'Overconfidence develops through a lack of real-world feedback — young drivers make risky decisions that don\'t immediately result in accidents, reinforcing the belief that they are exceptional drivers.',
        implication: 'License tests must include real-world hazard scenarios, not just theoretical knowledge — simulated danger closes the feedback loop.',
      },
      {
        type: 'theory',
        title: 'Bikers, Status & the KTM Effect',
        author: 'Traffic Psychologist Interview',
        text: 'High-performance bikes like the KTM Duke 200 are status symbols among students. The risk is not just vehicle capability — it\'s the social identity attached to riding aggressively.',
        implication: 'The behavior is social performance. Solutions must make safe riding equally aspirational — reframe safety as skill, not weakness.',
      },
      {
        type: 'theory',
        title: 'Distraction: Headsets & Mobile Use',
        author: 'Traffic Psychologist Interview',
        text: 'Students know earphones while driving are unsafe — yet they do it anyway. The psychologist identified this as a classic attitude-behavior gap driven by habituation and perceived control.',
        implication: 'App-based distraction detection (earphone use, screen activity) with gentle, non-intrusive nudges can interrupt the habit loop without triggering defensiveness.',
      },
      {
        type: 'theory',
        title: 'Rash Driving: Ego, Thrill & Time Pressure',
        author: 'Traffic Psychologist Interview',
        text: 'Three psychological triggers dominate rash driving: ego (the need to assert dominance on the road), thrill-seeking (the dopamine of speed), and time pressure (college timing creates daily urgency).',
        implication: 'Real-time emotional state detection — combined with hazard zone alerts — could intervene precisely when students are most vulnerable to rash decisions.',
      },
      {
        type: 'synthesis',
        title: 'The Psychologist\'s Core Recommendation',
        text: 'Lasting behavior change requires structural redesign, not awareness campaigns. Driving license tests should be more rigorous, frequent, and tiered — testing real hazard perception, not just written knowledge.',
      },
    ],
    summary: 'The psychologist confirmed: the problem is behavioral and systemic. Students need harder tests, contextual real-time nudges, and social environments where safe driving is aspirational.',
  },
];

/**
 * Journey Page Component
 * Displays the research journey through 4 phases with interactive elements
 * Features:
 * - Expandable content cards
 * - Survey gallery with lightbox
 * - Mind map visualization
 * - YouTube player integration
 * - Scroll-based progress indicator
 * - Accessibility support with reduced-motion preferences
 */
export default function Journey() {
  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const progressHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  // Memoize phases to prevent unnecessary recalculations
  const memoizedPhases = useMemo(() => phases, []);

  const heroConfig = getMotionConfig('slideUp');

  return (
    <motion.div
      initial={heroConfig.initial}
      animate={heroConfig.animate}
      exit={{ opacity: 0 }}
      transition={heroConfig.transition}
      ref={containerRef}
    >
      {/* Hero */}
      <section style={{
        padding: '10rem 2rem 6rem',
        maxWidth: 900,
        margin: '0 auto',
      }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.7rem',
            color: 'var(--accent)',
            letterSpacing: '0.15em',
            marginBottom: '1.5rem',
          }}>
            THE RESEARCH JOURNEY
          </p>
          <h1 style={{
            fontSize: 'clamp(3rem, 6vw, 5.5rem)',
            fontFamily: 'var(--font-display)',
            fontWeight: 900,
            lineHeight: 1.05,
            marginBottom: '1.5rem',
          }}>
            From curiosity<br />
            <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>
              to clarity
            </span>
          </h1>
          <p style={{
            fontSize: '1.05rem',
            color: 'var(--text-dim)',
            maxWidth: 560,
            lineHeight: 1.75,
            fontWeight: 300,
          }}>
            Four phases of research — papers, surveys, first-hand stories, and a
            psychologist's diagnosis — building toward a single, cohesive solution.
          </p>
        </motion.div>

        {/* Phase navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.75rem',
            marginTop: '3rem',
          }}
        >
          {memoizedPhases.map((p, i) => (
            <a
              key={i}
              href={`#phase-${i}`}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                color: p.color,
                border: `1px solid ${p.color}40`,
                borderRadius: 4,
                padding: '0.4rem 0.9rem',
                letterSpacing: '0.08em',
                transition: 'background 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = `${p.color}15`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
              }}
            >
              {p.phase}: {p.title}
            </a>
          ))}
        </motion.div>
      </section>

      {/* Timeline */}
      <div style={{ position: 'relative' }}>
        {/* Progress bar */}
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 3,
          height: '100vh',
          background: 'var(--surface2)',
          zIndex: 100,
        }}>
          <motion.div
            style={{
              width: '100%',
              height: progressHeight,
              background: 'linear-gradient(var(--accent), var(--accent2))',
            }}
          />
        </div>

        <div style={{
          maxWidth: 1100,
          margin: '0 auto',
          padding: '0 2rem 6rem 3rem',
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8rem' }}>
            {memoizedPhases.map((phase, i) => (
              <TimelinePhase
                key={i}
                phase={phase}
                index={i}
                surveyCharts={surveyCharts}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Transition to prototype */}
      <section style={{
        padding: '6rem 2rem',
        textAlign: 'center',
        borderTop: '1px solid var(--border)',
        background: 'var(--surface)',
      }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.7rem',
            color: 'var(--accent)',
            letterSpacing: '0.15em',
            marginBottom: '1.5rem',
          }}>
            WHAT CAME NEXT
          </p>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            fontFamily: 'var(--font-display)',
            marginBottom: '1.5rem',
          }}>
            The research pointed us<br />
            <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>
              to a single insight.
            </span>
          </h2>
          <p style={{
            color: 'var(--text-dim)',
            maxWidth: 520,
            margin: '0 auto 2.5rem',
            lineHeight: 1.7,
          }}>
            Students don't need more awareness. They need real-time intervention — at
            the exact moment and location of danger.
          </p>
          <a
            href="/prototype"
            style={{
              display: 'inline-block',
              background: 'var(--accent)',
              color: '#08080f',
              padding: '1rem 2.5rem',
              borderRadius: 4,
              fontFamily: 'var(--font-body)',
              fontWeight: 500,
              fontSize: '0.9rem',
              letterSpacing: '0.04em',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'none';
            }}
          >
            See the Prototype →
          </a>
        </motion.div>
      </section>
    </motion.div>
  );
}
