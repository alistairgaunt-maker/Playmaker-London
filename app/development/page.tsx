'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import NavBar from '../../components/NavBar';

/* ---------- Design tokens (Doc 80 — mirrored from homepage) ---------- */
const C = {
  black:     '#111111',
  navy:      '#0D2340',
  blue:      '#1A5CA8',
  blueLight: '#4A90D9',
  white:     '#FFFFFF',
  grey:      '#CCCCCC',
  greyDim:   '#888888',
};
const serif = { fontFamily: "'EB Garamond', serif" };
const sans = { fontFamily: "'Montserrat', sans-serif" };

const ease = [0.22, 1, 0.36, 1];
const revealVariants = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};

function Reveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-10% 0px' }}
      variants={revealVariants}
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
export default function Development() {
  const pillars = [
    {
      title: 'Individual, not generic',
      body: 'Every plan is built from what the assessment actually found about this player — their stage, their context, their priorities. Not a template applied to everyone in the age group.',
    },
    {
      title: 'Evidence-led adjustments',
      body: 'Programmes are reviewed and adjusted on a set schedule, grounded in player development, maturation and performance principles rather than instinct or routine.',
    },
    {
      title: 'Built around real life',
      body: 'Training load is set with school, existing club commitments and physical readiness in mind, so development supports the player\u2019s life rather than competing with it.',
    },
  ];

  const tiers = [
    {
      name: 'Development',
      forWho: 'For players building foundational technical and physical capability.',
      body: 'A structured programme addressing the priorities identified in the assessment, with regular review points and clear markers of progress.',
    },
    {
      name: 'Performance',
      forWho: 'For players with a defined pathway who need to close specific gaps.',
      body: 'A more intensive programme with closer monitoring of load, technical detail and physical development, built for players actively pursuing representative or academy opportunities.',
    },
    {
      name: 'Elite',
      forWho: 'For a small cohort of high-potential players.',
      body: 'The most individualised tier: closer contact, deeper analysis, and direct support around decisions involving clubs, trials and scholarship pathways.',
    },
  ];

  const faqs = [
    {
      q: 'How is a programme tier decided?',
      a: 'Tier recommendations come directly from the Performance Assessment. We do not sell a tier — we recommend the one that reflects where the player genuinely stands and what they need next.',
    },
    {
      q: 'Can a player move between tiers?',
      a: 'Yes. Development is not linear, and a player\u2019s tier is reviewed as they progress. Movement between tiers reflects real change, not a fixed contract length.',
    },
    {
      q: 'Do I need to complete the assessment first?',
      a: 'Yes. Every development relationship starts with the Performance Assessment, because a sensible plan requires an honest picture of where the player stands first.',
    },
    {
      q: 'What does a typical week involve?',
      a: 'This varies by tier and by player. Session frequency, focus areas and load are all set individually based on the player\u2019s assessment, age and existing commitments.',
    },
  ];

  return (
    <main style={{ backgroundColor: C.black }}>
      <NavBar />
      {/* ── HERO ── */}
      <section
        className="relative w-full min-h-screen flex items-center overflow-hidden"
        style={{ backgroundColor: C.black }}
      >
        <div className="absolute inset-0">
          <img
            src="/images/hero-development.png"
            alt=""
            className="w-full h-full object-cover"
            style={{ objectPosition: '95% 15%', filter: 'brightness(1.05) contrast(1.0) saturate(0.95)' }}
          />
        </div>

        <div className="relative z-10 px-6 md:px-16 lg:px-[80px] w-full">
          <div className="max-w-[620px]">
            <Reveal>
              <p
                className="text-[13px] font-bold uppercase mb-8"
                style={{ ...sans, color: C.blue, letterSpacing: '0.2em' }}
              >
                Development
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1
                className="text-[36px] md:text-[52px] lg:text-[60px] leading-[1.12] font-bold mb-8"
                style={{ ...serif, color: C.white }}
              >
                A plan built from evidence.{' '}
                <span className="font-normal italic" style={{ color: C.grey }}>
                  Not a template.
                </span>
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p
                className="text-[16px] md:text-[18px] leading-[1.65] max-w-[500px] mb-12"
                style={{ ...sans, color: C.grey }}
              >
                Every development programme starts with the assessment, not a sales conversation.
                What follows is built around what the player actually needs.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-5">
                <Link
                  href="/assessment"
                  className="px-9 py-4 text-[14px] font-bold uppercase rounded-sm text-center transition-opacity hover:opacity-90"
                  style={{ ...sans, backgroundColor: C.blue, color: C.white, letterSpacing: '0.08em' }}
                >
                  Start With An Assessment
                </Link>
                <Link
                  href="#tiers"
                  className="px-9 py-4 text-[14px] font-bold uppercase rounded-sm border text-center transition-colors hover:bg-white/5"
                  style={{ ...sans, borderColor: 'rgba(255,255,255,0.35)', color: C.white, letterSpacing: '0.08em' }}
                >
                  See The Programmes
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── WHAT DEVELOPMENT MEANS HERE ── */}
      <Section>
        <Reveal>
          <Label>Our approach</Label>
        </Reveal>
        <Reveal delay={0.05}>
          <h2
            className="text-[30px] md:text-[40px] leading-[1.2] font-bold mb-20 max-w-[760px]"
            style={{ ...serif, color: C.white }}
          >
            Development is not a fixed programme. It is a response to what the assessment found.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-10">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={0.08 * i}>
              <span
                className="text-[16px] font-bold uppercase block mb-4"
                style={{ ...sans, color: C.blue, letterSpacing: '0.06em' }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3
                className="text-[17px] font-bold mb-4 leading-[1.35]"
                style={{ ...sans, color: C.white }}
              >
                {p.title}
              </h3>
              <p className="text-[15px] leading-[1.7]" style={{ ...sans, color: C.grey }}>
                {p.body}
              </p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ── BELIEF STATEMENT (navy interstitial) ── */}
      <Section bg={C.navy} className="text-center">
        <div className="max-w-[760px] mx-auto">
          <Reveal>
            <h2
              className="text-[26px] md:text-[36px] leading-[1.4] font-bold"
              style={{ ...serif, color: C.white }}
            >
              A programme should change as the player changes.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p
              className="text-[16px] leading-[1.7] mt-6"
              style={{ ...sans, color: C.grey }}
            >
              Not the other way around.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* ── THE THREE TIERS ── */}
      <Section className="scroll-mt-20" bg={C.black}>
        <div id="tiers" />
        <Reveal>
          <Label>The programmes</Label>
        </Reveal>
        <Reveal delay={0.05}>
          <h2
            className="text-[30px] md:text-[40px] leading-[1.2] font-bold mb-20 max-w-[700px]"
            style={{ ...serif, color: C.white }}
          >
            Three tiers. One starting point.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((t, i) => (
            <Reveal key={t.name} delay={0.08 * i}>
              <div
                className="p-9 rounded-sm h-full flex flex-col"
                style={{ backgroundColor: '#161616', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <span
                  className="text-[13px] font-bold mb-3"
                  style={{ ...sans, color: C.blue }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3
                  className="text-[22px] font-bold mb-3"
                  style={{ ...serif, color: C.white }}
                >
                  {t.name}
                </h3>
                <p
                  className="text-[14px] font-bold uppercase mb-6"
                  style={{ ...sans, color: C.greyDim, letterSpacing: '0.04em' }}
                >
                  {t.forWho}
                </p>
                <p className="text-[15px] leading-[1.7]" style={{ ...sans, color: C.grey }}>
                  {t.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <p
            className="text-[15px] leading-[1.7] mt-12 italic max-w-[700px]"
            style={{ ...sans, color: C.greyDim }}
          >
            Tier placement is a recommendation from the Performance Assessment, not a sales
            decision. Most families start with an assessment before any tier is discussed.
          </p>
        </Reveal>
      </Section>

      {/* ── FAQ ── */}
      <Section bg={C.black}>
        <Reveal>
          <Label>Before you commit</Label>
        </Reveal>
        <Reveal delay={0.05}>
          <h2
            className="text-[30px] md:text-[40px] leading-[1.2] font-bold mb-20"
            style={{ ...serif, color: C.white }}
          >
            Questions families ask us.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={0.06 * i}>
              <span
                className="text-[13px] font-bold mb-2 block"
                style={{ ...sans, color: C.blue }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3
                className="text-[17px] font-bold mb-3 leading-[1.35]"
                style={{ ...sans, color: C.white }}
              >
                {f.q}
              </h3>
              <p className="text-[15px] leading-[1.7]" style={{ ...sans, color: C.grey }}>
                {f.a}
              </p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ── CLOSING CTA (navy interstitial) ── */}
      <Section bg={C.navy} className="text-center">
        <div className="max-w-[700px] mx-auto">
          <Reveal>
            <h2
              className="text-[30px] md:text-[42px] leading-[1.3] font-bold mb-8"
              style={{ ...serif, color: C.white }}
            >
              Every development relationship starts the same way.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p
              className="text-[16px] leading-[1.7] mb-3"
              style={{ ...sans, color: C.grey }}
            >
              With an honest picture of where the player stands. That is what the assessment gives you.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mt-9">
              <Link
                href="/assessment"
                className="px-9 py-4 text-[14px] font-bold uppercase rounded-sm"
                style={{ ...sans, backgroundColor: C.blue, color: C.white, letterSpacing: '0.08em' }}
              >
                Request Your Assessment
              </Link>
              <Link href="/resources" className="text-[14px] underline" style={{ ...sans, color: C.grey }}>
                Or explore our free resources
              </Link>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ── FOOTER ── */}
      <footer
        className="w-full px-6 md:px-16 lg:px-[80px] py-20"
        style={{ backgroundColor: C.black, borderTop: '1px solid rgba(255,255,255,0.08)' }}
      >
        <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row justify-between gap-10">
          <div>
            <p
              className="text-[16px] font-bold uppercase mb-2"
              style={{ ...sans, color: C.white, letterSpacing: '0.08em' }}
            >
              Playmaker London
            </p>
            <p
              className="text-[13px] uppercase mb-6"
              style={{ ...sans, color: C.blue, letterSpacing: '0.12em' }}
            >
              Development done seriously.
            </p>
            <p
              className="text-[14px] leading-[1.7] max-w-[400px]"
              style={{ ...sans, color: C.greyDim }}
            >
              Playmaker London works with ambitious footballers aged 13 to 23 and the families
              navigating the journey with them.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            {[
  { label: 'Home', href: '/' },
  { label: 'Assessment', href: '/assessment' },
  { label: 'Development', href: '/development' },
  { label: 'Resources', href: '/resources' },
  { label: 'Privacy', href: '/privacy' },
].map((item) => (
  <Link
    key={item.href}
    href={item.href}
    className="text-[14px]"
    style={{ ...sans, color: C.grey }}
  >
    {item.label}
  </Link>
))}
          </div>
        </div>
        <p
          className="text-[12px] mt-16 text-center"
          style={{ ...sans, color: '#555' }}
        >
          © Playmaker London. All rights reserved.
        </p>
      </footer>
    </main>
  );
}