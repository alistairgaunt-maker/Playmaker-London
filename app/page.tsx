'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

/* ---------- Design tokens (Doc 80 — web-scaled) ---------- */
const C = {
  black: '#111111',
  navy: '#0D2340',
  blue: '#1A5CA8',
  blueLight: '#4A90D9',
  white: '#FFFFFF',
  grey: '#CCCCCC',
  greyDim: '#888888',
};
const serif = { fontFamily: "'EB Garamond', serif" };
const sans = { fontFamily: "'Montserrat', sans-serif" };

const ease = [0.22, 1, 0.36, 1];
const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};

function Reveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-10% 0px' }}
      variants={reveal}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="block text-[13px] font-bold uppercase mb-6"
      style={{ ...sans, color: C.blue, letterSpacing: '0.12em' }}
    >
      {children}
    </span>
  );
}

function Section({
  children,
  bg = C.black,
  className = '',
}: {
  children: React.ReactNode;
  bg?: string;
  className?: string;
}) {
  return (
    <section
      className={`w-full px-6 md:px-16 lg:px-[80px] py-28 md:py-40 ${className}`}
      style={{ backgroundColor: bg }}
    >
      <div className="max-w-[1100px] mx-auto">{children}</div>
    </section>
  );
}


/* ---------- Page ---------- */
export default function Home() {
  const [introVisible, setIntroVisible] = useState(true);
  const [skipAnim, setSkipAnim] = useState(false);
  const hasRun = useRef(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    let seen = false;
    try { seen = !!sessionStorage.getItem('pm_intro_seen'); } catch {}

    if (seen) {
      setSkipAnim(true);
      setIntroVisible(false);
      return;
    }

    try { sessionStorage.setItem('pm_intro_seen', '1'); } catch {}

    timer.current = setTimeout(() => setIntroVisible(false), 2500);
  }, []);

  const audience = [
    { label: 'Overlooked talent', body: 'The player who has been told they are not quite at the level. They know that assessment is incomplete.' },
    { label: 'Late developers', body: 'The player who needs a programme designed around their own timeline, not somebody else\u2019s.' },
    { label: 'Informed families', body: 'The family navigating real decisions about commitment, opportunity, and what football can genuinely offer.' },
    { label: 'Academy players', body: 'The player inside a system who wants the structured individual support their environment does not provide.' },
  ];

  const difference = [
    {
      title: 'Individual assessment',
      body: 'A precise understanding of where this player is, what is influencing their development, and what they need from here.',
    },
    {
      title: 'Structured development',
      body: 'A plan built around this player\u2019s timeline, context and goals. Not a programme they are expected to fit into.',
    },
    {
      title: 'Evidence-informed guidance',
      body: 'Every recommendation is grounded in player development, maturation, psychology and performance. Not opinion. Not instinct.',
    },
    {
      title: 'Decision intelligence',
      body: 'Development is shaped by decisions about environment, opportunity, timing and investment. We help families make better ones.',
    },
  ];

  const assessmentCovers = [
    'Physical development and maturation stage',
    'Benchmark comparison against elite players at the same age, drawn from your Performance Report',
    'Current environment and opportunity context',
    'Short and long-term development priorities',
  ];

  const beliefs = [
    'Development is not linear.',
    'Today\u2019s performance is not tomorrow\u2019s potential.',
    'Every player develops differently.',
    'The right guidance at the right moment changes everything.',
  ];

  const leadMagnets = [
    {
      title: 'The Playmaker Parent Blueprint',
      body: 'A practical guide to the five decisions that shape every player\u2019s development.',
    },
    {
      title: 'The Late Developer\u2019s Roadmap',
      body: 'For players who have been overlooked, underestimated or released. For the families who know their journey isn\u2019t over.',
    },
    {
      title: 'The Playmaker Mindset Guide',
      body: 'Confidence is not a personality trait. It is a skill. A guide to building the psychological foundation serious players develop on.',
    },
    {
      title: 'The Scout\u2019s Eye',
      body: 'What scouts and selectors actually look for. What most players and families never get told.',
    },
  ];

  return (
    <>
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: C.black,
          opacity: introVisible ? 1 : 0,
          transform: introVisible ? 'scale(1)' : 'scale(1.08)',
          transition: skipAnim
            ? 'none'
            : 'opacity 1.6s cubic-bezier(0.16,1,0.3,1), transform 1.6s cubic-bezier(0.16,1,0.3,1)',
          pointerEvents: 'none',
        }}
      >
        <style>{`
          @keyframes pmLogoIn {
            from { opacity: 0; transform: scale(0.88); }
            to   { opacity: 1; transform: scale(1); }
          }
        `}</style>
        <img
          src="/images/logo.png"
          alt="Playmaker London"
          style={{
            height: 150,
            width: 'auto',
            animation: skipAnim ? 'none' : 'pmLogoIn 1.8s 0.5s cubic-bezier(0.16,1,0.3,1) both',
          }}
        />
      </div>
      <main style={{ backgroundColor: C.black }}>
      {/* SECTION 1 — HERO (image: subject right-weighted, text sits in the left negative space) */}
      <section className="relative w-full min-h-screen flex items-center overflow-hidden" style={{ backgroundColor: C.black }}>
        {/* Background image layer */}
        <div className="absolute inset-0">
          <img
            src="/images/hero.png"
            alt=""
            className="w-full h-full object-cover"
            style={{ objectPosition: 'right center', filter: 'brightness(1.05) contrast(1.0) saturate(0.95)' }}
          />
          {/* Left-to-right gradient — dark where text sits, clear by the subject. No bottom wash; it would crush the lit face/ball. */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(90deg, rgba(17,17,17,0.97) 0%, rgba(17,17,17,0.9) 28%, rgba(17,17,17,0.55) 48%, rgba(17,17,17,0.22) 64%, rgba(17,17,17,0.12) 100%)',
            }}
          />
        </div>

        <div className="relative z-10 px-6 md:px-16 lg:px-[80px] w-full">
          <div className="max-w-[600px]">
            <Reveal>
              <p className="text-[13px] font-normal uppercase mb-8" style={{ ...sans, color: C.blue, letterSpacing: '0.2em' }}>
                Development done seriously.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1
                className="text-[36px] md:text-[52px] lg:text-[60px] leading-[1.12] font-bold mb-8"
                style={{ ...serif, color: C.white }}
              >
                Serious development starts with honest assessment.
                <span style={{ color: C.grey }} className="font-normal italic"> Not assumptions.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p
                className="text-[16px] md:text-[18px] leading-[1.6] max-w-[480px] mb-12"
                style={{ ...sans, color: C.grey }}
              >
                We start every player relationship with a structured individual assessment, because the right development plan requires an honest picture first.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-5">
                <Link
                  href="/assessment"
                  className="px-9 py-4 text-[14px] font-bold uppercase rounded-sm transition-opacity hover:opacity-90 text-center"
                  style={{ ...sans, backgroundColor: C.blue, color: C.white, letterSpacing: '0.08em' }}
                >
                  Book an Assessment
                </Link>
                <Link
                  href="/resources"
                  className="px-9 py-4 text-[14px] font-bold uppercase rounded-sm border transition-colors hover:bg-white/5 text-center"
                  style={{ ...sans, borderColor: 'rgba(255,255,255,0.35)', color: C.white, letterSpacing: '0.08em' }}
                >
                  Download a Free Guide
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 2 — THE PROBLEM (editorial, no heading) */}
      <Section>
        <div className="max-w-[760px] mx-auto text-center">
          <Reveal>
            <p className="text-[30px] md:text-[42px] leading-[1.3] mb-10" style={{ ...serif, color: C.white }}>
              Most football development runs on instinct,
              <br className="hidden md:block" /> not insight.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-[17px] leading-[1.7] mb-8" style={{ ...sans, color: C.grey }}>
              A player trains hard. A parent watches. A coach makes decisions. Nobody has a clear picture of where the player actually stands, what they genuinely need, or what the right next step looks like.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-[17px] leading-[1.7]" style={{ ...sans, color: C.grey }}>
              The result is development by default, shaped by whoever is closest and whatever feels right. Playmaker London exists because that is not good enough for players who are serious about what comes next.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* SECTION 3 — WHO THIS IS FOR */}
      <Section>
        <Reveal>
          <Label>Who we work with</Label>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="text-[32px] md:text-[44px] leading-[1.2] font-bold mb-6 max-w-[700px]" style={{ ...serif, color: C.white }}>
            Ambitious players. Informed families. Serious development.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-[17px] leading-[1.7] mb-16 max-w-[640px]" style={{ ...sans, color: C.grey }}>
            Playmaker London works with players aged 13 to 23 who want more from their development than generic sessions and empty motivation.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
          {audience.map((a, i) => (
            <Reveal key={a.label} delay={0.08 * i} className="border-t pt-7" >
              <div style={{ borderColor: 'rgba(26,92,168,0.35)' }}>
                <span className="text-[14px] font-bold uppercase block mb-3" style={{ ...sans, color: C.blue, letterSpacing: '0.06em' }}>
                  {String(i + 1).padStart(2, '0')}: {a.label}
                </span>
                <p className="text-[16px] leading-[1.7]" style={{ ...sans, color: C.grey }}>{a.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="text-[18px] mt-12 font-bold" style={{ ...serif, color: C.white }}>
            If you are serious about development, Playmaker London is built for you.
          </p>
        </Reveal>
      </Section>

      {/* SECTION 4 — THE PLAYMAKER DIFFERENCE */}
      <Section>
        <Reveal>
          <Label>Why Playmaker London</Label>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="text-[32px] md:text-[44px] leading-[1.2] font-bold mb-20 max-w-[760px]" style={{ ...serif, color: C.white }}>
            Clarity. Structure. Evidence. Intelligence.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-16">
          {difference.map((d, i) => (
            <Reveal key={d.title} delay={0.08 * i}>
              <span className="text-[16px] font-bold uppercase block mb-4" style={{ ...sans, color: C.blue, letterSpacing: '0.06em' }}>
                {String(i + 1).padStart(2, '0')}: {d.title}
              </span>
              <p className="text-[16px] leading-[1.7]" style={{ ...sans, color: C.grey }}>{d.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* SECTION 5 — THE ASSESSMENT */}
      <Section>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <Reveal>
              <Label>Where it begins</Label>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="text-[30px] md:text-[40px] leading-[1.25] font-bold mb-8" style={{ ...serif, color: C.white }}>
                Every player starts with an assessment. There is no other way.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-[16px] leading-[1.7] mb-6" style={{ ...sans, color: C.grey }}>
                Not a trial. Not a conversation. A genuine, professional review of where the player stands, what is shaping their development, and what the most intelligent path forward looks like.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <Link
                href="/assessment"
                className="inline-block px-9 py-4 text-[14px] font-bold uppercase rounded-sm mt-4"
                style={{ ...sans, backgroundColor: C.blue, color: C.white, letterSpacing: '0.08em' }}
              >
                Book an Assessment
              </Link>
            </Reveal>
          </div>

          <div>
            {assessmentCovers.map((item, i) => (
              <Reveal key={item} delay={0.05 * i} className="flex items-start gap-4 py-5 border-t" >
                <div className="flex items-start gap-4 w-full" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
                  <span className="text-[13px] font-bold mt-1" style={{ ...sans, color: C.blue }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-[16px] leading-[1.6]" style={{ ...sans, color: C.grey }}>{item}</span>
                </div>
              </Reveal>
            ))}
            <Reveal delay={0.3}>
              <p className="text-[15px] leading-[1.7] mt-8 italic" style={{ ...sans, color: C.greyDim }}>
                What the family receives is not a summary. It is a precise, evidence-informed starting point and a clear direction forward.
              </p>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* SECTION 6 — BELIEF STATEMENT (navy interstitial, per Doc 80) */}
      <Section bg={C.navy} className="text-center">
        <div className="max-w-[760px] mx-auto">
          {beliefs.map((line, i) => (
            <Reveal key={line} delay={0.12 * i}>
              <p
                className="text-[26px] md:text-[36px] leading-[1.5] font-bold mb-3"
                style={{ ...serif, color: C.white }}
              >
                {line}
              </p>
            </Reveal>
          ))}
          <Reveal delay={0.6}>
            <p className="text-[13px] uppercase mt-12" style={{ ...sans, color: C.grey, letterSpacing: '0.2em' }}>
              Playmaker London
            </p>
          </Reveal>
        </div>
      </Section>

      {/* SECTION 7 — PROOF */}
      <Section>
        <Reveal>
          <Label>What families say</Label>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="text-[30px] md:text-[40px] leading-[1.25] font-bold mb-20 max-w-[700px]" style={{ ...serif, color: C.white }}>
            Results measured in decisions made, not just goals scored.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-10">
          {['Parent voice: clarity and decision support', 'Player voice: development and confidence', 'Parent voice: trust and structure'].map((t, i) => (
            <Reveal key={t} delay={0.08 * i} className="p-7 rounded-sm">
              <div style={{ backgroundColor: '#161616' }} className="p-7 rounded-sm h-full">
                <p className="text-[15px] leading-[1.7] mb-6 italic" style={{ ...sans, color: C.grey }}>
                  "Testimonial placeholder. {t}."
                </p>
                <span className="text-[13px] uppercase" style={{ ...sans, color: C.blue, letterSpacing: '0.06em' }}>
                  {t.split(': ')[0]}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* SECTION 8 — LEAD MAGNET CARDS */}
      <Section>
        <Reveal>
          <Label>Free resources for serious families</Label>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="text-[30px] md:text-[40px] leading-[1.25] font-bold mb-6 max-w-[700px]" style={{ ...serif, color: C.white }}>
            Start here. No commitment required.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-[16px] leading-[1.7] mb-20 max-w-[640px]" style={{ ...sans, color: C.grey }}>
            Free, practical resources built for families who want to think clearly about what comes next.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8">
          {leadMagnets.map((m, i) => (
            <Reveal key={m.title} delay={0.06 * i}>
              <div className="p-9 rounded-sm h-full flex flex-col justify-between" style={{ backgroundColor: '#161616' }}>
                <div>
                  <h3 className="text-[20px] font-bold mb-4" style={{ ...serif, color: C.white }}>{m.title}</h3>
                  <p className="text-[15px] leading-[1.7] mb-8" style={{ ...sans, color: C.grey }}>{m.body}</p>
                </div>
                <Link href="/resources" className="text-[13px] font-bold uppercase" style={{ ...sans, color: C.blue, letterSpacing: '0.08em' }}>
                  Download Free →
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* SECTION 9 — CLOSING CTA */}
      <Section bg={C.navy} className="text-center">
        <div className="max-w-[700px] mx-auto">
          <Reveal>
            <h2 className="text-[30px] md:text-[42px] leading-[1.3] font-bold mb-8" style={{ ...serif, color: C.white }}>
              If you are ready to approach development seriously, this is where it begins.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-[16px] leading-[1.7] mb-3" style={{ ...sans, color: C.grey }}>
              The assessment is not a sales call. It is a structured review that gives you an honest picture of where your player stands and what the most intelligent next step looks like.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-[14px] mb-12" style={{ ...sans, color: C.greyDim }}>
              No guarantees. No pressure. No generic advice.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <Link
                href="/assessment"
                className="px-9 py-4 text-[14px] font-bold uppercase rounded-sm"
                style={{ ...sans, backgroundColor: C.blue, color: C.white, letterSpacing: '0.08em' }}
              >
                Book an Assessment
              </Link>
              <Link href="/resources" className="text-[14px] underline" style={{ ...sans, color: C.grey }}>
                Or explore our free resources
              </Link>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* SECTION 10 — FOOTER */}
      <footer className="w-full px-6 md:px-16 lg:px-[80px] py-20" style={{ backgroundColor: C.black, borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row justify-between gap-10">
          <div>
            <p className="text-[16px] font-bold uppercase mb-2" style={{ ...sans, color: C.white, letterSpacing: '0.08em' }}>
              Playmaker London
            </p>
            <p className="text-[13px] uppercase mb-6" style={{ ...sans, color: C.blue, letterSpacing: '0.12em' }}>
              Development done seriously.
            </p>
            <p className="text-[14px] leading-[1.7] max-w-[400px]" style={{ ...sans, color: C.greyDim }}>
              Playmaker London works with ambitious footballers aged 13 to 23 and the families navigating the journey with them.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            {['Assessment', 'Development', 'Pathways', 'Resources'].map((l) => (
              <Link key={l} href="#" className="text-[14px]" style={{ ...sans, color: C.grey }}>
                {l}
              </Link>
            ))}
          </div>
        </div>
        <p className="text-[12px] mt-16 text-center" style={{ ...sans, color: '#555' }}>
          © Playmaker London. All rights reserved.
        </p>
      </footer>
    </main>
    </>
  );
}